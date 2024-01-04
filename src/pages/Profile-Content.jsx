import React from "react";
import User from "../images/user-profile.jpeg";

export default function ProfileContent() {
  return (
    <div className="container flex justify-center items-center mt-28">
      <div className="w-10/12 shadow-xl p-10">
        <h1 className="text-center font-bold text-4xl custom-font-color mb-10">
          My Profile
        </h1>

        <div className="grid grid-cols-10 gap-10">
          <div className="col-span-4">
            <img src={User} alt="userProfile" className="w-full rounded-full" />
          </div>

          <div className="col-span-6 flex items-center">
            <div className="">
              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-2">
                  <p className="font-bold text-base">Username</p>
                </div>

                <div className="col-span-6">
                  <p className="text-sm">liosa_cosplay</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4 mt-2">
                <div className="col-span-2">
                  <p className="font-bold text-base">Name</p>
                </div>

                <div className="col-span-6">
                  <p className="text-sm">liosa cosplay</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4 mt-2">
                <div className="col-span-2">
                  <p className="font-bold text-base">Email</p>
                </div>

                <div className="col-span-6">
                  <p className="text-sm">liosacosplay@gmail.com</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4 mt-2">
                <div className="col-span-2">
                  <p className="font-bold text-base">Phone Number</p>
                </div>

                <div className="col-span-6">
                  <p className="text-sm">+67345213675</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4 mt-2">
                <div className="col-span-2">
                  <p className="font-bold text-base">Gender</p>
                </div>

                <div className="col-span-6">
                  <p className="text-sm">Male</p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-4 mt-2">
                <div className="col-span-2">
                  <p className="font-bold text-base">Date of Birth</p>
                </div>

                <div className="col-span-6">
                  <p className="text-sm">23 Februart 2003</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
