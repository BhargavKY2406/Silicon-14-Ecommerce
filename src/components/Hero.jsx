import React, { useContext } from 'react';
import { UIContext } from '../context/UIContext';

const Hero = () => {
  const { scrollToSection } = useContext(UIContext);

  return (
    <div>
            {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">The 14th Element of Tech</p>
          <h1 className="hero-title">
            Power Your
            <br />
            <span className="hero-highlight">Performance.</span>
          </h1>
          <p className="hero-description">
            Welcome to Silicon-14. Step into the next era of tech. Discover a curated lineup of premium electronics and smart gadgets engineered to power your digital life.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={(e) => scrollToSection(e, 'products')}>Explore</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Premium Components</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Tech Support</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
