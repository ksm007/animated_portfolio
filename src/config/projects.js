// Project configuration for portfolio
export const PROJECT_CONFIG = {
  // GitHub username
  GITHUB_USERNAME: "ksm007",

  // Repository priorities (higher number = higher priority)
  REPO_PRIORITIES: {
    EnergyIndependenceVisualization: 8,
    "ai-finance-tracker": 10,
    draawingApp: 8,
    "Spotify-Clone": 9,
    AngularToDo: 3,
    "portfolio-website": 5,
    "react-dashboard": 4,
    "node-api": 3,
    // Add more repositories as needed
  },

  // Custom project overrides (to provide better descriptions, images, etc.)
  PROJECT_OVERRIDES: {
    EnergyIndependenceVisualization: {
      title: "Energy Independence Visualization",
      description:
        "Interactive visualization platform built with D3.js and React, showcasing global energy data with dynamic 3D globe and stream graphs.",
      customImage: "/assets/project1.png", // Use local image if available
      featured: true,
    },
    "ai-finance-tracker": {
      title: "AI Finance Tracker",
      description: "Smart Finance tracker with Next.js and AI-powered insights",
      customImage: "/assets/project2.png",
      featured: true,
    },
    draawingApp: {
      title: "Smart Drawing App",
      description:
        "A Smart Drawing App using React and Gemini API for problem solving",
      customImage: "/assets/project3.png",
      featured: true,
    },
    "Spotify-Clone": {
      title: "Spotify Clone",
      description:
        "Full-featured Spotify clone with MERN stack and real-time chat",
      customImage: "/assets/project4.png",
      featured: true,
    },
    AngularToDo: {
      title: "Angular Todo App",
      description: "A comprehensive todo app with Angular and Firebase backend",
      customImage: "/assets/project5.png",
      featured: true,
    },
  },

  // Repositories to exclude from display
  EXCLUDED_REPOS: [
    "ksm007", // Usually the profile README repo
    "dotfiles",
    "test-repo",
    "my-portfolio",
    // Add any repos you don't want to show
  ],

  // GitHub API settings
  GITHUB_API: {
    MAX_REPOS: 20,
    INCLUDE_FORKED: false,
    SORT_BY: "priority", // 'priority', 'stars', 'updated', 'created'
    CACHE_DURATION: 5 * 60 * 1000, // 5 minutes in milliseconds
  },
};

// Featured projects that are not from GitHub or need custom content
export const FEATURED_PROJECTS = [
  // These will be merged with GitHub projects
  // You can add non-GitHub projects here
];
