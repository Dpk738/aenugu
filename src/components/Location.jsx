import React from 'react';
import { MapPin, Phone, Car, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="section-padding">
      <div className="container">
        <div className="location-grid reveal-on-scroll">
          
          {/* Contact info and location details */}
          <div className="location-info">
            <span className="section-subtitle">Find Us</span>
            <h2>Visit Aenugu</h2>
            <div className="brass-divider" style={{ margin: '1rem 0 2rem' }}>
              <span className="dot"></span>
              <span className="dot-large"></span>
              <span className="dot"></span>
            </div>

            <div className="location-details">
              <div className="location-detail-item">
                <MapPin className="location-detail-icon" />
                <div className="location-detail-text">
                  <h4>Address</h4>
                  <p>Vantage Line, Bandlaguda, Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="location-detail-item">
                <Phone className="location-detail-icon" />
                <div className="location-detail-text">
                  <h4>Reservations & Inquiries</h4>
                  <p>+91 98765 43210</p>
                  <p>reservations@aenugu.com</p>
                </div>
              </div>

              <div className="location-detail-item">
                <Clock className="location-detail-icon" />
                <div className="location-detail-text">
                  <h4>Opening Hours</h4>
                  <p>Lunch: 12:00 PM – 3:30 PM</p>
                  <p>Dinner: 7:00 PM – 11:30 PM</p>
                </div>
              </div>

              <div className="location-detail-item">
                <Car className="location-detail-icon" />
                <div className="location-detail-text">
                  <h4>Parking & Access</h4>
                  <p>Complimentary Valet Parking is available at the main entrance. Easy wheel-chair accessibility provided.</p>
                </div>
              </div>
            </div>

            <div className="location-action-btns">
              <a 
                href="https://maps.google.com/?q=Vantage+Line,+Bandlaguda,+Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Artistic styled map */}
          <div className="map-container">
            <div className="map-svg-mockup">
              {/* Custom styled SVG Roadmap representation for Luxury feel */}
              <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
                {/* Grid backdrop */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#23140e" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Roads */}
                <path d="M-50,150 L450,150" stroke="#23140e" strokeWidth="24" fill="none" />
                <path d="M-50,150 L450,150" stroke="#B58B4C" strokeWidth="20" fill="none" />
                <text x="30" y="140" fill="var(--color-secondary)" fontSize="10" fontFamily="sans-serif" letterSpacing="1">BANDLAGUDA ROAD</text>

                <path d="M150,-50 L150,450" stroke="#23140e" strokeWidth="24" fill="none" />
                <path d="M150,-50 L150,450" stroke="#B58B4C" strokeWidth="20" fill="none" />
                <text x="165" y="40" fill="var(--color-secondary)" fontSize="10" transform="rotate(90,165,40)" fontFamily="sans-serif" letterSpacing="1">VANTAGE LINE</text>

                <path d="M280,-50 L280,450" stroke="#1d110b" strokeWidth="16" fill="none" strokeDasharray="5,5" />
                <path d="M-50,300 L450,300" stroke="#1d110b" strokeWidth="16" fill="none" strokeDasharray="5,5" />

                {/* Local Greenery */}
                <circle cx="50" cy="50" r="30" fill="#1b2618" opacity="0.4" />
                <circle cx="340" cy="80" r="45" fill="#1b2618" opacity="0.4" />
                <circle cx="70" cy="340" r="50" fill="#1b2618" opacity="0.4" />

                {/* Aenugu Pin Anchor */}
                <circle cx="150" cy="220" r="16" fill="rgba(181, 139, 76, 0.2)" />
                <circle cx="150" cy="220" r="8" fill="#B58B4C" />
                <path d="M150,220 L150,195" stroke="var(--color-secondary)" strokeWidth="2" fill="none" />
              </svg>

              {/* Float badge overlay */}
              <div className="map-badge">
                <h4>Aenugu Fine Dining</h4>
                <p>Vantage Line, Bandlaguda</p>
                <span className="coming-soon-badge" style={{ marginTop: '5px' }}>We Are Here</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
