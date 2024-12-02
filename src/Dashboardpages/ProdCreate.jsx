import "../CSS/ProdCreate.css";
export default function ProdCreate() {
  return (
    <div className="ProdCreatePage">
      <div className="content">
        <h1 className="heading">Add a New Product:</h1>
        <div className="flex Row1">
          <div className="flex-col">
            <h3>Name:</h3>
            <input type="text" placeholder="Enter product Name" />
          </div>
          <div className="flex-col">
            <h3>Description:</h3>
            <input type="text" placeholder="Enter product Description" />
          </div>
          <div className="flex-col">
            <h3>Price:</h3>
            <input type="text" placeholder="30" />
          </div>
          <div className="flex-col">
            <h3>Color:</h3>
            <input type="text" placeholder="Green" />
          </div>
        </div>
        <div className="flex Row2">
          <div className="flex-col">
            <h3>Category:</h3>
            <select name="">
              <option value="" selected>
                Men
              </option>
              <option value="">Women</option>
              <option value="">Boys</option>
              <option value="">Girls</option>
            </select>
          </div>
          <div className="flex-col">
            <h3>Available Sizes:</h3>
            <div className="flex SizesInputContainer">
              <div className="flex flex--label">
                <input
                  type="checkbox"
                  className="checkbox"
                  placeholder="X-Small"
                />
                <label htmlFor="">X-Small</label>
              </div>
              <div className="flex flex--label">
                <input
                  type="checkbox"
                  className="checkbox"
                  placeholder="Small"
                />
                <label htmlFor="">Small</label>
              </div>
              <div className="flex flex--label">
                <input
                  type="checkbox"
                  className="checkbox"
                  placeholder="Medium"
                />
                <label htmlFor="">Medium</label>
              </div>
              <div className="flex flex--label">
                <input
                  type="checkbox"
                  className="checkbox"
                  placeholder="Large"
                />
                <label htmlFor="">Large</label>
              </div>
              <div className="flex flex--label">
                <input
                  type="checkbox"
                  className="checkbox"
                  placeholder="X-Large"
                />
                <label htmlFor="">X-Large</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex Row3">
          <div className="flex-col">
            <h3>In Stock:</h3>
            <input type="text" placeholder="12" />
          </div>
          <div className="flex-col">
            <h3>Discount:</h3>
            <input type="text" placeholder="15%" />
          </div>
        </div>
      </div>
    </div>
  );
}
