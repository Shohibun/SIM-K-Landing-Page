import React from "react";
import Signature from "../images/signature.png";

export default function About() {
  return (
    <div className="container flex justify-center items-center mt-28">
      <div className="10/12">
        <h1 className="text-center font-bold text-4xl custom-font-color">
          Welcome to Liosa Cosplay
        </h1>
        <p className="text-center text-base mt-2">MORE ABOUT US</p>

        <div className="md:w-5/12 w-10/12 mx-auto">
          <p className="text-center text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod
            odio deleniti molestias, voluptatem quas modi obcaecati repudiandae,
            ipsa, iste quam? Quis inventore, dolor repellat quos laudantium
            neque pariatur ducimus soluta amet, hic, ex optio?
          </p>
        </div>

        <img src={Signature} alt="signature" className="mx-auto md:w-1/5 w-2/5" />
      </div>
    </div>
  );
}
