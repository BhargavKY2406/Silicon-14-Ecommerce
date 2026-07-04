const AboutSection = () => {
  return (
    <div>
    {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-header">
          <h2 className="section-title">About Silicon-14</h2>
          <p className="section-subtitle">
            The 14th element. The foundation of modern technology.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-story">
            <h3 className="about-heading">Our Story</h3>
            <p className="about-text">
              Born from the periodic table's most transformative element, Silicon-14 represents the fusion of science and commerce. We believe that premium technology should be accessible to everyone — not just the few.
            </p>
            <p className="about-text">
              Founded in 2024 by a team of engineers and design enthusiasts, we curate only the finest electronics from brands that push boundaries. Every product on our platform is hand-picked, tested, and backed by our guarantee.
            </p>
          </div>

          <div className="about-values">
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Trusted & Secure</h4>
              <p>Every transaction is encrypted and every product is genuine. No exceptions.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4>Lightning Fast</h4>
              <p>Same-day dispatch on orders placed before 2 PM. Track every step of the way.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h4>Customer First</h4>
              <p>30-day returns, 24/7 support, and a loyalty program that actually rewards you.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4>Curated Selection</h4>
              <p>We don't sell everything — we sell only the best. Quality over quantity, always.</p>
            </div>
          </div>
        </div>

        <div className="about-stats-bar">
          <div className="about-stat">
            <span className="about-stat-number">50K+</span>
            <span className="about-stat-label">Customers Served</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">99.2%</span>
            <span className="about-stat-label">Satisfaction Rate</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">10+</span>
            <span className="about-stat-label">Brand Partners</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">2 Hrs</span>
            <span className="about-stat-label">Avg Support Response</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
