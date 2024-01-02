import React from "react";
import NavbarHome from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../pages/Jumbotron";
import GalleryContent from "../pages/Gallery-Content";

export default function Gallery() {
  return (
    <>
      <NavbarHome />
      <Jumbotron />
      <GalleryContent />
      <Footer />
    </>
  );
}
