import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Stats from './components/Stats';
import PageTransition from './components/PageTransition';
import ScrollAnimation from './components/ScrollAnimation';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <PageTransition>
      <div className="App">
        {/* Temporarily removed Background3D */}
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <ScrollAnimation>
            <Stats />
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <About />
          </ScrollAnimation>
          <ScrollAnimation delay={0.3}>
            <Projects />
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <Skills />
          </ScrollAnimation>
          <ScrollAnimation delay={0.5}>
            <Contact />
          </ScrollAnimation>
        </main>
        <Footer />
        {/* Floating theme toggle button for mobile */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle light & dark">
          <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <mask className="moon" id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle cx="24" cy="10" r="6" fill="black" />
            </mask>
            <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
            <g className="sun-beams" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </button>
      </div>
    </PageTransition>
  );
}

export default App; 