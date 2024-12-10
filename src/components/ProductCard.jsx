import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const salePrice =
    product.db_price - product.db_price * (product.db_discount / 100);

  return (
    <div className="product-card">
      <div className="image-container">
        <Link to={`/Products?productName=${product.db_prod_name}`}>
          <img
            src={`src/assets/productPage/${product.db_prod_main_image}`}
            alt={product.db_prod_name}
            className="product-image"
          />
        </Link>
      </div>
      <div className="product-info">
        <span className="category">{product.db_category}</span>
        <h3 className="name">{product.db_prod_name}</h3>
        <p className="price">
          {product.db_discount ? (
            <>
              <span className="original-price">${product.db_price}</span>
              <span className="sale-price">${salePrice}</span>
            </>
          ) : (
            `$${product.db_price}`
          )}
        </p>
        <p className="about">{product.db_prod_detail}</p>
      </div>
    </div>
  );
}
