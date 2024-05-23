// pages/CartPage.js
import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import PurchaseCompleted from '../components/PurchaseCompleted';

const CartPage = () => {
  const router = useRouter();
  const {
    cart, addToCart, removeFromCart, clearCart,
  } = useContext(CartContext);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [newShopping, setNewShopping] = useState(false);

  useEffect(() => {
    const priceTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(priceTotal);
  }, [cart]);

  useEffect(() => {
    let timeout;
    if (purchaseCompleted && !newShopping) {
      timeout = setTimeout(() => {
        clearCart();
        router.push('/');
      }, 10000);
    } else if (newShopping) {
      clearCart();
      router.push('/');
      setNewShopping(false);
    }

    return () => clearTimeout(timeout);
  }, [newShopping, purchaseCompleted, clearCart, router]);

  const handleCheckout = () => {
    setPurchaseCompleted(true);
  };

  return (
    <div>
      <Header title="Carrinho de compras" />
      {purchaseCompleted ? (
        <PurchaseCompleted cart={cart} totalPrice={totalPrice} setNewShopping={setNewShopping} />
      ) : (
        <>
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
          <CartSummary totalPrice={totalPrice} handleCheckout={handleCheckout} />
        </>
      )}
    </div>
  );
};

export default CartPage;
