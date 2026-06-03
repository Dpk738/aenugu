import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Header({ onOpenReservation }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = isSticky ? 70 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`header-wrapper ${isSticky ? 'sticky' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, 'hero')} className="logo-container">
            <img 
              src="/logo.png" 
              alt="Aenugu The Telugu Cuisine" 
              className="logo-graphic"
            />
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links">
              <li className="nav-item"><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
              <li className="nav-item"><a href="#story" onClick={(e) => handleNavClick(e, 'story')}>Our Story</a></li>
              <li className="nav-item"><a href="#cuisine" onClick={(e) => handleNavClick(e, 'cuisine')}>Cuisine</a></li>
              <li className="nav-item"><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
              <li className="nav-item"><a href="#architecture" onClick={(e) => handleNavClick(e, 'architecture')}>Architecture</a></li>
              <li className="nav-item"><a href="#location" onClick={(e) => handleNavClick(e, 'location')}>Contact</a></li>
            </ul>
          </nav>

          {/* Reserve CTA */}
          <div className="header-cta">
            <button className="btn-primary" onClick={onOpenReservation}>
              <Calendar size={14} style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }} />
              Reserve Table
            </button>
          </div>

          {/* Hamburger Menu Mobile Button */}
          <button className="mobile-menu-btn" onClick={toggleDrawer} aria-label="Open navigation menu">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img 
            src="/logo.png" 
            alt="Aenugu The Telugu Cuisine" 
            style={{ height: '54px', width: 'auto' }} 
          />
          <button className="mobile-drawer-close" onClick={toggleDrawer} aria-label="Close navigation menu">
            <X size={28} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li className="mobile-nav-item">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#story" onClick={(e) => handleNavClick(e, 'story')}>Our Story</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#cuisine" onClick={(e) => handleNavClick(e, 'cuisine')}>Cuisine</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#architecture" onClick={(e) => handleNavClick(e, 'architecture')}>Architecture</a>
          </li>
          <li className="mobile-nav-item">
            <a href="#location" onClick={(e) => handleNavClick(e, 'location')}>Contact</a>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <button className="btn-primary" style={{ width: '100%' }} onClick={() => { toggleDrawer(); onOpenReservation(); }}>
            Reserve Table
          </button>
        </div>
      </div>
    </>
  );
}
