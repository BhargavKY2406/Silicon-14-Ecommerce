import React from 'react'

const SupportSection = ({
    faqData,
    openFaq,
    setOpenFaq
}) => {
  return (
    <div>
    {/* Support Section */}
      <section className="support-section" id="support">
        <div className="section-header">
          <h2 className="section-title">Support</h2>
          <p className="section-subtitle">
            We're here to help — 24/7 tech support for all your needs
          </p>
        </div>

        <div className="support-grid">
          {/* Contact Cards */}
          <div className="support-contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>1-800-SILICON</p>
              <span className="contact-tag">Available 24/7</span>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>Email Support</h3>
              <p>help@silicon14.com</p>
              <span className="contact-tag">Response in 2hrs</span>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Live Chat</h3>
              <p>Instant Assistance</p>
              <span className="contact-tag">Online Now</span>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-container">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.q}</span>
                  <svg
                    className="faq-chevron"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupportSection
