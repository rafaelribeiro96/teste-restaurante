import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

const ProductsPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [category, setCategory] = useState('comida');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const getProductQuantity = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const filteredProducts = products.filter((product) => product.category === category);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      if (category === 'comida') {
        setCategory('bebida');
      } else if (category === 'bebida') {
        setCategory('doce');
      }
    } else if (distance < -50) {
      if (category === 'doce') {
        setCategory('bebida');
      } else if (category === 'bebida') {
        setCategory('comida');
      }
    }
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
        <button
          type="button"
          className={category === 'comida' ? 'active' : ''}
          onClick={() => setCategory('comida')}
        >
          Comida
        </button>
        <button
          type="button"
          className={category === 'bebida' ? 'active' : ''}
          onClick={() => setCategory('bebida')}
        >
          Bebida
        </button>
        <button
          type="button"
          className={category === 'doce' ? 'active' : ''}
          onClick={() => setCategory('doce')}
        >
          Doce
        </button>
      </div>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Image src={product.image} alt={product.name} width={500} height={500} />
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
