import "./App.css";
import { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Mock API request to local products.json
        const response = await fetch('/products.json');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        // Adding a slight delay to simulate network latency for the portfolio effect
        setTimeout(() => setIsLoading(false), 800);
      }
    }
    fetchProducts();
  }, []);

  //BRANDS
  const allBrands = [...new Set(products.map((p) => p.brand))];

  // State
  // Cart - array of products in cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("silicon14-cart");

    if (savedCart) {
      //true
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Problem!!!", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("silicon14-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Wishlist - array of product IDs that are wishlisted
  const [wishlist, setWishlist] = useState(() => {
    const saveWishlist = localStorage.getItem("silicon14-wishlist");
    if (saveWishlist) {
      try {
        return JSON.parse(saveWishlist);
      } catch (error) {
        console.error("Problem!!!", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("silicon14-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Search - what user types in search box
  const [searchTerm, setSearchTerm] = useState("");

  // Brand Filter - which brand is selected ('All' means show all)
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Sort - how to sort products
  const [sortBy, setSortBy] = useState("default");

  // Cart Sidebar - open/close state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist Sidebar - open/close state
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Theme - dark or light mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);

  // Active nav section tracking
  const [activeSection, setActiveSection] = useState("");

  // User profile state
  const [username, setUsername] = useState(() => {
    return localStorage.getItem("silicon14-username") || "";
  });
  const [showSignIn, setShowSignIn] = useState(false);
  const [signInInput, setSignInInput] = useState("");

  useEffect(() => {
    localStorage.setItem("silicon14-username", username);
  }, [username]);

  // Sign in handler
  function handleSignIn(e) {
    e.preventDefault();
    if (signInInput.trim()) {
      setUsername(signInInput.trim());
      setShowSignIn(false);
      setSignInInput("");
    }
  }

  // Sign out handler
  function handleSignOut() {
    setUsername("");
    localStorage.removeItem("silicon14-username");
  }

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  // Scroll-spy for active nav tracking
  useEffect(() => {
    const navIds = ['products', 'deals', 'support', 'about'];

    function handleScroll() {
      const scrollY = window.scrollY + 120; // offset for fixed navbar
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
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function addToCart(product) {
    //Check if Cart Item Exists
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      //PRODUCT IS THERE IN THE CART
      setCartItems(
        cartItems.map(
          (
            item //[ARRAY OF OBJECTS]
          ) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
        )
      );
    } else {
      //PRODUCT NOT THERE
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // Update quantity in cart
  function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or less
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }

  // Remove item from cart
  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  //Calculate Total number of Cart ITEMS
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  //CALCULATE TOTAL PRICE
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  //WISHLIST FUNCTION
  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      //Already Existing - Remove It
      setWishlist(wishlist.filter((id) => id !== productID));
    } else {
      //NOT IN THE WISHLIST - JUST ADD IT
      setWishlist([...wishlist, productID]);
    }
  }

  // Get full product objects for wishlisted items
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  // Move item from wishlist to cart
  function moveToCart(product) {
    addToCart(product);
    toggleWishlist(product.id);
  }

  // Helper function for smooth scrolling
  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Deals: products with discount >= 15%
  const dealProducts = products.filter((p) => {
    const discountNum = parseInt(p.discount);
    return discountNum >= 15;
  });

  // FAQ data
  const faqData = [
    {
      q: "What is the return policy?",
      a: "We offer a 30-day hassle-free return policy on all products. Items must be in original condition with all accessories and packaging included.",
    },
    {
      q: "How long does shipping take?",
      a: "Standard shipping takes 5-7 business days. Express shipping (available at checkout) delivers in 2-3 business days. All orders include free tracking.",
    },
    {
      q: "Do you offer warranty on products?",
      a: "Yes! All products come with the manufacturer's warranty. We also offer an extended Silicon-14 Protection Plan for up to 3 years of coverage.",
    },
    {
      q: "How can I track my order?",
      a: "Once your order ships, you'll receive a confirmation email with a tracking link. You can also track your order by logging into your account on our website.",
    },
    {
      q: "Do you offer EMI or installment payments?",
      a: "Yes! We support No-Cost EMI on select credit cards and Bajaj Finserv. Check the product page for available EMI options at checkout.",
    },
  ];

  //STEP 1 : FILTER BASED ON SEARCH [BASED ON NAME AND BRAND]
  let filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  //STEP 2 : SORT BASED ON FILTERED PRODUCTS
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

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
    <div className="app">

      {/* Navigation Bar */}
      <NavigationBar 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        wishlist={wishlist}
        setIsWishlistOpen={setIsWishlistOpen}
        cartCount={cartCount}
        setIsCartOpen={setIsCartOpen}
        username={username}
        handleSignOut={handleSignOut}
        setShowSignIn={setShowSignIn}
      />
      {/* Sign In */}
      <SignIn
        showSignIn={showSignIn}
        setShowSignIn={setShowSignIn}
        signInInput={signInInput}
        setSignInInput={setSignInInput}
        handleSignIn={handleSignIn}
      />   
    {/* Cart Sidebar */}
      <CartSideBar 
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        cartCount={cartCount}
        cartTotal={cartTotal}
      />
    {/* Wishlist Sidebar */}
      <WishListSideBar 
        isWishlistOpen={isWishlistOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        wishlistProducts={wishlistProducts}
        moveToCart={moveToCart}
        toggleWishlist={toggleWishlist}
      />
      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />
    {/* Products Section */}
      <ProductsSection 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        allBrands={allBrands}
        sortBy={sortBy}
        setSortBy={setSortBy}
        cartCount={cartCount}
        cartTotal={cartTotal}
        setIsCartOpen={setIsCartOpen}
        filteredProducts={filteredProducts}
        wishlist={wishlist}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
      />
    {/* Deals Section */}
      <DealsSection 
        dealProducts={dealProducts}
        addToCart={addToCart}
      />
    {/* Support Section */}
      <SupportSection 
        faqData={faqData}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />
    {/* AboutSection */}
      <AboutSection />
    {/* FooterSection */}
      <FooterSection />
    </div>
  );
}

export default App;