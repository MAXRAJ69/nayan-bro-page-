import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Eye, Trophy } from 'lucide-react';
import './Stats.css';

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section stats-section" id="stats">
      <div className="container">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="stats-grid"
        >
          <motion.div variants={itemVariants} className="stat-card glass">
            <div className="stat-icon"><Users size={48} /></div>
            <h3 className="stat-value text-gradient">13.4M+</h3>
            <p className="stat-label">Subscribers</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="stat-card glass">
            <div className="stat-icon"><Eye size={48} /></div>
            <h3 className="stat-value text-gradient">2.2B+</h3>
            <p className="stat-label">Total Views</p>
          </motion.div>

          <motion.div variants={itemVariants} className="stat-card glass">
            <div className="stat-icon"><Trophy size={48} /></div>
            <h3 className="stat-value text-gradient">Top</h3>
            <p className="stat-label">Gaming Creator</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
