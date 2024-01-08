import React from "react";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";
import GalleryContent from "../pages/pictures/Gallery-Content";
import GalleryJumbotron from "../pages/pictures/Gallery-Jumbotoron";

export default function Gallery() {
  return (
    <>
      <NavbarHome />
      <GalleryJumbotron />
      <GalleryContent />
      <FooterHome />
    </>
  );
}
