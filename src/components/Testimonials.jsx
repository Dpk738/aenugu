import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    quote: "The flavors here took me straight back to my grandmother's home in Rajahmundry. The Gongura Mamsam was outstanding - tanginess and spice balanced beautifully, served in stunning brassware. Easily Hyderabad's best fine-dining for regional food.",
    author: "Srinivas Rao Aenugu",
    title: "Hyderabad Resident",
    rating: 5
  },
  {
    quote: "Aenugu sets a new standard for regional cuisine. The Bagara Annam and Golichina Mamsam were superb, and the hospitality was warm and exceptionally refined. The interiors, with solid teak and brass accents, make for a very premium dining experience.",
    author: "Meenakshi Reddy",
    title: "Jubilee Hills, Guest",
    rating: 5
  },
  {
    quote: "Exceptional food and attention to detail. The Gutti Vankaya Koora was rich and velvety, and the Swarna Andhra Thali felt like a royal banquet. The staff took the time to explain the micro-regional origins of each dish. Highly recommended!",
    author: "Ananth Krishnan",
    title: "Gachibowli, Food Connoisseur",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slides every 6s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        
        <div className="section-header reveal-on-scroll">
          <span className="section-subtitle">Guest Diaries</span>
          <h2>Guest Experiences</h2>
          <div className="brass-divider">
            <span className="dot"></span>
            <span className="dot-large"></span>
            <span className="dot"></span>
          </div>
          <p>
            Here is what our early guests have to say about their culinary journey through the legacy recipes of the Telugu lands.
          </p>
        </div>

        {/* Carousel */}
        <div className="testimonials-carousel reveal-on-scroll">
          <div className="testimonial-slide">
            {/* Star Rating Design System */}
            <div className="testimonial-rating">
              {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={18} fill="#B58B4C" stroke="#B58B4C" />
              ))}
            </div>
            
            <p className="testimonial-quote">
              "{REVIEWS[activeIndex].quote}"
            </p>

            <div className="testimonial-author">
              <span className="testimonial-author-name">{REVIEWS[activeIndex].author}</span>
              <p className="testimonial-author-title">{REVIEWS[activeIndex].title}</p>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="carousel-dots">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
