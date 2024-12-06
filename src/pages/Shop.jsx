import model from "../assets/model3.png";
import "../CSS/Shop.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";

export default function ShopPage() {
  const products = [
    // that I will fetch from php
    {
      id: 1,
      name: "z.n.e full zip hoodie",
      clothesCategories: "Boys",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 2,
      name: "neuclassics track top",
      clothesCategories: "Boys",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },

    {
      id: 3,
      name: "z.n.e full zip hoodie",
      clothesCategories: "Girls",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },
    {
      id: 4,
      name: "neuclassics track top",
      clothesCategories: "Girls",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },

    {
      id: 5,
      name: "z.n.e full zip hoodie",
      clothesCategories: "Men",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 6,
      name: "neuclassics track top",
      clothesCategories: "Men",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },

    {
      id: 7,
      name: "z.n.e full zip hoodie",
      clothesCategories: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },

    {
      id: 8,
      name: "z.n.e full zip hoodie",
      clothesCategories: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
  ];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const clothes_category = queryParams.get("clothesCategories");

  return (
    <>
      <Navbar />
      {clothes_category === null ? (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="product-list">
          {products
            .filter((prod) => prod.clothesCategories == clothes_category)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
}
