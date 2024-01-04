import React from "react";
import NavbarHome from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileJumbotron from "../pages/Profile-Jumbotron";
import ProfileContent from "../pages/Profile-Content";

export default function Profile() {
  return (
    <>
      <NavbarHome />
      <ProfileJumbotron />
      <ProfileContent />
      <Footer />
    </>
  );
}
