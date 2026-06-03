import React from 'react';
import { Scroll, Award, Sparkles, Heart, Compass, GlassWater } from 'lucide-react';

const FEATURES = [
  {
    icon: Scroll,
    title: 'Authentic Telugu Recipes',
    desc: 'Heirloom formulas and cooking secrets passed down in royal and rural households of Andhra and Telangana.'
  },
  {
    icon: Award,
    title: 'Traditional Culinary Heritage',
    desc: 'Slow-cooking methods using clay pots and heavy brass vessels that unlock depth of flavor and nutrients.'
  },
  {
    icon: Sparkles,
    title: 'Premium Fine-Dining Ambience',
    desc: 'A meticulously designed space combining traditional Telugu architecture elements with luxurious modern design.'
  },
  {
    icon: Heart,
    title: 'Family-Friendly Hospitality',
    desc: 'Deeply ingrained hospitality reflecting the Telugu ethos of "Atithi Devo Bhava" — welcome guests as gods.'
  },
  {
    icon: Compass,
    title: 'Regional Signature Flavors',
    desc: 'Dishes sourced directly from the local micro-regions, capturing the absolute authenticity of local cooking.'
  },
  {
    icon: GlassWater,
    title: 'Thoughtfully Curated Experiences',
    desc: 'From custom thalis to private dining events, every meal is organized as an unforgettable cultural celebration.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding why-section">
      <div className="container">
        
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle" style={{ color: '#D8C0A8' }}>Why Aenugu</span>
          <h2>More Than Dining. A Cultural Experience.</h2>
          <div className="brass-divider">
            <span className="dot" style={{ backgroundColor: '#B58B4C' }}></span>
            <span className="dot-large" style={{ backgroundColor: '#B58B4C', borderColor: '#3A2418' }}></span>
            <span className="dot" style={{ backgroundColor: '#B58B4C' }}></span>
          </div>
          <p>
            We go beyond standard food templates to offer an immersive visual and sensory journey into the true heart of hospitality.
          </p>
        </div>

        <div className="why-grid">
          {FEATURES.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div 
                key={feat.title} 
                className="why-card reveal-on-scroll" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="why-card-icon">
                  <IconComponent size={24} />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
