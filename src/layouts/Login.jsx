import React from "react";
import BgLogin from "../images/bg-login.jpeg";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div className="col-span-1 custom-display">
          <img
            src={BgLogin}
            alt="BackgroundLogin"
            className="custom-bg-auth"
          />
        </div>

        <div className="md:col-span-1 col-span-2 p-10 flex justify-center items-center">
          <div className="md:border-2 md:rounded md:px-5 md:py-10 md:shadow-lg">
            <div className="text-center">
              <h5 className="font-bold text-3xl md:mt-0 mt-8">Login</h5>
              <p className="text-sm mt-2">Welcome back !!!</p>{" "}
            </div>

            <form className="flex max-w-md flex-col gap-4 mt-12 mx-auto" action="/">
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
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>

              <Button type="submit">Submit</Button>
            </form>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="col-span-1">
                <p>
                  Don't have an account yet ?{" "}
                  <Link
                    to={"/register"}
                    className="font-bold custom-font-color"
                  >
                    Register
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
