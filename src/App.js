import React from 'react';
import Navbar from './components/Navbar-Fuzail';
import Hero from './components/Hero-Fuzail';
import About from './components/About-Fuzail';
import Projects from './components/Projects-Fuzail';
import Skills from './components/Skills-Fuzail';
import Contact from './components/Contact-Fuzail';
import Footer from './components/Footer-Fuzail';
import Background3D from './components/Background3D-Fuzail';
import CustomCursor from './components/CustomCursor-Fuzail';
import ScrollProgress from './components/ScrollProgress-Fuzail';
import './App-Fuzail.css';

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