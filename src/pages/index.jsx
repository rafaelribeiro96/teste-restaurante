// pages/ProductsPage.js
import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
import CartButton from '../components/CartButton';
import Header from '../components/Header';
import fetchProducts from '../services/productService';

const ProductsPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
        setCategory(uniqueCategories[0]);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    loadProducts();
  }, []);

  const getProductQuantity = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const filteredProducts = products.filter((product) => product.category === category);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const currentIndex = categories.indexOf(category);
    if (distance > 50) {
      setCategory(categories[(currentIndex + 1) % categories.length]);
    } else if (distance < -50) {
      setCategory(categories[(currentIndex - 1 + categories.length) % categories.length]);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="products-page"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Header title="Produtos" />
      <CategoryMenu categories={categories} category={category} setCategory={setCategory} />
      <ProductList
        products={filteredProducts}
        getProductQuantity={getProductQuantity}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <CartButton />
    </div>
  );
};

export default ProductsPage;
