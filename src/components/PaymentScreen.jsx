// components/PaymentScreen.js
import React from 'react';
import PaymentOption from './PaymentOption';
import logoCartaoCredito from '../../public/images/cartaoCredito.png';
import logoVoucher from '../../public/images/cartaoVoucher.png';
import logoPix from '../../public/images/logopix.svg';
import logoCartaoDebito from '../../public/images/cartaoDebito.png';

const PaymentScreen = ({ totalPrice, cart, onCancelPayment, onSelectPayment }) => (
  <div className="payment-screen">
    <h2>Como você quer pagar?</h2>
    <div className="payment-options">
      <PaymentOption method="PIX" onSelectPayment={onSelectPayment} imageSrc={logoPix} />
      <PaymentOption method="Cartão de Crédito" onSelectPayment={onSelectPayment} imageSrc={logoCartaoCredito} />
      <PaymentOption method="Cartão de Débito" onSelectPayment={onSelectPayment} imageSrc={logoCartaoDebito} />
      <PaymentOption method="Voucher" onSelectPayment={onSelectPayment} imageSrc={logoVoucher} />
    </div>
    <div className="payment-summary">
      <p>Resumo dos Itens:</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="payment-summary-item">
            <div className="payment-summary-item-name"><strong>{item.name}</strong></div>
            <div className="payment-summary-item-price">
              - R$
              {' '}
              {item.price.toFixed(2)}
            </div>
            <div className="payment-summary-item-quantity">
              Qtd:
              {' '}
              {item.quantity}
            </div>
            <div className="payment-summary-item-total">
              <strong>
                - R$
                {' '}
                {(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          </li>
        ))}
      </ul>
      <div className="payment-summary-bottom">
        <button type="button" className="cancel-payment-button" onClick={onCancelPayment}>
          Cancelar Pagamento
        </button>
        <span className="payment-summary-total">
          <strong>
            Total: R$
            {totalPrice.toFixed(2)}
          </strong>
        </span>
      </div>
    </div>
  </div>
);

export default PaymentScreen;
