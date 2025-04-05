import React from 'react';
import {
  Hero,
  About,
  Projects,
  Skills,
  Contact,
  Navbar,
  Footer,
  CustomCursor,
  ScrollProgress,
  Background3D
} from './main';
import './styles.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <ScrollProgress />
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 