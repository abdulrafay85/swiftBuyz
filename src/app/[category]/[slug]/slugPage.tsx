"use client";
import SlugComponent from "@/components/slugComponent";
import { Button } from "@/components/ui/button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { Cart } from "@/utils/types";
import { addToCart } from "@/app/store/features/cart";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  // console.log(params)
  const product = useAppSelector((state) => state.products);
  const slug = product.filter(
    (val) => val.slug.toLowerCase() == params.slug.toLowerCase()
  );

  const dispatch = useAppDispatch();

  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    price: slug[0].price,
    category: slug[0].category,
    image: slug[0].image,
    slug: slug[0].slug,
    size: slug[0].size[0],
    color: slug[0],
    qty: slug[0].qty,
    discount: slug[0].discount,
  });

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap ">
        {/* Image */}
        <SlugComponent image={slug[0].image} />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
          {/* category */}
          <h2 className="text-myBlackHead scroll-m-20 text-sm font-semibold tracking-tight uppercase">
            {slug[0].category}
          </h2>

          {/* title */}
          <h1 className="text-myBlackHead scroll-m-20 text-3xl font-semibold tracking-tight mt-2">
            {slug[0].title}
          </h1>

          {/* rating */}
          <div className="rating mt-2">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-Coffee3"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-Coffee3"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-Coffee3"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-Coffee3"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-Coffee3"
            />
          </div>

          {/* desription */}
          <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara">
            {slug[0].description}
          </p>

          {/* colors */}
          <div className="flex mt-6 items-center  mb-5">
            {/* <div className="flex">
              <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackPara">
                colors
              </span>
              {cartItem.color.map((item:any, i:any) => (
                <button
                  key={i}
                  onClick={() => setCartItem({ ...cartItem, color: item })}
                  className="active:border-black focus:border-black border-2  mr-1 rounded-full w-6 h-6 focus:outline-none"
                  style={{ backgroundColor: item }}
                />
              ))}
            </div> */}

            {/* sizes */}
            <div className="flex ml-6 items-center gap-x-4">
              <span className="scroll-m-20 text-base font-semibold tracking-tight">
                Size
              </span>
              <select
                onChange={(e) =>
                  setCartItem({ ...cartItem, size: e.target.value })
                }
                className="select select-bordered"
              >
                <option disabled selected>
                  Select Size
                </option>
                {slug[0].size.map((item:any, i:any) => (
                  <>
                    <option key={i}>{item}</option>
                  </>
                ))}
              </select>
            </div>
          </div>

          {/* quantity */}
          <div className="flex items-center">
            <span className="scroll-m-20 text-base font-semibold tracking-tight mr-4">
              Quantity
            </span>
            <Button
              onClick={() => setCartItem({ ...cartItem, qty: ++cartItem.qty })}
              className="w-fit mt-3 py-2 items-center h-11 rounded flex  bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-black hover:bg-yellow-500"
            >
              <FiPlus />
            </Button>
            <div className="ml-3 mr-3 scroll-m-20 text-base font-semibold tracking-tight">
              {cartItem.qty}
            </div>
            <Button
              onClick={() =>
                setCartItem({
                  ...cartItem,
                  qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                })
              }
              className="w-fit mt-3 py-2 items-center h-11 rounded flex  bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-black hover:bg-yellow-500"
            >
              <FiMinus />
            </Button>
          </div>

          {/* divider */}
          <div className="divider"></div>

          <div className="flex items-center justify-between">
            {/* price */}
            <div className="">
              {/* Ensure slug array has at least one element */}
              {slug && slug.length > 0 && (
                <>
                  {/* Check if discount is greater than 0 for applying line-through */}
                  <span
                    className={`text-myBlackHead title-font scroll-m-20 tracking-tight font-medium text-2xl ${
                      cartItem.discount && cartItem.discount > 0
                        ? "line-through decoration-2 decoration-myBlackHead"
                        : ""
                    }`}
                  >
                    {/* Check if price exists and fallback to 0 if undefined */}
                    ${Math.floor(cartItem.price * cartItem.qty)}
                  </span>

                  {/* If discount is greater than 0, calculate and display the discounted price */}
                  {cartItem.discount && cartItem.discount > 0 && (
                    <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ml-3">
                      $
                      {Math.floor(
                       ( (cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty)
                      )}
                    </span>
                  )}
                </>
              )}
            </div>

            {/* add to cart */}
            <Button
              onClick={() => dispatch(addToCart(cartItem))}
              className="w-36 mt-3 py-2 items-center h-11 rounded flex  bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-black hover:bg-yellow-500"
            >
              Add to Cart
            </Button>
          </div>

          {/* buy mow */}
          <Button className="w-full mt-3 py-2 items-center h-11 rounded flex  bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-black hover:bg-yellow-500">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
