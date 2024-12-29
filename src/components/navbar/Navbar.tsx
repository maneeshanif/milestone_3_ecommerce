"use client";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import { Heart, ShoppingBag, User } from "lucide-react";
import CategoryAcc from "../Home/Accordian/CategoryAcc";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Navbar = () => {
  return (
    <div className="w-full bg-white text-white md:sticky md:top-0 md:z-10">
      {/* logo and search bar */}
      <div className=" h-20  flex items-center px-4 md:px-0 justify-between max-w-screen-xl mx-auto">
        {/* item 1 Logo*/}

        <Link href="/" className="cursor-pointer ">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={200}
            className="w-44 "
          />
        </Link>

        {/* item 2 Search-Bar */}

        <div className="absolute inset-0 flex justify-center items-center h-20 ">
          <div className="hidden md:inline-block max-w-3xl w-full  ">
            <input
              type="text"
              placeholder="Search anything"
              className="w-full p-2  rounded-full border text-gray-900 text-md border-gray-300 focus:border-gray-500 focus:outline-none"
              onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                (e.target as HTMLInputElement).focus()
              }
            />
          </div>
        </div>
        {/* item 3 Cart */}
        <div className="flex  gap-x-6 ">
          <Link href="/login" className="relative block">
            <User className="hover:text-blue-300 text-black duration-200 cursor-pointer" />
            {/* <span className='inline-flex items-center justify-center bg-red-500 text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4'> */}

            {/* {cartProduct?.length > 0 ? cartProduct?.length : "0"}  */}
            {/* </span> */}
          </Link>
          <Link href="/cart" className="relative block">
            <Heart className="hover:text-blue-300 text-black duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-red-500 text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0{/* {cartProduct?.length > 0 ? cartProduct?.length : "0"}  */}
            </span>
          </Link>
          <Link href="/cart" className="relative block">
            <ShoppingBag className="hover:text-blue-300 text-black duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-red-500 text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0{/* {cartProduct?.length > 0 ? cartProduct?.length : "0"}  */}
            </span>
          </Link>
        </div>
      </div>
      {/* menu */}
      <div className="w-full bg-black h-12">
        <div className="max-w-4xl mx-auto flex justify-between items-center h-full">
          <CategoryAcc />
          {bottomNavigation.map(({ title, link }) => (
            <Link
              href={link}
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-white/90 hover:text-white duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-white absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 group-active:translate-x-0 duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
