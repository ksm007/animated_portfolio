import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineChevronRight } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";

const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "Arizona State University",
    location: "Tempe, Arizona",
    period: "Aug 2024 — May 2026",
    detail: "4.0 GPA · focus on cloud systems, data at scale, visualization, and applied AI.",
    highlights: [
      "Graduate research work on LLM-assisted tech debt analysis and developer productivity tooling.",
      "Hackathon placements across AI, systems, and product engineering competitions.",
    ],
  },
  {
    degree: "B.E. in Electronics and Communication",
    institution: "R.V. College of Engineering",
    location: "Bangalore, India",
    period: "Aug 2018 — May 2022",
    detail: "Coursework spanning databases, algorithms, intelligent systems, and web programming.",
    highlights: [
      "Worked on telemetry and real-time data acquisition through Formula Student EV work with Team Chimera.",
      "Research internship experience at IISc building BLE and clinical IoT data pipelines.",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-10 space-y-4">
          <p className="section-kicker">Education</p>
          <h2 className="section-title max-w-3xl">
            Strong academic footing, but always tied back to <em>buildable systems.</em>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="section-shell p-6 sm:p-7"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "var(--panel-soft)", color: "var(--primary-color)" }}>
                <HiOutlineAcademicCap />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-color">{item.institution}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]" style={{ color: "var(--text-color)" }}>
                {item.degree}
              </h3>
              <div className="mt-4 flex flex-wrap gap-4 text-sm" style={{ color: "var(--muted-copy)" }}>
                <span className="inline-flex items-center gap-2">
                  <HiOutlineCalendar />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <IoLocationSharp />
                  {item.location}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 sm:text-base" style={{ color: "var(--muted-copy)" }}>
                {item.detail}
              </p>
              <ul className="mt-5 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-7 sm:text-base" style={{ color: "var(--text-color)" }}>
                    <HiOutlineChevronRight className="mt-1 shrink-0 text-primary-color" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
