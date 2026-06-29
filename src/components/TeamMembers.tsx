

"use client";

import { motion } from "framer-motion";

export default function TeamMembers() {
  const team = [
    {
      name: "Nayan Shelke",
      role: "Founder & Leader",
      image: "/team/nayan-shelke.jpg",
      instagram: "https://www.instagram.com/assassinsarmy01/",
      youtube: "#",
      twitter: "#",
    },
    {
      name: "Huzaif Pathan",
      role: "Content Creator",
      image: "/team/huzaif-pathan.jpg",
      instagram: "https://www.instagram.com/_huzzai_/",
      youtube: "https://www.youtube.com/@asinarmy",
      twitter: "#",
    },
    {
      name: "Bhushan Shelke",
      role: "Content Creator",
      image: "/team/bhushan-shelke.jpg",
      instagram: "https://www.instagram.com/asin.bhushan/",
      youtube: "https://www.youtube.com/@CrazyOwlsOfficial",
      twitter: "#",
    },
    {
      name: "Rohan Patil",
      role: "Video Editor (Expert)",
      image: "/team/rohan-patil.jpg",
      instagram: "https://www.instagram.com/rohan.asin/",
      youtube: "https://www.youtube.com/@CrazyOwlsOfficial",
      twitter: "#",
    },
    {
      name: "Abhishek Sable",
      role: "Cinematographer",
      image: "/team/abhishek-sable.jpg",
      instagram: "https://www.instagram.com/abhisheksablefilms/",
      youtube: "https://www.youtube.com/@CrazyOwlsOfficial",
      twitter: "#",
    },
    {
      name: "Raj Wankhade",
      role: "Developer",
      image: "/team/raj.jpg",
      instagram: "https://www.instagram.com/rajwankhade_16/",
      youtube: "#",
      twitter: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" className="bg-[#121212]/80 backdrop-blur-md py-24 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2">The Squad</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Meet the <span className="text-red-600">Army</span>
            </h3>
          </div>
          <button className="self-start md:self-auto text-sm font-bold uppercase tracking-widest text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
            View All Members
          </button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/5 bg-[#1a1a1a]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider">{member.name}</h4>
                  <p className="text-red-500 text-sm font-semibold mb-4">{member.role}</p>
                  
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 items-center">
                    {member.instagram !== "#" && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      </a>
                    )}
                    {member.youtube !== "#" && (
                      <a href={member.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
