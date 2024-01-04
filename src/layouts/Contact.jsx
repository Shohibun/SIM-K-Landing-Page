import React from "react";
import NavbarHome from "../components/Navbar";
import Footer from "../components/Footer";
import ContactJumbotron from "../pages/Contact-Jumbotron";
import ContactContent from "../pages/Contact-Content";

export default function Contact() {
  return (
    <>
      <NavbarHome />
      <ContactJumbotron />
      <ContactContent />
      <Footer />
    </>
  );
}
