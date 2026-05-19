import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { SiDevpost } from "react-icons/si";
import profileImage from "../assets/profpic.png";
import Resume from "../assets/Resume.pdf";

const proofItems = [
  { value: "2+ years", label: "Shipping production software" },
  { value: "5 wins", label: "Hackathon placements across AI + product builds" },
  { value: "100k+/day", label: "Traffic supported across maintained APIs" },
];

const capabilityItems = [
  "Strong fit for product engineering and backend roles",
  "Useful for startup teams that need someone who can ship end to end",
  "AI tooling built with actual deployment and product constraints in mind",
];

const socialLinks = [
  { href: "https://github.com/ksm007", label: "GitHub", Icon: AiOutlineGithub },
  { href: "https://linkedin.com/in/kartik-marathe", label: "LinkedIn", Icon: AiOutlineLinkedin },
  { href: "https://devpost.com/ksm007", label: "Devpost", Icon: SiDevpost },
];

export default function Hero({ onViewResume }) {
  return (
    <section id="about" className="px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-24 lg:pt-32">
      <div className="mx-auto grid max-w-screen-xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <span className="eyebrow-badge">Open to software roles, startup teams, and product-minded engineering work</span>

            <div className="space-y-5">
              <h1 className="section-title max-w-4xl">
                I build <em>AI products</em> and production-grade web systems for teams that need someone who can turn ambiguity into shipped software.
              </h1>
              <p className="section-copy text-base sm:text-lg">
                I am Kartik Marathe, a computer science graduate student at Arizona State University with experience across backend
                architecture, full-stack product delivery, CI/CD, and applied AI. I am actively seeking software engineering roles while
                also targeting startup environments where ownership, speed, and product judgment matter.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            <button type="button" onClick={onViewResume || (() => window.open(Resume, "_blank"))} className="primary-button">
              View resume
            </button>
            <a href="#projects" className="secondary-button">
              Selected work
              <HiArrowRight className="text-lg" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {proofItems.map((item) => (
              <div key={item.label} className="editorial-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="hero-panel p-6 sm:p-7"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="section-kicker">How I work</p>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted-strong)" }}>
                Open to full-time roles and startup opportunities
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {capabilityItems.map((item) => (
                <div key={item} className="rounded-[1.2rem] border p-4" style={{ borderColor: "var(--soft-border)" }}>
                  <p className="text-sm leading-6" style={{ color: "var(--text-color)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative"
        >
          <div className="hero-portrait-shell">
            <div className="hero-portrait-frame">
              <img src={profileImage} alt="Kartik Marathe" className="h-full w-full object-cover" />
            </div>

            <div className="hero-availability-card">
              <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "var(--muted-strong)" }}>
                Current focus
              </p>
              <p className="mt-2 text-lg font-semibold" style={{ color: "var(--text-color)" }}>
                Backend platforms, product engineering, and startup-ready AI interfaces with real deployment constraints.
              </p>
            </div>

            <div className="hero-social-strip">
              {socialLinks.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="hero-social-link" aria-label={label}>
                  <Icon />
                  <span>{label}</span>
                  <HiArrowUpRight />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
