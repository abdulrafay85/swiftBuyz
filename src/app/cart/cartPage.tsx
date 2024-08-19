"use client";
import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/hooks";
import { Checkout } from "@/components/checkout";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  // console.log("hello", cartArray)
  const total = cartArray.reduce((total, arr) => {
    return Math.floor(total + (arr.price - (arr.price * arr.discount) / 100) * arr.qty);
  }, 0);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
      {/* items */}
      <div className="col-span-2">
        <CartCard />
      </div>
      {/* summary */}
      <div className="bg-myBlackHead/5 p-5 rounded-xl">
        {/* heading */}
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead uppercase">
          order summary
        </h2>
        {/* devider */}
        <div className="divider mt-0  mb-1"></div>
        {/* pricing */}
        <div className="text-sm font-medium tracking-tight text-myBlackPara">
          {/* Product Prices */}
          <div className="flex items-center justify-between capitalize">
            <h2>sub toatal</h2>
            <h2>${total}</h2>
          </div>
          {/* delivery charges */}
          <div className="flex items-center justify-between capitalize">
            <h2>delivery charges</h2>
            <h2>TBD</h2>
          </div>
          {/* services charges */}
          <div className="flex items-center justify-between capitalize">
            <h2>sales tax</h2>
            <h2>TBD</h2>
          </div>
          {/* devider */}
          <div className="divider mt-0  mb-1"></div>
        </div>
        {/* estimate total */}
        <div className="flex items-center justify-between font-semibold text-sm tracking-tight to-myBlackHead uppercase">
          <h2>estimated total</h2>
          <h2>${total}</h2>
        </div>
        {/* devider */}
        <div className="divider mt-0  mb-1"></div>
        {/* checkout button */}
        <div className="flex items-center justify-center w-full">
        <Button
  className="capitalize text-myBlackHead w-full mt-3 py-2 items-center h-11 rounded flex bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 hover:bg-yellow-500 scroll-m-20 tracking-tight"
  onClick={(async () => {
    await Checkout({
      lineItems: [{ price: "price_1PpGBySAxXjQL89bsCO18lSb", quantity: 1 }],
    });
  })}
>
  Proceed to Checkout
</Button>
        </div>
        {/* note */}
        <p className="text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic capitalize mt-5">
          {`*delivery charges and the sales text will be calculated in the checkout page`}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
