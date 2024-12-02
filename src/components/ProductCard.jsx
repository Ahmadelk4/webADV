// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <span className="category">{product.clothesCategories}</span>
        <h3 className="name">{product.name}</h3>
        <p className="price">
          {product.salePrice ? (
            <>
              <span className="original-price">${product.originalPrice}</span>
              <span className="sale-price">${product.salePrice}</span>
            </>
          ) : (
            `$${product.price}`
          )}
        </p>
        <p className="about">{product.about}</p>
        <button className="actions">
          <p className="wishlist">♥</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
