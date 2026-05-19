import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className={`mx-auto flex max-w-screen-xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300 sm:px-6 ${
        scrolled ? "nav-shell nav-shell-scrolled" : "nav-shell"
      }`}>
        <a href="#about" className="brand-mark">
          <span>KM</span>
          <span className="hidden text-[0.7rem] uppercase tracking-[0.22em] sm:inline">Kartik Marathe</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitcher />
          <button type="button" onClick={() => setIsOpen((open) => !open)} className="nav-menu-button" aria-label="Toggle menu">
            {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-screen-xl rounded-[1.6rem] border p-5 md:hidden"
            style={{
              background: "color-mix(in srgb, var(--card-bg) 92%, transparent)",
              borderColor: "var(--soft-border)",
              boxShadow: "var(--shadow-soft)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="nav-link text-base">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
