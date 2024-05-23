// components/CartButton.js
import React from 'react';
import Link from 'next/link';

const CartButton = ({ totalValue }) => (
  <div className="cart-button-bottom-right">
    <Link href="/cart">
      <button type="button" className="cart-button-bottom">
        <span>{totalValue.toFixed(2)}</span>
        {' '}
        🛒
        {/* Exibir o valor total */}
      </button>
    </Link>
  </div>
);

export default CartButton;
