import React from "react";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";
import ShopJumbotron from "../pages/shop/Shop-Jumbotron";
import ShopContent from "../pages/shop/Shop-Content";

export default function Shop() {
  return (
    <>
      <NavbarHome />
      <ShopJumbotron />
      <ShopContent />
      <FooterHome />
    </>
  );
}
