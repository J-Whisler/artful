import React from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">ARTFUL.</div>
      <div className="navbar__links">
        <Link className="navbar__link">
          About Us <div className="navbar__linkUnderline"></div>
        </Link>
        <div className="navbar__linksDivider"></div>
        <LinkScroll className="navbar__link">
          Featured Products <div className="navbar__linkUnderline"></div>
        </LinkScroll>
        <div className="navbar__linksDivider"></div>
        <Link className="navbar__link">
          Full Shop <div className="navbar__linkUnderline"></div>
        </Link>
      </div>
      <Link className="navbar__cart">
        <i className="fas fa-shopping-bag"></i>
        <p>2</p>
      </Link>
    </div>
  );
};

export default Navbar;
