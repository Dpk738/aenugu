import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenReservation }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand info */}
          <div className="footer-brand">
            <div className="footer-logo-box">
              <img 
                src="/logo.png" 
                alt="Aenugu The Telugu Cuisine" 
                style={{ height: '72px', width: 'auto' }} 
              />
            </div>
            <p>
              An award-winning Telugu fine-dining destination in Hyderabad celebrating the rich, 
              spicy, and authentic culinary heritage of Andhra and Telangana.
            </p>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Follow us on Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Like our Facebook page">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="mailto:info@aenugu.com" className="footer-social-icon" aria-label="Send us an Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
              <li><a href="#story" onClick={(e) => handleNavClick(e, 'story')}>Our Story</a></li>
              <li><a href="#cuisine" onClick={(e) => handleNavClick(e, 'cuisine')}>Cuisine</a></li>
              <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
              <li><a href="#architecture" onClick={(e) => handleNavClick(e, 'architecture')}>Architecture</a></li>
              <li><a href="#location" onClick={(e) => handleNavClick(e, 'location')}>Contact & Location</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4>Reservations</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" size={16} />
                <div className="footer-contact-text">
                  <p>+91 98765 43210</p>
                  <p>+91 40 1234 5678</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" size={16} />
                <div className="footer-contact-text">
                  <p>Vantage Line, Bandlaguda,<br />Hyderabad, Telangana - 500091</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="footer-col">
            <h4>Opening Hours</h4>
            <div className="footer-hours-info">
              <p><strong>Daily Lunch:</strong><br />12:00 PM – 3:30 PM</p>
              <p style={{ marginTop: '0.8rem' }}><strong>Daily Dinner:</strong><br />7:00 PM – 11:30 PM</p>
              <span className="coming-soon-badge">Bar Lounge Coming Soon</span>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Aenugu Telugu Cuisine. All Rights Reserved. Crafted with pride.
          </p>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <a href="#" onClick={onOpenReservation}>Table Reservation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
