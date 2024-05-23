// components/PurchaseCompleted.js
import React from 'react';
import Link from 'next/link';

const PurchaseCompleted = ({ cart, totalPrice, setNewShopping }) => (
  <div className="purchase-completed">
    <h2>Compra Concluída!</h2>
    <p>Produtos comprados:</p>
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          {item.name}
          {' '}
          - Quantidade:
          {item.quantity}
        </li>
      ))}
    </ul>
    <p className="total-price">
      Total: R$
      {totalPrice.toFixed(2)}
    </p>
    <Link href="/">
      <button
        type="button"
        onClick={() => setNewShopping(true)}
        className="continue-shopping-button"
      >
        Realizar Nova Compra
      </button>
    </Link>
  </div>
);

export default PurchaseCompleted;
