import { useState } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const TOTAL_SECTIONS = 6; // home + about + experience + projects + skills + contact

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-ink">
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <SmoothScroll enabled={loaded}>
        <div
          className={`transition-all duration-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <Navbar />

          <main>
            {/* Hero stays pinned while the About panel rises up to cover it */}
            <div className="relative">
              <div className="sticky top-0 z-0 h-[100svh] overflow-hidden">
                <Hero />
              </div>

              <About index={2} total={TOTAL_SECTIONS} />
            </div>

            <Experience index={3} total={TOTAL_SECTIONS} />

            {/* Projects stays pinned; Skills rises over it on scroll */}
            <div className="relative">
              <Projects index={4} total={TOTAL_SECTIONS} />
              <Skills index={5} total={TOTAL_SECTIONS} />
            </div>

            <Contact index={6} total={TOTAL_SECTIONS} />
          </main>
        </div>
      </SmoothScroll>
    </div>
  );
}

export default App;
