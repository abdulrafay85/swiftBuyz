import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Mail, ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div className="">
      <section className=" text-black min-h-[80vh] custom-img bg-fixed bg-center flex flex-col justify-center">
        <div className=" px-4 lg:flex lg:h-screen lg:items-center inset-0 max-w-[90%] mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            {/* title */}
            <h1 className=" scroll-m-20 text-white text-4xl font-extrabold tracking-tight lg:text-5xl">
              Futureistic <span className="text-Coffee3"> Clothes </span>
            </h1>
            {/* discription */}
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white">
              Upgrade your Wardrobe with sleek & stylish Apparels and Top Notch
              Shoes
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 scroll-m-20 text-xl font-semibold tracking-tight group">
              {/* Button */}
              <Link href="/products">
                <Button className="w-4 h-12 rounded border border-myBlackHead flex group bg-myBlackHead px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-Coffee3  focus:outline-none focus:ring active:text-opacity-75  sm:w-auto ">
                  {" "}
                  <ShoppingCart className="mr-2 h-5 w-5 group-hover:animate-bounce" />{" "}
                  Shop Now{" "}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
