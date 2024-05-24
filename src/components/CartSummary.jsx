// components/CartSummary.js
import React from 'react';
import CartItem from './CartItem';

const CartSummary = ({
  totalPrice, handleCheckout, onContinueShopping, cart, removeFromCart, addToCart
}) => (
  <div className="cart-summary">
    <div className="cart-buttons">
      <button
        type="button"
        className="continue-shopping-button"
        onClick={onContinueShopping}
      >
        Continuar Comprando
      </button>
      <button type="button" className="checkout-button" onClick={handleCheckout}>
        Finalizar Compra
      </button>
    </div>
    <ul className="cart-list">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      ))}
    </ul>
    <span className="total-price">
      Total: R$
      {totalPrice.toFixed(2)}
    </span>
  </div>
);

export default CartSummary;
