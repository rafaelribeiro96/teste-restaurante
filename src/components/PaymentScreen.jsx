// components/PaymentScreen.js
import React from 'react';
import PaymentOption from './PaymentOption';

const PaymentScreen = ({ totalPrice, cart, onCancelPayment, onSelectPayment }) => (
  <div className="payment-screen">
    <h2>Opções de Pagamento</h2>
    <p>Resumo dos Itens:</p>
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
    <p>
      <strong>
        Total: R$
        {totalPrice.toFixed(2)}
      </strong>
    </p>
    <div>
      <PaymentOption method="PIX" onSelectPayment={onSelectPayment} />
      <PaymentOption method="Cartão de Crédito" onSelectPayment={onSelectPayment} />
      <PaymentOption method="Cartão de Débito" onSelectPayment={onSelectPayment} />
      <PaymentOption method="Voucher" onSelectPayment={onSelectPayment} />
    </div>
    <button type="button" className="cancel-payment-button" onClick={onCancelPayment}>
      Cancelar Pagamento
    </button>
  </div>
);

export default PaymentScreen;
