import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, MapPin, User } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title text-gradient">Let's Work Together</h2>
        
        <div ref={ref} className="contact-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="contact-info glass"
          >
            <h3>Get In Touch</h3>
            <p>Invites fans and brands to connect for Free Fire expert tips, collaboration opportunities, or general networking.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><User /></div>
                <div>
                  <h4>Name</h4>
                  <p>Nayan Shelke</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><MapPin /></div>
                <div>
                  <h4>Address</h4>
                  <p>Ch. Sambhajinagar, Maharashtra</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><Mail /></div>
                <div>
                  <h4>Email</h4>
                  <p>infonaynaaa@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-form glass"
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} placeholder="Your Message"></textarea>
              </div>
              <button className="btn-primary form-submit">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
