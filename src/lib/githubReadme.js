// Real-time GitHub README fetcher for portfolio projects
export const fetchReadmeContent = async (username, repoName) => {
  try {
    // Try different README file names
    const readmeFiles = ["README.md", "readme.md", "Readme.md", "README.MD"];

    for (const fileName of readmeFiles) {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repoName}/contents/${fileName}`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          // Decode base64 content
          const content = atob(data.content);
          return content;
        }
      } catch (fileError) {
        continue; // Try next filename
      }
    }

    throw new Error(`No README file found for ${repoName}`);
  } catch (error) {
    console.error(`Error fetching README for ${repoName}:`, error);
    return null;
  }
};

// Parse README content to extract key sections
export const parseReadmeContent = (content) => {
  if (!content) return null;

  const sections = {};
  const lines = content.split("\n");
  let currentSection = "";
  let currentContent = [];

  for (const line of lines) {
    // Check for headers (# ## ### etc.)
    if (line.match(/^#+\s/)) {
      // Save previous section
      if (currentSection && currentContent.length > 0) {
        sections[currentSection] = currentContent.join("\n").trim();
      }

      // Start new section
      currentSection = line
        .replace(/^#+\s*/, "")
        .toLowerCase()
        .trim();
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    } else if (!currentSection && line.trim()) {
      // Content before first header goes to 'overview'
      if (!sections.overview) sections.overview = "";
      sections.overview += line + "\n";
    }
  }

  // Save last section
  if (currentSection && currentContent.length > 0) {
    sections[currentSection] = currentContent.join("\n").trim();
  }

  return sections;
};

// Extract specific information from README sections
export const extractProjectInfo = (sections) => {
  if (!sections) return null;

  const info = {
    description: "",
    features: [],
    techStack: [],
    deployment: "",
    installation: "",
    liveDemo: "",
  };

  // Extract description (from overview or first meaningful content)
  const descriptionSections = [
    "overview",
    "description",
    "about",
    "project overview",
  ];
  for (const section of descriptionSections) {
    if (sections[section]) {
      // Get first meaningful paragraph
      const paragraphs = sections[section]
        .split("\n\n")
        .filter((p) => p.trim());
      info.description = paragraphs[0]?.trim() || sections[section].trim();
      break;
    }
  }

  // Extract features
  const featureSections = [
    "features",
    "key features",
    "functionality",
    "what it does",
    "core features",
  ];
  for (const section of featureSections) {
    if (sections[section]) {
      const features = sections[section]
        .split("\n")
        .filter((line) => {
          const trimmed = line.trim();
          return (
            trimmed.startsWith("-") ||
            trimmed.startsWith("*") ||
            trimmed.startsWith("•") ||
            trimmed.match(/^\d+\./)
          );
        })
        .map((line) => line.replace(/^[-*•]\s*|\d+\.\s*/, "").trim())
        .filter((feature) => feature.length > 10); // Filter out very short items
      info.features = features.slice(0, 8); // Limit to 8 features
      break;
    }
  }

  // Extract tech stack
  const techSections = [
    "tech stack",
    "technologies",
    "built with",
    "technologies used",
    "stack",
    "tools",
  ];
  for (const section of techSections) {
    if (sections[section]) {
      const tech = sections[section]
        .split("\n")
        .filter((line) => {
          const trimmed = line.trim();
          return (
            trimmed.startsWith("-") ||
            trimmed.startsWith("*") ||
            trimmed.startsWith("•") ||
            trimmed.match(/^\d+\./)
          );
        })
        .map((line) => line.replace(/^[-*•]\s*|\d+\.\s*/, "").trim())
        .filter((tech) => tech.length > 0);
      info.techStack = tech;
      break;
    }
  }

  // Extract deployment/demo info
  const deploymentSections = [
    "deployment",
    "live demo",
    "demo",
    "hosted on",
    "live site",
  ];
  for (const section of deploymentSections) {
    if (sections[section]) {
      info.deployment = sections[section].trim();
      // Extract URLs from deployment section
      const urlMatch = sections[section].match(/https?:\/\/[^\s\)]+/);
      if (urlMatch) {
        info.liveDemo = urlMatch[0];
      }
      break;
    }
  }

  // Extract installation
  const installationSections = [
    "installation",
    "setup",
    "getting started",
    "how to run",
    "quick start",
  ];
  for (const section of installationSections) {
    if (sections[section]) {
      info.installation = sections[section].trim();
      break;
    }
  }

  return info;
};

// Main function to get enhanced project data from README
export const getEnhancedProjectData = async (
  username,
  repoName,
  existingProject = {}
) => {
  try {
    const readmeContent = await fetchReadmeContent(username, repoName);
    if (!readmeContent) {
      return existingProject; // Return existing data if README not found
    }

    const sections = parseReadmeContent(readmeContent);
    const extractedInfo = extractProjectInfo(sections);

    if (!extractedInfo) {
      return existingProject;
    }

    // Merge with existing project data
    return {
      ...existingProject,
      description: extractedInfo.description || existingProject.description,
      features:
        extractedInfo.features.length > 0
          ? extractedInfo.features
          : existingProject.features,
      techStack:
        extractedInfo.techStack.length > 0
          ? extractedInfo.techStack
          : existingProject.techStack,
      deployment: extractedInfo.deployment || existingProject.deployment,
      installation: extractedInfo.installation || existingProject.installation,
      liveDemo: extractedInfo.liveDemo || existingProject.liveDemo,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Error enhancing project data for ${repoName}:`, error);
    return existingProject;
  }
};
