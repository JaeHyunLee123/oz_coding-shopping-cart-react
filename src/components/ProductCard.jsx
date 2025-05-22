//@ts-check

import React from 'react';

/**
 * @typedef {import("../types").Product} Product
 */

/**
 * @typedef {Object} ProductCardProps
 * @property {(product: Product) => void} addToCart
 * @property {Product} product
 */

/** @param {ProductCardProps} props */
const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₩{product.price.toLocaleString()}</p>
            <button onClick={() => addToCart(product)}>장바구니 추가</button>
        </div>
    );
};

export default ProductCard;
