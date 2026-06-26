import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title text-gradient">About Us</h2>
        
        <div ref={ref} className="about-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="about-image-wrapper"
          >
            {/* Placeholder for Nayan's picture */}
            <div className="about-image glass">
              <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop" alt="Nayan Shelke - Assassins ARMY" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-text glass"
          >
            <h3>The Journey of a Champion</h3>
            <p>
              I'm <strong>Nayan Shelke</strong>, the creator behind <strong>Assassins ARMY</strong>. What started as a passion for gaming has grown into a community of over 13.4 million dedicated subscribers. 
            </p>
            <p>
              Known primarily for Free Fire gameplay, esports highlights, and entertaining pranks, I strive to bring high-quality, engaging content to my audience every single day. The "Assassins" aren't just fans; they are a family.
            </p>
            <p>
              Whether it's leading my guild to victory, exploring behind-the-scenes moments on my vlog channel, or collaborating with incredible brands and fellow creators, the journey has just begun. 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
