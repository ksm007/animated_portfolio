import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import { HiArrowUpRight, HiChevronRight } from "react-icons/hi2";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import splitEasyCard from "../assets/generated/spliteasy-card.png";
import learnNestCard from "../assets/generated/learnnest-card.png";
import mindShiftCard from "../assets/generated/mindshift-card.png";
import evFlowCard from "../assets/generated/evflow-card.png";
import agentCard from "../assets/generated/agent-card.png";

const FEATURED = [
  {
    img: project2,
    title: "Wealth Wizard",
    subtitle: "AI Finance Tracker",
    description:
      "Finance platform for tracking accounts, recurring transactions, budgets, alerts, and spending patterns in one dashboard.",
    highlights: [
      "Enabled users to set budgets and send notifications when approaching their limits, along with monthly spending insights",
      "Structured financial dashboards with interactive visualizations for expense tracking and account statistics",
    ],
    tags: ["Next.js", "PostgreSQL", "Inngest", "Arcjet", "Tailwind CSS", "Prisma"],
    links: { live: "https://ai-finance-tracker-seven.vercel.app/", github: "https://github.com/ksm007/ai-finance-tracker" },
  },
  {
    img: project4,
    title: "Spotify with Chat",
    subtitle: "Full-Stack Music Platform",
    description:
      "MERN music platform with real-time chat, admin controls, and AWS-backed deployment infrastructure. 100+ songs, 20+ albums.",
    highlights: [
      "Incorporated real-time chat functionality and user status tracking using Socket.io",
      "Deployed on AWS EC2 behind an Application Load Balancer with Auto Scaling Groups, stored song assets in AWS S3",
    ],
    tags: ["MERN Stack", "Socket.io", "AWS EC2", "AWS S3", "ALB", "MongoDB"],
    links: { live: "https://spotify-clone-gi9v.onrender.com/", github: "https://github.com/ksm007/Spotify-Clone" },
  },
  {
    img: project1,
    title: "Energy Visualization",
    subtitle: "Interactive Data Storytelling",
    description:
      "Interactive data storytelling app for exploring global energy trends across 200+ countries, 60+ years, and trade relationships.",
    highlights: [
      "Scroll-synced storytelling animating 60+ years of data in linked line charts for temporal trend exploration",
      "Built an animated country-centric network graph where nodes are renewable capacity and links are import-export flows",
    ],
    tags: ["React", "D3.js", "Three.js", "Spring Boot", "Scrollama", "REST API"],
    links: { github: "https://github.com/ksm007/EnergyDependencyVisualization" },
  },
  {
    img: project3,
    title: "Smart Drawing App",
    subtitle: "AI-Powered Problem Solver",
    description:
      "Canvas-based problem solving interface that converts hand-drawn equations and diagrams into step-by-step AI solutions.",
    highlights: [
      "HTML5 canvas with gesture recognition for hand-drawn equations and diagrams",
      "Multi-domain support covering math, physics, chemistry with step-by-step visual solutions via Gemini API",
    ],
    tags: ["React", "Gemini API", "Canvas", "AI/ML", "Image Processing"],
    links: { github: "https://github.com/ksm007/drawingApp" },
  },
];

const OTHER = [
  {
    img: splitEasyCard,
    title: "SplitEasy",
    subtitle: "Smart Bill Splitting",
    award: null,
    description: "AI receipt parsing, item assignment, and downloadable PDF summaries. Clerk auth + MongoDB persistence.",
    tags: ["Next.js 14", "TypeScript", "MongoDB", "Clerk Auth", "Google AI"],
    links: { github: "https://github.com/ksm007/spliteasy_updated" },
  },
  {
    img: learnNestCard,
    title: "LearnNest",
    subtitle: "AI Study Platform",
    award: "Devpost Submission",
    description: "Turns uploaded PDFs into semantic search, adaptive quizzes, answer evaluation, and study notes.",
    tags: ["React", "FastAPI", "Gemini", "Pinecone", "Firebase"],
    links: { github: "https://github.com/ksm007/hackathon-fe", devpost: "https://devpost.com/software/intelearn-wpcik1" },
  },
  {
    img: mindShiftCard,
    title: "The Mind Shift",
    subtitle: "Resume Optimizer",
    award: "Innovation Hacks Winner",
    description: "Hackathon-winning ATS-style fit scoring and ranked job matching platform via LangChain + Gemini.",
    tags: ["FastAPI", "LangChain", "Gemini", "Supabase", "TypeScript"],
    links: { devpost: "https://devpost.com/software/the-mind-shift" },
  },
  {
    img: null,
    title: "RetireMax",
    subtitle: "Retirement Optimizer",
    award: "TIAA Fund the Future Winner",
    description: "Models contribution strategies, employer match scenarios, and long-term growth projections.",
    tags: ["Fintech", "React", "Financial Modeling"],
    links: {},
  },
  {
    img: evFlowCard,
    title: "EV Energy Flow",
    subtitle: "Fleet Interface",
    award: null,
    description: "EV orchestration with charger maps, live fleet dashboards, and WebSocket-backed charging workflows.",
    tags: ["TypeScript", "FastAPI", "WebSockets", "Clerk"],
    links: { github: "https://github.com/ksm007/ev-energy-flow" },
  },
  {
    img: agentCard,
    title: "Conversational Agent",
    subtitle: "LLM Multi-Turn Agent",
    award: null,
    description: "Multi-turn context, tool routing, and structured outputs — a testbed for agentic LLM patterns.",
    tags: ["Python", "LLM", "Tool Use", "OpenAI"],
    links: { github: "https://github.com/ksm007/conversational_agent" },
  },
];

const ImagePlaceholder = ({ title }) => (
  <div
    className="w-full h-full flex items-center justify-center text-2xl font-extrabold select-none"
    style={{
      backgroundColor: "color-mix(in srgb, var(--primary-color) 6%, var(--card-bg))",
      color: "color-mix(in srgb, var(--primary-color) 25%, transparent)",
    }}
  >
    {title.split(" ").map((w) => w[0]).join("").toUpperCase()}
  </div>
);

/* ── Featured full card ─────────────────────────────────── */
const FeaturedCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
    style={{
      backgroundColor: "var(--card-bg)",
      border: "1px solid var(--card-border)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor =
        "color-mix(in srgb, var(--primary-color) 30%, transparent)";
      e.currentTarget.style.boxShadow =
        "0 12px 40px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--card-border)";
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)";
    }}
  >
    {/* Image */}
    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {project.img ? (
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div style={{ height: "200px" }}>
          <ImagePlaceholder title={project.title} />
        </div>
      )}
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, color-mix(in srgb, var(--bg-color) 70%, transparent), transparent)",
        }}
      />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6 space-y-4">
      <div>
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-1"
          style={{ color: "var(--primary-color)" }}
        >
          {project.subtitle}
        </p>
        <h3
          className="text-xl lg:text-2xl font-semibold leading-tight flex items-center gap-1.5"
          style={{ color: "var(--text-color)" }}
        >
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: "var(--text-color)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-color)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-color)")}
            >
              {project.title}
              <HiArrowUpRight size={18} className="flex-shrink-0" />
            </a>
          ) : project.title}
        </h3>
      </div>

      <p
        className="text-sm lg:text-base leading-relaxed"
        style={{ color: "var(--text-color)", opacity: 0.72 }}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2">
        {project.highlights.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm lg:text-base leading-relaxed">
            <HiChevronRight
              size={15}
              className="flex-shrink-0 mt-0.5"
              style={{ color: "var(--primary-color)" }}
            />
            <span style={{ color: "var(--text-color)", opacity: 0.72 }}>{item}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "color-mix(in srgb, var(--primary-color) 12%, transparent)",
              color: "var(--primary-color)",
              border: "1px solid color-mix(in srgb, var(--primary-color) 20%, transparent)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-1 border-t" style={{ borderColor: "var(--card-border)" }}>
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold mt-3 transition-colors duration-200"
            style={{ color: "var(--text-color)", opacity: 0.65 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary-color)"; e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-color)"; e.currentTarget.style.opacity = "0.65"; }}>
            <HiArrowUpRight size={14} /> Live Demo
          </a>
        )}
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold mt-3 transition-colors duration-200"
            style={{ color: "var(--text-color)", opacity: 0.65 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary-color)"; e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-color)"; e.currentTarget.style.opacity = "0.65"; }}>
            <AiOutlineGithub size={15} /> GitHub
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

/* ── Compact other-work row ─────────────────────────────── */
const ProjectRow = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.07 }}
    viewport={{ once: true }}
    className="group grid sm:grid-cols-[120px_1fr] gap-4 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
    style={{ border: "1px solid var(--card-border)", backgroundColor: "var(--card-bg)" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "color-mix(in srgb, var(--primary-color) 30%, transparent)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--card-border)";
    }}
  >
    {/* Thumbnail */}
    <div
      className="overflow-hidden rounded-lg flex-shrink-0"
      style={{ border: "1px solid var(--card-border)", aspectRatio: "16/10" }}
    >
      {project.img ? (
        <img src={project.img} alt={project.title} loading="lazy" decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <ImagePlaceholder title={project.title} />
      )}
    </div>

    {/* Content */}
    <div>
      {project.award && (
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-0.5"
           style={{ color: "var(--primary-color)" }}>
          {project.award}
        </p>
      )}
      <h3 className="font-semibold text-sm lg:text-base leading-snug mb-1 flex items-center gap-1.5 transition-colors duration-200"
          style={{ color: "var(--text-color)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-color)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-color)")}>
        {project.title}
        {project.links.live && <HiArrowUpRight size={12} className="flex-shrink-0" />}
      </h3>
      <p className="text-xs lg:text-sm leading-relaxed mb-2.5"
         style={{ color: "var(--text-color)", opacity: 0.65 }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="text-[10px] lg:text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--primary-color) 10%, transparent)",
                  color: "var(--primary-color)",
                }}>
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] transition-colors duration-200"
            style={{ color: "var(--text-color)", opacity: 0.5 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary-color)"; e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-color)"; e.currentTarget.style.opacity = "0.5"; }}>
            <AiOutlineGithub size={13} /> GitHub
          </a>
        )}
        {project.links.devpost && (
          <a href={project.links.devpost} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] transition-colors duration-200"
            style={{ color: "var(--text-color)", opacity: 0.5 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary-color)"; e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-color)"; e.currentTarget.style.opacity = "0.5"; }}>
            <SiDevpost size={11} /> Devpost
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ── Main Portfolio section ─────────────────────────────── */
const Portfolio = () => (
  <section id="projects" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16">
    <div className="max-w-screen-xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-sm lg:text-base" style={{ color: "var(--primary-color)" }}>
          03.
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: "var(--text-color)" }}>
          Featured Work
        </h2>
        <div className="flex-1 h-px max-w-xs" style={{ backgroundColor: "var(--card-border)" }} />
      </div>

      {/* Featured grid */}
      <p className="text-xs font-bold tracking-[0.14em] uppercase mb-5"
         style={{ color: "var(--text-color)", opacity: 0.4 }}>
        Selected Builds
      </p>
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {FEATURED.map((project, i) => (
          <FeaturedCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Other work */}
      <p className="text-xs font-bold tracking-[0.14em] uppercase mb-5"
         style={{ color: "var(--text-color)", opacity: 0.4 }}>
        Other Noteworthy Projects
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {OTHER.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Archive links */}
      <div className="flex flex-wrap gap-6">
        <a href="https://github.com/ksm007?tab=repositories" target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm font-semibold transition-colors duration-200"
          style={{ color: "var(--primary-color)" }}>
          View All Repos
          <HiArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a href="https://devpost.com/ksm007" target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-sm font-semibold transition-colors duration-200"
          style={{ color: "var(--primary-color)" }}>
          Devpost Submissions
          <HiArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </section>
);

export default Portfolio;
