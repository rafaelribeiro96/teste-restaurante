// components/CartSummary.js
import React from 'react';

const CartSummary = ({ totalPrice, handleCheckout, onContinueShopping }) => (
  <>
    <div className="cart-buttons">
      <button
        type="button"
        className="continue-shopping-button"
        onClick={onContinueShopping}
      >
        Continuar Comprando
      </button>
      <button type="button" className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
    </div>
    <p className="total-price">
      Total: R$
      {totalPrice.toFixed(2)}
    </p>
  </>
);

export default CartSummary;
