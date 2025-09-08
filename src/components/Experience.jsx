import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { HiOutlineCalendar } from "react-icons/hi";
import { BsBriefcaseFill, BsBuilding } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const experiences = [
  {
    company: "The Boeing Company",
    role: "Associate Software Engineer",
    location: "Bangalore, India",
    period: "Aug 2022 - Jul 2024",
    description: "Full-stack development and system architecture",
    achievements: [
      "Designed and shipped 50+ RESTful APIs using Spring Boot, achieving 99%-unit test coverage through JUnit 5 and Mockito, while implementing multi-layer testing strategy across controller, service, and repository layers",
      "Orchestrated GitLab CI/CD for Java and Angular applications by adding staged builds, running tests, and environment-specific deployments, cutting release time from 90 minutes to 10 minutes and reducing manual errors",
      "Architected a Solr 8 search stack for 10k+ PDF documents: parsed PDFs to JSON, ingested via REST APIs, enabled fuzzy and phrase search with faceting, tuned schema and ranking, unified with an Angular 14 UI for rapid querying",
      "Expanded content management system (CMS) functionality by creating over 10+ APIs, boosting user access efficiency by 50%",
      "Migrated a legacy Java desktop app to a Spring Boot web platform, cutting server and maintenance costs by USD 72,000 per year through streamlined infrastructure and automated deployments",
    ],
    technologies: [
      "Spring Boot",
      "Angular",
      "Solr",
      "GitLab CI/CD",
      "JUnit",
      "Mockito",
      "Java",
      "REST APIs",
    ],
  },
  {
    company: "Ikshana (Indian Institute of Science)",
    role: "Research Intern",
    location: "Bangalore, India",
    period: "Jan 2022 - Jul 2022",
    description: "Data analysis and mobile app development",
    achievements: [
      "Developed Python ETL scripts with Pandas to clean and merge 10+ clinical and sensor data streams, enabling deep analysis of urinary incontinence symptom patterns and powering scikit-learn models for summary reports",
      "Created an Android app in Android Studio using Java, implementing Android BLE APIs for remote device control",
    ],
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "Android Studio",
      "Java",
      "BLE APIs",
    ],
  },
  {
    company: "Team Chimera (R V College of Engineering)",
    role: "Data Acquisition Engineer",
    location: "Bangalore, India",
    period: "Jul 2019 - May 2022",
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

const Experience = () => {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary-50/30 overflow-x-hidden"
      id="experience"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            Professional <span className="text-primary-600">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line - only on medium screens and up */}
            <div className="timeline-line md:left-1/2 hidden md:block" />

            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot - only on medium screens and up */}
                  <div className="timeline-dot absolute md:left-1/2 mt-8 hidden md:block" />

                  {/* Content */}
                  <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start">
                    <div
                      className={`${
                        index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                      } w-full min-w-0 max-w-full`}
                    >
                      <div className="experience-card text-left w-full overflow-hidden">
                        {/* Header */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="p-2 sm:p-3 rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 flex-shrink-0">
                              <BsBriefcaseFill
                                size={20}
                                className="sm:w-6 sm:h-6"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-primary-700 dark:text-primary-300 mb-1 leading-tight">
                                {experience.role}
                              </h3>
                              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base">
                                <BsBuilding className="flex-shrink-0" />
                                <span className="truncate">
                                  {experience.company}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Meta info */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground bg-primary-50 dark:bg-primary-900/20 rounded-lg p-2 sm:p-3">
                            <div className="flex items-center gap-2 min-w-0">
                              <IoLocationSharp className="text-primary-500 flex-shrink-0" />
                              <span className="truncate">
                                {experience.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 min-w-0">
                              <HiOutlineCalendar className="text-primary-500 flex-shrink-0" />
                              <span className="font-medium truncate">
                                {experience.period}
                              </span>
                            </div>
                          </div>

                          <p className="text-muted-foreground italic mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            {experience.description}
                          </p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4 sm:mb-6">
                          <h4 className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2 sm:mb-3 uppercase tracking-wide">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {experience.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm leading-relaxed"
                              >
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                                <span className="text-foreground/90 break-words">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2 sm:mb-3 uppercase tracking-wide">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {experience.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors whitespace-nowrap"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Experience;
