"use client";

import { PlayCircle, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

export default function MoreChannels() {
  const channels = [
    {
      name: "Assassins Army",
      subs: "13.4M+",
      icon: <img src="/channels/aa.jpg" alt="Assassins Army" className="w-full h-full rounded-full object-cover shadow-lg" />,
      color: "from-blue-500 to-blue-700",
      link: "https://www.youtube.com/@AssassinsARMY",
    },
    {
      name: "Nayan Vlogs",
      subs: "543K+",
      icon: <img src="/channels/nv.jpg" alt="Nayan Vlogs" className="w-full h-full rounded-full object-cover shadow-lg" />,
      color: "from-red-500 to-red-700",
      link: "https://www.youtube.com/@NayanShelkevlogs",
    },
    {
      name: "Assassins Gamers",
      subs: "418K+",
      icon: <img src="/channels/ag.jpg" alt="Assassins Gamers" className="w-full h-full rounded-full object-cover shadow-lg" />,
      color: "from-purple-500 to-purple-700",
      link: "https://www.youtube.com/@AssassinGaminghuzzai",
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="channels" className="bg-[#0a0a0a]/80 backdrop-blur-md py-24 px-6 md:px-12 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            More from <span className="text-red-600">Nayan</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore the multiverse of Assassins Army content across our specialized channels.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {channels.map((channel, idx) => (
            <motion.a
              key={idx}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-[#121212] rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 3 }}
                className={`w-40 h-40 rounded-full bg-gradient-to-br ${channel.color} flex items-center justify-center text-white mb-8 shadow-2xl transform group-hover:scale-110 transition-transform duration-300 p-1`}
              >
                {channel.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">{channel.name}</h3>
              <p className="text-gray-400 font-medium mb-6">{channel.subs} Subscribers</p>
              
              <div className="mt-auto">
                <span className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                  Visit Channel <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
