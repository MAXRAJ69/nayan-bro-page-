import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Video } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Nayan Shelke',
      role: 'Founder & Creator',
      image: 'https://images.unsplash.com/photo-1566492031525-8782bd28b1e4?q=80&w=2000&auto=format&fit=crop', // Placeholder
    },
    {
      name: 'HuzaiAsin',
      role: 'Core Member & Gamer',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000&auto=format&fit=crop', // Placeholder
    },
    {
      name: 'Team Member 3',
      role: 'Content Strategist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop', // Placeholder
    }
  ];

  return (
    <section className="section team-section" id="team">
      <div className="container">
        <h2 className="section-title text-gradient">The Assassins</h2>
        
        <div ref={ref} className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="team-card glass"
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-socials">
                  <a href="#" className="social-icon"><Video size={20} /></a>
                  <a href="#" className="social-icon"><Camera size={20} /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
