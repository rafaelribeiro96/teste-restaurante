import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product, getProductQuantity, addToCart, removeFromCart }) => {
  const quantity = getProductQuantity(product);

  return (
    <li className="product-card">
      <Image src={product.image} alt={product.name} width={200} height={200} priority />
      <div>
        <h3>{product.name}</h3>
        <span>
          R$
          {' '}
          {product.price.toFixed(2)}
        </span>
      </div>
      <div className="product-buttons">
        {product.stock > 0 ? (
          <>
            <button
              type="button"
              className="remove-item-button"
              onClick={() => removeFromCart(product)}
              disabled={quantity === 0}
            >
              -
            </button>
            <span>{quantity}</span>
            <button type="button" className="add-item-button" onClick={() => addToCart(product)}>+</button>
          </>
        ) : (
          <span>Item indisponível</span>
        )}
      </div>
    </li>
  );
};

export default ProductCard;
