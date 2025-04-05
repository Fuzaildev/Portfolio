import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background3D />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 