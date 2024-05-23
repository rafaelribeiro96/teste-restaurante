import React from 'react';

const ConfirmationModal = ({ method, onCancel, onConfirm }) => (
  <div className="confirmation-modal">
    <p>
      Confirmar o pagamento pelo método
      {method}
      ?
    </p>
    <button type="button" onClick={onCancel}>Cancelar</button>
    <button type="button" onClick={onConfirm}>Confirmar</button>
  </div>
);

export default ConfirmationModal;
