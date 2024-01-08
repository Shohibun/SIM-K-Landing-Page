import React from "react";
import NavbarHome from "../components/Navbar";
import Jumbotron from "../pages/Jumbotron";
import Ranking from "../pages/Ranking";
import Superiority from "../pages/Superiority";
import WhyUs from "../pages/WhyUs";
import Testimonial from "../pages/Testimonial";
import FAQ from "../pages/FAQ";
import FooterHome from "../components/Footer";
import About from "../pages/About";

export default function LandingPage() {
  return (
    <>
      <NavbarHome />
      <Jumbotron />
      <About />
      <Superiority />
      <WhyUs />
      <Testimonial />
      <FAQ />
      <Ranking />
      <FooterHome />
    </>
  );
}
