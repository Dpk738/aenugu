import React from 'react';
import heroElephantLeft from '../assets/hero_elephant_left.jpg';
import heroElephantRight from '../assets/hero_elephant_right.jpg';
import heroElephantMobileRight from '../assets/hero_elephant_mobile_right.jpg';

export default function Hero({ onOpenReservation, onExploreCuisine }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-pattern-overlay" />
      
      <div className="container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div className="hero-content">
          <span className="section-subtitle" style={{ color: '#D8C0A8', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Aenugu Fine Dining
          </span>
          
          <h1>Experience the Soul of Telugu Cuisine</h1>
          
          <p>
            Authentic Andhra and Telangana flavors reimagined through a refined fine-dining experience, 
            celebrating heritage, hospitality, and timeless culinary traditions.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={onOpenReservation}>
              Reserve a Table
            </button>
            <button className="btn-secondary" style={{ color: '#FFF', borderColor: '#FFF' }} onClick={onExploreCuisine}>
              Explore Our Cuisine
            </button>
          </div>
        </div>
      </div>

      <img 
        src={heroElephantLeft} 
        alt="Aenugu Golden Elephant Left Motif" 
        className="hero-elephant-left" 
      />

      <img 
        src={heroElephantRight} 
        alt="Aenugu Golden Elephant Right Motif" 
        className="hero-elephant-right" 
      />

      <img 
        src={heroElephantMobileRight} 
        alt="Aenugu Golden Elephant Mobile Right Motif" 
        className="hero-elephant-mobile-right" 
      />

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

