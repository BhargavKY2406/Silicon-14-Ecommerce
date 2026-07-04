import React from 'react'

const SignIn = ({
    showSignIn,
    setShowSignIn,
    signInInput,
    setSignInInput,
    handleSignIn    
}) => {
  return (
    <div>
    {/* Sign In Modal */}
      {showSignIn && (
        <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
          <div className="sign-in-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSignIn(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="modal-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h2>Welcome to Silicon-14</h2>
            <p>Enter your name to personalize your experience</p>
            <form onSubmit={handleSignIn}>
              <input
                type="text"
                placeholder="Your name..."
                value={signInInput}
                onChange={(e) => setSignInInput(e.target.value)}
                className="sign-in-input"
                autoFocus
                maxLength={30}
              />
              <button type="submit" className="sign-in-submit">Continue</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignIn
