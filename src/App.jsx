import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/navBar.css";
import ProductPage from "./pages/Product";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductList from "./pages/ProductList";
import Signin_up from "./components/Signin_up";
import OrderList from "./pages/OrderList";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Signin_up" element={<Signin_up isModal />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart isModal />} />
        <Route path="/AddProduct" element={<AddProduct isModal />} />
        <Route path="/OrderList" element={<OrderList />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
