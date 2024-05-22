import React, { useState } from 'react';

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = '123';
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState('');

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    setIsFullScreen(true);
    setIsPasswordRequired(true);
  };

  const exitFullScreen = () => {
    try {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    } catch (error) {
      console.error('Erro ao sair do modo de tela cheia:', error);
    }

    setIsFullScreen(false);
    setPassword('');
    setIsPasswordRequired(false);
  };

  const toggleFullScreen = () => {
    try {
      if (!isFullScreen) {
        enterFullScreen();
      } else if (isPasswordRequired) {
        // Se a tela cheia estiver ativada e a senha for necessária para sair
        if (password === correctPassword) {
          exitFullScreen();
        } else {
          setErrorMessage('Senha incorreta');
        }
      } else {
        // Se a tela cheia estiver ativada e a senha não for necessária para sair
        exitFullScreen();
      }
    } catch (error) {
      console.error('Erro ao alternar para o modo de tela cheia:', error);
    }
    setPassword('');
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {isPasswordRequired && (
        <input
          type="password"
          placeholder=""
          value={password}
          onChange={handleChange}
          className="password-input"
        />
      )}
      <button type="button" className="fullscreen-button" onClick={toggleFullScreen}>
        {isFullScreen ? '✖' : '🔲'}
      </button>
    </div>
  );
};

export default FullScreenButton;
