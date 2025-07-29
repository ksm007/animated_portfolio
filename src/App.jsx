import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        {/* Scrollytelling Hero - Interactive Story */}
        <Hero />

        {/* Traditional Sections */}
        <Experience />
        <Education />
        <Skills />
        <Achievements />

        <Portfolio />
        <div id="portfolio-traditional" className="hidden"></div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
