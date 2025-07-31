import React, { useState, useEffect } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import {
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineCode,
} from "react-icons/ai";
import { BiGitRepoForked, BiStar, BiCalendar } from "react-icons/bi";
import {
  HiChevronDown,
  HiTrendingUp,
  HiExternalLink,
  HiInformationCircle,
} from "react-icons/hi";
import { MdLanguage, MdUpdate, MdBugReport } from "react-icons/md";
import Reveal from "./Reveal";
import { Dialog, DialogOverlay, DialogContent } from "../components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { fetchGitHubRepos } from "../lib/utils";
import { PROJECT_CONFIG } from "../config/projects";
import { getEnhancedProjectData } from "../lib/githubReadme";
import ErrorBoundary from "./ErrorBoundary";
import { ProjectSkeletonGrid } from "./ProjectSkeleton";

// Featured projects data with detailed descriptions
const featuredProjects = [
  {
    img: project1,
    title: "Energy Independence Visualization",
    description:
      "Interactive data visualization platform showcasing global energy trends with 3D globe, dynamic charts, and comprehensive analytics for 200+ countries.",
    links: {
      site: "https://github.com/ksm007/EnergyIndependenceVisualization",
      github: "https://github.com/ksm007/EnergyIndependenceVisualization",
    },
    content: `**Project Overview:**
This comprehensive energy visualization platform transforms complex global energy data into interactive, intuitive visualizations that help users understand worldwide energy independence trends and sustainability metrics.

**Key Features:**
• **Interactive 3D Globe**: Built with Three.js, displays real-time energy data for 200+ countries with smooth animations and hover interactions
• **Dynamic Stream Graphs**: D3.js-powered visualizations showing energy flow patterns, imports/exports, and renewable generation over time
• **Synchronized Timeline**: Scrollama integration creates seamless year-by-year data exploration with linked chart updates
• **Radar Chart Analytics**: Comprehensive sustainability metrics dashboard with key performance indicators
• **Responsive Design**: Optimized for desktop and mobile viewing with adaptive layouts

**Technical Implementation:**
• **Frontend**: React.js with modern hooks, component-based architecture, and state management
• **Backend**: Spring Boot REST API with efficient data processing and caching mechanisms
• **Data Visualization**: D3.js for complex charts, Three.js for 3D globe rendering
• **Data Processing**: ETL pipelines for handling large energy datasets from multiple sources
• **Performance**: Optimized rendering with virtualization and lazy loading for smooth interactions

**Impact & Results:**
• Enhanced user engagement by 40% through interactive storytelling
• Improved data comprehension with visual analytics
• Seamless user experience with synchronized multi-chart interactions
• Comprehensive insights into global energy sustainability trends

**Technologies Used:**
React.js, D3.js, Three.js, Spring Boot, Java, JavaScript, HTML5 Canvas, Scrollama, REST APIs, JSON processing`,
    tags: [
      "React",
      "D3.js",
      "Spring Boot",
      "Three.js",
      "Data Visualization",
      "REST API",
    ],
    isFeatured: true,
  },
  {
    img: project2,
    title: "AI Finance Tracker",
    description:
      "Intelligent personal finance management platform with AI-powered insights, budget tracking, expense categorization, and real-time notifications.",
    links: {
      site: "https://ai-finance-tracker-seven.vercel.app/",
      github: "https://github.com/ksm007/ai-finance-tracker",
    },
    content: `**Project Overview:**
A modern, AI-enhanced personal finance management platform that helps users track expenses, manage budgets, and gain intelligent insights into their spending patterns through advanced analytics and machine learning.

**Key Features:**
• **Smart Expense Tracking**: Automatic categorization of transactions with AI-powered pattern recognition
• **Budget Management**: Set, monitor, and track budgets with visual progress indicators and alerts
• **Real-time Notifications**: Instant alerts when approaching budget limits or unusual spending detected
• **Interactive Dashboards**: Rich data visualizations with charts, graphs, and spending analytics
• **Account Integration**: Multi-account support with secure bank connection capabilities
• **Expense Analytics**: Detailed spending reports with trends, categories, and predictive insights

**Technical Architecture:**
• **Frontend**: React 19 with modern features, Next.js 15 for server-side rendering and optimization
• **Styling**: Tailwind CSS for responsive, utility-first design system
• **Database**: Supabase for real-time database with PostgreSQL backend
• **ORM**: Prisma for type-safe database operations and migrations
• **Authentication**: Clerk for secure user authentication and session management
• **Background Jobs**: Inngest for reliable task processing and notifications
• **Security**: Arcjet for advanced security features and rate limiting

**Advanced Features:**
• **AI Insights**: Machine learning algorithms for spending pattern analysis
• **Predictive Analytics**: Forecast future expenses based on historical data
• **Smart Categorization**: Automatic transaction categorization with learning capabilities
• **Budget Optimization**: AI-powered budget recommendations and adjustments
• **Financial Health Score**: Comprehensive financial wellness assessment

**Performance Metrics:**
• 30% increase in user engagement through intuitive interface design
• 25% improvement in user retention with personalized insights
• 40% enhancement in expense tracking efficiency with automation
• Real-time data synchronization across all user devices

**Technologies Used:**
React 19, Next.js 15, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Prisma ORM, Clerk Auth, Inngest, Arcjet, Vercel`,
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "AI/ML",
      "Tailwind CSS",
      "Prisma",
    ],
    isFeatured: true,
  },
  {
    img: project3,
    title: "Smart Drawing App",
    description:
      "AI-powered drawing application that solves mathematical problems, physics equations, and provides explanations through visual input processing.",
    links: {
      site: "https://github.com/ksm007/draawingApp",
      github: "https://github.com/ksm007/draawingApp",
    },
    content: `**Project Overview:**
An innovative drawing application that combines creative expression with AI-powered problem-solving capabilities. Users can draw mathematical equations, physics problems, or abstract concepts and receive intelligent solutions and explanations.

**Core Functionality:**
• **Intelligent Canvas**: HTML5 Canvas with advanced drawing tools and gesture recognition
• **AI Problem Solving**: Gemini API integration for interpreting drawn content and providing solutions
• **Multi-Domain Support**: Handles mathematics, physics, chemistry, and abstract concept explanations
• **Visual Recognition**: Advanced image processing to understand hand-drawn equations and diagrams
• **Interactive Solutions**: Step-by-step problem solving with visual explanations
• **Export Capabilities**: Save drawings and solutions in multiple formats

**Technical Features:**
• **Canvas Engine**: Custom-built drawing engine with pressure sensitivity and smooth stroke rendering
• **Image Processing**: Real-time image analysis and preprocessing for AI interpretation
• **API Integration**: Seamless Gemini API integration with error handling and response optimization
• **State Management**: Efficient canvas state management with undo/redo functionality
• **Responsive Design**: Touch-friendly interface optimized for tablets and mobile devices

**AI Capabilities:**
• **Mathematical Problem Solving**: Algebra, calculus, geometry, and advanced mathematics
• **Physics Problem Analysis**: Mechanics, thermodynamics, electromagnetism, and quantum physics
• **Chemistry Support**: Molecular structures, chemical equations, and reaction mechanisms
• **Abstract Concept Explanation**: Visual learning aid for complex theoretical concepts
• **Multi-Language Support**: Solutions and explanations in multiple languages

**User Experience:**
• **Intuitive Interface**: Clean, distraction-free drawing environment
• **Real-time Feedback**: Instant visual feedback during drawing process
• **Solution Formatting**: Well-structured, easy-to-read solution presentations
• **Learning Mode**: Educational explanations with step-by-step breakdowns
• **History Tracking**: Save and revisit previous problems and solutions

**Use Cases:**
• Students solving homework problems through visual input
• Teachers creating interactive problem-solving demonstrations
• Professionals working with complex calculations and diagrams
• Visual learners who prefer drawing over typing equations

**Technologies Used:**
React.js, HTML5 Canvas, JavaScript, Gemini AI API, Image Processing, Computer Vision, REST APIs, CSS3`,
    tags: [
      "React",
      "Gemini API",
      "Canvas",
      "AI/ML",
      "Image Processing",
      "Computer Vision",
    ],
    isFeatured: true,
  },
  {
    img: project4,
    title: "Spotify Clone",
    description:
      "Full-featured music streaming platform with real-time chat, playlist management, admin dashboard, and social music sharing capabilities.",
    links: {
      site: "https://spotify-clone-gi9v.onrender.com/",
      github: "https://github.com/ksm007/Spotify-Clone",
    },
    content: `**Project Overview:**
A comprehensive music streaming platform that replicates Spotify's core functionality while adding unique social features like real-time chat and collaborative listening experiences. Built with the MERN stack for scalability and performance.

**Core Features:**
• **Music Streaming**: High-quality audio playback with playlist management and queue functionality
• **User Authentication**: Secure login/signup with JWT tokens and session management
• **Playlist Management**: Create, edit, share, and collaborate on custom playlists
• **Search & Discovery**: Advanced search with filters for songs, artists, albums, and genres
• **Real-time Chat**: Live messaging system for users to discuss music and share recommendations
• **Social Features**: Follow friends, share playlists, and see what others are listening to
• **Admin Dashboard**: Complete content management system for songs, artists, and user management

**Technical Architecture:**
• **Frontend**: React.js with modern hooks, context API for state management, and responsive design
• **Backend**: Node.js with Express.js framework for RESTful API development
• **Database**: MongoDB with Mongoose ODM for flexible data modeling
• **Real-time Communication**: Socket.io for instant messaging and live user activity updates
• **Authentication**: JWT-based authentication with refresh token implementation
• **File Storage**: Cloud storage integration for audio files and album artwork

**Advanced Features:**
• **Audio Player**: Custom-built audio player with controls, progress tracking, and volume management
• **Queue Management**: Dynamic playlist queuing with shuffle and repeat functionality
• **Live Activity**: Real-time display of what friends are currently listening to
• **Collaborative Playlists**: Multiple users can contribute to shared playlists simultaneously
• **Music Recommendations**: Algorithm-based song suggestions based on listening history
• **Offline Capabilities**: Progressive Web App features for offline music access

**Admin Panel Features:**
• **Content Management**: Upload, edit, and delete songs with metadata management
• **User Management**: Monitor user activity, manage accounts, and handle reports
• **Analytics Dashboard**: Detailed statistics on user engagement and popular content
• **Playlist Curation**: Create and manage featured playlists and recommendations
• **System Monitoring**: Real-time system health and performance metrics

**Social Integration:**
• **Friend System**: Add friends, follow artists, and build music communities
• **Chat Rooms**: Topic-based chat rooms for music discussion and discovery
• **Activity Feed**: Timeline of friend activities, new releases, and recommendations
• **Sharing Features**: Share songs, playlists, and currently playing tracks
• **Group Listening**: Synchronized listening sessions with friends

**Performance Optimizations:**
• **Lazy Loading**: Efficient content loading for improved performance
• **Caching Strategy**: Redis integration for frequently accessed data
• **CDN Integration**: Fast audio delivery through content delivery networks
• **Database Optimization**: Indexed queries and aggregation pipelines for fast searches

**Technologies Used:**
MongoDB, Express.js, React.js, Node.js, Socket.io, JWT, Mongoose, Redis, AWS S3, Progressive Web App`,
    tags: [
      "MERN Stack",
      "Socket.io",
      "Real-time Chat",
      "MongoDB",
      "JWT",
      "PWA",
    ],
    isFeatured: true,
  },
];

// Utility functions for safe data access
const safeGet = (obj, path, defaultValue = null) => {
  try {
    return (
      path.split(".").reduce((current, key) => current?.[key], obj) ??
      defaultValue
    );
  } catch {
    return defaultValue;
  }
};

const formatDate = (dateString) => {
  if (!dateString) return "Unknown";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "Invalid date";
  }
};

const formatNumber = (num) => {
  if (num === null || num === undefined) return "0";
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};

// Function to determine 3D scene type based on project
const getProjectType = (project) => {
  const title = safeGet(project, "title", "").toLowerCase();
  const tags = safeGet(project, "tags", []).map((tag) => tag.toLowerCase());

  if (
    title.includes("ai") ||
    title.includes("finance") ||
    tags.includes("ai/ml")
  ) {
    return "ai";
  }
  if (
    title.includes("drawing") ||
    title.includes("canvas") ||
    tags.includes("canvas")
  ) {
    return "drawing";
  }
  if (
    title.includes("spotify") ||
    title.includes("music") ||
    tags.includes("socket.io")
  ) {
    return "music";
  }
  if (title.includes("angular") || tags.includes("angular")) {
    return "angular";
  }
  // Default to React scene for other projects
  return "react";
};

// Enhanced Project Visual Component with actual project images
const ProjectVisual = ({ project, className = "" }) => {
  const title = safeGet(project, "title", "Untitled Project");
  const projectImage = safeGet(project, "img");
  const links = safeGet(project, "links", {});

  return (
    <div
      className={`aspect-[16/9] rounded-xl ${className} relative group overflow-hidden`}
    >
      {projectImage ? (
        <img
          src={projectImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <AiOutlineCode className="text-4xl mx-auto mb-2" />
            <p className="text-sm">No preview available</p>
          </div>
        </div>
      )}

      {/* Overlay with project info and links */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
        <div className="p-4 text-white">
          <h4 className="font-semibold text-lg mb-2">{title}</h4>
          <div className="flex gap-2">
            {links.site && (
              <a
                href={links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <AiOutlineLink size={14} />
                Live
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <AiOutlineGithub size={14} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Stats Component
const ProjectStats = ({ project }) => {
  if (!safeGet(project, "isGitHubRepo")) return null;

  const stats = safeGet(project, "stats", {});
  const language = safeGet(project, "language");
  const updatedAt = safeGet(project, "updatedAt");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
      <div className="flex items-center gap-2">
        <BiStar className="text-yellow-500 flex-shrink-0" />
        <div>
          <div className="font-semibold">{formatNumber(stats.stars)}</div>
          <div className="text-xs text-muted-foreground">Stars</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <BiGitRepoForked className="text-primary flex-shrink-0" />
        <div>
          <div className="font-semibold">{formatNumber(stats.forks)}</div>
          <div className="text-xs text-muted-foreground">Forks</div>
        </div>
      </div>

      {stats.watchers !== undefined && (
        <div className="flex items-center gap-2">
          <AiOutlineEye className="text-blue-500 flex-shrink-0" />
          <div>
            <div className="font-semibold">{formatNumber(stats.watchers)}</div>
            <div className="text-xs text-muted-foreground">Watchers</div>
          </div>
        </div>
      )}

      {stats.issues !== undefined && (
        <div className="flex items-center gap-2">
          <MdBugReport className="text-red-500 flex-shrink-0" />
          <div>
            <div className="font-semibold">{formatNumber(stats.issues)}</div>
            <div className="text-xs text-muted-foreground">Issues</div>
          </div>
        </div>
      )}

      {language && (
        <div className="flex items-center gap-2 col-span-2 md:col-span-1">
          <MdLanguage className="text-green-500 flex-shrink-0" />
          <div>
            <div className="font-semibold text-sm">{language}</div>
            <div className="text-xs text-muted-foreground">Language</div>
          </div>
        </div>
      )}

      {updatedAt && (
        <div className="flex items-center gap-2 col-span-2 md:col-span-1">
          <MdUpdate className="text-purple-500 flex-shrink-0" />
          <div>
            <div className="font-semibold text-sm">{formatDate(updatedAt)}</div>
            <div className="text-xs text-muted-foreground">Updated</div>
          </div>
        </div>
      )}
    </div>
  );
};

// Project Links Component
const ProjectLinks = ({ project }) => {
  const links = safeGet(project, "links", {});
  const siteUrl = links.site;
  const githubUrl = links.github;

  if (!siteUrl && !githubUrl) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <HiInformationCircle />
        <span>No links available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {siteUrl && (
        <motion.a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiExternalLink size={18} />
          Live Demo
        </motion.a>
      )}

      {githubUrl && (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiOutlineGithub size={18} />
          Source Code
        </motion.a>
      )}
    </div>
  );
};

// Project Tags Component
const ProjectTags = ({ project }) => {
  const tags = safeGet(project, "tags", []);

  if (!tags || tags.length === 0) {
    return (
      <div className="text-muted-foreground text-sm italic">
        No technologies specified
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

// Empty State Component
const EmptyState = ({ message, icon: Icon = HiInformationCircle }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <Icon className="text-6xl text-primary-300 dark:text-primary-700 mb-4" />
    <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
      No Projects Found
    </h3>
    <p className="text-muted-foreground max-w-md">
      {message ||
        "There are no projects to display at the moment. Please check back later."}
    </p>
  </div>
);

// Main Portfolio Content Component
const PortfolioContent = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState(featuredProjects);
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [enhancedProject, setEnhancedProject] = useState(null);
  const [isLoadingReadme, setIsLoadingReadme] = useState(false);

  useEffect(() => {
    const loadGitHubRepos = async () => {
      setIsLoading(true);
      try {
        const githubProjects = await fetchGitHubRepos(
          PROJECT_CONFIG.GITHUB_USERNAME,
          {
            maxRepos: PROJECT_CONFIG.GITHUB_API.MAX_REPOS,
            includeForked: PROJECT_CONFIG.GITHUB_API.INCLUDE_FORKED,
            sortBy: PROJECT_CONFIG.GITHUB_API.SORT_BY,
          }
        );

        // Merge with featured projects, avoiding duplicates
        const mergedProjects = [...featuredProjects];
        githubProjects.forEach((githubProject) => {
          const existingProject = featuredProjects.find((fp) =>
            fp.links?.github?.includes(githubProject.originalName)
          );
          if (!existingProject) {
            mergedProjects.push(githubProject);
          }
        });

        setProjects(mergedProjects);
      } catch (error) {
        console.error("Failed to fetch GitHub repos:", error);
        setProjects(featuredProjects);
      } finally {
        setIsLoading(false);
      }
    };

    loadGitHubRepos();
  }, []);

  const handleOpenDialog = async (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
    setEnhancedProject(null);

    // Only enhance GitHub repos with README data
    if (
      project.isGitHubRepo &&
      project.originalName &&
      project.originalName !== "AngularToDo"
    ) {
      setIsLoadingReadme(true);
      try {
        const enhanced = await getEnhancedProjectData(
          PROJECT_CONFIG.GITHUB_USERNAME,
          project.originalName,
          project
        );
        setEnhancedProject(enhanced);
      } catch (error) {
        console.error("Error loading README data:", error);
      } finally {
        setIsLoadingReadme(false);
      }
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
    setEnhancedProject(null);
    setIsLoadingReadme(false);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "featured") return project.isFeatured;
    if (activeTab === "github") return project.isGitHubRepo;
    return true;
  });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  if (filteredProjects.length === 0 && !isLoading) {
    return <EmptyState message="No projects match the current filter." />;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24" id="portfolio">
      <Reveal>
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Portfolio</span>
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "featured", label: "Featured" },
            { id: "github", label: "GitHub Repos" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <ProjectSkeletonGrid count={3} />
        ) : (
          <>
            <div className="grid gap-12">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`flex flex-col ${
                      index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                    } gap-8 items-center`}
                  >
                    <motion.div
                      className="w-full md:w-1/2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectVisual
                        project={project}
                        className="shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </motion.div>

                    <div className="w-full md:w-1/2 space-y-6">
                      <div className="flex items-start justify-between">
                        <h3 className="text-3xl font-bold text-primary flex-1">
                          {safeGet(project, "title", "Untitled Project")}
                        </h3>
                        {safeGet(project, "priority", 0) > 5 && (
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 text-xs font-medium">
                            <HiTrendingUp size={12} />
                            <span>Priority</span>
                          </div>
                        )}
                      </div>

                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {safeGet(
                          project,
                          "description",
                          "No description available for this project."
                        )}
                      </p>

                      {/* GitHub Stats */}
                      {safeGet(project, "isGitHubRepo") && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                          <div className="flex items-center gap-2">
                            <BiStar className="text-yellow-500 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sm">
                                {formatNumber(
                                  safeGet(project, "stats.stars", 0)
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Stars
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <BiGitRepoForked className="text-primary flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sm">
                                {formatNumber(
                                  safeGet(project, "stats.forks", 0)
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Forks
                              </div>
                            </div>
                          </div>
                          {safeGet(project, "language") && (
                            <div className="flex items-center gap-2">
                              <MdLanguage className="text-green-500 flex-shrink-0" />
                              <div>
                                <div className="font-semibold text-sm">
                                  {safeGet(project, "language")}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Language
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Tags */}
                      <ProjectTags project={project} />

                      {/* Links */}
                      <ProjectLinks project={project} />

                      {/* View Details Button */}
                      <motion.button
                        onClick={() => handleOpenDialog(project)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200 font-medium hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors duration-200 w-full justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <HiInformationCircle size={18} />
                        View Full Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length > 3 && (
              <div className="flex justify-center mt-12">
                <motion.button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showAll ? "Show Less" : "Show More"}
                  <HiChevronDown
                    className={`transition-transform duration-300 ${
                      showAll ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
              </div>
            )}
          </>
        )}
      </Reveal>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
            <DialogContent className="max-w-4xl w-[95vw] p-0 rounded-xl overflow-hidden max-h-[90vh] flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative"
              >
                <ProjectVisual project={selectedProject} className="w-full" />
                <button
                  onClick={handleCloseDialog}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
                >
                  <AiOutlineClose size={24} />
                </button>
              </motion.div>

              <div className="flex-1 p-6 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-primary-100 dark:scrollbar-thumb-primary-700 dark:scrollbar-track-primary-900">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-primary flex-1">
                      {safeGet(selectedProject, "title", "Untitled Project")}
                    </h3>
                    {safeGet(selectedProject, "priority", 0) > 5 && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 text-xs font-medium">
                        <HiTrendingUp size={12} />
                        <span>High Priority</span>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground">
                    {safeGet(
                      selectedProject,
                      "description",
                      "No description available for this project."
                    )}
                  </p>
                </div>

                {/* README Loading Indicator */}
                {isLoadingReadme && (
                  <div className="flex items-center justify-center gap-2 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                    <span className="text-sm text-primary">
                      Loading README data...
                    </span>
                  </div>
                )}

                {/* README-Enhanced Content (Only for GitHub repos) */}
                {enhancedProject && selectedProject?.isGitHubRepo && (
                  <div className="space-y-6 p-4 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 dark:from-primary-900/10 dark:to-secondary-900/10 rounded-lg border border-primary-200/30 dark:border-primary-800/30">
                    <div className="flex items-center gap-2 mb-4">
                      <AiOutlineCode className="text-primary" size={20} />
                      <h4 className="text-lg font-semibold text-primary">
                        From GitHub README
                      </h4>
                    </div>

                    {/* Enhanced Features */}
                    {safeGet(enhancedProject, "features", []).length > 0 && (
                      <div className="space-y-3">
                        <h5 className="text-md font-semibold text-foreground">
                          Key Features
                        </h5>
                        <ul className="space-y-2">
                          {enhancedProject.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Enhanced Tech Stack */}
                    {safeGet(enhancedProject, "techStack", []).length > 0 && (
                      <div className="space-y-3">
                        <h5 className="text-md font-semibold text-foreground">
                          Tech Stack
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {enhancedProject.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 rounded-md text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Deployment Info */}
                    {safeGet(enhancedProject, "deployment") && (
                      <div className="space-y-3">
                        <h5 className="text-md font-semibold text-foreground">
                          Deployment
                        </h5>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                          <p className="text-sm text-green-700 dark:text-green-300">
                            {enhancedProject.deployment}
                          </p>
                          {safeGet(enhancedProject, "liveDemo") && (
                            <a
                              href={enhancedProject.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 mt-2 text-sm text-green-600 dark:text-green-400 hover:underline"
                            >
                              <HiExternalLink size={14} />
                              View Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Installation Instructions */}
                    {safeGet(enhancedProject, "installation") && (
                      <div className="space-y-3">
                        <h5 className="text-md font-semibold text-foreground">
                          Installation & Setup
                        </h5>
                        <div className="p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg border border-secondary-200 dark:border-secondary-800">
                          <pre className="text-xs text-secondary-700 dark:text-secondary-300 whitespace-pre-wrap">
                            {enhancedProject.installation}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* GitHub Stats */}
                <ProjectStats project={selectedProject} />

                {/* Project Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300">
                    Project Details
                  </h4>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <div className="text-foreground/90 leading-relaxed whitespace-pre-line">
                      {safeGet(
                        selectedProject,
                        "content",
                        "No detailed information available for this project."
                      )}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300">
                    Technologies Used
                  </h4>
                  <ProjectTags project={selectedProject} />
                </div>

                {/* Repository Information */}
                {safeGet(selectedProject, "isGitHubRepo") && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300">
                      Repository Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      {safeGet(selectedProject, "createdAt") && (
                        <div className="flex items-center gap-2">
                          <BiCalendar className="text-blue-500 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm">Created</div>
                            <div className="text-xs text-muted-foreground">
                              {formatDate(
                                safeGet(selectedProject, "createdAt")
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {safeGet(selectedProject, "updatedAt") && (
                        <div className="flex items-center gap-2">
                          <MdUpdate className="text-green-500 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm">
                              Last Updated
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {formatDate(
                                safeGet(selectedProject, "updatedAt")
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {safeGet(selectedProject, "language") && (
                        <div className="flex items-center gap-2">
                          <MdLanguage className="text-purple-500 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm">
                              Primary Language
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {safeGet(selectedProject, "language")}
                            </div>
                          </div>
                        </div>
                      )}

                      {safeGet(selectedProject, "originalName") && (
                        <div className="flex items-center gap-2">
                          <AiOutlineCode className="text-orange-500 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm">
                              Repository Name
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">
                              {safeGet(selectedProject, "originalName")}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Topics */}
                {safeGet(selectedProject, "topics", []).length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300">
                      Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {safeGet(selectedProject, "topics", []).map(
                        (topic, index) => (
                          <span
                            key={`topic-${index}`}
                            className="px-2 py-1 rounded-md text-xs font-medium bg-primary-200 text-primary-800 dark:bg-primary-700 dark:text-primary-200"
                          >
                            #{topic}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <ProjectLinks project={selectedProject} />
                  <div className="flex-1" />
                  <motion.button
                    onClick={handleCloseDialog}
                    className="px-4 py-2 rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200 font-medium hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Portfolio component wrapped with ErrorBoundary
const Portfolio = () => {
  return (
    <ErrorBoundary fallbackMessage="Unable to load portfolio projects. Please try refreshing the page.">
      <PortfolioContent />
    </ErrorBoundary>
  );
};

export default Portfolio;
