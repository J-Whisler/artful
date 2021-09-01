import React from "react";
import "./FullShopPage.scss";
import FullShop from "../components/FullShop/FullShop";
import Navbar from "../components/Navbar/Navbar";

const FullShopPage = () => {
  return (
    <div className="fullShopPage">
      <Navbar />
      <FullShop />
    </div>
  );
};

export default FullShopPage;
