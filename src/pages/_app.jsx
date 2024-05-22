/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// pages/_app.js
import FullScreenButton from '../components/FullScreenButton';
import { CartProvider } from '../context/CartContext';
import '../styles/globals.css';
import '../styles/index.css';
import '../styles/fullscreen-button.css';
import '../styles/cart.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <FullScreenButton />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;