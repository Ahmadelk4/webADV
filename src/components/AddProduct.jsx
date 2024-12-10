import "../CSS/AddProduct.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ProdCreate({ isModal }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    color: "",
    category: "",
    sizes: "",
    stock: "",
    discount: "",
    main_image: "",
    thum1: "",
    thum2: "",
    thum3: "",
  });

  const handleCloseModal = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0].name,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost//webadv/backend/setProducts.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className={`addProduct-modal ${isModal ? "modal-open" : ""}`}>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
      <div className="ProdCreatePage">
        <div className="content">
          <h1 className="heading">Add a New Product:</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex Row1">
              <div className="flex-col">
                <h3>Name:</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter product Name"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex-col">
                <h3>Description:</h3>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter product Description"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex-col">
                <h3>Price:</h3>
                <input
                  type="number"
                  name="price"
                  placeholder="30"
                  required
                  min="0"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex-col">
                <h3>Color:</h3>
                <input
                  type="text"
                  name="color"
                  placeholder="Green"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex Row2">
              <div className="flex-col">
                <h3>Category:</h3>
                <select
                  name="category"
                  defaultValue=""
                  required
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Boys">Boys</option>
                  <option value="Girls">Girls</option>
                </select>
              </div>
              <div className="flex-col">
                <h3>Available Sizes:</h3>
                <div className="flex SizesInputContainer">
                  {["X-Small", "Small", "Medium", "Large", "X-Large"].map(
                    (size) => (
                      <div className="flex flex--label" key={size}>
                        <input
                          type="radio"
                          name="sizes"
                          value={size}
                          id={size.toLowerCase()}
                          onChange={handleInputChange}
                        />
                        <label htmlFor={size.toLowerCase()}>{size}</label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex Row3">
              <div className="flex-col">
                <h3>In Stock:</h3>
                <input
                  type="number"
                  name="stock"
                  placeholder="12"
                  required
                  min="0"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex-col">
                <h3>Discount:</h3>
                <input
                  type="text"
                  name="discount"
                  placeholder="25"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex Row4">
              <div className="flex-col">
                <h3>Main Image:</h3>
                <input
                  type="file"
                  name="main_image"
                  accept="image/*"
                  required
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex-col">
                <h3>Thumbnail 1:</h3>
                <input
                  type="file"
                  name="thum1"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex-col">
                <h3>Thumbnail 2:</h3>
                <input
                  type="file"
                  name="thum2"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex-col">
                <h3>Thumbnail 3:</h3>
                <input
                  type="file"
                  name="thum3"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="flex submit-button">
              <button type="submit">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
