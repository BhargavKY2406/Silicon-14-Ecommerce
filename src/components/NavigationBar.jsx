const NavigationBar = ({
  activeSection,
  scrollToSection,
  isDarkMode,
  setIsDarkMode,
  wishlist,
  setIsWishlistOpen,
  cartCount,
  setIsCartOpen,
  username,
  handleSignOut,
  setShowSignIn
}) => {
  return (
    <div>
            {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="brand-logo">
            <svg 
              className="brand-icon"
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer boundary */}
              <rect x="3" y="3" width="42" height="42" rx="10" stroke="currentColor" strokeWidth="3" />
              {/* Circuit accent trace */}
              <path d="M 32 3 L 32 12 L 45 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="32" cy="12" r="2.5" fill="currentColor" />
              {/* Atomic Number */}
              <text x="7" y="16" fill="currentColor" fontSize="11" fontWeight="800" fontFamily="monospace">14</text>
              {/* Element Symbol */}
              <text x="24" y="36" fill="currentColor" fontSize="24" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-1px">Si</text>
            </svg>
            <span className="brand-name">Silicon-14</span>
          </a>

          <ul className="nav-links">
            <li>
              <a href="#products" className={`nav-link ${activeSection === 'products' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'products')}>
                Products
              </a>
            </li>
            <li>
              <a href="#deals" className={`nav-link ${activeSection === 'deals' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'deals')}>
                Deals
              </a>
            </li>
            <li>
              <a href="#support" className={`nav-link ${activeSection === 'support' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'support')}>
                Support
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => scrollToSection(e, 'about')}>
                About
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button
              className="nav-btn theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              <div
                className={`theme-toggle-track ${
                  isDarkMode ? "dark" : "light"
                }`}
              >
                <div className="theme-toggle-thumb">
                  {isDarkMode ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  )}
                </div>
              </div>
            </button>

            {/* Wishlist Button */}
            <button className="nav-btn icon-btn" onClick={() => setIsWishlistOpen(true)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={wishlist.length > 0 ? "#ef4444" : "none"}
                stroke={wishlist.length > 0 ? "#ef4444" : "currentColor"}
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="badge">{wishlist.length}</span>
              )}
            </button>

            {/* Cart Button with Icon */}
            <button
              className="nav-btn icon-btn"
              onClick={() => setIsCartOpen(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>

            {/* Profile / Sign In */}
            {username ? (
              <div className="profile-greeting">
                <div className="profile-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="greeting-text">Hello, <strong>{username}</strong></span>
                <button className="sign-out-btn" onClick={handleSignOut} title="Sign Out">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </button>
              </div>
            ) : (
              <button className="nav-btn" onClick={() => setShowSignIn(true)}>Sign In</button>
            )}
            <button className="nav-btn primary" onClick={(e) => scrollToSection(e, 'products')}>Shop Now</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar
