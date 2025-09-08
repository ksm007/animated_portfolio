import { Suspense, lazy, useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import KeyboardShortcuts from "./components/KeyboardShortcuts";
import LoadingScreen from "./components/LoadingScreen";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp, HiChevronDown } from "react-icons/hi";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Lazy load components that are not immediately visible
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-16">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <HiArrowUp size={20} className="group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Scroll to Next Section Button
const ScrollToNext = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroHeight = window.innerHeight;
      setIsVisible(scrolled < heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={scrollToNext}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 p-2 text-primary hover:text-primary-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
          whileHover={{ y: 2 }}
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiChevronDown size={24} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Accessibility Helper
const AccessibilityHelper = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    // Apply high contrast
    if (isHighContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [isHighContrast, fontSize]);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg">
      <div className="flex flex-col gap-2">
        {/* <button
          onClick={() => setIsHighContrast(!isHighContrast)}
          className="p-2 rounded-md hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle high contrast"
          title="Toggle high contrast"
        >
          {isHighContrast ? <FiEyeOff size={16} /> : <FiEye size={16} />}
        </button> */}

        <div className="flex flex-col gap-1">
          <button
            onClick={() => setFontSize(Math.min(fontSize + 10, 150))}
            className="px-2 py-1 text-xs rounded hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Increase font size"
            title="Increase font size"
          >
            A+
          </button>
          <button
            onClick={() => setFontSize(Math.max(fontSize - 10, 80))}
            className="px-2 py-1 text-xs rounded hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Decrease font size"
            title="Decrease font size"
          >
            A-
          </button>
          <button
            onClick={() => setFontSize(100)}
            className="px-2 py-1 text-xs rounded hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Reset font size"
            title="Reset font size"
          >
            A
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "Home":
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;
          case "End":
            e.preventDefault();
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
            break;
        }
      }

      // Arrow key navigation
      if (e.altKey) {
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            window.scrollBy({
              top: -window.innerHeight * 0.8,
              behavior: "smooth",
            });
            break;
          case "ArrowDown":
            e.preventDefault();
            window.scrollBy({
              top: window.innerHeight * 0.8,
              behavior: "smooth",
            });
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Scrollytelling Hero - Interactive Story */}
        <Hero />
        <ScrollToNext />

        {/* Traditional Sections - Lazy loaded */}
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Education />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Achievements />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Portfolio />
        </Suspense>
        <div id="portfolio-traditional" className="hidden"></div>

        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>

      <ScrollToTop />
      <AccessibilityHelper />
      <KeyboardShortcuts />
    </div>
  );
}

export default App;
