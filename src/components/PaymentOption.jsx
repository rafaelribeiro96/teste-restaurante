// components/PaymentOption.js
import React from 'react';
import Image from 'next/image';

const PaymentOption = ({ method, onSelectPayment, imageSrc }) => (
  <div className="payment-option">
    <button type="button" className="payment-button" onClick={() => onSelectPayment(method)}>

      <div>{method}</div>
      <Image src={imageSrc} alt={method} width={100} height={100} />

    </button>
  </div>
);

export default PaymentOption;
