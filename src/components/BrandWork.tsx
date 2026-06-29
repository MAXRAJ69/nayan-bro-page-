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
      link: "https://rog.asus.com/",
    },
    {
      title: "Monster Energy",
      logo: "/brands/monster.png",
      description: "Exclusive lifestyle content creation for Monster Energy India.",
      tags: ["Lifestyle", "Brand Deal", "Vlog"],
      link: "https://www.monsterenergy.com/",
      scale: 0.75,
    },
    {
      title: "Free Fire World Series",
      logo: "/brands/freefire.png",
      description: "Official streaming partner and tournament caster for FFWS.",
      tags: ["Esports", "Tournament", "Casting"],
      link: "https://ffws.garena.com/",
    },
    {
      title: "OnePlus",
      logo: "/brands/oneplus.png",
      description: "Mobile gaming performance testing and flagship device promotions.",
      tags: ["Mobile", "Review", "Sponsorship"],
      link: "https://www.oneplus.in/",
      scale: 0.75,
    },
    {
      title: "Oppo",
      logo: "/brands/oppo.jpg",
      description: "Partnered for mobile esports events and device showcases.",
      tags: ["Mobile", "Esports", "Sponsorship"],
      link: "https://www.oppo.com/",
      scale: 0.75,
    },
    {
      title: "Samsung",
      logo: "/brands/samsung.png",
      description: "Collaborative promotions for Samsung Galaxy gaming capabilities.",
      tags: ["Mobile", "Sponsorship", "Review"],
      link: "https://www.samsung.com/",
    },
    {
      title: "Vi (Vodafone Idea)",
      logo: "/brands/vi.jpg",
      description: "Official telecom partner ensuring seamless low-latency gaming streams.",
      tags: ["Telecom", "Sponsorship", "Connectivity"],
      link: "https://www.myvi.in/",
      scale: 0.85,
    },
    {
      title: "AMD",
      logo: "/brands/amd.png",
      description: "Powered by AMD processors for peak gaming and streaming performance.",
      tags: ["Hardware", "Sponsorship", "Performance"],
      link: "https://www.amd.com/",
      scale: 0.75,
    },
    {
      title: "Lenskart",
      logo: "/brands/lenskart.png",
      description: "Partnered for anti-glare gaming eyewear and lifestyle accessories.",
      tags: ["Lifestyle", "Eyewear", "Sponsorship"],
      link: "https://www.lenskart.com/",
    },
    {
      title: "Garena",
      logo: "/brands/garena.png",
      description: "Official community events and in-game collaborations for Free Fire.",
      tags: ["Gaming", "Publisher", "Events"],
      link: "https://www.garena.com/",
    },
    {
      title: "AORUS",
      logo: "/brands/aorus.png",
      description: "Premium gaming hardware sponsor for ultimate streaming setups.",
      tags: ["Hardware", "Sponsorship", "Setup"],
      link: "https://www.aorus.com/",
      scale: 0.75,
    },
    {
      title: "Indian Super Gaming League",
      logo: "/brands/isgl.png",
      description: "Official partner for the Indian Super Gaming League, participating in top-tier national esports tournaments.",
      tags: ["Esports", "Tournament", "League"],
      link: "https://isgl.in/",
      scale: 0.75,
    },
    {
      title: "Thums Up",
      logo: "/brands/thumsup.png",
      description: "Official energy and beverage partner for intense gaming sessions and live streams.",
      tags: ["Beverage", "Sponsorship", "Lifestyle"],
      link: "https://www.coca-colacompany.com/brands/thums-up",
      scale: 0.75,
    },
    {
      title: "Star Sports",
      logo: "/brands/starsports.png",
      description: "Official broadcasting partner for major esports tournaments and gaming events on national television.",
      tags: ["Broadcasting", "Television", "Esports"],
      link: "https://www.starsports.com/",
      scale: 0.75,
    },
    {
      title: "International Cricket Council",
      logo: "/brands/icc.png",
      description: "Promotional partnership for digital campaigns and content creation around major international cricket events.",
      tags: ["Sports", "Cricket", "Partnership"],
      link: "https://www.icc-cricket.com/",
      scale: 0.8,
    },
    {
      title: "Google Gemini",
      logo: "/brands/gemini.png",
      description: "Powered by Google Gemini for cutting-edge AI assistance, enhancing creative workflows and advanced productivity.",
      tags: ["AI", "Technology", "Partnership"],
      link: "https://gemini.google.com/",
      scale: 0.75,
    },
    {
      title: "BattleBucks",
      logo: "/brands/battlebucks.png",
      description: "Official partnership with BattleBucks for skill-based gaming competitions, tournaments, and exclusive community events.",
      tags: ["Gaming Platform", "Tournaments", "Esports"],
      link: "https://battlebucks.com/",
      scale: 1.8,
    },
    {
      title: "Acer",
      logo: "/brands/acer.png",
      description: "Official hardware partner providing high-performance gaming laptops, monitors, and cutting-edge esports gear.",
      tags: ["Hardware", "Laptop", "Sponsorship"],
      link: "https://www.acer.com/",
    },
    {
      title: "Alienware",
      logo: "/brands/alienware.png",
      description: "Premium hardware partnership featuring top-tier gaming setups, high-performance desktops, and elite esports gear.",
      tags: ["Hardware", "Sponsorship", "Setup"],
      link: "https://www.alienware.com/",
      scale: 1.8,
    },
    {
      title: "Zostel",
      logo: "/brands/zostel.png",
      description: "Official travel and accommodation partner for esports tournaments, bootcamp retreats, and content creation.",
      tags: ["Travel", "Accommodation", "Sponsorship"],
      link: "https://www.zostel.com/",
      scale: 0.65,
    },
    {
      title: "Esports World Cup",
      logo: "/brands/ewc.png",
      description: "Official competitive partner for the Esports World Cup, participating in massive global tournaments.",
      tags: ["Esports", "Global", "Tournament"],
      link: "https://esportsworldcup.com/",
      scale: 0.7,
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
            <img src={brand.logo} alt={brand.title} className="w-full h-full object-contain" style={{ transform: brand.scale ? `scale(${brand.scale})` : 'scale(1)' }} />
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
            <a href={brand.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full" aria-label="External Link">
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
