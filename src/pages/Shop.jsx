import model from "../assets/model3.png";
import "../CSS/shopPage.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";

export default function ShopPage() {
  const products = [
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
      clothesCategories: "Boys",
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
      clothesCategories: "Boys",
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
      clothesCategories: "Girls",
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
      clothesCategories: "Girls",
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
      clothesCategories: "Girls",
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
      clothesCategories: "Girls",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },
    {
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
      name: "neuclassics track top",
      clothesCategories: "Men",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 13,
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
      id: 14,
      name: "neuclassics track top",
      clothesCategories: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 15,
      name: "z.n.e full zip hoodie",
      clothesCategories: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 16,
      name: "neuclassics track top",
      clothesCategories: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },
    {
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
      name: "neuclassics track top",
      clothesCategories: "Boys",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 21,
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
      id: 22,
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
      id: 23,
      name: "z.n.e full zip hoodie",
      clothesCategories: "Girls",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 24,
      name: "neuclassics track top",
      clothesCategories: "Girls",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },
    {
      id: 25,
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
      id: 26,
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
      id: 27,
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
      id: 28,
      name: "neuclassics track top",
      clothesCategories: "Men",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 29,
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
      id: 30,
      name: "neuclassics track top",
      clothesCategories: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 31,
      name: "z.n.e full zip hoodie",
      clothesCategories: "Women",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: null,
      originalPrice: null,
      image: model,
    },
    {
      id: 32,
      name: "neuclassics track top",
      clothesCategories: "Women",
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
  const clothes_category = queryParams.get("clothesCategories");
  console.log(typeof clothes_category);

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
