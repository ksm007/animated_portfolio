import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { HiArrowUpRight, HiChevronRight } from "react-icons/hi2";
import { SiDevpost } from "react-icons/si";
import agentCard from "../assets/generated/agent-card.png";
import evFlowCard from "../assets/generated/evflow-card.png";
import learnNestCard from "../assets/generated/learnnest-card.png";
import mindShiftCard from "../assets/generated/mindshift-card.png";
import splitEasyCard from "../assets/generated/spliteasy-card.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const featuredProjects = [
  {
    title: "Spotify with Chat",
    eyebrow: "Full-stack platform",
    image: project4,
    summary: "A MERN music platform with real-time chat, admin tooling, and AWS-backed deployment infrastructure.",
    impact: "Shipped chat, media management, and deployment architecture across EC2, S3, and load-balanced app infrastructure.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "AWS EC2", "AWS S3"],
    links: {
      live: "https://spotify-clone-gi9v.onrender.com/",
      github: "https://github.com/ksm007/Spotify-Clone",
    },
  },
  {
    title: "Wealth Wizard",
    eyebrow: "AI finance tracker",
    image: project2,
    summary: "A finance platform for budgets, recurring transactions, alerts, and spending intelligence in one product surface.",
    impact: "Combined dashboards, workflow automation, and budget alerts into a product that feels closer to a real fintech tool than a student project.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Inngest", "Arcjet", "Tailwind CSS"],
    links: {
      live: "https://ai-finance-tracker-seven.vercel.app/",
      github: "https://github.com/ksm007/ai-finance-tracker",
    },
  },
  {
    title: "Energy Visualization",
    eyebrow: "Data storytelling system",
    image: project1,
    summary: "An interactive storytelling product for exploring global energy trends across 200+ countries and 60+ years of data.",
    impact: "Built scroll-synced narratives, D3-driven exploration, and a country-centric graph model to make dense data legible.",
    stack: ["React", "D3.js", "Three.js", "Spring Boot", "Scrollama"],
    links: {
      github: "https://github.com/ksm007/EnergyDependencyVisualization",
    },
  },
];

const labProjects = [
  {
    title: "SplitEasy",
    subtitle: "Receipt parsing and bill splitting",
    image: splitEasyCard,
    tags: ["Next.js 14", "TypeScript", "MongoDB", "Clerk", "Google AI"],
    links: { github: "https://github.com/ksm007/spliteasy_updated" },
  },
  {
    title: "LearnNest",
    subtitle: "PDF-to-study workflow",
    image: learnNestCard,
    tags: ["React", "FastAPI", "Gemini", "Pinecone", "Firebase"],
    links: {
      github: "https://github.com/ksm007/hackathon-fe",
      devpost: "https://devpost.com/software/intelearn-wpcik1",
    },
  },
  {
    title: "The Mind Shift",
    subtitle: "ATS fit scoring and ranking",
    image: mindShiftCard,
    tags: ["FastAPI", "LangChain", "Gemini", "Supabase"],
    links: { devpost: "https://devpost.com/software/the-mind-shift" },
  },
  {
    title: "EV Energy Flow",
    subtitle: "Fleet orchestration interface",
    image: evFlowCard,
    tags: ["TypeScript", "FastAPI", "WebSockets", "Clerk"],
    links: { github: "https://github.com/ksm007/ev-energy-flow" },
  },
  {
    title: "Smart Drawing App",
    subtitle: "Hand-drawn problem solving",
    image: project3,
    tags: ["React", "Gemini", "Canvas", "Image Processing"],
    links: { github: "https://github.com/ksm007/drawingApp" },
  },
  {
    title: "Conversational Agent",
    subtitle: "Multi-turn LLM tool routing",
    image: agentCard,
    tags: ["Python", "OpenAI", "Agents", "Structured outputs"],
    links: { github: "https://github.com/ksm007/conversational_agent" },
  },
];

const projectLinks = (links) => (
  <div className="flex flex-wrap gap-4 pt-2">
    {links.live && (
      <a href={links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-color">
        Live site
        <HiArrowUpRight />
      </a>
    )}
    {links.github && (
      <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--text-color)" }}>
        <AiOutlineGithub />
        Source
      </a>
    )}
    {links.devpost && (
      <a href={links.devpost} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--text-color)" }}>
        <SiDevpost />
        Devpost
      </a>
    )}
  </div>
);

export default function Portfolio() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10">
        <div className="space-y-5">
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title max-w-4xl">
            Built to solve <em>real product</em> and infrastructure problems, not just fill a gallery.
          </h2>
          <p className="section-copy">
            The strongest projects here are the ones where architecture, product clarity, and deployment concerns all had to work together.
            That is the kind of engineering work I want to keep doing.
          </p>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="project-case-study"
            >
              <div className="project-case-image">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-color">{project.eyebrow}</p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl" style={{ color: "var(--text-color)" }}>
                  {project.title}
                </h3>
                <p className="text-base leading-7" style={{ color: "var(--muted-copy)" }}>
                  {project.summary}
                </p>
                <div className="rounded-[1.35rem] border p-4 sm:p-5" style={{ borderColor: "var(--soft-border)", background: "var(--panel-soft)" }}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--muted-strong)" }}>
                    Why it mattered
                  </p>
                  <p className="mt-3 text-sm leading-7 sm:text-base" style={{ color: "var(--text-color)" }}>
                    {project.impact}
                  </p>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.stack.map((item) => (
                    <li key={item} className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--muted-copy)" }}>
                      <HiChevronRight className="text-primary-color" />
                      {item}
                    </li>
                  ))}
                </ul>
                {projectLinks(project.links)}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Build lab</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl" style={{ color: "var(--text-color)" }}>
                More experiments in AI, data, and product tooling.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7" style={{ color: "var(--muted-copy)" }}>
              A mix of hackathon builds, agent experiments, and product prototypes that show range without diluting the stronger case studies above.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {labProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="lab-project-card"
              >
                <div className="lab-project-image">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                </div>
                <div className="space-y-4 p-5">
                  <div>
                    <h4 className="text-xl font-semibold tracking-[-0.03em]" style={{ color: "var(--text-color)" }}>
                      {project.title}
                    </h4>
                    <p className="mt-1 text-sm" style={{ color: "var(--muted-copy)" }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {projectLinks(project.links)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
