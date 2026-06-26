
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Brands from './components/Brands';
import Team from './components/Team';
import Header from './components/Header';
import OtherChannels from './components/OtherChannels';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <InteractiveBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Hero />
        <Stats />
        <About />
        <Brands />
        <Team />
        <OtherChannels />
        <Gallery />
        <Contact />
        
        <footer style={{ textAlign: 'center', padding: '30px 0', borderTop: '1px solid var(--surface-border)', background: 'var(--bg-color)', position: 'relative', zIndex: 10 }}>
          <p style={{ color: 'var(--text-secondary)' }}>&copy; 2026 Assassins Army - All rights reserved.</p>
          <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginTop: '10px' }}>Created by Maxraj .</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
