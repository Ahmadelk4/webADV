import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../CSS/ProductList.css";
import AdmineNavbar from "../components/AdmineNavbar";
import Edit from "../assets/Edit.svg";
import Delete from "../assets/Delete.svg";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/webadv/webADV/backend/getProducts.php")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(
        "http://localhostwebadv/webADV/backend/deleteProduct.php",
        { id }
      );
      if (response.data.success) {
        setProducts(products.filter((product) => product.db_id !== id)); // Update the UI
        alert("Product deleted successfully!");
      } else {
        alert("Failed to delete product. ");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <>
      <AdmineNavbar />
      <div className="products-list">
        <header className="product-header">
          <h2>Your Products</h2>
        </header>

        <div className="product-container">
          <div className="product-headers">
            <span className="item">Item</span>
            <span>ID</span>
            <span>Category</span>
            <span>Size</span>
            <span>Color</span>
            <span>Sale Price</span>
            <span>Discount</span>
            <span>Amount</span>
          </div>

          {products.map((product) => (
            <div key={product.db_id} className="product-row">
              <div className="product-item">
                <span className="type">Item</span>
                <img
                  src={`src/assets/productPage/${product.db_prod_main_image}`}
                  alt={product.db_prod_name}
                />
                <div className="product-text">
                  <p className="name">{product.db_prod_name}</p>
                  <p className="about">
                    {product.db_prod_detail || "No description"}
                  </p>
                </div>
              </div>
              <span>
                <span className="type">ID</span> {product.db_id}
              </span>
              <span>
                <span className="type">Category</span> {product.db_category}
              </span>
              <span>
                <span className="type">Size</span> {product.db_size}
              </span>
              <span>
                <span className="type">Color</span>
                {product.db_color}
              </span>
              <span>
                <span className="type">Sale Price</span>$
                {product.db_price.toFixed(2)}
              </span>
              <span>
                <span className="type">Discount</span>
                {product.db_discount}%
              </span>
              <span
                className={`amount ${
                  product.db_amount === 0 ? "not-available" : "available"
                }`}
              >
                <span className="type">Amount</span> {product.db_amount}
              </span>

              <div className="buttons">
                <Link to="/AddProduct" className="button">
                  <img src={Edit} alt="Edit" />
                </Link>
                <button
                  className="button"
                  onClick={() => handleDelete(product.db_id)}
                >
                  <img src={Delete} alt="Delete" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
