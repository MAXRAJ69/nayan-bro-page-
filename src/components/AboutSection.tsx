"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export default function AboutSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="about" className="bg-[#121212]/80 backdrop-blur-md py-24 px-6 md:px-12 relative z-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full relative"
          style={{ perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Subtle glow behind the image placeholder */}
          <motion.div 
            className="absolute -inset-8 bg-red-600/30 blur-3xl rounded-full"
            style={{ rotateX, rotateY }}
          />
          
          <motion.div 
            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.15)]"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            {/* Real image of Nayan */}
            <div className="absolute inset-0 bg-[url('/about/nayan.jpg')] bg-cover bg-center opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-8 left-8 text-white font-black text-3xl drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)] tracking-widest uppercase"
              style={{ transform: "translateZ(50px)" }}
            >
              Nayan <span className="text-red-500">Shelke</span>
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
          className="flex-1 space-y-8 relative"
        >
          {/* Decorative side accent */}
          <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-transparent opacity-20 hidden md:block" />

          <motion.div>
            <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-red-500 block" />
              The Origin
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
              Forging the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Assassins Army</span>
            </h3>
          </motion.div>
          
          <motion.div className="space-y-4 text-gray-400 text-lg leading-relaxed border-l border-white/5 pl-4">
            <p>
              I am Nayan Shelke, a passionate gamer, content creator, and the founder of Assassins Army. What started as a small dream in a bedroom setup has evolved into one of the most dedicated gaming communities on YouTube.
            </p>
            <p>
              My journey is fueled by the thrill of competitive gaming, entertaining millions, and building a family of loyal supporters. We don't just play games; we create unforgettable digital experiences.
            </p>
            <p className="text-white font-medium italic text-xl mt-6 border-l-4 border-red-600 pl-4 py-2 bg-gradient-to-r from-red-600/10 to-transparent">
              "We rise together, we conquer together."
            </p>
          </motion.div>

          <motion.div className="pt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="https://www.youtube.com/@AssassinsARMY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join the Army
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
