import React, { type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PlayCircle, Video } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const textX = useTransform(mouseXSpring, [-0.5, 0.5], [-40, 40]);
  const textY = useTransform(mouseYSpring, [-0.5, 0.5], [-40, 40]);
  
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);
  
  const floatX = useTransform(mouseXSpring, [-0.5, 0.5], [-80, 80]);
  const floatY = useTransform(mouseYSpring, [-0.5, 0.5], [-80, 80]);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      className="hero-section" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="hero-background"
        style={{ x: bgX, y: bgY, scale: 1.05 }}
      >
        <div className="gradient-overlay"></div>
        {/* Placeholder for actual background image/video */}
        <div className="hero-video-placeholder"></div>
      </motion.div>
      
      <div className="container hero-content">
        <motion.div 
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-text"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glow-text text-gradient glitch-hover"
            data-text="ASSASSINS ARMY"
          >
            ASSASSINS ARMY
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            NAYAN SHELKE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hero-subtitle"
          >
            Gamer | Creator | Entertainer
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hero-buttons"
          >
            <a href="https://www.youtube.com/@AssassinsARMY" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Video className="icon" /> Watch Latest
            </a>
            <a href="#about" className="btn-secondary glass">
              <PlayCircle className="icon" /> Discover More
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="floating-elements animate-float"
        style={{ x: floatX, y: floatY }}
      >
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
