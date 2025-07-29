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

const Skills = () => {
  return (
    <div className="py-16 md:py-24" id="skills">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 items-center">
            {skillCategories.map((category) => (
              <div key={category.id} className="space-y-6 w-full max-w-sm">
                <h3 className="text-2xl font-semibold text-primary text-center">
                  {category.label}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card hover:bg-primary/5 transition-colors duration-300"
                    >
                      <div className="text-4xl">{skill.icon}</div>
                      <h4 className="font-medium text-center">{skill.name}</h4>
                      <span className="text-xs text-primary/80">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
