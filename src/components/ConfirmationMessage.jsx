import React, { useEffect } from 'react';

const ConfirmationMessage = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Simula o clique no botão após 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timer quando o componente é desmontado
  }, [onClose]);

  return (
    <div className="confirmation-message">
      <p><strong>Compra realizada com sucesso!</strong></p>
      <p>Você já será redirecionado para a página inicial...</p>
      <button type="button" onClick={onClose}>Realizar Nova Compra</button>
    </div>
  );
};

export default ConfirmationMessage;
