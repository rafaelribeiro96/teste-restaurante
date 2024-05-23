// components/CartItem.js
import React from 'react';
import Image from 'next/image';

const CartItem = ({ item, removeFromCart, addToCart }) => (
  <li key={item.id}>
    <Image src={item.image} alt={item.name} width={200} height={200} />
    <div>
      <h3>{item.name}</h3>
      <p>
        Preço: R$
        {item.price.toFixed(2)}
      </p>
      <div className="product-buttons">
        <button type="button" className="remove-item-button" onClick={() => removeFromCart(item)}>-</button>
        <span>{item.quantity}</span>
        <button type="button" className="add-item-button" onClick={() => addToCart(item)}>+</button>
      </div>
    </div>
  </li>
);

export default CartItem;
