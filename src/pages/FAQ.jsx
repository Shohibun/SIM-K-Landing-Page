import { Accordion } from "flowbite-react";
import React from "react";

export default function FAQ() {
  return (
    <div className="container flex justify-center items-center mt-28">
      <div className="w-10/12">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h1 className="font-bold text-4xl custom-font-color">
              Frequently Asked Question
            </h1>

            <p className="text-lg">
              Some frequently asked questions by customers.
            </p>
          </div>

          <div className="col-span-1">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>
                  Does it need to be washed if the costume will be returned?{" "}
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum, officiis aspernatur soluta fugiat eos pariatur at,
                    porro nam officia cum, sequi libero nobis. Neque, animi
                    dolorem in obcaecati, delectus ut soluta esse reprehenderit
                    amet provident aperiam cupiditate aspernatur quibusdam
                    mollitia facilis magnam nam corporis explicabo at id natus!
                    Voluptatem, est.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Is it okay to return costumes too late?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias ducimus fugit saepe debitis laboriosam eum eos quas
                    praesentium rem amet, velit, voluptatum ab qui dicta, magnam
                    sint deleniti atque fuga facere soluta itaque tempore
                    numquam! Fuga tenetur nobis commodi facilis laboriosam
                    aliquam fugiat dolore eum dignissimos? Neque consectetur
                    minima doloremque ducimus, omnis consequuntur, soluta magnam
                    voluptatibus atque ut consequatur cum eligendi. Similique,
                    tempore deserunt. Illo?
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  If the customer likes the costume used, is it allowed to buy
                  it?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rerum dolore facere soluta iste illo. Aperiam illum culpa
                    eveniet consequatur commodi veritatis voluptatum, blanditiis
                    tempora, repudiandae saepe, voluptate veniam mollitia!
                    Similique dicta temporibus enim minima exercitationem
                    quibusdam hic placeat a dolorem cum, porro quisquam dolor
                    molestias!
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
