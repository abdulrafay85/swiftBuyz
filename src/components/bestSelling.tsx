"use client"
import React from "react";
import Line from "./line";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const BestSelling = () => {
  const product = useAppSelector((state) => state.products);
  
  const bestSell = product.slice(0,3)


  return (
    <section className="">
      {/* Heading */}
      <div className="flex flex-col mb-10 items-center justify-center">
        <h1
          className="scroll-m-20 text-2xl 
     font-semibold tracking-tight mb-3 text-center"
        >
          Best Selling Products
        </h1>
        <Line />
      </div>
      {/* Product Card */}
      <div className="flex flex-wrap lg:justify-between justify-center gap-5 ">
        {bestSell.map((item: any, i) => (
          <BestSellingCard
            key={item.id}
            src={item.image[0]}
            alt={item.title}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
            slug={item.slug}
            discount={item.discount}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
