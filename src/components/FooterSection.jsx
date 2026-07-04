import React from 'react';

const FooterSection = () => {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <a href="/" className="footer-logo">
            <svg 
              className="footer-icon"
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="42" height="42" rx="10" stroke="currentColor" strokeWidth="3" />
              <path d="M 32 3 L 32 12 L 45 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="32" cy="12" r="2.5" fill="currentColor" />
              <text x="7" y="16" fill="currentColor" fontSize="11" fontWeight="800" fontFamily="monospace">14</text>
              <text x="24" y="36" fill="currentColor" fontSize="24" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-1px">Si</text>
            </svg>
            <span className="footer-brand-name">Silicon-14</span>
          </a>
          <p className="footer-tagline">
            The 14th element of tech. Premium electronics and smart gadgets engineered to power your digital life.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><a href="#products">All Products</a></li>
            <li><a href="#deals">Hot Deals</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><a href="#support">Help Center</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter-col">
          <h3>Stay Updated</h3>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" aria-label="Subscribe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Silicon-14. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
