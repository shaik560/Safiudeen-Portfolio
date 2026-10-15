import { useScrollState } from "./hooks/useScrollState";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  const { isScrolled, showBackToTop, activeSection } = useScrollState();

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <Header isScrolled={isScrolled} activeSection={activeSection} />
      <Hero />
      <About />
      <Skillset />
      <Projects />
      <Experience />
      <Contact />
      <a
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        href="#home"
        aria-label="Back to top"
      >
        ↑
      </a>
    </main>
  );
}
