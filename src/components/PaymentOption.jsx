import React from 'react';

const PaymentOption = ({ method, onSelectPayment }) => (
  <div className="payment-option">
    <button type="button" onClick={() => onSelectPayment(method)}>
      Pagar com
      {method}
    </button>
  </div>
);

export default PaymentOption;
