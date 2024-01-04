import React from "react";
import Photo from "../images/bg-sp.jpg";
import { List } from "flowbite-react";

export default function Superiority() {
  return (
    <div className="container flex justify-center items-center mt-28">
      <div className="w-10/12">
        <h1 className="text-center font-bold text-4xl custom-font-color">
          Superiority
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="col-span-1">
            <img src={Photo} alt="background" className="rounded" />
          </div>

          <div className="col-span-1">
            <div className="ml-5">
              <h1 className="text-2xl font-bold">
                Best places to rent anime clothes!
              </h1>

              <p className="text-sm mt-3">
                Rent anime clothes in (Your location) with Liosa Cosplay <br />
                guarantees cheaper prices than others, new clothing conditions,{" "}
                <br />
                and the best quality service for tenants.
              </p>

              <List className="text-black text-sm mt-5">
                <List.Item>
                  The condition of the clothes is still new.
                </List.Item>
                <List.Item>Pocket-friendly.</List.Item>
                <List.Item>Affordable for teenagers.</List.Item>
                <List.Item>Hassle-free transactions.</List.Item>
                <List.Item>Friendly service.</List.Item>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
