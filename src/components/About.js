import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with expertise in creating
              modern web applications. With a strong foundation in both front-end
              and back-end development, I strive to build scalable and user-friendly
              solutions that make a difference.
            </p>
            <p>
              My journey in web development started with a curiosity for creating
              things that people can interact with. Today, I specialize in React,
              Node.js, and modern web technologies, always staying up-to-date with
              the latest industry trends and best practices.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
          </motion.div>

          <motion.div className="about-skills" variants={itemVariants}>
            <h3>Core Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "90%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "85%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "95%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 