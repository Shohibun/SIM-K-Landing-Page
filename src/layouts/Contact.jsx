import React from "react";
import NavbarHome from "../components/Navbar";
import FooterHome from "../components/Footer";
import ContactJumbotron from "../pages/contact/Contact-Jumbotron";
import ContactContent from "../pages/contact/Contact-Content";

export default function Contact() {
  return (
    <>
      <NavbarHome />
      <ContactJumbotron />
      <ContactContent />
      <FooterHome />
    </>
  );
}
