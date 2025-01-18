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
import Reveal from "./Reveal";
import { SiTensorflow } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiD3Dotjs } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Sass", icon: <DiSass className="text-pink-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "Springboot", icon: <SiSpringboot className="text-green-400" /> },
      { name: "Next.js", icon: <RiNextjsLine className="text-white" /> },
    ],
  },
  {
    category: "Artificial Intelligence",
    technologies: [
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      {
        name: "Tensorflow",
        icon: <SiTensorflow className="text-orange-500" />,
      },
      { name: "AWS", icon: <FaAws className="text-white" /> },
      { name: "D3.js", icon: <SiD3Dotjs className="text-orange-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[975px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them{" "}
          <a href="#" className="underline">
            there
          </a>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
