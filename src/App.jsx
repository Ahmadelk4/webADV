import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/navBar.css";
import ProductPage from "./pages/Product";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Signin_up from "./components/Signin_up";
import Cart from "./components/Cart";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Signin_up" element={<Signin_up isModal />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart isModal />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
