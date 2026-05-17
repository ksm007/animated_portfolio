import { motion } from "framer-motion";
import { HiOutlineCalendar, HiOutlineChevronRight } from "react-icons/hi";
import { BsBriefcaseFill, BsBuilding } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaFlask, FaUniversity } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Resume from "../assets/Resume.pdf";

const experiences = [
  {
    company: "LERI",
    role: "Backend Developer",
    location: "Remote",
    period: "Apr 2025 — Present",
    type: "industry",
    description: "Production backend engineering for ride operations, security, and observability",
    achievements: [
      "Scaled a Node.js backend supporting 500+ users, 1,000+ rides, and 10k+ requests/day while maintaining sub-200 ms latency",
      "Implemented RBAC, rate limiting, Twilio-based 2FA, and OpenTelemetry tracing, reducing fraud attempts by 85% and cutting debugging time by 60%",
    ],
    technologies: ["Node.js", "RBAC", "Rate Limiting", "Twilio", "OpenTelemetry", "Backend APIs"],
  },
  {
    company: "Arizona State University",
    role: "Research Aide (Volunteer)",
    location: "Tempe, AZ",
    period: "Sep 2025 — Apr 2026",
    type: "research",
    description: "Tech debt analysis and developer productivity research",
    achievements: [
      "Created a tech debt analyzer with Python and Flask that processes 200+ files across 5+ repositories, generating automated refactoring recommendations using 15+ complexity metrics and LLM-assisted code insights",
      "Deployed a Dockerized API and tuned PostgreSQL indexing to support sub-second queries across 50k+ code entities, reducing manual review time by 40%",
    ],
    technologies: ["Python", "Flask", "Docker", "PostgreSQL", "LLMs", "Code Analysis"],
  },
  {
    company: "The Boeing Company",
    role: "Associate Software Engineer",
    location: "Bangalore, India",
    period: "Aug 2022 — Jul 2024",
    type: "industry",
    description: "Full-stack development and system architecture",
    achievements: [
      "Refactored an EJB desktop application into Spring Boot microservices with CI/CD automation, enabling server decommissioning that saved $72k/year and reduced operational overhead by 80%",
      "Introduced an Apache Solr service indexing 10k+ PDFs with 95%+ relevance accuracy and streamlined GitLab CI/CD pipelines to shrink release cycles from 60 to 10 minutes",
      "Maintained 50+ REST endpoints across 4 microservices with 90% test coverage, supporting 100k+ requests/day, and shipped 5 CMS APIs that improved publishing turnaround by 57%",
    ],
    technologies: ["Spring Boot", "Angular", "Apache Solr", "GitLab CI/CD", "JUnit 5", "Java", "REST APIs"],
  },
  {
    company: "Ikshana (Indian Institute of Science)",
    role: "Research Intern",
    location: "Bangalore, India",
    period: "Jan 2022 — Jul 2022",
    type: "research",
    description: "Data engineering and mobile app development",
    achievements: [
      "Implemented a Python ETL pipeline for 5 sensor streams at 100+ Hz, enabling BLE-based IoT data capture for clinical research",
      "Developed an Android Studio app with Bluetooth Low Energy support to scan, pair, and control connected devices for field data collection",
    ],
    technologies: ["Python", "Pandas", "scikit-learn", "Android Studio", "Java", "BLE/GATT"],
  },
  {
    company: "Team Chimera (R V College of Engineering)",
    role: "Data Acquisition Engineer",
    location: "Bangalore, India",
    period: "Jul 2019 — May 2022",
    type: "team",
    description: "Real-time data acquisition and telemetry",
    achievements: [
      "Implemented an LTE-based data acquisition system for real-time transmission, delivering 8+ data points like voltage, SoC, and thermal data with a responsive UI integrated with 5+ APIs",
      "Refined temperature sensor placement for accurate data reads, validated on dyno-bench and on-track runs to stabilize telemetry",
    ],
    technologies: ["LTE", "Data Acquisition", "APIs", "Sensor Integration", "Real-time Systems"],
  },
];

const TYPE_CONFIG = {
  research: {
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    icon: "bg-violet-500/15 text-violet-300",
    accent: "border-l-violet-500",
    dot: "bg-violet-500",
    label: "Research",
    Icon: FaFlask,
  },
  industry: {
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    icon: "bg-blue-500/15 text-blue-300",
    accent: "border-l-blue-500",
    dot: "bg-blue-500",
    label: "Industry",
    Icon: BsBriefcaseFill,
  },
  team: {
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    icon: "bg-emerald-500/15 text-emerald-300",
    accent: "border-l-emerald-500",
    dot: "bg-emerald-500",
    label: "Team",
    Icon: FaUniversity,
  },
};

const ExperienceCard = ({ exp, index }) => {
  const cfg = TYPE_CONFIG[exp.type] || TYPE_CONFIG.industry;
  const { Icon } = cfg;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl border-l-4 overflow-hidden ${cfg.accent}`}
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderLeftWidth: "4px",
      }}
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="p-5 sm:p-6"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            {/* Type icon */}
            <div className={`p-2.5 rounded-xl flex-shrink-0 ${cfg.icon}`}>
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <h3
                className="text-base lg:text-lg font-bold leading-tight mb-0.5"
                style={{ color: "var(--text-color)" }}
              >
                {exp.role}
              </h3>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--text-color)", opacity: 0.65 }}
              >
                <BsBuilding size={13} className="flex-shrink-0" style={{ color: "var(--primary-color)", opacity: 0.7 }} />
                <span>{exp.company}</span>
              </div>
            </div>
          </div>

          {/* Period badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap flex-shrink-0 ${cfg.badge}`}
          >
            <HiOutlineCalendar size={13} />
            {exp.period}
          </div>
        </div>

        {/* Location + Description */}
        <div
          className="flex items-center gap-1.5 text-xs sm:text-sm mb-4"
          style={{ color: "var(--text-color)", opacity: 0.5 }}
        >
          <IoLocationSharp size={14} style={{ color: "var(--primary-color)", opacity: 0.7 }} />
          <span>{exp.location}</span>
          <span className="mx-1">·</span>
          <span className="italic">{exp.description}</span>
        </div>

        {/* Divider */}
        <div className="mb-4" style={{ borderTop: "1px solid var(--card-border)" }} />

        {/* Achievements */}
        <ul className="space-y-3 mb-5">
          {exp.achievements.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 + i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-2.5 text-sm lg:text-base leading-relaxed"
            >
              <HiOutlineChevronRight
                size={15}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--primary-color)" }}
              />
              <span style={{ color: "var(--text-color)", opacity: 0.8 }}>
                {item}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: "color-mix(in srgb, var(--primary-color) 12%, transparent)",
                color: "var(--primary-color)",
                border: "1px solid color-mix(in srgb, var(--primary-color) 20%, transparent)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => (
  <section
    id="experience"
    className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16"
  >
    <div className="max-w-screen-xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span
          className="font-mono text-sm lg:text-base"
          style={{ color: "var(--primary-color)" }}
        >
          02.
        </span>
        <h2
          className="text-2xl lg:text-3xl font-bold"
          style={{ color: "var(--text-color)" }}
        >
          Professional Experience
        </h2>
        <div
          className="flex-1 h-px max-w-xs"
          style={{ backgroundColor: "var(--card-border)" }}
        />
      </div>

      {/* Timeline */}
      <div className="relative pl-8 md:pl-12">
        {/* Vertical line */}
        <div
          className="absolute left-3 md:left-5 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, var(--primary-color), var(--card-border) 90%)",
            opacity: 0.4,
          }}
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const cfg = TYPE_CONFIG[exp.type] || TYPE_CONFIG.industry;
            return (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-8 md:-left-12 top-6 w-4 h-4 md:w-5 md:h-5 rounded-full ring-4 z-10 ${cfg.dot}`}
                  style={{ ringColor: "var(--bg-color)" }}
                >
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-25 ${cfg.dot}`} />
                </div>
                <ExperienceCard exp={exp} index={i} />
              </div>
            );
          })}
        </div>
      </div>

      {/* View Resume link */}
      <div className="mt-12 pl-8 md:pl-12">
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold transition-colors duration-200 group"
          style={{ color: "var(--primary-color)" }}
        >
          View Full Résumé
          <HiArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
