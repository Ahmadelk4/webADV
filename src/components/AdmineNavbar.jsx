import "../CSS/AdmineNavbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Logout from "../assets/Logout.svg";

const Navbar = () => {
  return (
    <div className="center">
      <nav className="Admin">
        <div className="logo">
          <Link>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/ProductList  ">Products</Link>
          <Link to="/orderList">Orders</Link>
          <Link to="/AddProduct">AddProduct</Link>
        </div>

        <div className="nav-actions">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for items..."
          />
          <Link to="/Signin_up">
            <img src={Logout} alt="Logout logo" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
