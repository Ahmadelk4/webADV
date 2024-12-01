import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import "./CSS/navBar.css";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
