import React, { useEffect } from "react";
import model from "../assets/model3.png";
import "../CSS/shopPage.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";

export default function ShopPage({ category = "" }) {
  const products = [
    {
      id: 1,
      name: "z.n.e full zip hoodie",
      gender: "Women",
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
      gender: "Men",
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
      gender: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 4,
      name: "neuclassics track top",
      gender: "Men",
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
      gender: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },
    {
      id: 6,
      name: "neuclassics track top",
      gender: "Men",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 7,
      name: "z.n.e full zip hoodie",
      gender: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 8,
      name: "neuclassics track top",
      gender: "Men",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },
  ];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ageGender = queryParams.get("age_gender");

  return (
    <>
      <Navbar />
      {ageGender === undefined ? (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="product-list">
          {products
            .filter((prod) => prod.gender == ageGender)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
}
