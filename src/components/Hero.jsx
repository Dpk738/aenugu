import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroElephantLeft from '../assets/hero_elephant_left.jpg';
import heroElephantRight from '../assets/hero_elephant_right.jpg';
import heroElephantMobileRight from '../assets/hero_elephant_mobile_right.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenReservation, onExploreCuisine }) {
  const heroRef = useRef(null);
  const leftElephantRef = useRef(null);
  const rightElephantRef = useRef(null);
  const mobileElephantRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Only apply scroll-linked translation when user allows motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Left elephant translates left-outward
        gsap.to(leftElephantRef.current, {
          x: -250,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        // Right elephant translates right-outward
        gsap.to(rightElephantRef.current, {
          x: 250,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        // Mobile right elephant translates right-outward
        gsap.to(mobileElephantRef.current, {
          x: 270,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
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
        ref={leftElephantRef}
      />

      <img 
        src={heroElephantRight} 
        alt="Aenugu Golden Elephant Right Motif" 
        className="hero-elephant-right" 
        ref={rightElephantRef}
      />

      <img 
        src={heroElephantMobileRight} 
        alt="Aenugu Golden Elephant Mobile Right Motif" 
        className="hero-elephant-mobile-right" 
        ref={mobileElephantRef}
      />

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

