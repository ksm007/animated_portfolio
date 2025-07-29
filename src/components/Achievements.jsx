import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "Winner of Innovation Hacks 2025",
    organization: "Arizona State University",
    year: "2025",
    description:
      "Won ASU's largest student-led spring hackathon for developing an application that empowers job seekers to customize their resumes and generates compatibility scores for further analysis.",
  },
  {
    title: "Intel Corporation Hackathon - 3rd Place",
    organization: "Arizona State University",
    year: "2023",
    description:
      "Secured 3rd place at the Intel Corporation Hackathon through enhancing the Intel Retail AI Suite with innovative data visualization capabilities that improved analytical insights.",
  },
  {
    title: "Research Publication at INDICON",
    organization: "IEEE Conference",
    year: "2023",
    description:
      "Presented research on the 'VLSI Floorplan Optimization Tool' at the prestigious INDICON conference, showcasing cutting-edge methodologies in VLSI design and driving progress in the field.",
  },
  {
    title: "KCET 2018 - 59th Rank",
    organization: "Karnataka Common Entrance Test",
    year: "2018",
    description:
      "Secured 59th rank in KCET (Karnataka Common Entrance Test) 2018 among 3 lakh+ students, demonstrating exceptional academic performance in mathematics, physics, and chemistry at the state level.",
  },
];

const Achievements = () => {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary/5"
      id="achievements"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-primary">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <FaTrophy size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-primary">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{achievement.organization}</span>
                      <span>•</span>
                      <span>{achievement.year}</span>
                    </div>
                    <p className="text-foreground/80">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Achievements;
