import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import { AiOutlineGithub, AiOutlineClose } from "react-icons/ai";
import {
  HiExternalLink,
  HiOutlineChevronRight,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import Reveal from "./Reveal";
import { Dialog, DialogOverlay, DialogContent } from "../components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_VISIBLE = 6;

// ── Static project data ─────────────────────────────────────────────────────
const projects = [
  {
    img: project2,
    title: "Wealth Wizard",
    subtitle: "AI Finance Tracker",
    description:
      "Comprehensive finance platform using Next.js, PostgreSQL, Inngest, and Arcjet, featuring multi-account support, recurring transactions, real-time expense tracking, budget alerts, and interactive reporting dashboards.",
    highlights: [
      "Enabled users to set budgets and send notifications when approaching their limits, along with monthly spending insights",
      "Structured financial dashboards with interactive visualizations for expense tracking and account statistics",
    ],
    tags: [
      "Next.js",
      "PostgreSQL",
      "Inngest",
      "Arcjet",
      "Tailwind CSS",
      "Prisma",
    ],
    links: {
      live: "https://ai-finance-tracker-seven.vercel.app/",
      github: "https://github.com/ksm007/ai-finance-tracker",
    },
  },
  {
    img: project4,
    title: "Spotify with Chat",
    subtitle: "Full-Stack Music Platform",
    description:
      "Advanced Spotify-inspired web application leveraging the MERN stack, incorporating comprehensive admin capabilities to manage a library of 100+ songs and 20+ albums efficiently.",
    highlights: [
      "Incorporated real-time chat functionality and user status tracking using Socket.io, enhancing interactive communication",
      "Deployed on AWS EC2 behind an Application Load Balancer with Auto Scaling Groups, and stored song assets in AWS S3",
    ],
    tags: ["MERN Stack", "Socket.io", "AWS EC2", "AWS S3", "ALB", "MongoDB"],
    links: {
      live: "https://spotify-clone-gi9v.onrender.com/",
      github: "https://github.com/ksm007/Spotify-Clone",
    },
  },
  {
    img: project1,
    title: "Energy Visualization",
    subtitle: "Interactive Data Storytelling",
    description:
      "Full-stack web application using Spring Boot, React, and D3.js, visualizing energy import/export and renewable energy generation data for 200+ countries with a 3D globe rendered via Three.js.",
    highlights: [
      "Programmed scroll-synced storytelling that animates 60+ years of data in linked line charts for temporal trend exploration",
      "Built an animated country-centric network graph, where nodes are renewable capacity and links are import-export flows",
    ],
    tags: [
      "React",
      "D3.js",
      "Three.js",
      "Spring Boot",
      "Scrollama",
      "REST API",
    ],
    links: {
      github: "https://github.com/ksm007/EnergyIndependenceVisualization",
    },
  },
  {
    img: project3,
    title: "Smart Drawing App",
    subtitle: "AI-Powered Problem Solver",
    description:
      "AI-powered drawing application that solves mathematical problems, physics equations, and provides explanations through visual input processing using the Gemini API.",
    highlights: [
      "Intelligent Canvas with HTML5 and gesture recognition for hand-drawn equations and diagrams",
      "Multi-domain support covering math, physics, chemistry with step-by-step visual solutions",
    ],
    tags: ["React", "Gemini API", "Canvas", "AI/ML", "Image Processing"],
    links: {
      github: "https://github.com/ksm007/draawingApp",
    },
  },

  // ── New projects from GitHub ──────────────────────────────────────────────
  {
    img: null,
    title: "SplitEasy",
    subtitle: "Smart Bill Splitting App",
    description:
      "Modern web application that simplifies splitting bills among friends and groups, with receipt scanning via Google Generative AI, automatic item assignment, and downloadable PDF summaries.",
    highlights: [
      "AI-powered receipt scanning using Google Generative AI for automatic item extraction from uploaded receipts",
      "Full bill-splitting workflow: upload receipt → review items → assign to participants → generate & download PDF summary",
      "Secure authentication with Clerk and MongoDB persistence via Prisma ORM",
    ],
    tags: [
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "Clerk Auth",
      "Google AI",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/ksm007/spliteasy_updated",
    },
  },
  {
    img: null,
    title: "LearnNest",
    subtitle: "AI-Powered Study Platform",
    description:
      "Intelligent study platform built for a hackathon, featuring AI-powered document upload & analysis, auto-generated notes, interactive quizzes, and a 3D owl mascot — all wrapped in a modern React + TypeScript UI.",
    highlights: [
      "AI document processing pipeline that analyzes PDFs and generates structured study notes with key concept extraction",
      "Interactive quiz engine with adaptive difficulty and multiple question types (MCQ, True/False, Short Answer)",
      "3D interactive owl mascot using Three.js / React Three Fiber for an engaging user experience",
      "Firebase authentication with protected routes and real-time Firestore sync",
    ],
    tags: [
      "React",
      "TypeScript",
      "Firebase",
      "Three.js",
      "Framer Motion",
      "Radix UI",
      "Vite",
    ],
    links: {
      github: "https://github.com/ksm007/hackathon-fe",
    },
  },
  {
    img: null,
    title: "Task Manager",
    subtitle: "Full-Stack MERN App",
    description:
      "End-to-end task management application built with the MERN stack, featuring secure JWT authentication, user-specific task CRUD operations, and a responsive Ant Design interface.",
    highlights: [
      "JWT-based auth flow with bcrypt password hashing and protected API routes via Express middleware",
      "RESTful API with Mongoose models for Users and Tasks, enabling per-user task isolation",
      "Responsive React frontend using Ant Design components, React Router, and Context API for state management",
    ],
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Ant Design",
      "Vite",
    ],
    links: {
      github: "https://github.com/ksm007/to-do_mern",
    },
  },
  {
    img: null,
    title: "Inspection Report Generator",
    subtitle: "Automated PDF Pipeline",
    description:
      "Node.js service that transforms structured JSON inspection data into polished, multi-page PDF reports with TREC-style headers, photo grids, clickable video links, and automatic pagination.",
    highlights: [
      "Generates multi-page PDFs with TREC-style header pages, Roman-numeral section headings, and I/NI/NP/D checkboxes",
      "3-column photo grid with per-row scaling, captions, and safe page breaks plus a 100 px footer buffer",
      "Express API endpoint accepts JSON payloads and streams the finished PDF — also runs locally without a server",
    ],
    tags: ["Node.js", "Express", "pdf-lib", "JavaScript", "REST API"],
    links: {
      github: "https://github.com/ksm007/startup-village-pdf-generator",
    },
  },
];

// ── Placeholder for projects without images ─────────────────────────────────
const ImagePlaceholder = ({ title }) => (
  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
    <span className="text-4xl font-extrabold text-primary/25 select-none tracking-wider">
      {title
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()}
    </span>
  </div>
);

// ── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, onOpenDetail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          {project.img ? (
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <ImagePlaceholder title={project.title} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating action buttons on hover */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 dark:bg-black/70 rounded-lg hover:bg-white dark:hover:bg-black transition-colors shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <HiExternalLink className="w-4 h-4 text-primary" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 dark:bg-black/70 rounded-lg hover:bg-white dark:hover:bg-black transition-colors shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <AiOutlineGithub className="w-4 h-4 text-foreground" />
              </a>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-foreground leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-primary/70 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-xs font-medium bg-primary/5 text-primary/80 border border-primary/10"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-xs font-medium text-muted-foreground">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            <div className="flex gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  <HiExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <AiOutlineGithub className="w-3.5 h-3.5" />
                  Source
                </a>
              )}
            </div>

            <button
              onClick={() => onOpenDetail(project)}
              className="text-xs font-medium text-primary/70 hover:text-primary transition-colors cursor-pointer"
            >
              Details →
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Detail Modal ─────────────────────────────────────────────────────────────
const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="max-w-2xl w-[95vw] p-0 rounded-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Image header */}
        <div className="relative aspect-video flex-shrink-0">
          {project.img ? (
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <ImagePlaceholder title={project.title} />
          )}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <AiOutlineClose size={20} />
          </button>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-white/70">{project.subtitle}</p>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Description */}
          <p className="text-foreground/90 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed"
                >
                  <HiOutlineChevronRight className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/5 text-primary/80 border border-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-3 border-t border-border/30">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <HiExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <AiOutlineGithub size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// ── Main component ───────────────────────────────────────────────────────────
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_VISIBLE);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="py-16 md:py-24" id="portfolio">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've built and shipped
            </p>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpenDetail={handleOpen}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Show More / Show Less toggle */}
          {projects.length > INITIAL_VISIBLE && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                {showAll ? (
                  <>
                    Show Less
                    <HiChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Show More Projects
                    <HiChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </motion.div>
          )}

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <a
              href="https://github.com/ksm007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 bg-card/50 text-foreground font-medium hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <AiOutlineGithub className="w-5 h-5" />
              View more on GitHub
            </a>
          </motion.div>
        </Reveal>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isDialogOpen}
          onClose={handleClose}
        />
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
