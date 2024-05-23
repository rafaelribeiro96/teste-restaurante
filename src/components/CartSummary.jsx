// components/CartSummary.js
import React from 'react';
import Link from 'next/link';

const CartSummary = ({ totalPrice, handleCheckout }) => (
  <>
    <p className="total-price">
      Total: R$
      {totalPrice.toFixed(2)}
    </p>
    <div className="cart-buttons">
      <Link href="/">
        <button type="button" className="continue-shopping-button">Continuar Comprando</button>
      </Link>
      <button type="button" className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  </>
);

export default CartSummary;
