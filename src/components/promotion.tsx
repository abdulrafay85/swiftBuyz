import React from "react";
import Line from "./line";

const Promotion = () => {
  return (
    <section className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="flex flex-col mb-10 items-center justify-center">
        <h1
          className="scroll-m-20 text-2xl 
     font-semibold tracking-tight mb-3 text-center"
        >
          Our Promtion
        </h1>
        <Line />
      </div>
      {/* Promotion */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 1st Cilde */}
        <section className="promo-1 bg-[center_left] ">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[25REM] lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className=" text-OffWhite scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0 font-semibold">
                Get UPTO <span className="text-black">60%</span> OFF
              </h1>
              <p className="scroll-m-20 text-OffWhite pb-2 text-base font-semibold tracking-tight first:mt-0">
                Falsh Sale, get upto span 60% off on the Season Variant
              </p>
            </div>
          </div>
        </section>
        {/* 2nd Cilde */}
        <section className="promo-2 bg-[center_left] ">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[25REM] lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-OffWhite scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0 font-semibold">
                Get UPTO <span className="text-black">30%</span> OFF
              </h1>
              <p className="scroll-m-20 text-OffWhite pb-2 text-base font-semibold tracking-tight first:mt-0">
                Falsh Sale, get upto span 60% off on the Season Variant
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Promotion;
