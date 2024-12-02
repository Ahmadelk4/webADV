import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/navBar.css";
import ProductPage from "./pages/Product";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductList from "./pages/ProductList";
import Signin_up from "./components/Signin_up";
import DeliveryList from "./components/DeliveryList";
import Cart from "./components/Cart";
import ProdCreate from "./Dashboardpages/ProdCreate"; // AA
import Dashboard from "./Dashboardpages/Dashboard"; // AA

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Signin_up" element={<Signin_up isModal />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart isModal />} />
        <Route path="/Product-Create" element={<ProdCreate />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/DeliveryList" element={<DeliveryList />} />
        <Route path="/ProductList" element={<ProductList />} />
        {/* AA */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
