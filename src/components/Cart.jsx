import React, { useState, useEffect } from "react";
import "../CSS/Cart.css";
import { useNavigate } from "react-router-dom";
import Close from "../assets/Close.svg";
import axios from "axios";

const Cart = ({ isModal }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(
          "http://localhost/webadv/webADV/backend/fetchCart.php"
        );
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const handleCloseModal = () => {
    navigate(-1);
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(
        "http://localhostwebadv/webADV/backend/deleteFromCart.php",
        { id }
      );
      if (response.data.success) {
        setCartItems(cartItems.filter((product) => product.db_id !== id)); // Update the UI
        alert("Product deleted successfully!");
      } else {
        alert("Failed to delete product. ".id);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className={`cart-modal ${isModal ? "modal-open" : ""}`}>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
      <div className="cart">
        <h1>Cart</h1>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <img
                src={`src/assets/productPage/${item.image}`}
                alt={item.name}
                className="product-image"
              />
              <div className="details">
                <p>{item.name}</p>
                <p>COLOR: {item.color}</p>
                <p>SIZE: {item.size}</p>

                <div className="quantity">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                  />
                  <span className="price">x {item.price} $</span>
                </div>
              </div>
            </div>
            <p className="Totalprice"> {item.price * item.quantity} USD</p>
            <button
              className="remove-button"
              onClick={() => handleDelete(item.id)}
            >
              <img src={Close} alt="close symbol" />
            </button>
          </div>
        ))}

        <div className="total">
          <p className="total-price">Total quantity: {totalQuantity}</p>
          <p className="total-quantity">Total price: {totalPrice} USD</p>
        </div>

        <div className="navbtn">
          <button className="btn" onClick={handleCloseModal}>
            &lt; Continue Shopping
          </button>
          <button className="btn"> Checkout &gt; </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
