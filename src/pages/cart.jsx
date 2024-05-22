import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const router = useRouter();
  const {
    cart, addToCart, removeFromCart, clearCart,
  } = useContext(CartContext);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const priceTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(priceTotal);
  }, [cart]);

  const handleCheckout = () => {
    setPurchaseCompleted(true);
    setTimeout(() => {
      clearCart();
      router.push('/');
    }, 5000); // Redireciona após 10 segundos
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {purchaseCompleted ? (
        <div className="purchase-completed">
          <h2>Compra Concluída!</h2>
          <p>Produtos comprados:</p>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name}
                {' '}
                - Quantidade:
                {' '}
                {item.quantity}
              </li>
            ))}
          </ul>
          <p className="total-price">
            Total: R$
            {totalPrice.toFixed(2)}
          </p>
          <Link href="/">
            <button type="button" className="continue-shopping-button">Realizar Nova Compra</button>
          </Link>
        </div>

      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id}>
                <Image src={item.image} alt={item.name} width={500} height={500} />
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    Preço: R$
                    {item.price.toFixed(2)}
                  </p>
                  <div className="product-buttons">
                    <button type="button" onClick={() => removeFromCart(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">
            Total: R$
            {totalPrice.toFixed(2)}
          </p>
          <div className="cart-buttons">
            <Link href="/">
              <button type="button" className="continue-shopping-button">Continuar Comprando</button>
            </Link>
            <button type="button" className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
