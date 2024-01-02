import React from "react";
import UserOne from "../images/cosplay-1.jpeg"
import UserTwo from "../images/cosplay-2.jpeg"
import UserThree from "../images/cosplay-3.jpeg"
import { Card } from "flowbite-react";

export default function Ranking() {
  return (
    <div className="container flex justify-center items-center mt-28">
      <div className="w-10/12">
        <h1 className="text-center font-bold text-4xl custom-font-color">Top Current Cosplayers</h1>

        <div className="grid grid-cols-3 gap-2 mt-10">
          <div className="col-span-1">
            <Card
              className="max-w-sm"
              imgAlt="Azeyy"
              imgSrc={UserOne}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Azeyy
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Azeyy is a famous celebrity and cosplayer from China.  Azeyy's Instagram account is @azeycos and at the time of writing it already has 193 thousand followers. 
              </p>
            </Card>
          </div>

          <div className="col-span-1">
            <Card
              className="max-w-sm"
              imgAlt="Senyamiku"
              imgSrc={UserTwo}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Senyamiku
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Senyamiku is a famous celebrity and cosplayer from China.  Senyamiku's Instagram account is @senyamiku and at the time of writing it already has 1 million followers. 
              </p>
            </Card>
          </div>

          <div className="col-span-1">
            <Card
              className="max-w-sm"
              imgAlt="Tomiaa"
              imgSrc={UserThree}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Tomiaa
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Tomiaa is a famous celebrity and cosplayer from South Korea.  Tomiaa's Instagram account is @tomiaa and at the time of writing it already has 40 thousand followers. 
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
