import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../CSS/Product.css";
import ImageCard from "../components/ImagesCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const product_Name = queryParams.get("productName");

  const productName = product_Name;

  useEffect(() => {
    fetch(
      `http://localhost/webadv/webADV/backend/productPage.php?productName=${encodeURIComponent(
        productName
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        if (data.length > 0) {
          setCurrentGroup(data[0]);
          setCurrentProduct(data[0].sizes[0]);
          setMainImage(`src/assets/productPage/${data[0].sizes[0].mainImage}`);
          setThumbnails(
            data[0].sizes[0].thumbnails.map(
              (thumbnail) => `src/assets/productPage/${thumbnail}`
            )
          );
        }
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [productName]);

  const handleColorChange = (group) => {
    setCurrentGroup(group);
    const firstSize = group.sizes[0];
    setCurrentProduct(firstSize);
    setMainImage(`src/assets/productPage/${firstSize.mainImage}`);
    setThumbnails(
      firstSize.thumbnails.map(
        (thumbnail) => `src/assets/productPage/${thumbnail}`
      )
    );
  };

  const handleSizeChange = (size) => {
    const product = currentGroup.sizes.find((p) => p.size === size);
    if (product) {
      setCurrentProduct(product);
      setMainImage(`src/assets/productPage/${product.mainImage}`);
      setThumbnails(
        product.thumbnails.map(
          (thumbnail) => `src/assets/productPage/${thumbnail}`
        )
      );
    }
  };

  const handleThumbnailClick = (index) => {
    const newThumbnails = [...thumbnails];
    const temp = newThumbnails[index];
    newThumbnails[index] = mainImage;
    setMainImage(temp);
    setThumbnails(newThumbnails);
  };

  if (!currentProduct || !currentGroup) {
    return <p>Loading products...</p>;
  }

  const handleAddToCart = () => {
    const cartData = {
      db_prod_name: productName,
      db_size: currentProduct.size,
      db_amount: 1,
      db_prod_main_image: currentProduct.mainImage,
      db_color: currentGroup.color,
      db_price: currentProduct.price,
    };

    fetch("http://localhost/webadv/webADV/backend/addToCart.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Product added to cart successfully!");
        } else {
          alert("Failed to add product to cart.");
        }
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
        alert("Error adding product to cart.");
      });
  };

  let sale = currentProduct.db_price;

  return (
    <div className="product-page">
      <div className="product-images">
        <ImageCard
          mainImage={mainImage}
          thumbnails={thumbnails}
          onThumbnailClick={handleThumbnailClick}
        />
      </div>

      <div className="product-info">
        <p>Men's</p>
        <h1>{productName}</h1>
        <p>{currentProduct.detail}</p>
        <p className="price">
          {currentProduct.discount ? (
            <>
              <span className="original-price">${currentProduct.price}</span>
              <span className="sale-price">
                $
                {currentProduct.price -
                  (currentProduct.price * currentProduct.discount) / 100}
              </span>
            </>
          ) : (
            `$${currentProduct.price}`
          )}
        </p>
        <p className="color">Colors</p>
        <div>
          {products.map((group, index) => (
            <img
              key={index}
              className={`color-image ${
                group.color === currentGroup.color ? "selected" : ""
              }`}
              src={`src/assets/productPage/${group.mainImage}`}
              alt={`Color Thumbnail ${index + 1}`}
              onClick={() => handleColorChange(group)}
            />
          ))}
        </div>
        <div className="size-select">
          <label htmlFor="size">Size: </label>
          <select
            id="size"
            value={currentProduct.size}
            onChange={(e) => handleSizeChange(e.target.value)}
          >
            {currentGroup.sizes.map((product, index) => (
              <option key={index} value={product.size}>
                {product.size}
              </option>
            ))}
          </select>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <p className="free-shipping">Free Shipping & Returns*</p>
      </div>
    </div>
  );
};

export default ProductPage;
