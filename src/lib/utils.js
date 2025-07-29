import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PROJECT_CONFIG } from "../config/projects.js";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Function to generate a color from a string (project name)
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}

// Function to get contrasting text color (black or white) based on background
function getContrastColor(hexcolor) {
  const hex = hexcolor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
}

// Generate a project thumbnail as a data URL
export function generateProjectThumbnail(projectName, language) {
  const color1 = stringToColor(projectName);
  const color2 = stringToColor(language || projectName + "alt");
  const textColor = getContrastColor(color1);

  // Create a canvas element
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext("2d");

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add text
  ctx.fillStyle = textColor;
  ctx.font = "bold 60px system-ui";
  ctx.textAlign = "center";
  ctx.fillText(projectName, canvas.width / 2, canvas.height / 2);

  if (language) {
    ctx.font = "40px system-ui";
    ctx.fillText(language, canvas.width / 2, canvas.height / 2 + 80);
  }

  return canvas.toDataURL("image/png");
}

// Get repository priorities from config
const REPO_PRIORITIES = PROJECT_CONFIG.REPO_PRIORITIES;

// Function to get repository image from various sources
async function getRepoImage(repo) {
  // Try to get image from repository's README or social preview
  try {
    // First, try to get the social preview image
    const socialPreview = `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`;

    // Check if the image exists
    const imageResponse = await fetch(socialPreview, { method: "HEAD" });
    if (imageResponse.ok) {
      return socialPreview;
    }
  } catch (error) {
    console.log("Social preview not available for", repo.name);
  }

  // Try to find images in the repository
  try {
    const contentsResponse = await fetch(
      `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents`
    );
    if (contentsResponse.ok) {
      const contents = await contentsResponse.json();

      // Look for common image files
      const imageFiles = contents.filter(
        (file) =>
          /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(file.name) &&
          /(screenshot|demo|preview|banner|cover)/i.test(file.name)
      );

      if (imageFiles.length > 0) {
        return imageFiles[0].download_url;
      }
    }
  } catch (error) {
    console.log("Could not fetch repository contents for", repo.name);
  }

  // Fallback to generated thumbnail
  return generateProjectThumbnail(repo.name, repo.language);
}

// Function to calculate priority score
function calculatePriority(repo) {
  let score = REPO_PRIORITIES[repo.name] || 0;

  // Add points based on stars (1 point per 10 stars, max 5 points)
  score += Math.min(Math.floor(repo.stargazers_count / 10), 5);

  // Add points based on forks (1 point per 5 forks, max 3 points)
  score += Math.min(Math.floor(repo.forks_count / 5), 3);

  // Add points for recent activity (max 2 points)
  const daysSinceUpdate =
    (Date.now() - new Date(repo.updated_at)) / (1000 * 60 * 60 * 24);
  if (daysSinceUpdate < 30) score += 2;
  else if (daysSinceUpdate < 90) score += 1;

  // Add points for having a homepage (1 point)
  if (repo.homepage) score += 1;

  // Add points for having topics (1 point)
  if (repo.topics && repo.topics.length > 0) score += 1;

  return score;
}

export async function fetchGitHubRepos(username, options = {}) {
  const {
    maxRepos = 20,
    includeForked = false,
    sortBy = "priority", // 'priority', 'stars', 'updated', 'created'
  } = options;

  try {
    // Fetch multiple pages to get more repositories
    const allRepos = [];
    let page = 1;
    const perPage = 100;

    while (allRepos.length < maxRepos && page <= 3) {
      // Limit to 3 pages max
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}&page=${page}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const repos = await response.json();
      if (repos.length === 0) break;

      allRepos.push(...repos);
      page++;
    }

    // Filter repositories
    let filteredRepos = allRepos.filter((repo) => {
      if (!includeForked && repo.fork) return false;
      if (repo.private) return false;
      return true;
    });

    // Calculate priority scores and sort
    const reposWithPriority = filteredRepos.map((repo) => ({
      ...repo,
      priorityScore: calculatePriority(repo),
    }));

    // Sort based on the specified criteria
    switch (sortBy) {
      case "priority":
        reposWithPriority.sort((a, b) => b.priorityScore - a.priorityScore);
        break;
      case "stars":
        reposWithPriority.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        break;
      case "updated":
        reposWithPriority.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        break;
      case "created":
        reposWithPriority.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        break;
    }

    // Take only the requested number of repos
    const topRepos = reposWithPriority.slice(0, maxRepos);

    // Process repositories and get images
    const processedRepos = await Promise.all(
      topRepos.map(async (repo) => {
        const repoImage = await getRepoImage(repo);

        return {
          title: repo.name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          originalName: repo.name,
          description: repo.description || "No description available",
          img: repoImage,
          showcaseImage:
            repoImage !== generateProjectThumbnail(repo.name, repo.language)
              ? repoImage
              : null,
          links: {
            site: repo.homepage || repo.html_url,
            github: repo.html_url,
          },
          content: `${repo.description || "No description available"}

${repo.topics?.length ? `**Topics:** ${repo.topics.join(", ")}` : ""}

${repo.language ? `**Primary Language:** ${repo.language}` : ""}

**Repository Stats:**
- ⭐ Stars: ${repo.stargazers_count}
- 🍴 Forks: ${repo.forks_count}
- 👀 Watchers: ${repo.watchers_count}
- 📝 Issues: ${repo.open_issues_count}
- 📅 Created: ${new Date(repo.created_at).toLocaleDateString()}
- 🔄 Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}

${repo.homepage ? `**Live Demo:** [${repo.homepage}](${repo.homepage})` : ""}`,
          stats: {
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            watchers: repo.watchers_count,
            issues: repo.open_issues_count,
          },
          language: repo.language,
          topics: repo.topics || [],
          tags: [repo.language, ...(repo.topics || [])]
            .filter(Boolean)
            .slice(0, 6), // Limit tags
          isGitHubRepo: true,
          priority: repo.priorityScore,
          createdAt: repo.created_at,
          updatedAt: repo.updated_at,
        };
      })
    );

    return processedRepos;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
}
