import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { SiTensorflow, SiSpringboot, SiD3Dotjs } from "react-icons/si";
import { FaAws, FaPython } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <DiHtml5 className="text-orange-600" />,
        level: "Advanced",
      },
      {
        name: "CSS",
        icon: <DiCss3 className="text-blue-600" />,
        level: "Advanced",
      },
      {
        name: "Sass",
        icon: <DiSass className="text-pink-600" />,
        level: "Intermediate",
      },
      {
        name: "Bootstrap",
        icon: <DiBootstrap className="text-purple-600" />,
        level: "Advanced",
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-400" />,
        level: "Advanced",
      },
      {
        name: "React",
        icon: <DiReact className="text-blue-400" />,
        level: "Advanced",
      },
      {
        name: "Next.js",
        icon: <RiNextjsLine className="text-black dark:text-white" />,
        level: "Advanced",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <DiNodejsSmall className="text-green-600" />,
        level: "Advanced",
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="text-green-500" />,
        level: "Advanced",
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="text-green-600" />,
        level: "Advanced",
      },
      {
        name: "Python",
        icon: <FaPython className="text-blue-500" />,
        level: "Advanced",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    skills: [
      {
        name: "Git",
        icon: <DiGithubBadge className="text-black dark:text-white" />,
        level: "Advanced",
      },
      {
        name: "AWS",
        icon: <FaAws className="text-orange-500" />,
        level: "Intermediate",
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-500" />,
        level: "Intermediate",
      },
      {
        name: "D3.js",
        icon: <SiD3Dotjs className="text-orange-600" />,
        level: "Advanced",
      },
    ],
  },
];

// Skill level colors for better visual hierarchy
const getLevelColor = (level) => {
  switch (level) {
    case "Advanced":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
    case "Beginner":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
  }
};

const Skills = () => {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary-50/20 dark:to-primary-950/20"
      id="skills"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Category Card */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <div className="text-2xl text-primary">
                        {category.id === "frontend" && "🎨"}
                        {category.id === "backend" && "⚙️"}
                        {category.id === "tools" && "🛠️"}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {category.label}
                    </h3>
                    <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        className="group cursor-pointer"
                      >
                        <div className="bg-background/80 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                          {/* Skill Icon */}
                          <div className="mb-3 flex items-center justify-center">
                            <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                          </div>

                          {/* Skill Name */}
                          <div className="space-y-1">
                            <h4 className="font-medium text-xs sm:text-sm text-foreground leading-tight">
                              {skill.name}
                            </h4>

                            {/* Skill Level Badge */}
                            <span
                              className={`inline-block px-1.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Summary */}
        
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
