import React from "react";
import "./CartPage.scss";
import Cart from "../components/Cart/Cart";
import Navbar from "../components/Navbar/Navbar";

const CartPage = () => {
  return (
    <div className="cartPage">
      <Navbar />
      <div className="cartPage__content">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
