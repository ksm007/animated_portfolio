import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleNav = () => setNav((prev) => !prev);
  const closeNav = () => setNav(false);
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const menuVariants = {
    open: {
      x: 0,
      transition: { stiffness: 20, damping: 15 },
    },
    closed: {
      x: "-100%",
      transition: { stiffness: 20, damping: 15 },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex items-center px-12 h-20 text-xl">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Logo" className="h-12" />
        </a>

        {/* nav links + theme toggle + mobile icon */}
        <div className="flex items-center gap-4 ml-auto">
          <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
            {["hero", "skills", "portfolio", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  offset={section === "hero" ? 10 : -50}
                  duration={500}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <HiOutlineSun size={24} />
            ) : (
              <HiOutlineMoon size={24} />
            )}
          </button>

          {/* mobile menu button */}
          <div onClick={toggleNav} className="md:hidden z-50">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>

        {/* sliding mobile menu */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="mt-24 space-y-8 text-4xl font-semibold text-center">
            {["skills", "portfolio", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  onClick={closeNav}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
