import { motion } from "framer-motion";
import { HiOutlineChevronRight, HiOutlineCalendar } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const education = [
  {
    degree: "Master of Science — Computer Science",
    institution: "Arizona State University",
    location: "Tempe, AZ",
    period: "Aug 2024 — May 2026",
    gpa: "4.0 / 4.0",
    type: "masters",
    coursework: [
      "Cloud Computing",
      "Data Processing at Scale",
      "Mobile Computing",
      "Data Visualization",
    ],
    highlights: [
      "Graduate Research Aide — built LLM-assisted tech debt analyzer processing 200+ files across 5+ repositories with sub-second query performance over 50k+ code entities",
      "5× hackathon placements in applied AI, full-stack, and systems engineering competitions",
      "Focus area: backend architecture, distributed systems, and applied AI tooling",
    ],
  },
  {
    degree: "Bachelor of Engineering — Electronics & Communication",
    institution: "R.V. College of Engineering",
    location: "Bangalore, India",
    period: "Aug 2018 — May 2022",
    gpa: "3.47 / 4.0",
    type: "bachelors",
    coursework: [
      "Database Management Systems",
      "Intelligent Systems",
      "Data Structures & Algorithms",
      "Web Programming",
    ],
    highlights: [
      "Data Acquisition Engineer on Team Chimera Formula Student EV — built LTE telemetry system transmitting 8+ live data streams (voltage, SoC, temperature) with real-time UI",
      "Research Intern at Indian Institute of Science (IISc) — developed Python ETL pipelines processing 5 BLE sensor streams at 100+ Hz for clinical IoT research",
    ],
  },
];

const TYPE_CONFIG = {
  masters: {
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    icon: "bg-blue-500/15 text-blue-300",
    dot: "bg-blue-500",
    accentColor: "#3b82f6",
    label: "Graduate",
  },
  bachelors: {
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    icon: "bg-emerald-500/15 text-emerald-300",
    dot: "bg-emerald-500",
    accentColor: "#10b981",
    label: "Undergraduate",
  },
};

const EducationCard = ({ edu, index }) => {
  const cfg = TYPE_CONFIG[edu.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderLeftWidth: "4px",
        borderLeftColor: cfg.accentColor,
        borderRadius: "1rem",
        overflow: "hidden",
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
            <div className={`p-2.5 rounded-xl flex-shrink-0 ${cfg.icon}`}>
              <HiOutlineAcademicCap size={18} />
            </div>
            <div className="min-w-0">
              <h3
                className="text-base lg:text-lg font-bold leading-tight mb-0.5"
                style={{ color: "var(--text-color)" }}
              >
                {edu.degree}
              </h3>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--primary-color)", opacity: 0.85 }}
              >
                {edu.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap ${cfg.badge}`}
            >
              <HiOutlineCalendar size={12} />
              {edu.period}
            </span>
            <div
              className="flex items-center gap-3 text-xs"
              style={{ color: "var(--text-color)", opacity: 0.5 }}
            >
              <span className="flex items-center gap-1">
                <IoLocationSharp
                  size={13}
                  style={{ color: "var(--primary-color)", opacity: 0.7 }}
                />
                {edu.location}
              </span>
              {edu.gpa && (
                <>
                  <span>·</span>
                  <span
                    className="font-semibold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    GPA {edu.gpa}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4" style={{ borderTop: "1px solid var(--card-border)" }} />

        {/* Highlights */}
        <ul className="space-y-3 mb-5">
          {edu.highlights.map((item, i) => (
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

        {/* Coursework chips */}
        <div>
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2.5"
            style={{ color: "var(--text-color)", opacity: 0.4 }}
          >
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {edu.coursework.map((course) => (
              <span
                key={course}
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--primary-color) 10%, transparent)",
                  color: "var(--primary-color)",
                  border:
                    "1px solid color-mix(in srgb, var(--primary-color) 20%, transparent)",
                }}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Education = () => (
  <section id="education" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16">
    <div className="max-w-screen-xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <h2
          className="text-2xl lg:text-3xl font-bold"
          style={{ color: "var(--text-color)" }}
        >
          Education
        </h2>
        <div
          className="flex-1 h-px max-w-xs"
          style={{ backgroundColor: "var(--card-border)" }}
        />
      </div>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <EducationCard key={edu.institution} edu={edu} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Education;
