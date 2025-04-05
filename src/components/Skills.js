import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 95 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'Database', icon: <FaDatabase />, level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>Skills & Expertise</motion.h2>
          <motion.p variants={itemVariants} className="skills-description">
            Here are my technical skills and areas of expertise.
          </motion.p>

          <motion.div className="skills-grid" variants={containerVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 