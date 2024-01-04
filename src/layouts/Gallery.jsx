import React from "react";
import NavbarHome from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryContent from "../pages/Gallery-Content";
import GalleryJumbotron from "../pages/Gallery-Jumbotoron";

export default function Gallery() {
  return (
    <>
      <NavbarHome />
      <GalleryJumbotron />
      <GalleryContent />
      <Footer />
    </>
  );
}
