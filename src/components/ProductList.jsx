import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const product1 = products.find((product) => product.gender === "Her");

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
