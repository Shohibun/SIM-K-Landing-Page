import React from "react";
import Background from "../../images/bg-contact.png";
import { Button, Label, TextInput } from "flowbite-react";

export default function ContactContent() {
  return (
    <div className="container flex justify-center items-center">
      <div className="w-10/12">
        <img
          src={Background}
          alt="BackrgroundContact"
          className="mx-auto w-2/5"
        />

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 text-center">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="4em"
              width="4em"
              className="mx-auto"
            >
              <path fill="#0e7590" d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" />
              <path fill="#0e7590" d="M8 14a1 1 0 100-2 1 1 0 000 2z" />
            </svg>

            <p className="text-sm text-gray-400 mt-3">Adam: +62875234123</p>

            <p className="text-sm text-gray-400">Naya: +63214567123</p>
          </div>

          <div className="col-span-1 text-center">
            <svg
              viewBox="0 0 500 1000"
              fill="currentColor"
              height="4em"
              width="4em"
              className="mx-auto"
            >
              <path fill="#0e7590" d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
            </svg>

            <p className="text-sm text-gray-400 mt-3">PO BOX 54782</p>

            <p className="text-sm text-gray-400">4321 Your Address</p>

            <p className="text-sm text-gray-400">Your City, Your Country</p>
          </div>

          <div className="col-span-1 text-center">
            <svg
              viewBox="0 0 900 1000"
              fill="currentColor"
              height="4em"
              width="4em"
              className="mx-auto"
            >
              <path fill="#0e7590" d="M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200" />
            </svg>

            <p className="text-sm text-gray-400 mt-3">liosacosplay@gmail.com</p>
          </div>
        </div>

        <form className="flex flex-col gap-4 w-full mt-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput id="username" type="text" required shadow />
              </div>

              <div>
                <div className="mb-2 mt-4 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="liosacosplay@gmail.com"
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 block mt-4">
                  <Label htmlFor="subject" value="Subject" />
                </div>
                <TextInput id="subject" type="text" required shadow />
              </div>
            </div>

            <div className="md:col-span-1">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Message" />
                </div>
                <TextInput id="message" type="text" required shadow />
              </div>
            </div>
          </div>

          <Button type="submit" className="mx-auto mt-4">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
