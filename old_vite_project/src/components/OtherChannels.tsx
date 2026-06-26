import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';
import './OtherChannels.css';

const OtherChannels: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const channels = [
    {
      name: 'Nayan Shelke Vlogs',
      subs: '1M+',
      desc: 'Behind the scenes, daily life, and exclusive vlogs.',
      link: 'https://www.youtube.com/@NayanShelkeVlogs',
      image: 'https://images.unsplash.com/photo-1516280440503-6c8413c6e944?q=80&w=2000&auto=format&fit=crop'
    },
    {
      name: 'Assassins Gaming',
      subs: '500K+',
      desc: 'Pure gameplay, live streams, and esports action.',
      link: '#',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Asin Army',
      subs: '300K+',
      desc: 'More fun, challenges, and community games.',
      link: '#',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section className="section channels-section" id="channels">
      <div className="container">
        <h2 className="section-title text-gradient">Explore More Channels</h2>
        
        <div ref={ref} className="channels-grid">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="channel-card glass"
            >
              <div className="channel-image" style={{ backgroundImage: `url(${channel.image})` }}>
                <div className="channel-overlay">
                  <a href={channel.link} target="_blank" rel="noopener noreferrer" className="play-btn">
                    <Play size={24} fill="currentColor" />
                  </a>
                </div>
              </div>
              <div className="channel-info">
                <h3>{channel.name}</h3>
                <p className="channel-subs">{channel.subs} Subscribers</p>
                <p className="channel-desc">{channel.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherChannels;
