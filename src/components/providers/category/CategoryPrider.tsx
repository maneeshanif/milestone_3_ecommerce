"use client";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { categoryAtom, CategoryBanner } from "@/store/categoryAtom";
import { client } from "@/sanity/lib/client";

const CategoryProvider = () => {
  const setCategories = useSetAtom(categoryAtom);

  useEffect(() => {
    const fetchData = async () => {
      const categories: CategoryBanner[] = await client.fetch(`
        *[_type == "category"] {
          _id,
          product_name,
          "ImageUrl": product_image.asset->url
        }
      `);
      setCategories(categories);
    };
    fetchData();
  }, [setCategories]);

  return null; 
};

export default CategoryProvider;
