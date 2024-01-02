import React from "react";
import NavbarHome from "../components/Navbar";
import Jumbotron from "../pages/Jumbotron";
import Ranking from "../pages/Ranking";
import Superiority from "../pages/Superiority";
import WhyUs from "../pages/WhyUs";
import Testimonial from "../pages/Testimonial";
import FAQ from "../pages/FAQ";
import FooterHome from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <NavbarHome />
      <Jumbotron />
      <Superiority />
      <WhyUs />
      <Testimonial />
      <FAQ />
      <Ranking />
      <FooterHome />
    </>
  );
}
