// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, getProductQuantity, addToCart, removeFromCart }) => (
  <ul className="product-list">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        getProductQuantity={getProductQuantity}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    ))}
  </ul>
);

export default ProductList;
