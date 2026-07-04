import React from 'react'

const WishListSideBar = ({
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistProducts,
    moveToCart,
    toggleWishlist
}) => {
  return (
    <div>
    {/* Wishlist Sidebar Overlay */}
      {isWishlistOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsWishlistOpen(false)}
        ></div>
      )}

      {/* Wishlist Sidebar */}
      <aside className={`cart-sidebar wishlist-sidebar ${isWishlistOpen ? "open" : ""}`}>
        <div className="cart-sidebar-header">
          <h2>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Your Wishlist
          </h2>
          <button className="close-btn" onClick={() => setIsWishlistOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-sidebar-content">
          {wishlistProducts.length === 0 ? (
            <div className="cart-empty">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p>Your wishlist is empty</p>
              <button
                className="btn-primary"
                onClick={() => setIsWishlistOpen(false)}
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {wishlistProducts.map((item) => (
                <div key={item.id} className="cart-item wishlist-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <div className="wishlist-item-meta">
                      <span className="wishlist-item-price">₹{item.price.toLocaleString()}</span>
                      {item.discount && (
                        <span className="wishlist-item-discount">{item.discount}</span>
                      )}
                    </div>
                    <div className="wishlist-item-actions">
                      <button
                        className="wishlist-move-btn"
                        onClick={() => moveToCart(item)}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Move to Cart
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => toggleWishlist(item.id)}
                        title="Remove from wishlist"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlistProducts.length > 0 && (
          <div className="cart-sidebar-footer">
            <p className="wishlist-footer-count">{wishlistProducts.length} item{wishlistProducts.length !== 1 ? 's' : ''} in your wishlist</p>
            <button className="checkout-btn wishlist-shop-btn" onClick={() => setIsWishlistOpen(false)}>Continue Shopping</button>
          </div>
        )}
      </aside>
    </div>
  )
}

export default WishListSideBar
