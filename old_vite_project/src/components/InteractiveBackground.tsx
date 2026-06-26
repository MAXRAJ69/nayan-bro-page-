import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      <motion.div
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, rgba(255, 0, 0, 0) 70%)',
          position: 'absolute',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Slow moving background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 0, 0, 0.4) 0%, transparent 60%)',
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(40, 0, 0, 0.2) 0%, transparent 60%)',
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
