import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import storyHeritage from '../assets/ChatGPT Image Jun 3, 2026, 10_57_35 PM.png';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const imageInnerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 1. Accessibility: Reduced Motion Preference
      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Image simple fade-in
        gsap.fromTo(imageInnerRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Text elements simple fade-in
        const elements = textRef.current.querySelectorAll(
          '.section-subtitle, h2, .brass-divider, .story-body-text, .heritage-callout'
        );
        elements.forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      });

      // 2. High-Performance Motion: Normal Scroll Animations
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        
        // Desktop Animations (min-width: 992px)
        mm.add("(min-width: 992px)", () => {
          // Scroll-linked scrubbed image entry
          gsap.fromTo(imageInnerRef.current,
            { y: 150, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom",
                end: "top 15vh",
                scrub: true
              }
            }
          );

          // Scroll-linked scrubbed text reveals
          const elements = textRef.current.querySelectorAll(
            '.section-subtitle, h2, .brass-divider, .story-body-text, .heritage-callout'
          );
          elements.forEach((el) => {
            gsap.fromTo(el,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  end: "top 70%",
                  scrub: true
                }
              }
            );
          });
        });

        // Mobile/Tablet Animations (max-width: 991px)
        mm.add("(max-width: 991px)", () => {
          // Scrubbed image entrance for stacked column
          gsap.fromTo(imageInnerRef.current,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top 90%",
                end: "top 70%",
                scrub: true
              }
            }
          );

          // Scrubbed reveal for stacked text elements
          const elements = textRef.current.querySelectorAll(
            '.section-subtitle, h2, .brass-divider, .story-body-text, .heritage-callout'
          );
          elements.forEach((el) => {
            gsap.fromTo(el,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 95%",
                  end: "top 80%",
                  scrub: true
                }
              }
            );
          });
        });

      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" className="section-padding" ref={sectionRef}>
      {/* Cinematic scroll transition breathing space buffer */}
      <div className="story-transition-buffer" />

      <div className="container">
        <div className="story-grid">
          
          {/* Story Text */}
          <div className="story-content" ref={textRef}>
            {/* Viewport-aware spacer to allow image to enter and pin before text begins */}
            <div className="story-content-spacer" />

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

          {/* Story Image (Sticky Container) */}
          <div className="story-visuals" ref={imageRef}>
            {/* Inner container to apply entrance transform animations without affecting sticky flow */}
            <div className="story-visuals-inner" ref={imageInnerRef}>
              <div className="story-image-container">
                <img 
                  src={storyHeritage} 
                  alt="Authentic Indian spices and heritage ingredients" 
                  className="story-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
