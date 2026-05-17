import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ResumeDialog, { useResumeDialog } from "./components/ResumeDialog";
import Resume from "./assets/Resume.pdf";

/* Thin teal scroll-progress bar at the very top */
const ScrollProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      setPct(Math.min((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100, 100));
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[60]" style={{ backgroundColor: "var(--card-border)" }}>
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{ width: `${pct}%`, backgroundColor: "var(--primary-color)" }}
      />
    </div>
  );
};

/* Scroll-to-top button */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-200"
          style={{
            backgroundColor: "color-mix(in srgb, var(--primary-color) 15%, var(--card-bg))",
            border: "1px solid color-mix(in srgb, var(--primary-color) 30%, transparent)",
            color: "var(--primary-color)",
          }}
          aria-label="Scroll to top"
        >
          <HiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen: isResumeOpen, openResume, closeResume } = useResumeDialog();

  if (isLoading) return <LoadingScreen onComplete={() => setIsLoading(false)} />;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-color)" }}>
      <ScrollProgress />
      <Navbar />

      <main>
        {/* Hero / About */}
        <Hero onViewResume={openResume} />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Portfolio />

        {/* Skills */}
        <Skills />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />

      <ResumeDialog isOpen={isResumeOpen} onClose={closeResume} resumeUrl={Resume} />
    </div>
  );
}

export default App;
