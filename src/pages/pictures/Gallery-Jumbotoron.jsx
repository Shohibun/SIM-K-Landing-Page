import React from "react";

export default function GalleryJumbotron() {
  return (
    <div className="continer custom-bg-jbt-fiture flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-white font-bold text-6xl">GALLERY</h1>

        <div className="md:w-5/12 w-10/12 mx-auto">
          <p className="text-sm text-white mt-2">
            This gallery page contains customers who rent anime clothes to do
            cosplay. So new customers can see what clothes they want to rent
            from this page or can directly ask the contact page if they don't
            find the clothes they want.
          </p>
        </div>
      </div>
    </div>
  );
}
