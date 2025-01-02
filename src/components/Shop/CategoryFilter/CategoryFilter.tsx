"use client";

import React from "react";
import { useAtom } from "jotai";
import { productAtom } from "@/store/productAtom";
import { categoryAtom } from "@/store/categoryAtom";
import { selectedCategoryAtom } from "@/store/selectedcateAtom";
import { cn } from "@/lib/utils";
// import ProductCard from "@/components/Home/products/Card/Card";
// before <>
// this is the product card component so we need to import it
import Image from "next/image";
import { Star } from "lucide-react";
import ProdCardSide from "../../Home/products/Card/ProdCardside";
import AddToCartBtn from "../../Home/products/Card/AddtoCart";
// import { calculatePercentage } from "@/lib/utils";

const CategoryFilters = () => {
  const [products] = useAtom(productAtom); // Products
  const [categories] = useAtom(categoryAtom); // Categories array
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom); // Selected category
//   after card

    // Calculate the percentage discount
    const calculatePercentage = (regularPrice: number, discountedPrice: number) => {
      return ((regularPrice - discountedPrice) / regularPrice) * 100;
    };

    // here card ends


  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <div className="flex">
      {/* Sidebar for Categories */}
      <div className="hidden md:inline-flex flex-col gap-6">
        <p className="text-3xl font-bold">Filters</p>
        <div>
          <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] mb-2">
            Select Categories
          </p>
          <div className="flex flex-col gap-y-2 min-w-40">
            {/* All Categories Button */}
            <button
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200",
                selectedCategory === "All"
                  ? "text-green-500 decoration-green-500"
                  : "text-gray-500"
              )}
            >
              All Categories
            </button>

            {/* Render Category Buttons */}
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category.product_name)}
                className={cn(
                  "text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200",
                  selectedCategory === category.product_name
                    ? "text-green-500 decoration-green-500"
                    : "text-gray-500"
                )}
              >
                {category.product_name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1  my-4 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:gap-4">
        {filteredProducts.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          filteredProducts.map((product) => (
        

         
     
            // <div key={product._id} className="product-card">
            //   {/* <ProductCard product={product} /> */}
            //   {/* <h3>{product.name}</h3>
            //   <p>{product.discountedPrice}</p> */}

              
            // </div>

             <div key={product._id} >
             <div className="">
             <div  className="border  w-full border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black   cursor-pointer">
            <div className="w-44 h-60 relative p-2 group">
              <span
                // onClick={open}
                className="bg-black h-6  text-blue-600 absolute left-0 right-0 w-24 text-xs text-center py-1 rounded-md font-semibold hover:text-white focus:z-10"
              >
                 { `save ${calculatePercentage(product.regularPrice, product.discountedPrice).toFixed(2)}% `}
              </span>
              <Image
                // onClick={() => handleProduct()}
                src={product.ImageUrl}
                alt="Product Image"
                width={200}
                height={200}
                className="w-full h-full rounded-md object-cover  "
              />
              <ProdCardSide product={product} />
            </div>
            <div className="flex flex-col gap-2 px-2 pb-2">
              <h3 className="text-xs uppercase font-semibold text-gray-500">
                {product.category}
              </h3>
              <h2 className="text-lg font-bold line-clamp-2">{product.name}</h2>
              <div className="text-base text-gray-500 flex items-center">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>
              <div>
                <span className="text-md line-through text-gray-500 font-light">
                 {`$ ${product.regularPrice}.00`}
                </span>
                {product.regularPrice && (
                  <span className="text-lg text-blue-600  ml-2 ">
                      {`$ ${product.discountedPrice}.00`}
                  </span>
                )}
              </div>
              <div> 
                  <span className="text-md text-black">Stock:</span>
              <span className="text-md  text-gray-500"> {product.stock} left</span>
              </div>
              <AddToCartBtn  />
  
               
            
            </div>
      
          </div>
             </div>
             </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryFilters;

















// "use client";
// import React from "react";
// import Link from "next/link";
// import { useAtom } from "jotai";
// import { productAtom } from "@/store/productAtom";
// import { cn } from "@/lib/utils";

// const CategoryFilters = ({ id }: { id: string | undefined }) => {
//   const [products] = useAtom(productAtom);

//   // Extract unique categories from products
//   const categories = products
//     ? Array.from(new Set(products.map((product) => product.category)))
//     : [];

//   return (
//     <div className="hidden md:inline-flex flex-col gap-6">
//       <p className="text-3xl font-bold">Filters</p>
//       <div>
//         <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] mb-2">
//           Select Categories
//         </p>
//         <div className="flex flex-col gap-y-2 min-w-40">
//           {
//             categories.map((category) => (
//               <Link
//                 href={`/category/${category}`}
//                 key={category}
//                 className={cn(
//                   "text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200",
//                   category === id
//                     ? "text-green-500 decoration-green-500"
//                     : "text-gray-500"
//                 )}
//               >
//                 {category}
//               </Link>
//             ) )}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryFilters;
