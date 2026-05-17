import { motion } from "framer-motion";
import profileImage from "../assets/profpic.png";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import Resume from "../assets/Resume.pdf";

const Hero = ({ onViewResume }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-20 pb-16"
    >
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* ── Left: text ─────────────────────────────── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-sm lg:text-base mb-5"
              style={{ color: "var(--primary-color)" }}
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-4"
              style={{ color: "var(--text-color)" }}
            >
              Kartik Marathe.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-7"
              style={{ color: "var(--text-color)", opacity: 0.55 }}
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base lg:text-lg leading-relaxed max-w-xl mb-4"
              style={{ color: "var(--text-color)", opacity: 0.75 }}
            >
              I&apos;m a computer science graduate student at{" "}
              <span style={{ color: "var(--primary-color)" }}>
                Arizona State University
              </span>{" "}
              who enjoys building polished web apps, backend services, and
              AI-assisted tools. Currently building at{" "}
              <span style={{ color: "var(--primary-color)" }}>LERI</span> and
              exploring the intersection of systems, product, and applied AI.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--text-color)", opacity: 0.65 }}
            >
              Open to internships and roles in backend, full-stack, and AI
              engineering. Reach me at{" "}
              <a
                href="mailto:kartiksmarathe@gmail.com"
                className="transition-colors duration-200 underline underline-offset-2"
                style={{ color: "var(--primary-color)" }}
              >
                kartiksmarathe@gmail.com
              </a>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onViewResume || (() => window.open(Resume, "_blank"))}
                className="font-mono text-sm font-semibold border rounded px-6 py-3 transition-all duration-200"
                style={{ color: "var(--primary-color)", borderColor: "var(--primary-color)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "color-mix(in srgb, var(--primary-color) 10%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                View Résumé
              </motion.button>

              <motion.a
                whileHover={{ y: -2 }}
                href="#projects"
                className="font-mono text-sm font-semibold px-6 py-3 rounded transition-all duration-200"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--bg-color)",
                }}
              >
                See Projects
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-5"
            >
              {[
                { href: "https://github.com/ksm007", Icon: AiOutlineGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/kartik-marathe", Icon: AiOutlineLinkedin, label: "LinkedIn" },
                { href: "https://devpost.com/ksm007", Icon: SiDevpost, label: "Devpost" },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -3 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-2xl lg:text-3xl transition-colors duration-200"
                  style={{ color: "var(--text-color)", opacity: 0.6 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary-color)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-color)";
                    e.currentTarget.style.opacity = "0.6";
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: profile image ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative border offset */}
              <div
                className="absolute inset-0 rounded-full translate-x-3 translate-y-3 border-2"
                style={{ borderColor: "var(--primary-color)" }}
              />
              {/* Image */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden border-2"
                style={{ borderColor: "var(--card-border)" }}
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Kartik Marathe"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder: swap profileImage import path to update */
                  <div
                    className="w-full h-full flex items-center justify-center text-4xl font-bold"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      color: "var(--primary-color)",
                    }}
                  >
                    KM
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t"
          style={{ borderColor: "var(--card-border)" }}
        >
          {[
            ["2+ yrs", "Industry experience"],
            ["React · Node · Java", "Primary stack"],
            ["3 Hackathon wins", "Competition record"],
            ["M.S. CS", "Arizona State Univ."],
          ].map(([value, label]) => (
            <div key={label} className="space-y-1">
              <p
                className="text-lg lg:text-xl font-bold font-mono"
                style={{ color: "var(--primary-color)" }}
              >
                {value}
              </p>
              <p
                className="text-xs lg:text-sm uppercase tracking-widest"
                style={{ color: "var(--text-color)", opacity: 0.55 }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
