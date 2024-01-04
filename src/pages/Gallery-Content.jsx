import { Button } from "flowbite-react";
import React from "react";

export default function GalleryContent() {
  return (
    <div className="container mt-28">
      <h1 className="text-center font-bold text-4xl custom-font-color mb-10">
        Gallery Liosa Cosplay
      </h1>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-1.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-2.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-3.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-4.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-5.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-6.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-7.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-8.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-9.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-10.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-11.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-12.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-13.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-14.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-15.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-16.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-17.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-18.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img
            src={require("../images/photo-19.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>

        <div className="col-span-1">
          <img
            src={require("../images/photo-20.jpeg")}
            alt="photoGallery"
            className="w-full h-full"
          />
        </div>
      </div>

      <Button className="custom-bg-color px-2 py-1 mx-auto mt-7">Load More</Button>
    </div>
  );
}
