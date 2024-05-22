import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';
import products from '../data/products';
import Image from 'next/image';

const ProductsPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [category, setCategory] = useState('comida');

  const getProductQuantity = (product) => {
    const cartItem = cart.find(item => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="products-page">
      <h1>Produtos</h1>
      <div className="category-buttons">
        <button
          className={category === 'comida' ? 'active' : ''}
          onClick={() => setCategory('comida')}
        >
          Comida
        </button>
        <button
          className={category === 'bebida' ? 'active' : ''}
          onClick={() => setCategory('bebida')}
        >
          Bebida
        </button>
      </div>
      <ul className="product-list">
        {filteredProducts.map(product => (
          <li key={product.id}>
            <Image src={product.image} alt={product.name} width={500} height={500} />
            <div>{product.name} - R$ {product.price.toFixed(2)}</div>
            <div className="product-buttons">
              <button onClick={() => removeFromCart(product)}>-</button>
              <span>{getProductQuantity(product)}</span>
              <button onClick={() => addToCart(product)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-button-bottom-right">
        <Link href="/cart">
          <button className="cart-button-bottom">🛒</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
