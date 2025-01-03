import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useAtom } from "jotai";
import { categoryAtom } from "@/store/categoryAtom";
import Link from "next/link";

const CategoryAcc = () => {
  const [categories] = useAtom(categoryAtom);
  return (
    <div className="h-10 border text-gray-400 hover:text-white  rounded-md p-2 relative">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          {/* Accordion Trigger */}
          <AccordionTrigger className="inline-flex items-center justify-center text-sm w-36 px-1 py-1.5 font-normal font-poppins text-white hover:bg-gray-700 rounded-md">
            Select Category
          </AccordionTrigger>

          {/* Accordion Content */}
          <AccordionContent className="absolute mt-1 z-50">
            <div className="text-sm p-1 w-60 font-semibold border border-gray-400 rounded-md bg-black text-gray-200">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="flex items-center gap-x-2 p-2"
                >
                  <Image
                    src={category.ImageUrl}
                    alt={category.product_name}
                    width={20}
                    height={20}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <p className="text-gray-200 font-thin hover:text-white hover:pointer">
                    <Link href="/product">
                    {category.product_name }
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CategoryAcc;
