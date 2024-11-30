import model from "../assets/model3.png";
import ProductList from "../components/ProductList";
import "../CSS/shopPage.css";
import Navbar from "../components/Navbar";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "z.n.e full zip hoodie",
      category: "His",
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
      category: "Her",
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
      category: "His",
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
      category: "Her",
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
      category: "His",
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
      category: "Her",
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
      category: "His",
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
      category: "Her",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus!",
      price: 20,
      salePrice: 18,
      originalPrice: 20,
      image: model,
    },
  ];

  return (
    <>
      <Navbar />
      <ProductList products={products} />
    </>
  );
}
