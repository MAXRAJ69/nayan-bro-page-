import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

interface Photo {
  id: number;
  url: string;
  category: 'all' | 'event';
  title: string;
}

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'event'>('all');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const photos: Photo[] = [
    { id: 1, url: 'https://www.instagram.com/p/DZW9ZBACGLl/?img_index=1', category: 'all', title: 'Gameplay Highlight' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop', category: 'event', title: 'Esports Tournament 2025' },
    { id: 3, url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop', category: 'all', title: 'Setup Tour' },
    { id: 4, url: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop', category: 'event', title: 'Fan Meetup Mumbai' },
    { id: 5, url: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop', category: 'all', title: 'Behind the Scenes' },
    { id: 6, url: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=2071&auto=format&fit=crop', category: 'event', title: 'Award Ceremony' },
  ];

  const filteredPhotos = activeTab === 'all' ? photos : photos.filter(p => p.category === activeTab);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title text-gradient">Gallery</h2>

        <div className="gallery-tabs">
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Photos
          </button>
          <button
            className={`tab-btn ${activeTab === 'event' ? 'active' : ''}`}
            onClick={() => setActiveTab('event')}
          >
            Events
          </button>
        </div>

        <motion.div
          ref={ref}
          className="gallery-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="gallery-item glass"
              >
                <img src={photo.url} alt={photo.title} />
                <div className="gallery-overlay">
                  <h3>{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
