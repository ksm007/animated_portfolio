import {
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall,
  DiMongodb, DiGithubBadge, DiJava, DiDatabase,
} from "react-icons/di";
import {
  SiSpringboot, SiD3Dotjs, SiTypescript, SiAngular, SiDocker,
  SiKubernetes, SiPostgresql, SiMysql, SiGraphql, SiTailwindcss,
  SiApachekafka, SiApachespark, SiRedis, SiJenkins, SiGo, SiGnubash,
  SiJunit5, SiPostman, SiFlask, SiNeo4J, SiApachesolr, SiLinux,
  SiOpenai, SiGooglegemini, SiFastapi,
} from "react-icons/si";
import { FaAws, FaPython } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { RiNextjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    emoji: "💻",
    skills: [
      { name: "Java",       icon: <DiJava className="text-red-400" /> },
      { name: "Python",     icon: <FaPython className="text-blue-400" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "C++",        icon: <span className="font-bold text-blue-400 text-xs">C++</span> },
      { name: "SQL",        icon: <DiDatabase className="text-blue-300" /> },
      { name: "Go",         icon: <SiGo className="text-cyan-400" /> },
      { name: "Bash",       icon: <SiGnubash className="text-green-400" /> },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Databases",
    emoji: "☁️",
    skills: [
      { name: "AWS EC2",    icon: <FaAws className="text-orange-400" /> },
      { name: "AWS S3",     icon: <FaAws className="text-orange-400" /> },
      { name: "AWS SQS",    icon: <FaAws className="text-orange-400" /> },
      { name: "Azure",      icon: <VscAzure className="text-blue-400" /> },
      { name: "Docker",     icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MySQL",      icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB",    icon: <DiMongodb className="text-green-400" /> },
      { name: "Neo4j",      icon: <SiNeo4J className="text-sky-400" /> },
    ],
  },
  {
    id: "development",
    label: "Development",
    emoji: "⚙️",
    skills: [
      { name: "Spring Boot",  icon: <SiSpringboot className="text-green-500" /> },
      { name: "Flask",        icon: <SiFlask className="text-slate-300" /> },
      { name: "React",        icon: <DiReact className="text-blue-400" /> },
      { name: "Node.js",      icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Next.js",      icon: <RiNextjsLine className="text-white" /> },
      { name: "Angular",      icon: <SiAngular className="text-red-500" /> },
      { name: "HTML",         icon: <DiHtml5 className="text-orange-500" /> },
      { name: "CSS",          icon: <DiCss3 className="text-blue-500" /> },
      { name: "REST APIs",    icon: <SiPostman className="text-orange-400" /> },
      { name: "GraphQL",      icon: <SiGraphql className="text-pink-400" /> },
      { name: "gRPC",         icon: <span className="font-bold text-cyan-500 text-[10px]">gRPC</span> },
      { name: "JUnit",        icon: <SiJunit5 className="text-green-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    emoji: "🤖",
    skills: [
      { name: "LangChain",    icon: <span className="font-bold text-emerald-400 text-[10px]">LC</span> },
      { name: "OpenAI",       icon: <SiOpenai className="text-slate-300" /> },
      { name: "Gemini",       icon: <SiGooglegemini className="text-blue-400" /> },
      { name: "FastAPI",      icon: <SiFastapi className="text-teal-400" /> },
      { name: "Pinecone",     icon: <span className="font-bold text-green-400 text-[10px]">PC</span> },
      { name: "RAG",          icon: <span className="font-bold text-violet-400 text-[10px]">RAG</span> },
      { name: "Prompt Eng.",  icon: <span className="font-bold text-orange-400 text-[10px]">PE</span> },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    emoji: "🛠️",
    skills: [
      { name: "Spark",          icon: <SiApachespark className="text-orange-400" /> },
      { name: "Kafka",          icon: <SiApachekafka className="text-slate-300" /> },
      { name: "Apache Solr",    icon: <SiApachesolr className="text-lime-500" /> },
      { name: "Redis",          icon: <SiRedis className="text-red-400" /> },
      { name: "Jenkins",        icon: <SiJenkins className="text-red-500" /> },
      { name: "Git",            icon: <DiGithubBadge className="text-slate-300" /> },
      { name: "Linux",          icon: <SiLinux className="text-slate-300" /> },
      { name: "D3.js",          icon: <SiD3Dotjs className="text-orange-500" /> },
      { name: "Jira",           icon: <span className="font-bold text-blue-400 text-xs">J</span> },
      { name: "Postman",        icon: <SiPostman className="text-orange-400" /> },
      { name: "OpenTelemetry",  icon: <span className="font-bold text-emerald-400 text-[10px]">OT</span> },
      { name: "Agile",          icon: <span className="font-bold text-green-400 text-xs">AG</span> },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16">
    <div className="max-w-screen-xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span
          className="font-mono text-sm lg:text-base"
          style={{ color: "var(--primary-color)" }}
        >
          04.
        </span>
        <h2
          className="text-2xl lg:text-3xl font-bold"
          style={{ color: "var(--text-color)" }}
        >
          Technical Skills
        </h2>
        <div
          className="flex-1 h-px max-w-xs"
          style={{ backgroundColor: "var(--card-border)" }}
        />
      </div>

      <div className="space-y-5">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: ci * 0.07 }}
            viewport={{ once: true }}
            className="rounded-2xl p-5"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            {/* Category row */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">{category.emoji}</span>
              <h3
                className="text-base font-bold"
                style={{ color: "var(--text-color)" }}
              >
                {category.label}
              </h3>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "var(--card-border)" }}
              />
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, delay: ci * 0.04 + si * 0.025 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.07, y: -2 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-default transition-all duration-200"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--primary-color) 6%, var(--card-bg))",
                    border: "1px solid var(--card-border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "color-mix(in srgb, var(--primary-color) 35%, transparent)";
                    e.currentTarget.style.backgroundColor =
                      "color-mix(in srgb, var(--primary-color) 12%, var(--card-bg))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--card-border)";
                    e.currentTarget.style.backgroundColor =
                      "color-mix(in srgb, var(--primary-color) 6%, var(--card-bg))";
                  }}
                >
                  <span className="text-lg flex-shrink-0">{skill.icon}</span>
                  <span
                    className="text-xs lg:text-sm font-medium whitespace-nowrap"
                    style={{ color: "var(--text-color)" }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
