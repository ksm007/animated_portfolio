import { motion } from "framer-motion";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiArrowUpRight, HiOutlineCalendar, HiOutlineChevronRight } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import Resume from "../assets/Resume.pdf";

const experiences = [
  {
    company: "The Boeing Company",
    role: "Associate Software Engineer",
    location: "Bangalore, India",
    period: "Aug 2022 — Jul 2024",
    summary: "Full-stack engineering across platform migration, search infrastructure, and release automation.",
    achievements: [
      "Refactored an EJB desktop application into Spring Boot microservices with CI/CD automation, cutting operational overhead and enabling server decommissioning worth roughly $72k annually.",
      "Introduced an Apache Solr service indexing 10k+ PDFs with strong relevance and streamlined GitLab pipelines to reduce release cycles from 60 minutes to roughly 10.",
      "Maintained 50+ REST endpoints across four microservices with high test coverage while supporting 100k+ requests a day.",
    ],
    stack: ["Spring Boot", "Angular", "Apache Solr", "GitLab CI/CD", "Java", "JUnit 5"],
  },
  {
    company: "Arizona State University",
    role: "Research Aide",
    location: "Tempe, AZ",
    period: "Sep 2025 — Apr 2026",
    summary: "Research work around tech debt analysis, code understanding, and developer productivity.",
    achievements: [
      "Built a tech debt analyzer with Python and Flask that processes 200+ files across multiple repositories and produces LLM-assisted refactoring guidance.",
      "Deployed a Dockerized API with tuned PostgreSQL indexing to support sub-second queries across 50k+ code entities.",
    ],
    stack: ["Python", "Flask", "PostgreSQL", "Docker", "LLMs"],
  },
  {
    company: "Ikshana · Indian Institute of Science",
    role: "Research Intern",
    location: "Bangalore, India",
    period: "Jan 2022 — Jul 2022",
    summary: "Data engineering and BLE-enabled mobile workflows for clinical IoT research.",
    achievements: [
      "Implemented a Python ETL pipeline for five sensor streams sampled above 100 Hz.",
      "Developed an Android app with BLE support to scan, pair, and control connected devices in field data collection flows.",
    ],
    stack: ["Python", "Pandas", "Android Studio", "Java", "BLE/GATT"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-10 space-y-4">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title max-w-4xl">
            I like work where the <em>architecture</em> matters as much as the interface.
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="section-shell p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "var(--panel-soft)", color: "var(--primary-color)" }}>
                    <BsBriefcaseFill />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-color">{exp.company}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "var(--text-color)" }}>
                      {exp.role}
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm" style={{ color: "var(--muted-copy)" }}>
                    <p className="inline-flex items-center gap-2">
                      <HiOutlineCalendar />
                      {exp.period}
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <IoLocationSharp />
                      {exp.location}
                    </p>
                  </div>
                  <p className="text-sm leading-7" style={{ color: "var(--muted-copy)" }}>
                    {exp.summary}
                  </p>
                </div>

                <div className="space-y-5">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-sm leading-7 sm:text-base" style={{ color: "var(--text-color)" }}>
                        <HiOutlineChevronRight className="mt-1 shrink-0 text-primary-color" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((item) => (
                      <span key={item} className="tag-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <a href={Resume} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-color">
          View full resume
          <HiArrowUpRight />
        </a>
      </div>
    </section>
  );
}
