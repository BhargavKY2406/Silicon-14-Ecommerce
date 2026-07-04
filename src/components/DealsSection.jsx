import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const DealsSection = () => {
  const { dealProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div>
    {/* Deals Section */}
      <section className="deals-section" id="deals">
        <div className="section-header">
          <div className="deals-header-badge">🔥 LIMITED TIME</div>
          <h2 className="section-title">Hot Deals</h2>
          <p className="section-subtitle">
            Massive discounts on top-rated products — grab them before they're gone!
          </p>
        </div>

        <div className="deals-grid">
          {dealProducts.map((data) => (
            <div className="deal-card" key={data.id}>
              <div className="deal-card-badge">{data.discount}</div>
              <div className="deal-card-image">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="deal-card-content">
                <span className="deal-brand">{data.brand}</span>
                <h3 className="deal-name">{data.name}</h3>
                <div className="deal-rating">
                  <span className="stars">
                    {"★".repeat(Math.floor(data.rating))}
                    {"☆".repeat(5 - Math.floor(data.rating))}
                  </span>
                  <span className="rating-value">{data.rating}</span>
                </div>
                <div className="deal-price-row">
                  <span className="deal-price">₹{data.price.toLocaleString()}</span>
                  <span className="deal-original-price">₹{data.originalPrice.toLocaleString()}</span>
                </div>
                <div className="deal-savings">
                  You save ₹{(data.originalPrice - data.price).toLocaleString()}
                </div>
                <button className="deal-add-btn" onClick={() => addToCart(data)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DealsSection
