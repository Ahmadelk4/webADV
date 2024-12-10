import "../CSS/Shop.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost//webadv/backend/discount.php")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const clothes_category = queryParams.get("clothesCategories");

  return (
    <>
      <Navbar />
      {clothes_category === null ? (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.db_id} product={product} />
          ))}
        </div>
      ) : (
        <div className="product-list">
          {products
            .filter((prod) => prod.db_category == clothes_category)
            .map((product) => (
              <ProductCard key={product.db_id} product={product} />
            ))}
        </div>
      )}
    </>
  );
}
