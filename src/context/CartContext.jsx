import { createContext, useState, useEffect, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("silicon14-cart");
    if (savedCart) {
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

  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const value = useMemo(() => ({
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
  }), [isCartOpen, cartItems, cartCount, cartTotal]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
