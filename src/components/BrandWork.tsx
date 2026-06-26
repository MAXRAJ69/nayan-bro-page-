"use client";

import { ExternalLink } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent as ReactMouseEvent } from "react";

export default function BrandWork() {
  const brands = [
    {
      title: "ROG Asus",
      logo: "/brands/rog.png",
      description: "Official brand ambassador and campaign promotion.",
      tags: ["Gaming Laptop", "Sponsorship", "Event"],
      link: "#",
    },

    {
      title: "Monster Energy",
      logo: "/brands/monster.png",
      description: "Exclusive lifestyle content creation for Monster Energy India.",
      tags: ["Lifestyle", "Brand Deal", "Vlog"],
      link: "#",
    },

    {
      title: "Free Fire World Series",
      logo: "/brands/freefire.png",
      description: "Official streaming partner and tournament caster for FFWS.",
      tags: ["Esports", "Tournament", "Casting"],
      link: "#",
    },
    {
      title: "OnePlus",
      logo: "/brands/oneplus.png",
      description: "Mobile gaming performance testing and flagship device promotions.",
      tags: ["Mobile", "Review", "Sponsorship"],
      link: "#",
    },
    {
      title: "Oppo",
      logo: "/brands/oppo.jpg",
      description: "Partnered for mobile esports events and device showcases.",
      tags: ["Mobile", "Esports", "Sponsorship"],
      link: "#",
    },
    {
      title: "Samsung",
      logo: "/brands/samsung.png",
      description: "Collaborative promotions for Samsung Galaxy gaming capabilities.",
      tags: ["Mobile", "Sponsorship", "Review"],
      link: "#",
    },
    {
      title: "Vi (Vodafone Idea)",
      logo: "/brands/vi.jpg",
      description: "Official telecom partner ensuring seamless low-latency gaming streams.",
      tags: ["Telecom", "Sponsorship", "Connectivity"],
      link: "#",
    },
    {
      title: "AMD",
      logo: "/brands/amd.png",
      description: "Powered by AMD processors for peak gaming and streaming performance.",
      tags: ["Hardware", "Sponsorship", "Performance"],
      link: "#",
    },
    {
      title: "Lenskart",
      logo: "/brands/lenskart.png",
      description: "Partnered for anti-glare gaming eyewear and lifestyle accessories.",
      tags: ["Lifestyle", "Eyewear", "Sponsorship"],
      link: "#",
    },
    {
      title: "Garena",
      logo: "/brands/garena.png",
      description: "Official community events and in-game collaborations for Free Fire.",
      tags: ["Gaming", "Publisher", "Events"],
      link: "#",
    },
    {
      title: "AORUS",
      logo: "/brands/aorus.png",
      description: "Premium gaming hardware sponsor for ultimate streaming setups.",
      tags: ["Hardware", "Sponsorship", "Setup"],
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="brands" className="bg-[#0a0a0a]/80 backdrop-blur-md py-24 px-6 md:px-12 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter uppercase"
        >
          Brand <span className="text-red-600">Collaborations</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {brands.map((brand, idx) => (
            <BrandCard key={idx} brand={brand} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BrandCard({ brand, variants }: { brand: any; variants: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Dynamic Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(220, 38, 38, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/20 p-2 shadow-inner"
          >
            <img src={brand.logo} alt={brand.title} className="w-full h-full object-contain" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">
            {brand.title}
          </h3>
        </div>
        <p className="text-gray-400 mb-8 flex-grow">
          {brand.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-2 flex-wrap">
            {brand.tags.map((tag: string, tIdx: number) => (
              <span
                key={tIdx}
                className="text-xs font-bold uppercase tracking-wider text-gray-300 bg-white/10 px-3 py-1 rounded-full group-hover:bg-red-500/20 group-hover:text-red-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <motion.div 
            whileHover={{ x: 5, rotate: -15 }}
            className="flex gap-3 text-gray-400"
          >
            <a href={brand.link} className="text-white hover:text-red-500 transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full" aria-label="External Link">
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
