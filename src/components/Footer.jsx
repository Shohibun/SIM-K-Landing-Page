import React from "react";
import Logo from "../images/logo.png";
import { Footer } from "flowbite-react";
import { BsDiscord, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterHome() {
  return (
   <Footer container className="custom-bg-color rounded-none mt-28">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex items-center mb-4">
            <Footer.Brand
              src={Logo}
              alt="Logo"
              name="LiosaCosplay"
              className="w-24 h-20 "
            />
            <span className="text-left font-bold text-lg custom-font-color-2">
              Liosa Cosplay
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="custom-font-color-2" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="custom-font-color-2">
                  Cosplay
                </Footer.Link>
                <Footer.Link href="#" className="custom-font-color-2">
                  Accecoris
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="custom-font-color-2" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="custom-font-color-2">
                  Instagram
                </Footer.Link>
                <Footer.Link href="#" className="custom-font-color-2">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="custom-font-color-2" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="custom-font-color-2">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="custom-font-color-2">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Liosa Cosplay™"
            year={2023}
            className="custom-font-color-2"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="custom-font-color-2"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="custom-font-color-2"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="custom-font-color-2"
            />
            <Footer.Icon
              href="#"
              icon={BsDiscord}
              className="custom-font-color-2"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
