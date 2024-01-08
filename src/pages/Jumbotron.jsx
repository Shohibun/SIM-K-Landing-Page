import React from "react";

export default function Jumbotron() {
  return (
    <div className="continer custom-bg-jumbotron flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-white font-bold text-5xl">Liosa Cosplayer</h1>

        <div className="md:w-5/12 w-10/12 mx-auto">
          <p className="text-white text-sm mt-4">
            Liosa Cosplay is a website platform that provides accessories for
            anime lovers and cospalyers. Liosa cospay also provides costume
            rental places for those who want to demonstrate the characters they
            love.
          </p>
        </div>
      </div>
    </div>
  );
}
