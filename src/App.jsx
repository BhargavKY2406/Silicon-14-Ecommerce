import "./App.css";
import { useContext, useRef, useState, useEffect } from "react";
import { ProductContext } from "./context/ProductContext";
import {
  NavigationBar,
  SignIn,
  CartSideBar,
  WishListSideBar,
  Hero,
  ProductsSection,
  DealsSection,
  AboutSection,
  FooterSection,
  SupportSection
} from "./components";

function App() {
  const { isLoading, error } = useContext(ProductContext);
  
  // Scroll to top implementation
  const topRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="app" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-primary)' }}>
        <div className="loading-spinner" style={{ width: '50px', height: '50px', border: '5px solid var(--accent-alpha)', borderTop: '5px solid var(--accent-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <h2 style={{ marginTop: '20px', color: 'var(--text-primary)', fontFamily: 'sans-serif' }}>Loading Products...</h2>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-primary)' }}>
        <h2 style={{ color: 'var(--danger-color)', fontFamily: 'sans-serif' }}>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="app" ref={topRef}>
      <NavigationBar />
      <SignIn />   
      <CartSideBar />
      <WishListSideBar />
      <Hero />
      <ProductsSection />
      <DealsSection />
      <SupportSection />
      <AboutSection />
      <FooterSection />

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top-btn" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;