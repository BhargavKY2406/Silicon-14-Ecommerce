import { createContext, useState, useEffect, useRef, useMemo } from 'react';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  // Search Input Ref to auto-focus when clicking Shop Now
  const searchInputRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  useEffect(() => {
    const navIds = ['products', 'deals', 'support', 'about'];
    function handleScroll() {
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of navIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    
    // Auto-focus the search bar only when navigating to products section
    if (sectionId === 'products') {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 500); // Wait for scroll animation to finish
    }
  };

  const value = useMemo(() => ({
    isDarkMode,
    setIsDarkMode,
    openFaq,
    setOpenFaq,
    activeSection,
    scrollToSection,
    searchInputRef
  }), [isDarkMode, openFaq, activeSection]);

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
};
