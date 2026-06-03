import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:30',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!formData.date) {
      setError('Please select a date for your dining experience.');
      return;
    }

    // Mock Submit
    console.log('Reservation Request Details:', formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      guests: '2',
      date: '',
      time: '19:30',
      notes: ''
    });
    setError('');
    onClose();
  };

  return (
    <div className={`modal-overlay open`} onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close booking modal">
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <span className="section-subtitle">Table Booking</span>
              <h2>Reserve a Table</h2>
              <div className="brass-divider" style={{ margin: '0.5rem auto' }}>
                <span className="dot"></span>
                <span className="dot-large"></span>
                <span className="dot"></span>
              </div>
              <p>Experience the finest regional fine-dining in Hyderabad. Please provide details to request a reservation.</p>
            </div>

            <div className="modal-body">
              {error && (
                <div style={{ backgroundColor: 'rgba(197, 62, 43, 0.1)', color: '#c53e2b', padding: '0.8rem', marginBottom: '1.5rem', border: '1px solid rgba(197, 62, 43, 0.3)', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="booking-form">
                <div className="booking-form-row">
                  <div className="form-group">
                    <label htmlFor="booking-name">Full Name</label>
                    <input 
                      type="text" 
                      id="booking-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="e.g. Deepak Srinivas" 
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="booking-phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="booking-phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="e.g. 9876543210" 
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="booking-form-row">
                  <div className="form-group">
                    <label htmlFor="booking-guests">Number of Guests</label>
                    <select 
                      id="booking-guests" 
                      name="guests" 
                      value={formData.guests} 
                      onChange={handleChange} 
                      className="form-input"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8+ Guests (Grand Feast)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="booking-date">Preferred Date</label>
                    <input 
                      type="date" 
                      id="booking-date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange} 
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="booking-form-row">
                  <div className="form-group">
                    <label htmlFor="booking-time">Preferred Time</label>
                    <select 
                      id="booking-time" 
                      name="time" 
                      value={formData.time} 
                      onChange={handleChange} 
                      className="form-input"
                    >
                      <optgroup label="Lunch Slot">
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="14:00">2:00 PM</option>
                      </optgroup>
                      <optgroup label="Dinner Slot">
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="21:30">9:30 PM</option>
                        <option value="22:00">10:00 PM</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="booking-notes">Special Occasions & Diet Notes</label>
                    <input 
                      type="text" 
                      id="booking-notes" 
                      name="notes" 
                      value={formData.notes} 
                      onChange={handleChange} 
                      placeholder="e.g. Birthday celebration, gluten-free requests" 
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                    Request Reservation
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="booking-success-box">
            <div className="success-icon-wrapper">
              <Check size={36} />
            </div>
            <h3>Reservation Requested</h3>
            <div className="brass-divider">
              <span className="dot"></span>
              <span className="dot-large"></span>
              <span className="dot"></span>
            </div>
            <p>
              Thank you, <strong>{formData.name}</strong>. We have received your booking request for 
              {' '}<strong>{formData.guests === '8+' ? '8+ guests' : `${formData.guests} guests`}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
            </p>
            <p style={{ color: 'var(--color-accent)', fontWeight: '400' }}>
              Our guest relations host will reach out to you at <strong>{formData.phone}</strong> shortly to confirm availability.
            </p>
            <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={handleClose}>
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
