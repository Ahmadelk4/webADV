import "../CSS/AddProduct.css";
import { useNavigate } from "react-router-dom";

export default function ProdCreate({ isModal }) {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate(-1); // Closes the modal and navigates back
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); // Handle form submission logic here
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
                />
              </div>
              <div className="flex-col">
                <h3>Description:</h3>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter product Description"
                  required
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
                />
              </div>
              <div className="flex-col">
                <h3>Color:</h3>
                <input type="text" name="color" placeholder="Green" required />
              </div>
            </div>
            <div className="flex Row2">
              <div className="flex-col">
                <h3>Category:</h3>
                <select name="category" defaultValue="" required>
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
                  <div className="flex flex--label">
                    <input
                      type="checkbox"
                      name="sizes"
                      value="X-Small"
                      id="x-small"
                    />
                    <label htmlFor="x-small">X-Small</label>
                  </div>
                  <div className="flex flex--label">
                    <input
                      type="checkbox"
                      name="sizes"
                      value="Small"
                      id="small"
                    />
                    <label htmlFor="small">Small</label>
                  </div>
                  <div className="flex flex--label">
                    <input
                      type="checkbox"
                      name="sizes"
                      value="Medium"
                      id="medium"
                    />
                    <label htmlFor="medium">Medium</label>
                  </div>
                  <div className="flex flex--label">
                    <input
                      type="checkbox"
                      name="sizes"
                      value="Large"
                      id="large"
                    />
                    <label htmlFor="large">Large</label>
                  </div>
                  <div className="flex flex--label">
                    <input
                      type="checkbox"
                      name="sizes"
                      value="X-Large"
                      id="x-large"
                    />
                    <label htmlFor="x-large">X-Large</label>
                  </div>
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
                />
              </div>
              <div className="flex-col">
                <h3>Discount:</h3>
                <input type="text" name="discount" placeholder="15%" required />
              </div>
            </div>
            <div className="flex Row4">
              <div className="flex-col">
                <h3>Upload Image:</h3>
                <input type="file" name="image" accept="image/*" required />
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
