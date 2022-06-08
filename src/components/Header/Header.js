import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/orders">Manage Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/support">Support</a>
      </nav>
    </div>
  );
};

export default Header;
