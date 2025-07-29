import { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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

function App() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        {/* Scrollytelling Hero - Interactive Story */}
        <Hero />

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
    </div>
  );
}

export default App;
