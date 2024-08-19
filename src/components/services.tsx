import Image from "next/image";
import React from "react";
import Line from "./line";
import Link from "next/link";

const Services = () => {
  return (
    <section className="p-7 h-[125vh]  md:h-[60vh] mb-[80px] mt-[80px] overflow-hidden flex flex-col justify-center">
      <div className="mb-10 flex flex-col items-center justify-center">
        <h1
          className="scroll-m-20 text-2xl 
     font-semibold tracking-tight mb-3 text-center "
        >
          Our Services
        </h1>
        <Line />
      </div>
      
      <div className="flex justify-between md:flex-nowrap items-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-x-6 gap-6">
      {/* Delivery */}
        <div className="cursor-pointer group md:flex-grow-0 flex-grow p-4 md:w-1/3 flex flex-col text-center items-center  gap-y-3 h-56 w-72">
          <Image
            src={"/delivery.svg"}
            alt={"delivery"}
            width={100}
            height={100}
            className="w-20 h-20"
          />
          <div className="">
            <h2 className="scroll-m-20  pb-2 text-xl group-hover:text-Coffee3 duration-200 font-semibold tracking-tight text-myBlackHead">Free Delaivery</h2>
            <p className="scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">Free Delivery on Order Abover $1000</p>
          </div>
        </div>
      {/* 24/7 Services*/}
      <div className="cursor-pointer group md:flex-grow-0 flex-grow p-4 md:w-1/3 flex flex-col text-center items-center gap-y-3 h-56 w-72">
          <Image
            src={"/delivery2.svg"}
            alt={"delivery"}
            width={100}
            height={100}
            className="w-20 h-20"
          />
          <div className="">
            <h2 className="scroll-m-20 text-xl pb-2 group-hover:text-Coffee3 duration-200 font-semibold tracking-tight text-myBlackHead">24/7 Customer Service</h2>
            <p className="scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">For Queries and Questions Feel Free to Contact</p>
          </div>
        </div>
      {/* Money Back */}
      <div className="cursor-pointer group md:flex-grow-0 flex-grow p-4 md:w-1/3 flex flex-col text-center items-center gap-y-3 h-56 w-72">
          <Image
            src={"/delivery3.svg"}
            alt={"delivery"}
            width={100}
            height={100}
            className="w-20 h-20"
          />
          <div className="">
            <h2 className="scroll-m-20  pb-2 text-xl group-hover:text-Coffee3 duration-200 font-semibold tracking-tight text-myBlackHead">Money Back Guaranted</h2>
            <p className="scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">Get Money Back Guarantee on Damage Products</p>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Services;
