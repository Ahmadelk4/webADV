import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/User.svg";

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
        <Link to="/Signin_up">
          <img src={user} alt="user logo" />
        </Link>

        <input
          type="text"
          className="search-bar"
          placeholder="Search for items..."
        />

        <Link to="/Cart" className="cart-button">
          Cart 🛒
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
