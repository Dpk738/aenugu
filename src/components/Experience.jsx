import React from 'react';
import familyDining from '../assets/family_dining.png';
import coupleDining from '../assets/couple_dining.png';

const EXPERIENCES = [
  {
    title: 'Family Celebrations',
    desc: 'Grand banquet seating, custom thali platters, and sharing dishes designed to unite families over shared heritage.',
    img: familyDining
  },
  {
    title: 'Couple Dining',
    desc: 'Intimate corner booths, ambient lighting, and bespoke tasting menus designed for a romantic journey.',
    img: coupleDining
  },
  {
    title: 'Corporate Gatherings',
    desc: 'Sophisticated private rooms equipped with seamless service to host business dinners and executive meetings.',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Special Occasions',
    desc: 'Whether milestones or anniversaries, we curate personalized menus and decor setups to match your celebration.',
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Cultural Dining',
    desc: 'Traditional satvik or royal feasts served on copper plates with narrations of regional food origin folklore.',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop'
  }
];

export default function Experience({ onOpenReservation }) {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">Fine-Dining Atmosphere</span>
          <h2>Designed for Meaningful Gatherings</h2>
          <div className="brass-divider">
            <span className="dot"></span>
            <span className="dot-large"></span>
            <span className="dot"></span>
          </div>
          <p>
            Whether it is an intimate date or a large family milestone, our restaurant spaces are curated 
            to elevate your gatherings with warmth and luxury.
          </p>
        </div>

        <div className="experience-grid reveal-on-scroll">
          {EXPERIENCES.map((exp) => (
            <div key={exp.title} className="experience-card" onClick={onOpenReservation}>
              <div 
                className="experience-card-bg" 
                style={{ backgroundImage: `url(${exp.img})` }}
              />
              <div className="experience-card-overlay" />
              <div className="experience-card-content">
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
