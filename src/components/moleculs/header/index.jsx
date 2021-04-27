import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <p className="logo-app">MERN - BLOG</p>
      <p className="menu-item">Logout</p>
    </div>
  );
};

export default Header;
