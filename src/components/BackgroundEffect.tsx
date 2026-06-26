"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Dynamic ambient cursor glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-red-600 hidden md:block"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1.5 }}
      />
      
      {/* Slow floating orb 1 */}
      <motion.div
        className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-purple-600"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Slow floating orb 2 */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 bg-red-800"
        animate={{
          x: [0, -100, 70, 0],
          y: [0, 70, -100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
