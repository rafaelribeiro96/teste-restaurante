// pages/CartPage.js
import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../context/CartContext';
import CartHeader from '../components/CartHeader';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import PaymentScreen from '../components/PaymentScreen';
import ConfirmationModal from '../components/ConfirmationModal';
import ConfirmationMessage from '../components/ConfirmationMessage';

const CartPage = () => {
  const router = useRouter();
  const {
    cart, addToCart, removeFromCart, clearCart,
  } = useContext(CartContext);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [showCartSummary, setShowCartSummary] = useState(true);

  useEffect(() => {
    const priceTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(priceTotal);
  }, [cart]);

  const handleCheckout = () => {
    setShowCartSummary(false);
    setShowPaymentScreen(true);
  };

  const handleCancelPayment = () => {
    setShowConfirmationModal(false);
    setShowPaymentScreen(false);
    setShowCartSummary(true);
    setSelectedPaymentMethod('');
  };

  const handleSelectPayment = (method) => {
    setSelectedPaymentMethod(method);
    setShowConfirmationModal(true);
  };

  const handleConfirmPayment = () => {
    setPurchaseCompleted(true);
    setShowConfirmationModal(false);
  };

  const handleCloseConfirmationMessage = () => {
    clearCart();
    setPurchaseCompleted(false);
    setSelectedPaymentMethod('');
    setShowConfirmationModal(false);
    router.push('/');
  };

  return (
    <div>
      <CartHeader />
      {purchaseCompleted ? (
        <ConfirmationMessage onClose={handleCloseConfirmationMessage} />
      ) : (
        <>
          {showConfirmationModal && (
            <ConfirmationModal
              method={selectedPaymentMethod}
              onCancel={handleCancelPayment}
              onConfirm={handleConfirmPayment}
            />
          )}
          {!showConfirmationModal && (
            showPaymentScreen && (
              <PaymentScreen
                totalPrice={totalPrice}
                cart={cart}
                onCancelPayment={handleCancelPayment}
                onSelectPayment={handleSelectPayment}
              />
            )
          )}
          {!showPaymentScreen && !showConfirmationModal && showCartSummary && (
            <CartSummary
              totalPrice={totalPrice}
              handleCheckout={handleCheckout}
              onContinueShopping={() => router.push('/')}
            />
          )}
          {!showPaymentScreen && !showConfirmationModal && showCartSummary && (
            <ul className="cart-list">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
