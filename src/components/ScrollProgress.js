import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`scroll-progress ${isVisible ? 'visible' : ''}`}
      style={{ scaleX }}
    >
      <div className="progress-content">
        <span className="progress-text">Scroll Progress</span>
        <motion.div
          className="progress-bar"
          style={{ scaleX }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollProgress; 