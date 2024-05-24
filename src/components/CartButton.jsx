// components/CartButton.js
import React from 'react';
import Link from 'next/link';

const CartButton = ({ totalValue, clearCart }) => (
  <div className="cartButton-div">
    {totalValue === 0 ? <span>Selecione pelo menos um item</span> : null}
    {totalValue > 0
      ? (
        <>
          <button type="button" className="cartButton-clear" onClick={clearCart}>Limpar Carrinho</button>
          <span className="cartButton-totalPrice">
            Total: R$
            {totalValue.toFixed(2)}
          </span>
          <button className="cartButton-checkout" type="button">
            <Link className="cartButton-checkoutLink" href="/cart">Finalizar Pedido</Link>
          </button>
        </>
      )
      : null}
  </div>
);

export default CartButton;
