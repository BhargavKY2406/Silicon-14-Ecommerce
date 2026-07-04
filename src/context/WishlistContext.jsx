import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { CartContext } from './CartContext';
import { ProductContext } from './ProductContext';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

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

  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      setWishlist(wishlist.filter((id) => id !== productID));
    } else {
      setWishlist([...wishlist, productID]);
    }
  }

  const wishlistProducts = useMemo(() => {
    return products.filter((p) => wishlist.includes(p.id));
  }, [products, wishlist]);

  function moveToCart(product) {
    addToCart(product);
    toggleWishlist(product.id);
  }

  const value = useMemo(() => ({
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    wishlistProducts,
    moveToCart
  }), [isWishlistOpen, wishlist, wishlistProducts]);

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
