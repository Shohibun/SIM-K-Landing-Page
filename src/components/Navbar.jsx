import React from "react";
import { Navbar } from "flowbite-react";
import Logo from "../images/logo.png";

export default function NavbarHome() {
  return (
    <div className="fixed w-full custom-z-index">
      <Navbar fluid className="py-5 shadow-lg">
        <Navbar.Brand>
          <img src={Logo} className="h-6 mr-3 ml-20 sm:h-10" alt="Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-bold custom-font-color">
            Liosa Cosplay
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="mr-10">
          <Navbar.Link href="/" className="font-bold" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/profile">
            Profile
          </Navbar.Link>
          <Navbar.Link href="/shop">Shop</Navbar.Link>
          <Navbar.Link href="/gallery">Galery</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
