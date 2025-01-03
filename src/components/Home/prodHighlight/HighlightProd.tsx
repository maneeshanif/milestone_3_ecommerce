"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface HighlightProdProps {
  _id: string;
  title: string;
  price: string;
  color: string;
  buttonTitle: string;
  buttonLink: string;
  ImageUrl: string;
}

const HighlightProd = () => {
  const [highlightProducts, setHighlightProducts] = useState<
    HighlightProdProps[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const response =
        await client.fetch(`*[_type == "highlight_product"] {title,price,color,buttonTitle,buttonLink,
  "ImageUrl" : highlights_image.asset-> url}`);
      setHighlightProducts(response);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlightProducts.map((item: HighlightProdProps, index) => (
        <div
          key={index}
          className="relative h-60 rounded-lg shadow-md cursor-pointer overflow-hidden group"
        >
          <Image
            src={item.ImageUrl}
            alt={item.title}
            width={500}
            height={500}
            className="w-full h-64 px-2 md:px-0 object-cover rounded-lg"
          />

          <div
            className="absolute inset-0  p-6 flex flex-col justify-between  h-full"
            style={{ color: item?.color }}
          >
            <div>
              <h3 className="text-2xl font-bold max-w-44">{item?.title}</h3>
              <p className="text-base font-bold mt-4"> From ${item?.price}</p>
            </div>
            <Link href="/product" className="text-base font-normal">
              {item.buttonTitle}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighlightProd;
