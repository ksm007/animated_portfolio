import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "ARIZONA STATE UNIVERSITY",
    location: "Tempe, AZ",
    period: "Aug 2024 - May 2026",
    grade: "GPA: 4.22/4.0",
    achievements: [
      "Relevant Courses: Data Mining, Cloud Computing, Mobile Computing, Data Visualization",
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
    achievements: [
      "Relevant Courses: Database Management Systems, Intelligent Systems, Data Structures and Algorithm, Web Programming",
      "Active member of Team Chimera - Formula Student Team",
      "Participated in research projects and technical competitions",
    ],
  },
];

const Education = () => {
  return (
    <div className="py-16 md:py-24" id="education">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-primary">Education</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-primary/20 transform -translate-x-1/2" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                    } bg-card rounded-xl p-6 shadow-lg`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <FaGraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>{edu.period}</span>
                      </div>
                      <p className="font-medium text-primary">{edu.grade}</p>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
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

export default Education;
