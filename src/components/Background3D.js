import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './Background3D.css';

const Background3D = () => {
  const containerRef = useRef();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const container = containerRef.current;
      if (!container) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // Create particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 5000;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#ffffff',
        transparent: true,
        opacity: 0.8,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      camera.position.z = 2;

      // Animation
      const animate = () => {
        if (!container) return;
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.001;
        renderer.render(scene, camera);
      };

      animate();
      setIsInitialized(true);

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (container && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        particlesGeometry.dispose();
        particlesMaterial.dispose();
      };
    } catch (error) {
      console.error('Error initializing 3D background:', error);
      setIsInitialized(true); // Set to true even on error to allow other components to render
    }
  }, []);

  return <div ref={containerRef} className="background-3d" style={{ opacity: isInitialized ? 1 : 0 }} />;
};

export default Background3D; 