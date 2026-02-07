import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiJava,
  DiDatabase,
} from "react-icons/di";
import {
  SiSpringboot,
  SiD3Dotjs,
  SiTypescript,
  SiAngular,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiTailwindcss,
  SiApachekafka,
  SiApachespark,
  SiRedis,
  SiJenkins,
  SiGo,
  SiGnubash,
  SiJunit5,
  SiPostman,
} from "react-icons/si";
import { FaAws, FaPython } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { RiNextjsLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    emoji: "💻",
    skills: [
      { name: "Java", icon: <DiJava className="text-red-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      {
        name: "C++",
        icon: <span className="font-bold text-blue-400 text-xs">C++</span>,
      },
      { name: "SQL", icon: <DiDatabase className="text-blue-400" /> },
      { name: "Go", icon: <SiGo className="text-cyan-500" /> },
      { name: "Bash", icon: <SiGnubash className="text-green-400" /> },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Databases",
    emoji: "☁️",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "Azure", icon: <VscAzure className="text-blue-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-500" /> },
    ],
  },
  {
    id: "development",
    label: "Development",
    emoji: "⚙️",
    skills: [
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="text-green-600" />,
      },
      { name: "React", icon: <DiReact className="text-blue-400" /> },
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-600" /> },
      {
        name: "Next.js",
        icon: <RiNextjsLine className="text-black dark:text-white" />,
      },
      { name: "Angular", icon: <SiAngular className="text-red-600" /> },
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "REST APIs", icon: <SiPostman className="text-orange-500" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
      { name: "JUnit", icon: <SiJunit5 className="text-green-700" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    emoji: "🛠️",
    skills: [
      { name: "Spark", icon: <SiApachespark className="text-orange-500" /> },
      {
        name: "Kafka",
        icon: <SiApachekafka className="text-black dark:text-white" />,
      },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-600" /> },
      {
        name: "Git",
        icon: <DiGithubBadge className="text-black dark:text-white" />,
      },
      { name: "D3.js", icon: <SiD3Dotjs className="text-orange-600" /> },
      {
        name: "Jira",
        icon: <span className="font-bold text-blue-500 text-xs">J</span>,
      },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      {
        name: "Agile",
        icon: <span className="font-bold text-green-500 text-xs">AG</span>,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary-50/20 dark:to-primary-950/20"
      id="skills"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="space-y-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Category label row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg">{category.emoji}</span>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.label}
                  </h3>
                  <div className="flex-1 h-px bg-border/40"></div>
                </div>

                {/* Skills as pill chips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: categoryIndex * 0.05 + skillIndex * 0.03,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex items-center gap-2 px-3.5 py-2 bg-background/80 border border-border/40 rounded-xl hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-default"
                    >
                      <span className="text-lg flex-shrink-0">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
