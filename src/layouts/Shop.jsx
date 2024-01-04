import React from "react";
import NavbarHome from "../components/Navbar";
import Footer from "../components/Footer";
import ShopJumbotron from "../pages/Shop-Jumbotron";
import ShopContent from "../pages/Shop-Content";

export default function Shop() {
  return (
    <>
      <NavbarHome />
      <ShopJumbotron />
      <ShopContent />
      <Footer />
    </>
  );
}
