import React from "react";
import Line from "./line";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="flex flex-col mb-10 items-center justify-center">
        <h1
          className="scroll-m-20 text-2xl 
     font-semibold tracking-tight mb-3 text-center"
        >
          Our Categories
        </h1>
        <Line />
      </div>
      {/* Categories Start from here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* category 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/tops"}>
            <Image
              src={"/p1.jpg"}
              alt={""}
              height={350}
              width={350}
              className="rounded-xl duration-200 group-hover:scale-125 "
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-OffWhite w-full">
              <h1 className="uppercase">Top</h1>
            </div>
            <div className="block lg:hidden absolute bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-OffWhite w-full">
              <h1 className="uppercase">Top</h1>
            </div>
          </Link>
        </div>
        {/* category 2 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/pants"}>
            <Image
              src={"/p2.jpg"}
              alt={""}
              height={350}
              width={350}
              className="rounded-xl duration-200 group-hover:scale-125 "
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-OffWhite w-full">
              <h1 className="uppercase">Pants</h1>
            </div>
            <div className="block lg:hidden absolute bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-OffWhite w-full">
              <h1 className="uppercase">Pants</h1>
            </div>
          </Link>
        </div>
        {/* category 3 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/acessories"}>
            <Image
              src={"/p5.jpg"}
              alt={""}
              height={350}
              width={350}
              className="rounded-xl duration-200 group-hover:scale-125 "
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-OffWhite w-full">
              <h1 className="uppercase">acessories</h1>
            </div>
            <div className="block lg:hidden absolute bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-OffWhite w-full">
              <h1 className="uppercase">acessories</h1>
            </div>
          </Link>
        </div>
        {/* category 4 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes"}>
            <Image
              src={"/shoes2.jpg"}
              alt={""}
              height={350}
              width={350}
              className="rounded-xl duration-200 group-hover:scale-125 "
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-OffWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
            <div className="block lg:hidden absolute bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-OffWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
