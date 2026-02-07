import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { HiOutlineCalendar, HiOutlineChevronRight } from "react-icons/hi";
import { BsBriefcaseFill, BsBuilding } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaFlask, FaUniversity } from "react-icons/fa";

const experiences = [
  {
    company: "Arizona State University",
    role: "Research Aide (Volunteer)",
    location: "Tempe, AZ",
    period: "Sep 2024 - Present",
    type: "research",
    description:
      "LLM-based software engineering research and code quality analysis",
    achievements: [
      "Explored LLM-based techniques for surfacing latent code smells and design anti-patterns, crafting structured prompts grounded in refactoring patterns and cognitive load theory to generate concrete remediation suggestions",
      "Performed AST-based analysis to rank high-impact files for technical-debt cleanup in large open-source codebases",
    ],
    technologies: [
      "Python",
      "LLMs",
      "AST Analysis",
      "Prompt Engineering",
      "Code Quality",
    ],
  },
  {
    company: "The Boeing Company",
    role: "Associate Software Engineer",
    location: "Bangalore, India",
    period: "Aug 2022 - Jul 2024",
    type: "industry",
    description: "Full-stack development and system architecture",
    achievements: [
      "Migrated legacy desktop app to a Spring Boot web platform; decommissioned legacy servers, enabled automated deployments, and saved ~$72k/year in infra costs",
      "Designed an Apache Solr 8 search stack for 10k+ PDF records: PDF-to-JSON parsing, REST ingestion, fuzzy & phrase search with faceting, integrated with an Angular 14 UI for rapid querying",
      "Orchestrated GitLab CI/CD (staged builds, unit tests, env-specific deploys) for Java + Angular services, reducing release time from ~60 min to ~10 min and eliminating manual error-prone steps",
      "Built and maintained 50+ REST endpoints across 4 Spring Boot microservices, enforced controller/service/repository tests achieving ~90% line coverage with JUnit 5 and Mockito",
      "Expanded content management system with 5 REST APIs, shrinking the publish flow from 6 to 3 steps and 7 to 3 minutes",
    ],
    technologies: [
      "Spring Boot",
      "Angular",
      "Apache Solr",
      "GitLab CI/CD",
      "JUnit 5",
      "Mockito",
      "Java",
      "REST APIs",
    ],
  },
  {
    company: "Ikshana (Indian Institute of Science)",
    role: "Research Intern",
    location: "Bangalore, India",
    period: "Jan 2022 – Jul 2022",
    type: "research",
    description: "Data engineering and mobile app development",
    achievements: [
      "Scoped a Python (Pandas) ETL approach to clean and time-align 10+ clinical and sensor streams; documented schema, resampling, and feature plan to support urinary incontinence analysis with scikit-learn",
      "Developed an Android Studio (Java) app with Bluetooth Low Energy (BLE/GATT) to scan, pair, and remotely control devices such as read, write and notify using a Material 3 UI",
    ],
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "Android Studio",
      "Java",
      "BLE/GATT",
    ],
  },
  {
    company: "Team Chimera (R V College of Engineering)",
    role: "Data Acquisition Engineer",
    location: "Bangalore, India",
    period: "Jul 2019 - May 2022",
    type: "team",
    description: "Real-time data acquisition and telemetry",
    achievements: [
      "Implemented an LTE-based data acquisition system for real-time transmission, delivering 8+ data points like voltage, SoC, and thermal data and a responsive UI integrated with 5+ APIs, ensuring efficient data flow and user interaction",
      "Refined temperature sensor placement for accurate data reads, validated on dyno-bench and on-track runs to stabilize telemetry",
    ],
    technologies: [
      "LTE",
      "Data Acquisition",
      "APIs",
      "Sensor Integration",
      "Real-time Systems",
    ],
  },
];

const getTypeIcon = (type) => {
  switch (type) {
    case "research":
      return <FaFlask size={20} />;
    case "industry":
      return <BsBriefcaseFill size={20} />;
    case "team":
      return <FaUniversity size={20} />;
    default:
      return <BsBriefcaseFill size={20} />;
  }
};

const getTypeColor = (type) => {
  switch (type) {
    case "research":
      return {
        badge:
          "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border-violet-200 dark:border-violet-700",
        icon: "bg-violet-100 text-violet-600 dark:bg-violet-900/60 dark:text-violet-300",
        accent: "border-l-violet-500",
        dot: "bg-violet-500",
        glow: "shadow-violet-500/20",
      };
    case "industry":
      return {
        badge:
          "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-700",
        icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/60 dark:text-blue-300",
        accent: "border-l-blue-500",
        dot: "bg-blue-500",
        glow: "shadow-blue-500/20",
      };
    case "team":
      return {
        badge:
          "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700",
        icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-300",
        accent: "border-l-emerald-500",
        dot: "bg-emerald-500",
        glow: "shadow-emerald-500/20",
      };
    default:
      return {
        badge:
          "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 border-primary-200 dark:border-primary-700",
        icon: "bg-primary-100 text-primary-600 dark:bg-primary-900/60 dark:text-primary-300",
        accent: "border-l-primary-500",
        dot: "bg-primary-500",
        glow: "shadow-primary-500/20",
      };
  }
};

const Experience = () => {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-primary-950/10 overflow-x-hidden"
      id="experience"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey through research and industry
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((experience, index) => {
                const colors = getTypeColor(experience.type);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    viewport={{ once: true }}
                    className="relative pl-14 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 md:left-6 top-6 w-5 h-5 rounded-full ${colors.dot} ring-4 ring-background shadow-lg ${colors.glow} z-10`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full ${colors.dot} animate-ping opacity-30`}
                      />
                    </div>

                    {/* Experience Card */}
                    <motion.div
                      whileHover={{ y: -3, scale: 1.005 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className={`relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${colors.accent}`}
                    >
                      {/* Card Header */}
                      <div className="p-5 sm:p-6 pb-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div
                              className={`p-2.5 rounded-xl ${colors.icon} flex-shrink-0`}
                            >
                              {getTypeIcon(experience.type)}
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-0.5 leading-tight">
                                {experience.role}
                              </h3>
                              <div className="flex items-center gap-2 text-muted-foreground font-medium text-sm sm:text-base">
                                <BsBuilding className="flex-shrink-0 text-primary/60" />
                                <span className="truncate">
                                  {experience.company}
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Period badge */}
                          <div
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${colors.badge} whitespace-nowrap flex-shrink-0`}
                          >
                            <HiOutlineCalendar className="w-3.5 h-3.5" />
                            {experience.period}
                          </div>
                        </div>

                        {/* Location + Description */}
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                          <IoLocationSharp className="text-primary/50 flex-shrink-0 w-4 h-4" />
                          <span>{experience.location}</span>
                          <span className="mx-1">·</span>
                          <span className="italic">
                            {experience.description}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="mx-5 sm:mx-6 border-t border-border/40" />

                      {/* Achievements */}
                      <div className="p-5 sm:p-6 pt-4">
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.1 + i * 0.05,
                              }}
                              viewport={{ once: true }}
                              className="flex items-start gap-2.5 text-sm leading-relaxed group"
                            >
                              <HiOutlineChevronRight className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                              <span className="text-foreground/85 group-hover:text-foreground transition-colors">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Footer */}
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <div className="flex flex-wrap gap-1.5">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary/80 border border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Experience;
