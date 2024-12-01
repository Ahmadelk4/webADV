import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import "./CSS/navBar.css";
import ProductPage from "./pages/ProductPage";
import Signin_up from "./components/Signin_up";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/Signin_up" element={<Signin_up />} />
          <Route path="/ProductPage" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
