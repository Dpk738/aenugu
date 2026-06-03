import React, { useEffect, useRef } from 'react';
import namasteStatue from '../assets/namaste_statue.png';

export default function Story() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate total sticky scroll range
      const totalScrollRange = rect.height - windowHeight;
      if (totalScrollRange <= 0) return;
      
      // Calculate progress while sticky (0 when pinned at top, 1 when unpins at bottom)
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollRange));
      
      const parentVisuals = imageRef.current.parentElement;
      if (!parentVisuals) return;
      
      const parentRect = parentVisuals.getBoundingClientRect();
      const L = parentRect.left;
      const W = window.innerWidth;
      const distanceToRightEdge = W - L;

      let translateX = distanceToRightEdge;

      if (rect.top > 0) {
        // Before section pins, keep image completely off-screen on the right
        translateX = distanceToRightEdge;
      } else if (rect.bottom < windowHeight) {
        // After section unpins, keep image completely off-screen on the right
        translateX = distanceToRightEdge;
      } else {
        // Pinned/sticky phase
        if (progress < 0.5) {
          // Entering: progress 0 to 0.5 maps to t 0 to 1
          const t = progress / 0.5;
          const easedT = 1 - Math.pow(1 - t, 3); // ease-out cubic
          translateX = distanceToRightEdge * (1 - easedT);
        } else {
          // Exiting: progress 0.5 to 1.0 maps to t 0 to 1
          const t = (progress - 0.5) / 0.5;
          const easedT = Math.pow(t, 3); // ease-in cubic
          translateX = distanceToRightEdge * easedT;
        }
      }
      
      imageRef.current.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initially
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="story" className="story-section" ref={sectionRef}>
      <div className="story-sticky-wrapper">
        <div className="container">
          <div className="story-grid reveal-on-scroll">
            
            {/* Story Text */}
            <div className="story-content">
              <span className="section-subtitle">Our Heritage</span>
              <h2>Where Tradition Finds Its Place at the Table</h2>
              <div className="brass-divider" style={{ margin: '1rem 0 2rem' }}>
                <span className="dot"></span>
                <span className="dot-large"></span>
                <span className="dot"></span>
              </div>
              
              <p className="story-body-text">
                Aenugu is born from a desire to celebrate the rich culinary inheritance of the Telugu states. 
                Our name symbolizes strength, grace, and heritage — values that define the traditional households of 
                Andhra Pradesh and Telangana. By blending ancestral cooking secrets with contemporary fine-dining presentation, 
                we pay homage to the deep roots of our culinary past.
              </p>
              <p className="story-body-text">
                Every dish at Aenugu is a narrative of regional migration, trade, and local cultivation. We source heirloom spices, 
                cold-pressed oils, and farm-fresh ingredients to recreate the exact flavor profiles passed down through generations, 
                bringing them to a setting of modern luxury and warm, attentive hospitality.
              </p>

              {/* Andhra and Telangana Heritage highlights */}
              <div className="story-heritage-callouts">
                <div className="heritage-callout">
                  <h4>The Fiery Spirit of Andhra</h4>
                  <p>Representing the rich coastal delta, featuring robust Guntur chillies, tangy Gongura leaves, fresh seafood elements, and slow-roasted spice blends.</p>
                </div>
                <div className="heritage-callout">
                  <h4>The Earthy Richness of Telangana</h4>
                  <p>Reflecting the rugged Deccan plateau, centered around rustic millets, wild sesame, nutty tamarind gravies, and aromatic dry-cured meats.</p>
                </div>
                <div className="heritage-callout">
                  <h4>Traditional Clay & Brass Cooking</h4>
                  <p>Reclaiming the authentic textures and aroma of slow-cooked food using earthenware pots and cast-iron brass vessels, preserving natural flavors.</p>
                </div>
              </div>
            </div>

            {/* Story Image */}
            <div className="story-visuals" style={{ overflow: 'hidden' }}>
              <img 
                ref={imageRef}
                src={namasteStatue} 
                alt="Namaste Greeting Heritage Statue Motif" 
                className="story-img"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
