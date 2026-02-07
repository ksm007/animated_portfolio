import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineCalendar, HiOutlineChevronRight } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi2";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "ARIZONA STATE UNIVERSITY",
    location: "Tempe, AZ",
    period: "Aug 2024 - May 2026",
    grade: "GPA: 4.0/4.0",
    type: "masters",
    coursework: [
      "Data Mining",
      "Cloud Computing",
      "Mobile Computing",
      "Data Visualization",
    ],
    highlights: [
      "Selected for graduate studies with scholarship",
      "Focus on advanced computing and data visualization techniques",
    ],
  },
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "R.V. COLLEGE OF ENGINEERING",
    location: "Bengaluru, India",
    period: "Aug 2018 - July 2022",
    grade: "GPA: 3.47/4.0",
    type: "bachelors",
    coursework: [
      "Database Management Systems",
      "Intelligent Systems",
      "Data Structures and Algorithms",
      "Web Programming",
    ],
    highlights: [
      "Active member of Team Chimera - Formula Student Team",
      "Participated in research projects and technical competitions",
    ],
  },
];

const getTypeColor = (type) => {
  switch (type) {
    case "masters":
      return {
        badge:
          "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-700",
        icon: "bg-amber-100 text-amber-600 dark:bg-amber-900/60 dark:text-amber-300",
        accent: "border-l-amber-500",
        dot: "bg-amber-500",
        glow: "shadow-amber-500/20",
      };
    case "bachelors":
      return {
        badge:
          "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200 dark:border-teal-700",
        icon: "bg-teal-100 text-teal-600 dark:bg-teal-900/60 dark:text-teal-300",
        accent: "border-l-teal-500",
        dot: "bg-teal-500",
        glow: "shadow-teal-500/20",
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

const Education = () => {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary-50/20 dark:to-primary-950/10"
      id="education"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation powering my engineering journey
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

            <div className="space-y-8 md:space-y-12">
              {education.map((edu, index) => {
                const colors = getTypeColor(edu.type);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
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

                    {/* Education Card */}
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
                              <FaGraduationCap size={20} />
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-0.5 leading-tight">
                                {edu.degree}
                              </h3>
                              <div className="flex items-center gap-2 text-muted-foreground font-medium text-sm sm:text-base">
                                <BsBuilding className="flex-shrink-0 text-primary/60" />
                                <span className="truncate">
                                  {edu.institution}
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Period badge */}
                          <div
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${colors.badge} whitespace-nowrap flex-shrink-0`}
                          >
                            <HiOutlineCalendar className="w-3.5 h-3.5" />
                            {edu.period}
                          </div>
                        </div>

                        {/* Location + GPA */}
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1.5">
                            <IoLocationSharp className="text-primary/50 flex-shrink-0 w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <span>·</span>
                          <span className="font-semibold text-primary">
                            {edu.grade}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="mx-5 sm:mx-6 border-t border-border/40" />

                      {/* Coursework */}
                      <div className="p-5 sm:p-6 pt-4 pb-3">
                        <h4 className="text-xs font-semibold text-muted-foreground mb-2.5 uppercase tracking-wider">
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary/80 border border-primary/10 whitespace-nowrap"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
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
                                {highlight}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
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

export default Education;
