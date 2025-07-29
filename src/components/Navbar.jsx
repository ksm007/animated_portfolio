// Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tonal-primary/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-primary-foreground">
            Portfolio
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:bg-light-blue hover:text-primary transition-colors rounded-md px-2 py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeSwitcher />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-tonal-primary`}
      >
        <ul className="px-6 py-4 space-y-4 border-t border-border">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:bg-light-blue hover:text-primary transition-colors rounded-md px-2 py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
