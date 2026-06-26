import React from 'react';
import './Brands.css';

const Brands: React.FC = () => {
  // Placeholder array for brand logos. In a real scenario, use actual brand images.
  const brands = [
    { name: 'Brand 1', logo: 'https://via.placeholder.com/200x80/222/fff?text=Brand+1' },
    { name: 'Brand 2', logo: 'https://via.placeholder.com/200x80/222/fff?text=Brand+2' },
    { name: 'Brand 3', logo: 'https://via.placeholder.com/200x80/222/fff?text=Brand+3' },
    { name: 'Brand 4', logo: 'https://via.placeholder.com/200x80/222/fff?text=Brand+4' },
    { name: 'Brand 5', logo: 'https://via.placeholder.com/200x80/222/fff?text=Brand+5' },
    { name: 'Brand 6', logo: 'https://via.placeholder.com/200x80/222/fff?text=Brand+6' },
  ];

  return (
    <section className="section brands-section">
      <div className="container">
        <h2 className="section-title text-gradient">Trusted By Top Brands</h2>
        
        <div className="marquee-container">
          <div className="marquee">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="brand-logo glass">
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
