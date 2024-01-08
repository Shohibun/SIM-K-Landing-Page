import React from "react";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";
import ProfileJumbotron from "../pages/profile/Profile-Jumbotron";
import ProfileContent from "../pages/profile/Profile-Content";

export default function Profile() {
  return (
    <>
      <NavbarHome />
      <ProfileJumbotron />
      <ProfileContent />
      <FooterHome />
    </>
  );
}
