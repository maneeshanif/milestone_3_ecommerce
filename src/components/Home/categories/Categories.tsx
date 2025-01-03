"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAtom } from "jotai";
import { categoryAtom } from "@/store/categoryAtom";

interface CategoryBanner {
  _id: string;
  product_name: string;
  ImageUrl: string;
}

const Categories = () => {
  const [categories] = useAtom(categoryAtom);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-0">
      <div className="my-10 ">
        <div className="flex items-center mt-6 justify-between ">
          <h1 className="font-bold  md:text-4xl"> Popular categories</h1>
          <Link
            href={"/product"}
            className="font-medium relative group overflow-hidden"
          >
            View All Categories{" "}
            <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 " />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-7">
        {categories.map((item: CategoryBanner) => (
          <Link
            href="/product"
            key={item._id}
            className="w-full h-auto relative group overflow-hidden"
          >
            <Image
              src={item?.ImageUrl}
              alt="categoryImage"
              width={200}
              height={200}
              className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
            />
            <div className="absolute bottom-3 w-full text-center">
              <p className="text-sm md:text-base font-bold">
                {item?.product_name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
