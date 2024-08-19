"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, deletItem, subCart } from "@/app/store/features/cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch()
  // console.log("hello",cartArray);
  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => {
          return (
            <div key={i} className="flex px-10 py-3">
              {/* image */}
              <Image
                src={item.image as string}
                alt={item.title}
                width={80}
                height={80}
                className="w-[100px] h-[100px]"
              />
              {/* some info */}
              <div className="flex px-5 justify-between items-center w-full">
                <div>
                  {/* title */}
                  <h2 className="scroll-m-20 text-sm font-semibold tracking-tight leading-none line-clamp-1 text-myBlackHead">
                    {item.title}
                  </h2>
                  {/* size */}
                  <p className="mt-2 scroll-m-20 text-xs font-semibold tracking-tight leading-none line-clamp-1 text-myBlackHead">
                    size:&nbsp;<span>{item.size}</span>
                  </p>
                  {/* quantity */}
                  <div className="mt-2 flex items-center">
                    <Button onClick={() => (dispatch(addCart(item)))} className="group w-fit h-fit rounded bg-yellow-400 text-myBlackHead transition hover:scale-105 hover:bg-yellow-500">
                      <FiPlus className="group-hover:scale-110 transition" />
                    </Button>
                    <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold text-myBlackPara">
                      {item.qty}
                    </div>
                    <Button onClick={() => (dispatch(subCart(item)))} className="group w-fit h-fit rounded bg-yellow-400 text-myBlackHead transition hover:scale-105 hover:bg-yellow-500">
                      <FiMinus className="group-hover:scale-110 transition" />
                    </Button>
                  </div>
                  {/* price & delete */}
                  <div className="lg:hidden flex mt-5 items-end gap-5">
                    <h3 className="scroll-m-20 text-sm font-semibold tracking-tight">
                      <span>Price:&nbsp;</span>&#36;
                      {Math.floor(
                        item.discount > 0
                          ? (item.price - (item.price * item.discount) / 100) *
                              item.qty
                          : item.price * item.qty
                      )}
                    </h3>
                    <FiTrash onClick={() => dispatch(deletItem(item.uuid))} className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
                  </div>
                </div>
              </div>
              {/* price & delete */}
              <div className="hidden lg:flex flex-col items-end gap-5">
                <h3 className="scroll-m-20 text-sm font-semibold tracking-tight">
                  <span>Price:&nbsp;</span>&#36;{Math.floor(
                        item.discount > 0
                          ? (item.price - (item.price * item.discount) / 100) *
                              item.qty
                          : item.price * item.qty
                      )}
                </h3>
                <FiTrash onClick={() => dispatch(deletItem(item.uuid))} className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CartCard;
