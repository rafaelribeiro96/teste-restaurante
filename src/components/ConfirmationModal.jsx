import React from 'react';

const ConfirmationModal = ({ method, onCancel, onConfirm }) => (
  <div className="confirmation-modal">
    <p>
      Confirmar o pagamento pelo método:
      <br />
      <strong>{method}</strong>
      {' '}
      ?
    </p>
    <button type="button" className="cancel-button-modal" onClick={onCancel}>Cancelar</button>
    <button type="button" className="confirm-button-modal" onClick={onConfirm}>Confirmar</button>
  </div>
);

export default ConfirmationModal;
