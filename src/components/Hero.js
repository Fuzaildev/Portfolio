import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
    "Creative Thinker"
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let timeoutId;

    const typeText = () => {
      if (currentIndex < texts[currentTextIndex].length) {
        currentText += texts[currentTextIndex][currentIndex];
        setDisplayText(currentText);
        currentIndex++;
        timeoutId = setTimeout(typeText, 100); // Adjust speed here (100ms per character)
      } else {
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          setIsTyping(true);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          currentIndex = 0;
          currentText = '';
          setDisplayText('');
        }, 2000); // Wait 2 seconds before changing text
      }
    };

    typeText();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentTextIndex]);

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <div className="text-container">
            <h2>I'm a</h2>
            <div className="changing-text">
              {displayText}
              <motion.span 
                className="cursor-thin"
                animate={{ opacity: isTyping ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >|</motion.span>
            </div>
          </div>
          <p>I create beautiful and functional web applications</p>
          <div className="hero-buttons">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="social-links"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 