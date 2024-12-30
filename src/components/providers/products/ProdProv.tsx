"use client";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { productAtom , Product } from "@/store/productAtom";
import { client } from "@/sanity/lib/client";

const Products = () => {
  const setProducts = useSetAtom(productAtom);

  useEffect(() => {
    const fetchData = async () => {
      const Products: Product[] = await client.fetch(`
          *[_type == "product"] {
          _id,
          name,
          "ImageUrl": images.asset->url ,
          regularPrice,
          discountedPrice,
          stock,
          category
        }
      `);
      setProducts(Products);
    };
    fetchData();
  }, [setProducts]);

  return null; 
}

export default Products
