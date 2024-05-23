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
import '../styles/cartItem.css';
import '../styles/cartSummary.css';
import '../styles/confirmationMessage.css';
import '../styles/confirmationModal.css';
import '../styles/paymentOption.css';
import '../styles/paymentScreen.css';
import '../styles/productCard.css';
import '../styles/categoryMenu.css';
import '../styles/header.css';

const MyApp = ({ Component, pageProps }) => (
  <CartProvider>
    <FullScreenButton />
    <Component {...pageProps} />
  </CartProvider>
);

export default MyApp;
