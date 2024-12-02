// import React from "react";
// import "../CSS/ProductList.css";
// import T_shirt from "../assets/T-shirt.png";
// import Edit from "../assets/Edit.svg";
// import Delete from "../assets/Delete.svg";

// const products = [
//   {
//     id: 0,
//     image: T_shirt,
//     name: "Shirt",
//     about: "",
//     price: 20.0,
//     discount: 0,
//     clothesCategory: "Male",
//     quantity: 3,
//     availableSizes: "M",
//     availableColor: "Green",
//   },
//   {
//     id: 1,
//     image: T_shirt,
//     name: "Shirt",
//     about: "",
//     price: 20.0,
//     discount: 0,
//     clothesCategory: "Male",
//     quantity: 0,
//     availableSizes: "M",
//     availableColor: "Green",
//   },
//   {
//     id: 2,
//     image: T_shirt,
//     name: "Shirt",
//     about: "",
//     price: 20.0,
//     discount: 0,
//     clothesCategory: "Male",
//     quantity: 5,
//     availableSizes: "M",
//     availableColor: "Green",
//   },
//   {
//     id: 3,
//     image: T_shirt,
//     name: "Shirt",
//     about: "",
//     price: 20.0,
//     discount: 0,
//     clothesCategory: "Male",
//     quantity: 0,
//     availableSizes: "M",
//     availableColor: "Red",
//   },
// ];

// const ProductList = () => {
//   return (
//     <div className="products-list">
//       <header className="product-header">
//         <h2>Your Products</h2>
//       </header>

//       <div className="product-container">
//         <div className="product-headers">
//           <span className="item">Item</span>
//           <span>Category</span>
//           <span>Size</span>
//           <span>Color</span>
//           <span>Sale Price</span>
//           <span>Discount</span>
//           <span>Quantity</span>
//         </div>

//         {products.map((product) => (
//           <div key={product.id} className="product-row">
//             <div className="product-item">
//               <span className="type">Item</span>
//               <img src={product.image} alt={product.name} />
//               <div className="product-text">
//                 <p className="name"> {product.name}</p>
//                 <p className="about">{product.about || "No description"}</p>
//               </div>
//             </div>

//             <span>
//               <span className="type">Category</span> {product.clothesCategory}
//             </span>
//             <span>
//               <span className="type">Size</span> {product.availableSizes}
//             </span>
//             <span>
//               <span className="type">Color</span>
//               {product.availableColor}
//             </span>

//             <span>
//               <span className="type">Sale Price</span>$
//               {product.price.toFixed(2)}
//             </span>
//             <span>
//               <span className="type">Discount</span>
//               {product.discount}%
//             </span>
//             <span
//               className={`quantity ${
//                 product.quantity === 0 ? "out-of-stock" : "in-stock"
//               }`}
//             >
//               <span className="type"> Quantity</span> {product.quantity}
//             </span>
//             <div className="buttons">
//               <button className="button">
//                 <img src={Edit} alt="edit" />
//               </button>
//               <button className="button">
//                 <img src={Delete} alt="Delete" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useState } from "react";
import "../CSS/ProductList.css";
import T_shirt from "../assets/T-shirt.png";
import Edit from "../assets/Edit.svg";
import Delete from "../assets/Delete.svg";

const initialProducts = [
  {
    id: 0,
    image: T_shirt,
    name: "Shirt",
    about: "",
    price: 20.0,
    discount: 0,
    clothesCategory: "Male",
    quantity: 3,
    availableSizes: "M",
    availableColor: "Green",
  },
  {
    id: 1,
    image: T_shirt,
    name: "Shirt",
    about: "",
    price: 20.0,
    discount: 0,
    clothesCategory: "Male",
    quantity: 0,
    availableSizes: "M",
    availableColor: "Green",
  },
  {
    id: 2,
    image: T_shirt,
    name: "Shirt",
    about: "",
    price: 20.0,
    discount: 0,
    clothesCategory: "Male",
    quantity: 5,
    availableSizes: "M",
    availableColor: "Green",
  },
  {
    id: 3,
    image: T_shirt,
    name: "Shirt",
    about: "",
    price: 20.0,
    discount: 0,
    clothesCategory: "Male",
    quantity: 0,
    availableSizes: "M",
    availableColor: "Red",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);

  // Handler to remove a product
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="products-list">
      <header className="product-header">
        <h2>Your Products</h2>
      </header>

      <div className="product-container">
        <div className="product-headers">
          <span className="item">Item</span>
          <span>Category</span>
          <span>Size</span>
          <span>Color</span>
          <span>Sale Price</span>
          <span>Discount</span>
          <span>Quantity</span>
        </div>

        {products.map((product) => (
          <div key={product.id} className="product-row">
            <div className="product-item">
              <span className="type">Item</span>
              <img src={product.image} alt={product.name} />
              <div className="product-text">
                <p className="name"> {product.name}</p>
                <p className="about">{product.about || "No description"}</p>
              </div>
            </div>

            <span>
              <span className="type">Category</span> {product.clothesCategory}
            </span>
            <span>
              <span className="type">Size</span> {product.availableSizes}
            </span>
            <span>
              <span className="type">Color</span>
              {product.availableColor}
            </span>

            <span>
              <span className="type">Sale Price</span>$
              {product.price.toFixed(2)}
            </span>
            <span>
              <span className="type">Discount</span>
              {product.discount}%
            </span>
            <span
              className={`quantity ${
                product.quantity === 0 ? "out-of-stock" : "in-stock"
              }`}
            >
              <span className="type"> Quantity</span> {product.quantity}
            </span>
            <div className="buttons">
              <button className="button">
                <img src={Edit} alt="edit" />
              </button>
              <button
                className="button"
                onClick={() => handleDelete(product.id)}
              >
                <img src={Delete} alt="Delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
