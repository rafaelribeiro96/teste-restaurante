// components/ProductCard.js
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product, getProductQuantity, addToCart, removeFromCart }) => (
  <li>
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
);

export default ProductCard;
