import React from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        ARTFUL.
      </Link>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home <div className="navbar__linkUnderline"></div>
        </Link>
        <div className="navbar__linksDivider"></div>
        <Link to="/shop" className="navbar__link">
          Full Shop <div className="navbar__linkUnderline"></div>
        </Link>
        <div className="navbar__linksDivider"></div>
        <Link to="/about" className="navbar__link">
          About Us <div className="navbar__linkUnderline"></div>
        </Link>
      </div>
      <Link to="/cart" className="navbar__cart">
        <i className="fas fa-shopping-bag"></i>
        <p>2</p>
      </Link>
    </div>
  );
};

export default Navbar;
