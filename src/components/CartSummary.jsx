// components/CartSummary.js
import React from 'react';

const CartSummary = ({ totalPrice, handleCheckout }) => (
  <>
    <p className="total-price">
      Total: R$
      {totalPrice.toFixed(2)}
    </p>
    <div className="cart-buttons">
      <button type="button" className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  </>
);

export default CartSummary;
