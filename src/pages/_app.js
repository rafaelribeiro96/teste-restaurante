// pages/_app.js
import { CartProvider } from '../context/CartContext';
import '../styles/globals.css';
import '../styles/index.css';
import '../styles/fullscreen-button.css';
import '../styles/cart.css';
import FullScreenButton from 'src/components/FullScreenButton';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <FullScreenButton />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
