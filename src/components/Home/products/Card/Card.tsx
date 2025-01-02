"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import { productAtom  } from '@/store/productAtom'
import { useAtom } from 'jotai'
// import { atom, useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Star } from "lucide-react";
import ProdCardSide from "./ProdCardside";
import AddToCartBtn from "./AddtoCart";
// import FormattedPrice from "@/components/formatted-price";

// import AddToCartBtn from "@/components/add-to-cart-btn";
// import { ProductProps } from "@/types";

// Jotai Atom for global search state
// const searchTextAtom = atom("");

export interface CardProps {
   
        name: string;
        ImageUrl: string;
        regularPrice: number;
        discountedPrice: number;
        _id: string;
      
        category: string;
     
        stock: number;
 
}

const ProductCard = ( ) => {
    const [items] = useAtom(productAtom)
  const [isOpen, setIsOpen] = useState(false);
//   const [searchText, setSearchText] = useAtom(searchTextAtom);
//   const router = useRouter();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const calculatePercentage = (regularPrice: number, discountedPrice: number) => {
    return ((regularPrice - discountedPrice) / regularPrice) * 100;
  };


//   const handleProduct = () => {
//     router.push(`/product/${items._id}`);
//     // setSearchText("");
//   };

  return (
    <div className="  grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  md:gap-4 ">
      {items.map((item) => (
        <div key={item._id} className="border  w-full border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black  cursor-pointer">
          <div className="w-44 h-60 relative p-2 group">
            <span
              onClick={open}
              className="bg-black h-6  text-blue-600 absolute left-0 right-0 w-24 text-xs text-center py-1 rounded-md font-semibold hover:text-white focus:z-10"
            >
               { `save ${calculatePercentage(item.regularPrice, item.discountedPrice).toFixed(2)}% `}
            </span>
            <Image
              // onClick={() => handleProduct()}
              src={item.ImageUrl}
              alt="Product Image"
              width={200}
              height={200}
              className="w-full h-full rounded-md object-cover  "
            />
            <ProdCardSide product={item} />
          </div>
          <div className="flex flex-col gap-2 px-2 pb-2">
            <h3 className="text-xs uppercase font-semibold text-gray-500">
              {item.category}
            </h3>
            <h2 className="text-lg font-bold line-clamp-2">{item.name}</h2>
            <div className="text-base text-gray-500 flex items-center">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
            <div>
              <span className="text-md line-through text-gray-500 font-light">
               {`$ ${item.regularPrice}.00`}
              </span>
              {item.regularPrice && (
                <span className="text-lg text-blue-600  ml-2 ">
                    {`$ ${item.discountedPrice}.00`}
                </span>
              )}
            </div>
            <div> 
                <span className="text-md text-black">Stock:</span>
            <span className="text-md  text-gray-500"> {item.stock} left</span>
            </div>
            <AddToCartBtn   />

             
          
          </div>
          <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Hurry up!</DialogTitle>
              </DialogHeader>
              <p className="mt-2 text-sm text-gray-400">
                You are going to save{" "}
                <span className="text-green-500">
                  {/* <FormattedPrice
                    amount={item.regularPrice - item.discountedPrice}
                  /> */}
                </span>{" "}
                on this product.
              </p>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                consequatur?
              </p>
              <div className="mt-4">
                <Button variant="secondary" onClick={close}>
                  Got it, thanks!
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
  
};

export default ProductCard;
