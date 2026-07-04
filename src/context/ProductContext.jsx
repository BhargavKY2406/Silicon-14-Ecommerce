import { createContext, useState, useEffect, useMemo } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => setIsLoading(false), 800);
      }
    }
    fetchProducts();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const allBrands = useMemo(() => {
    return [...new Set(products.map((p) => p.brand))];
  }, [products]);

  const dealProducts = useMemo(() => {
    return products.filter((p) => parseInt(p.discount) >= 15);
  }, [products]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    });

    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
    return filtered;
  }, [products, searchTerm, selectedBrand, sortBy]);

  const faqData = useMemo(() => [
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
  ], []);

  const value = useMemo(() => ({
    products,
    isLoading,
    error,
    allBrands,
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
    sortBy,
    setSortBy,
    dealProducts,
    faqData,
    filteredProducts
  }), [
    products, isLoading, error, allBrands, 
    searchTerm, selectedBrand, sortBy, 
    dealProducts, faqData, filteredProducts
  ]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
