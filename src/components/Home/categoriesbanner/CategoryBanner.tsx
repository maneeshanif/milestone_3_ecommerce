"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAtom } from "jotai";
import { categoryAtom } from "@/store/categoryAtom";

interface CategoryBanner {
  _id: string;
  product_name: string;
  ImageUrl: string;
}

const CategoryBanner = () => {
  const [categories] = useAtom(categoryAtom);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="max-w-screen-xl mx-auto"
    >
      <CarouselContent className="-ml-1">
        {categories.map((category: CategoryBanner) => (
          <CarouselItem
            key={category._id}
            className=" basis-1/2 md:basis-1/3 lg:basis-1/6"
          >
            <Link
              href="/"
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center w-full gap-x-2 p-1 border  border-gray-100  flex-1 rounded-md hover:border-blue-400 hover:shadow-lg">
                    <div className="flex items-center gap-x-2">
                      <Image
                        src={category.ImageUrl}
                        alt="categoryImage"
                        width={100}
                        height={100}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold text-black">
                        {category.product_name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block hover:text-white hover:bg-black" />
      <CarouselNext className="hidden md:block hover:text-white hover:bg-black" />
    </Carousel>
  );
};

export default CategoryBanner;
