import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <div className="continer custom-bg-jumbotron flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-white font-bold text-6xl">Liosa Cosplayer</h1>

        <p className="text-white text-base mt-4">
          Liosa Cosplay is a website platform that provides accessories for
          anime lovers and cospalyers.
          <br />
          Liosa cospay also provides costume rental places for those who want to
          demonstrate the characters they love.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-1 grid justify-items-end">
            <Link to={"/login"}>
              <Button className="custom-bg-color px-2 py-1">Sign In</Button>
            </Link>
          </div>

          <div className="col-span-1">
            <Link to={"/register"}>
              <Button color="light" className="px-2 py-1">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
