import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Cuisine from './components/Cuisine';
import WhyChooseUs from './components/WhyChooseUs';
import Architecture from './components/Architecture';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import ReservationModal from './components/ReservationModal';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  // Initialize Lenis smooth scrolling globally
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices/mobile
    });

    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const gsapTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      window.lenis = null;
      gsap.ticker.remove(gsapTicker);
    };
  }, []);

  const exploreCuisine = () => {
    const cuisineSection = document.getElementById('cuisine');
    if (cuisineSection) {
      if (window.lenis) {
        window.lenis.scrollTo(cuisineSection, { offset: -70 });
      } else {
        const headerOffset = 70;
        const elementPosition = cuisineSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const contactUs = () => {
    const locationSection = document.getElementById('location');
    if (locationSection) {
      if (window.lenis) {
        window.lenis.scrollTo(locationSection, { offset: -70 });
      } else {
        const headerOffset = 70;
        const elementPosition = locationSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Scroll Reveal Observer
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Once revealed, we don't need to observe it anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it enters the full screen
      }
    );

    reveals.forEach((el) => observer.observe(el));
    
    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Premium Sticky Navigation */}
      <Header onOpenReservation={openReservation} />

      {/* Cinematic Hero */}
      <Hero onOpenReservation={openReservation} onExploreCuisine={exploreCuisine} />

      {/* Editorial Story */}
      <Story />

      {/* Interactive Cuisine Menu */}
      <Cuisine />

      {/* Dark Value Proposition Grid */}
      <WhyChooseUs />

      {/* Heritage Architecture Showcase */}
      <Architecture />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Large Premium Booking Banner CTA */}
      <section className="section-padding reservation-banner">
        <div className="container reservation-banner-content reveal-on-scroll">
          <span className="section-subtitle" style={{ color: '#D8C0A8' }}>Reserve A Table</span>
          <h2>Reserve Your Table for an Authentic Telugu Dining Experience</h2>
          <div className="brass-divider" style={{ margin: '1.5rem auto 2.5rem' }}>
            <span className="dot" style={{ backgroundColor: '#B58B4C' }}></span>
            <span className="dot-large" style={{ backgroundColor: '#B58B4C', borderColor: '#3A2418' }}></span>
            <span className="dot" style={{ backgroundColor: '#B58B4C' }}></span>
          </div>
          <p>
            Experience the richness of Telugu heritage through flavors crafted with care and served with warmth. 
            Select your preferred time slot and let us curate a memorable dining experience for you.
          </p>
          <div className="reservation-banner-ctas">
            <button className="btn-primary" onClick={openReservation}>
              Reserve Now
            </button>
            <button className="btn-secondary" onClick={contactUs}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Location Details & SVG Map */}
      <Location />

      {/* Brand Footer */}
      <Footer onOpenReservation={openReservation} />

      {/* Reservation Form Modal overlay */}
      <ReservationModal isOpen={isReservationOpen} onClose={closeReservation} />
    </>
  );
}

export default App;
