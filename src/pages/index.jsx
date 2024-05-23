import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

const ProductsPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [category, setCategory] = useState('Comida');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    setCategories(uniqueCategories);
    setCategory(uniqueCategories[0]);
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
      // Swipe left, move to the next category
      setCategory(categories[(currentIndex + 1) % categories.length]);
    } else if (distance < -50) {
      // Swipe right, move to the previous category
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
      <h1>Produtos</h1>
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={category === cat ? 'active' : ''}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Image src={product.image} alt={product.name} width={200} height={200} priority />
            <div>
              {product.name}
              {' '}
              - R$
              {product.price.toFixed(2)}
            </div>
            <div className="product-buttons">
              <button type="button" onClick={() => removeFromCart(product)}>-</button>
              <span>{getProductQuantity(product)}</span>
              <button type="button" onClick={() => addToCart(product)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-button-bottom-right">
        <Link href="/cart">
          <button type="button" className="cart-button-bottom">🛒</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
