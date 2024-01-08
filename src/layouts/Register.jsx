import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import BgRegister from "../images/bg-register.jpeg";

export default function Register() {
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div className="col-span-1 custom-display">
          <img
            src={BgRegister}
            alt="BackgroundRegister"
            className="custom-bg-auth"
          />
        </div>

        <div className="md:col-span-1 col-span-2 p-10 flex justify-center items-center">
          <div className="md:border-2 md:rounded md:px-5 md:py-10 md:shadow-lg">
            <div className="text-center">
              <h5 className="font-bold text-3xl md:mt-0 mt-8">Register</h5>
              <p className="text-sm mt-2">
                Hi, would you like to create an account ?{" "}
              </p>{" "}
            </div>

            <form className="flex max-w-md flex-col gap-4 mt-12 mx-auto" action="/login">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput id="username" type="text" sizing="md" />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Password" />
                </div>
                <TextInput id="password1" type="password" required />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="agree" />
                <Label htmlFor="agree" className="flex">
                  I agree with the&nbsp;
                  <Link
                    href="#"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    terms and conditions
                  </Link>
                </Label>
              </div>

              <Button type="submit">Submit</Button>
            </form>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="col-span-1">
                <p>
                  Do you already have an account ?{" "}
                  <Link
                    to={"/login"}
                    className="font-bold custom-font-color"
                  >
                    Login
                  </Link>
                </p>
              </div>

              <div className="col-span-1 text-end">
                <p className="font-bold custom-font-color">Forget Password ?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
