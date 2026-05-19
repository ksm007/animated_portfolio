import { motion } from "framer-motion";
import { DiDatabase, DiJava, DiJavascript1, DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { FaAws, FaPython } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiAngular,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGo,
  SiGooglegemini,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiOpenai,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages and application logic",
    description: "The tools I reach for when building backend services, frontends, and scripts that have to stay maintainable.",
    skills: [
      { label: "Java", icon: <DiJava /> },
      { label: "Python", icon: <FaPython /> },
      { label: "JavaScript", icon: <DiJavascript1 /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Go", icon: <SiGo /> },
      { label: "SQL", icon: <DiDatabase /> },
    ],
  },
  {
    title: "Backend and product delivery",
    description: "The stack I use to turn ideas into products that can be deployed, monitored, and iterated on quickly.",
    skills: [
      { label: "Spring Boot", icon: <SiSpringboot /> },
      { label: "Flask", icon: <SiFlask /> },
      { label: "FastAPI", icon: <SiFastapi /> },
      { label: "Node.js", icon: <DiNodejsSmall /> },
      { label: "React", icon: <DiReact /> },
      { label: "Next.js", icon: <RiNextjsLine /> },
      { label: "Angular", icon: <SiAngular /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Infra, data, and AI tooling",
    description: "The systems layer behind the work: containers, databases, cloud services, and LLM tooling.",
    skills: [
      { label: "AWS", icon: <FaAws /> },
      { label: "Docker", icon: <SiDocker /> },
      { label: "Kubernetes", icon: <SiKubernetes /> },
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "MongoDB", icon: <DiMongodb /> },
      { label: "Jenkins", icon: <SiJenkins /> },
      { label: "Linux", icon: <SiLinux /> },
      { label: "OpenAI", icon: <SiOpenai /> },
      { label: "Gemini", icon: <SiGooglegemini /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-10 space-y-4">
          <p className="section-kicker">Technical range</p>
          <h2 className="section-title max-w-3xl">
            The stack is broad, but the goal is always <em>clarity under load.</em>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="section-shell p-6"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]" style={{ color: "var(--text-color)" }}>
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted-copy)" }}>
                {group.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div key={skill.label} className="skill-pill">
                    <span className="text-lg" style={{ color: "var(--primary-color)" }}>
                      {skill.icon}
                    </span>
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
