import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

const socialLinks = [
  { name: "GitHub",   icon: FaGithubSquare, href: "https://github.com/ksm007" },
  { name: "LinkedIn", icon: FaLinkedin,     href: "https://linkedin.com/in/kartik-marathe" },
  { name: "Devpost",  icon: SiDevpost,      href: "https://devpost.com/ksm007" },
];

const Footer = () => (
  <footer
    className="border-t py-8 px-6 sm:px-10 lg:px-16"
    style={{ borderColor: "var(--card-border)" }}
  >
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
      {/* Social */}
      <div className="flex gap-5">
        {socialLinks.map(({ name, icon: Icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="text-2xl transition-all duration-200 hover:-translate-y-1"
            style={{ color: "var(--text-color)", opacity: 0.5 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--primary-color)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-color)";
              e.currentTarget.style.opacity = "0.5";
            }}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Right */}
      <div className="text-center md:text-right space-y-1">
        <p className="text-sm" style={{ color: "var(--text-color)", opacity: 0.5 }}>
          <a
            href="mailto:kartiksmarathe@gmail.com"
            className="transition-colors duration-200"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-color)")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
          >
            kartiksmarathe@gmail.com
          </a>
        </p>
        <p className="text-sm" style={{ color: "var(--text-color)", opacity: 0.4 }}>
          © {new Date().getFullYear()} Kartik Marathe · Tempe, Arizona
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
