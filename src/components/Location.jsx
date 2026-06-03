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

          {/* Google Maps Interactive Embed */}
          <div className="map-container">
            <div className="map-svg-mockup">
              <iframe 
                src="https://maps.google.com/maps?q=Vantage+Line,+Bandlaguda,+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="google-map-iframe"
                allowFullScreen="" 
                loading="lazy"
                title="Aenugu Google Maps Location"
              />

              {/* Float badge overlay */}
              <div className="map-badge">
                <h4>Aenugu Fine Dining</h4>
                <p>Vantage Line, Bandlaguda</p>
                <span className="map-badge-tag">We Are Here</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
