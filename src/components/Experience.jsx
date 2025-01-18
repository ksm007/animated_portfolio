import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Boeing",
    period: "Aug 2022 - Jul 2024",
    description:
      "In my recent role, I spearheaded the development of over 100 RESTful APIs using Spring Boot, achieving a 95% unit test coverage with rigorous testing through JUnit and Mockito, ensuring high code quality and reliability. I streamlined the CI/CD deployment workflows for both Java and Angular projects via GitLab, cutting deployment times in half and reducing manual errors by 40%, thereby enhancing operational efficiency. By integrating Apache Solr for extensive datasets surpassing 10 million records, I achieved a 70% reduction in query latency and a 95% improvement in search accuracy. Additionally, I optimized database query performance, boosting response times by 25% for data-intensive applications. To enhance user experience, I expanded the CMS functionality with over eight new APIs, increasing user access efficiency by 20%.",
    role: "Associate Software Engineer",
  },
  {
    company: "Ikshana (IISc)",
    period: "Jan 2022 - Aug 2022",
    description:
      "I conducted in-depth research on over 10 critical parameters influencing the causes and treatments of urinary incontinence, leveraging advanced technologies to propose optimized solutions. My efforts led to the integration of a mobile interface for remote device control, enhancing functionality by 40% and significantly improving the user experience with seamless interaction. Additionally, I designed and prototyped a cost-effective incontinence management device, achieving a 20% reduction in production costs through innovative design improvements and strategic material optimization.",
    role: "Research Intern",
  },
  {
    company: "Team Chimera",
    period: "Oct 2018 - May 2024",
    description:
      "I implemented an LTE-based data acquisition system for real-time transmission, providing over eight data points and a responsive UI integrated with more than 15 APIs, ensuring efficient data flow and seamless user interaction. My enhancements to the Battery Management System (BMS) included monitoring three key parameters and integrating hardware with software, leading to a 20% improvement in overall performance. Additionally, I refined sensor placements to optimize data accuracy, achieving a 40% increase in system reliability by strategically minimizing data inconsistencies.",
    role: "Data Acquisition Engineer",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-400 text-sm">{experience.role}</p>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4 text-base">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
