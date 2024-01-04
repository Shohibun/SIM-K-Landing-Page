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

        <p className="text-center text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod odio
          deleniti molestias, voluptatem quas modi <br /> obcaecati repudiandae,
          ipsa, iste quam? Quis inventore, dolor repellat quos laudantium neque
          pariatur <br /> ducimus soluta amet, hic, ex optio?
        </p>

        <img src={Signature} alt="signature" className="mx-auto w-2/5" />
      </div>
    </div>
  );
}
