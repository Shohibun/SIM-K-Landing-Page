import React from "react";
import { Button, Navbar } from "flowbite-react";
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
          <Navbar.Link href="/" className="font-bold mt-3" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/profile" className="mt-3">
            Profile
          </Navbar.Link>
          <Navbar.Link href="/shop" className="mt-3">
            Shop
          </Navbar.Link>
          <Navbar.Link href="/gallery" className="mt-3">
            Galery
          </Navbar.Link>
          <Navbar.Link href="/contact" className="mt-3">
            Contact
          </Navbar.Link>
          <Navbar.Link href="/login">
            <Button className="custom-bg-color px-2">Login</Button>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
