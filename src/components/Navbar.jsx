import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navLinks = [
  { href: "#about",      label: "About",      num: "01" },
  { href: "#experience", label: "Experience",  num: "02" },
  { href: "#projects",   label: "Projects",    num: "03" },
  { href: "#skills",     label: "Skills",      num: "04" },
  { href: "#contact",    label: "Contact",     num: "05" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl" : ""
      }`}
      style={{
        backgroundColor: scrolled
          ? "rgba(var(--bg-color-rgb, 10, 25, 47), 0.96)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--card-border)" : "none",
        opacity: scrolled ? 0.98 : 1,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#about"
            className="font-mono text-xl font-bold transition-colors duration-200"
            style={{ color: "var(--primary-color)" }}
          >
            KM
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-sm transition-colors duration-200 group"
                    style={{ color: "var(--text-color)", opacity: 0.8 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--primary-color)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-color)";
                      e.currentTarget.style.opacity = "0.8";
                    }}
                  >
                    <span
                      className="font-mono text-xs mr-1"
                      style={{ color: "var(--primary-color)" }}
                    >
                      {link.num}.{" "}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeSwitcher />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 transition-colors duration-200"
              style={{ color: "var(--primary-color)" }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <RiCloseLine size={26} /> : <RiMenu3Line size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: "var(--bg-color)",
              borderTop: "1px solid var(--card-border)",
            }}
          >
            <ul className="px-6 py-5 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-mono text-sm transition-colors duration-200"
                    style={{ color: "var(--text-color)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--primary-color)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-color)")
                    }
                  >
                    <span
                      className="font-mono mr-1"
                      style={{ color: "var(--primary-color)" }}
                    >
                      {link.num}.{" "}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
