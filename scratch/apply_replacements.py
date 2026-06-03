import os

css_path = r"c:\Users\Deepak Srinivas\Aenugu\src\App.css"

if os.path.exists(css_path):
    with open(css_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Define all replacements
    replacements = [
        # 1. Logo text color
        (
            """.logo-text {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-bg-light);""",
            """.logo-text {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-text-dark);"""
        ),
        # 2. Navigation items
        (
            """.nav-item a {
  color: var(--color-bg-light);""",
            """.nav-item a {
  color: var(--color-text-dark);"""
        ),
        # 3. Mobile menu button
        (
            """.mobile-menu-btn {
  display: none;
  color: var(--color-bg-light);""",
            """.mobile-menu-btn {
  display: none;
  color: var(--color-text-dark);"""
        ),
        # 4. Mobile nav items
        (
            """.mobile-nav-item a {
  color: var(--color-bg-light);""",
            """.mobile-nav-item a {
  color: var(--color-text-dark);"""
        ),
        # 5. Hero h1
        (
            """.hero-content h1 {
  color: var(--color-bg-light);""",
            """.hero-content h1 {
  color: var(--color-text-dark);"""
        ),
        # 6. Scroll line::after
        (
            """.scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15px;
  background-color: var(--color-bg-light);""",
            """.scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15px;
  background-color: var(--color-text-dark);"""
        ),
        # 7. Cuisine tab button active
        (
            """.cuisine-tab-btn.active {
  background-color: var(--color-primary);
  color: var(--color-bg-light);""",
            """.cuisine-tab-btn.active {
  background-color: var(--color-primary);
  color: var(--color-text-light);"""
        ),
        # 8. Cuisine card tag
        (
            """.cuisine-card-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-primary);
  color: var(--color-bg-light);""",
            """.cuisine-card-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-primary);
  color: var(--color-text-light);"""
        ),
        # 9. Why Choose Us section background
        (
            """.why-section {
  background-color: var(--color-primary);
  color: var(--color-bg-light);
  position: relative;
}

.why-section .section-header h2,
.why-section .section-header p {
  color: var(--color-bg-light);
}""",
            """.why-section {
  background-color: var(--color-bg-dark);
  color: var(--color-text-dark);
  position: relative;
}

.why-section .section-header h2,
.why-section .section-header p {
  color: var(--color-text-dark);
}"""
        ),
        # 10. Why card heading
        (
            """.why-card h3 {
  color: var(--color-bg-light);""",
            """.why-card h3 {
  color: var(--color-text-dark);"""
        ),
        # 11. Experience card heading
        (
            """.experience-card h3 {
  color: var(--color-bg-light);""",
            """.experience-card h3 {
  color: var(--color-text-dark);"""
        ),
        # 12. Lightbox close
        (
            """.lightbox-close {
  position: absolute;
  top: -3rem;
  right: 0;
  color: var(--color-bg-light);""",
            """.lightbox-close {
  position: absolute;
  top: -3rem;
  right: 0;
  color: var(--color-text-dark);"""
        ),
        # 13. Architecture collage overlay
        (
            """.architecture-collage-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 9, 5, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: var(--transition-fast);
  color: var(--color-bg-light);""",
            """.architecture-collage-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 9, 5, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: var(--transition-fast);
  color: var(--color-text-dark);"""
        ),
        # 14. Architecture collage overlay h4
        (
            """.architecture-collage-overlay h4 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-bg-light);""",
            """.architecture-collage-overlay h4 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-text-dark);"""
        ),
        # 15. Testimonials section background
        (
            """.testimonials-section {
  background-color: #F3ECE2; /* Deeper Ivory */
  position: relative;
  overflow: hidden;
}""",
            """.testimonials-section {
  background-color: var(--color-bg-light);
  position: relative;
  overflow: hidden;
}"""
        ),
        # 16. Testimonial quote color
        (
            """.testimonial-quote {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  line-height: 1.4;
  color: var(--color-primary);""",
            """.testimonial-quote {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  line-height: 1.4;
  color: var(--color-text-dark);"""
        ),
        # 17. Map badge colors
        (
            """.map-badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-primary);
  color: var(--color-bg-light);""",
            """.map-badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-primary);
  color: var(--color-text-light);"""
        ),
        # 18. Map badge h4
        (
            """.map-badge h4 {
  color: var(--color-bg-light);""",
            """.map-badge h4 {
  color: var(--color-text-light);"""
        ),
        # 19. Reservation banner
        (
            """/* --- Reservation Banner CTA --- */
.reservation-banner {
  background-color: var(--color-primary);
  color: var(--color-bg-light);""",
            """/* --- Reservation Banner CTA --- */
.reservation-banner {
  background-color: var(--color-bg-dark);
  color: var(--color-text-dark);"""
        ),
        # 20. Reservation banner h2
        (
            """.reservation-banner-content h2 {
  color: var(--color-bg-light);""",
            """.reservation-banner-content h2 {
  color: var(--color-text-dark);"""
        ),
        # 21. Reservation banner secondary button
        (
            """.reservation-banner-ctas .btn-secondary {
  color: var(--color-bg-light);
  border-color: var(--color-accent);
}

.reservation-banner-ctas .btn-secondary:hover {
  background-color: var(--color-bg-light);
  color: var(--color-primary);
  border-color: var(--color-bg-light);
}""",
            """.reservation-banner-ctas .btn-secondary {
  color: var(--color-text-dark);
  border-color: var(--color-accent);
}

.reservation-banner-ctas .btn-secondary:hover {
  background-color: var(--color-text-dark);
  color: var(--color-text-light);
  border-color: var(--color-text-dark);
}"""
        ),
        # 22. Footer color
        (
            """.footer {
  background-color: #1a0f0a; /* Darker than Heritage Brown */
  color: var(--color-bg-light);""",
            """.footer {
  background-color: #1a0f0a; /* Darker than Heritage Brown */
  color: var(--color-text-dark);"""
        ),
        # 23. Lightbox arrow
        (
            """.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-bg-light);""",
            """.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-dark);"""
        )
    ]

    replaced_count = 0
    for target, replacement in replacements:
        if target in content:
            content = content.replace(target, replacement)
            replaced_count += 1
        else:
            print(f"Target not found: {target[:100]}...")

    with open(css_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Done! Replaced {replaced_count} of {len(replacements)} blocks.")
else:
    print("App.css not found")
