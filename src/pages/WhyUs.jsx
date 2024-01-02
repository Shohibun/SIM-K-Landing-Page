import React from "react";
import IconOne from "../images/icon-1.png"
import IconTwo from "../images/icon-2.png"
import IconThree from "../images/icon-3.png"
import IconFour from "../images/icon-4.png"

export default function WhyUs() {
    return (
        <div className="cotainer flex justify-center items-center mt-28">
            <div className="w-10/12">
                <h1 className="text-center font-bold text-4xl custom-font-color">Why Us ?</h1>

                <div className="grid grid-cols-4 gap-4 mt-10">
                    <div className="col-span-1">
                        <div className="border-2 p-5 rounded">
                            <img src={IconOne} alt="IconOne" className="w-10" />

                            <h4 className="font-bold text-xl mt-3">
                                Full Costume
                            </h4>

                            <p className="text-sm mt-2">
                                There are many choices of costumes, ranging from old anime to the latest.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="border-2 p-5 rounded">
                            <img src={IconTwo} alt="IconTwo" className="w-10" />

                            <h4 className="font-bold text-xl mt-3">
                                Low Price
                            </h4>

                            <p className="text-sm mt-2">
                                The price given is cheaper than other rental places.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="border-2 p-5 rounded">
                            <img src={IconThree} alt="IconThree" className="w-10" />

                            <h4 className="font-bold text-xl mt-3">
                                Best Service
                            </h4>

                            <p className="text-sm mt-2">
                                The service provided is very satisfying so that it makes customers come again.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="border-2 p-5 rounded">
                            <img src={IconFour} alt="IconFour" className="w-10" />

                            <h4 className="font-bold text-xl mt-3">
                                Professional Employees
                            </h4>

                            <p className="text-sm mt-2">
                                Employees who have passed several stage tests.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
