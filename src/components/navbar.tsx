"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { NavigationMenuDemo } from "./navlinks";
import { DropdownMenuDemo } from "./droplink";
import Image from "next/image";
import HoverCardDemo from "./cart";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/app/store/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <header className=" ">
      <div className="max-w-[90%] mx-auto ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block " href="/">
              <span className="sr-only">Home</span>
              <Image src={"/logo12.svg"} alt={"svg"} width={50} height={50} />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <div>
                <NavigationMenuDemo />
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {/* <Link
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="#"
                            >
                                Login
                            </Link> */}

              {/* Cart Section */}
              <Link href={"/cart"} className="">
                <div className="group flex flex-col-reverse ">
              
                  {/* <HoverCardDemo /> */}
                  <ShoppingCart />
                  {cart.length > 0 && (
                    <span className="badge badge-sm font-semibold indicator-item bg-myBlackPara text-OffWhite group-hover:text-OffWhite group-hover:bg-Coffee3 p-2 w-7 h-4">
                      {cart.length}
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Drop down navbar */}
            <div className="block md:hidden">
              <Button className="rounded bg-gray-100 hover:bg-OffWhite p-2 text-gray-600 transition ">
                <DropdownMenuDemo />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
