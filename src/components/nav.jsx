import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">FashionShop</a>
      </div>

      <div className="nav-links">
        <a href="/men">Home</a>

        <a href="/women">New</a>

        <a href="/kids">Trend</a>

        <a href="/sale">Sale</a>
      </div>

      <div className="nav-actions">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for items..."
        />
        <a href="/cart" className="cart">
          Cart 🛒
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
