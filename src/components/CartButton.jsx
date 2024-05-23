// components/CartButton.js
import React from 'react';
import Link from 'next/link';

const CartButton = () => (
  <div className="cart-button-bottom-right">
    <Link href="/cart">
      <button type="button" className="cart-button-bottom">🛒</button>
    </Link>
  </div>
);

export default CartButton;
