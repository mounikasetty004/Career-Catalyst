import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="site-header">
    <div className="logo">Career Catalyst</div>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;

