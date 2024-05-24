// components/CartItem.js
import React from 'react';
import Image from 'next/image';

const CartItem = ({ item, removeFromCart, addToCart }) => (
  <li className="cartItem" key={item.id}>
    <Image src={item.image} alt={item.name} width={200} height={200} />
    <div className="cartItem-product-info">

      <h3 className="cartItem-product-name">{item.name}</h3>
      <div className="cartItem-product-price">
        R$
        {' '}
        {item.price.toFixed(2)}
      </div>

      <div className="cartItem-product-buttons">
        <button type="button" className="remove-item-button" onClick={() => removeFromCart(item)}>-</button>
        <span>{item.quantity}</span>
        <button type="button" className="add-item-button" onClick={() => addToCart(item)}>+</button>
      </div>
      <div className="cartItem-product-total-price">
        R$
        {' '}
        {(item.price * item.quantity).toFixed(2)}
      </div>

    </div>
  </li>
);

export default CartItem;
