import React, { useState } from 'react';
import { Maximize2, X, ArrowLeft, ArrowRight } from 'lucide-react';

import entryPortal from '../assets/architecture_entry.png';
import diningHall from '../assets/architecture_courtyard.png';
import woodenArtistry from '../assets/architecture_woodwork.png';
import brassElements from '../assets/architecture_brass.png';
import designBlueprint from '../assets/architecture_blueprint.png';
import heritageDetails from '../assets/architecture_details.png';
import architectureLighting from '../assets/architecture_lighting.png';
import architectureDecor from '../assets/architecture_decor.png';

const ARCHITECTURE_COLLAGE = [
  {
    id: 'entry-portal',
    title: 'The Entrance Portal',
    subtitle: 'A Sacred Threshold',
    desc: 'Inspired by the historic temples of the Kakatiya dynasty, our grand entry features intricate stone-style carving combined with warm, indirect contemporary lighting.',
    img: entryPortal
  },
  {
    id: 'dining-hall',
    title: 'Heritage Dining Courtyard',
    subtitle: 'The Heart of Gatherings',
    desc: 'Adorned with traditional brass hanging lamps and handcrafted wooden pillars, this double-height space replicates a classic Telugu open courtyard (Manduva Logili).',
    img: diningHall
  },
  {
    id: 'wooden-artistry',
    title: 'Ornate Wooden Artistry',
    subtitle: 'Carving Stories in Teak',
    desc: 'Our ceiling panels and support pillars are handcrafted by master artisans using premium teak wood, showcasing traditional floral and peacock motifs.',
    img: woodenArtistry
  },
  {
    id: 'brass-elements',
    title: 'Bespoke Brass Elements',
    subtitle: 'A Luminous Materiality',
    desc: 'Polished antique brass screen dividers segment our dining zones with geometric elegance, reflecting soft ambient light throughout the space.',
    img: brassElements
  },
  {
    id: 'design-blueprint',
    title: 'Architectural Blueprint',
    subtitle: 'Vastu & Spatial Flow',
    desc: 'Our conceptual blueprint details the alignment of the dining spaces with traditional Vastu Shastra principles, optimizing flow, light, and energy.',
    img: designBlueprint
  },
  {
    id: 'heritage-details',
    title: 'Heritage Craft Details',
    subtitle: 'Textures of Tradition',
    desc: 'Curated close-ups showcasing the detailed texture combinations of hand-finished plaster, chiseled stone borders, and antique metallic hardware accents.',
    img: heritageDetails
  },
  {
    id: 'architecture-lighting',
    title: 'Bespoke Heritage Lighting',
    subtitle: 'Warm Amber Illumination',
    desc: 'An array of custom hanging clay lamps and brass lights that wash the hand-chiseled stone walls and teak wood elements in a warm, welcoming golden glow.',
    img: architectureLighting
  },
  {
    id: 'architecture-decor',
    title: 'Terracotta & Stone Decor',
    subtitle: 'Earth & Artistry',
    desc: 'Handcrafted relief sculptures and decorative terracotta panels that sit flush with natural stone masonry, bringing local design stories to life.',
    img: architectureDecor
  }
];

export default function Architecture() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? ARCHITECTURE_COLLAGE.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === ARCHITECTURE_COLLAGE.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="architecture" className="section-padding architecture-section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">Heritage Showcase</span>
          <h2>The Architecture of Aenugu</h2>
          <div className="brass-divider">
            <span className="dot"></span>
            <span className="dot-large"></span>
            <span className="dot"></span>
          </div>
          <p>
            An architectural tribute to the rich cultural legacy of the Telugu lands. 
            Crafted with native materials—carved wood, antique brass, and stone—every corner 
            of our space weaves a physical story of heritage and luxury. Explore the details below.
          </p>
        </div>

        {/* Masonry Collage Grid - No Cropping */}
        <div className="architecture-collage-grid reveal-on-scroll">
          {ARCHITECTURE_COLLAGE.map((item, index) => (
            <div key={item.id} className="architecture-collage-card" onClick={() => openLightbox(index)}>
              <div className="architecture-collage-image-container">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="architecture-collage-img" 
                  loading="lazy"
                />
                <div className="architecture-collage-overlay">
                  <Maximize2 className="zoom-icon" size={24} style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }} />
                  <h4>{item.title}</h4>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Premium Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay open" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close photo overlay">
            <X size={32} />
          </button>
          
          <button className="lightbox-arrow left" onClick={showPrev} aria-label="Previous photo">
            <ArrowLeft size={24} />
          </button>
          
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <img 
              src={ARCHITECTURE_COLLAGE[lightboxIndex].img} 
              alt={ARCHITECTURE_COLLAGE[lightboxIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">
              {ARCHITECTURE_COLLAGE[lightboxIndex].title} - <span style={{ color: '#B58B4C', fontSize: '1.1rem' }}>{ARCHITECTURE_COLLAGE[lightboxIndex].subtitle}</span>
              <p style={{ color: '#D8C0A8', fontSize: '0.95rem', marginTop: '0.5rem', fontWeight: '300', fontFamily: 'var(--font-body)' }}>
                {ARCHITECTURE_COLLAGE[lightboxIndex].desc}
              </p>
            </div>
          </div>
          
          <button className="lightbox-arrow right" onClick={showNext} aria-label="Next photo">
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
