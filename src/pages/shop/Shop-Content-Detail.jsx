import React, { useEffect } from "react";
import ThingOne from "../../images/bag-2.jpeg";
import ThingTwo from "../../images/bag-2-1.jpeg";
import ThingThree from "../../images/bag-2-2.jpeg";
import { Button, Carousel, Dropdown, Rating } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ShopContentDetail() {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="container flex justify-center items-center pt-28">
      <div className="w-10/12 shadow-xl">
        <div className="grid md:grid-cols-2">
          <div className="md:col-span-1">
            <div className="h-56 md:h-96">
              <Carousel>
                <img src={ThingOne} alt="ThingOne" className="w-full" />
                <img src={ThingTwo} alt="ThingTwo" className="w-full" />
                <img src={ThingThree} alt="ThingThree" className="w-full" />
              </Carousel>
            </div>
          </div>

          <div className="md:col-span-1 pl-4 pr-6">
            <h1 className="text-2xl font-bold mb-4 mt-3">
              BAG ANIME ONE PIECE
            </h1>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 md:col-span-5 border-r-4">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 custom-display">
                    4.0 out of 5
                  </p>
                </Rating>
              </div>

              <div className="col-span-3 border-r-4">
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-black">10</span> Evaluation
                </p>
              </div>

              <div className="col-span-3 md:col-span-2">
                <p className="text-sm text-gray-500">
                  <span className="text-black font-bold">18</span> Sold
                </p>
              </div>

              <div className="col-span-2 md:col-span-2 text-right">
                <Link to={"#"} className="text-sm text-gray-500">
                  Laporkan
                </Link>
              </div>
            </div>

            <h1 className="font-bold text-black text-5xl mt-4">$499</h1>

            <div className="grid grid-cols-4 mt-5">
              <div className="col-span-1">
                <p className="text-sm text-gray-500">Installment</p>
              </div>

              <div className="col-span-3">
                <p className="text-sm">24 x $20 (Interest 0%)</p>
              </div>
            </div>

            <div className="grid grid-cols-4 mt-2">
              <div className="col-span-1">
                <p className="text-sm text-gray-500">Protection</p>
              </div>

              <div className="col-span-3">
                <p className="text-sm">Protection electronic</p>
              </div>
            </div>

            <div className="grid grid-cols-4 mt-2">
              <div className="col-span-1">
                <p className="text-sm text-gray-500">Delivery</p>
              </div>

              <div className="col-span-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <p className="text-sm">Delivery To</p>
                  </div>

                  <div className="col-span-2">
                    <Dropdown label="City" inline>
                      <Dropdown.Item>West Java</Dropdown.Item>
                      <Dropdown.Item>East Java</Dropdown.Item>
                      <Dropdown.Item>Central Java</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="col-span-1">
                    <p className="text-sm">Postage</p>
                  </div>

                  <div className="col-span-2">
                    <Dropdown label="$0" inline>
                      <Dropdown.Item>$12</Dropdown.Item>
                      <Dropdown.Item>$10</Dropdown.Item>
                      <Dropdown.Item>$8</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 mt-2">
              <div className="col-span-1">
                <p className="text-sm text-gray-500">Quantity</p>
              </div>

              <div className="col-span-3">
                <Dropdown label="Sum" inline>
                  <Dropdown.Item>2</Dropdown.Item>
                  <Dropdown.Item>3</Dropdown.Item>
                  <Dropdown.Item>4</Dropdown.Item>
                </Dropdown>
              </div>
            </div>

            <Button className="custom-bg-color w-60 py-1 mt-8">Buy</Button>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-xl text-black font-bold mb-1">
            Description Product
          </h1>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque
            eum ipsa accusantium deleniti voluptas. Tempora itaque voluptatibus
            incidunt asperiores temporibus eos tempore minima ipsam architecto
            quae ratione culpa, ullam accusamus at ex eum non distinctio eveniet
            porro deleniti atque odio possimus. Neque, repudiandae, dolores
            officiis molestias quis aspernatur veniam recusandae eos temporibus
            quod debitis soluta tenetur fugit deserunt, quos similique nisi!
            Voluptas, nemo recusandae maiores hic, id nobis reprehenderit, rem
            aspernatur beatae soluta dolor error asperiores? Deleniti, repellat!
            Distinctio, quod mollitia iure molestiae, consequatur nam eligendi
            repellendus placeat officia corporis excepturi id recusandae ducimus
            fugit voluptas est laudantium. At!
          </p>
          <br />
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            debitis ullam voluptatem, suscipit nemo rem fugiat, deleniti
            assumenda doloribus, esse officia impedit! Cum ea a autem. Excepturi
            ea aspernatur accusantium odio, illum beatae. Doloremque libero
            laudantium consectetur possimus laboriosam ipsam aliquid aperiam
            asperiores hic, natus nisi repellat, accusamus dicta neque alias
            nesciunt! Dolorem ea, nisi, ab sapiente delectus consequatur totam
            iusto inventore, magni excepturi natus distinctio? Necessitatibus
            molestiae voluptate ullam assumenda, at nam minus omnis iste cum
            voluptatibus a! Qui magni quidem sit fugit esse optio iure animi
            illum explicabo pariatur. Quia non, obcaecati rerum nesciunt modi
            eaque perferendis aliquam, impedit eos facere alias sequi,
            voluptatibus quod velit asperiores iste eligendi tenetur quae natus
            quis. Nulla, explicabo repudiandae porro, placeat maxime eum
            deserunt autem nemo voluptate voluptates vitae esse ex sapiente
            repellat. Deserunt, repellendus? Officia architecto voluptatibus,
            rerum harum nihil, excepturi tempora, facilis perspiciatis quibusdam
            saepe accusamus nesciunt optio? Ea assumenda nobis ad facilis iure
            vero non voluptates! Nulla reprehenderit adipisci repellendus modi
            ut dolore odio a consequatur, aspernatur reiciendis voluptates. Nemo
            veniam enim ea nostrum quibusdam alias vel atque aut facere placeat
            a, cupiditate debitis sed saepe delectus cumque quis reiciendis
            molestias, molestiae voluptas consectetur assumenda officiis quasi.
            Officia!
          </p>
        </div>
      </div>
    </div>
  );
}
