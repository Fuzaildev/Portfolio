import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with animations and responsive design.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Framer Motion", "CSS"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>My Projects</motion.h2>
          <motion.p variants={itemVariants} className="projects-description">
            Here are some of my recent projects. Each one represents a unique challenge
            and learning experience.
          </motion.p>

          <motion.div className="projects-grid" variants={containerVariants}>
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mobile-project-buttons">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="mobile-button live-button">
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mobile-button github-button">
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 