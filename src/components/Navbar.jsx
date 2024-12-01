import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/shop">Shop</Link>
        <Link to="/women">New</Link>
        <Link to="/kids">Trend</Link>
        <Link to="/sale">Sale</Link>
      </div>

      <div className="nav-actions">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for items..."
        />

        <Link to="/cart" className="cart">
          Cart 🛒
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
