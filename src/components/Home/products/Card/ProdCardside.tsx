"use client";
import { useEffect, useState } from "react";
import { Heart, Eye } from "lucide-react"; 
import Link from "next/link";
import { useAtom } from "jotai"; 
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast"; 
import { CardProps } from "./Card";
import { productAtom } from "@/store/productAtom";
import { favoriteProductsAtom } from "@/store/favprodAtom";

const ProdCardSide = ({ product }: { product?: CardProps }) => {
  const [products] = useAtom(productAtom);
  const [favoriteProducts, setFavoriteProducts] = useAtom(favoriteProductsAtom);
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the product is in the favorite list
  useEffect(() => {
    if (products) {
      const exists = favoriteProducts.some((item) => item?._id === product?._id);
      setIsFavorite(exists);
    }
  }, [products, favoriteProducts, product]);

  // Add or remove product from favorites
  const toggleFavorite = () => {
    if (products) {
      setFavoriteProducts((prev: CardProps[]) => {
        const exists = prev.some((item) => item?._id === product?._id);
        if (exists) {
          const remMsg =  `${product?.name.substring(0, 10)}  has been removed from Favorites.`
        
          toast.error(remMsg );
          return prev.filter((item) => item?._id !== product?._id);
        } else if (product) {
          const secMsg = `${product.name.substring(0, 10)} has been added to Favorites.`
          toast.success(secMsg);
          return [...prev, product];
        }
        return prev;
      });
    }
  };

  return (
    <div className="absolute right-1 top-1 flex flex-col gap-2 transition-transform translate-x-12 ">
      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={cn(
          "w-11 h-11 flex items-center justify-center rounded-full text-black",
          "hover:text-white hover:bg-black duration-200 "
        )}
        aria-label="Toggle Favorite"
      >
        {isFavorite ? <Heart className="fill-red-500 " /> : <Heart />}
      </button>

      {/* View Button */}
      <button
        className="w-11 h-11 flex items-center justify-center rounded-full text-black hover:text-white hover:bg-black duration-200"
        aria-label="View Product"
      >
        <Link href={`/product/${product?._id}`} >
        <Eye  />
        </Link>
      </button>
    </div>
  );
};

export default ProdCardSide;
























































// "use client";
// import { useEffect, useState } from "react";
// import { Heart, Eye } from "lucide-react"; // Lucide icons
// import {  useAtom } from "jotai"; // Jotai for state management
// import { cn } from "@/lib/utils";
// import { toast } from "react-hot-toast";
// // import { useToast } from "@/hooks/use-toast"
// ; // shadcn toast
// import { CardProps } from "./Card";
// import { productAtom } from "@/store/productAtom";

// import { favoriteProductsAtom } from "@/store/favprodAtom";


// const ProdCardSide = ({ product }: { product?: CardProps }) => {
//   const [products] = useAtom(productAtom);

//   // const { toast } = useToast()
//   const [favoriteProducts, setFavoriteProducts] = useAtom(favoriteProductsAtom);
//   const [isFavorite, setIsFavorite] = useState(false);


//   // Check if the product is in the favorite list
//   useEffect(() => {
//     if (products) {
//       const exists = favoriteProducts.some((item) => item?._id === product?._id);
      
//       setIsFavorite(exists);
//     }
//   }, [products, favoriteProducts, product]);

//   // Add or remove product from favorites
//   const toggleFavorite = () => {
//     if (products) {
//       setFavoriteProducts((prev: CardProps[]) => {
//         const exists = prev.some((item) => item?._id === product?._id);
//         if (exists) {
          
//           toast({
//             title: "Removed from Favorites",
//             description: `${product?.name.substring(0, 10)} has been removed.`,
//           });
//           return prev.filter((item) => item?._id !== product?._id);
//         } else if (product) {
//           toast({
//             title: "Added to Favorites",
//             description: `${product.name.substring(0, 10)} has been added.`,
//           });
//           return [...prev, product];
//         }
//         return prev;
//       });
//     }
//   };

//   return (
//     <div className="absolute right-1 top-1 flex flex-col gap-2 transition-transform translate-x-12 ">
//       {/* Favorite Button */}
//       <button
//         onClick={toggleFavorite}
//         className={cn(
//           "w-11 h-11 flex items-center justify-center rounded-full text-black",
//           "hover:text-white hover:bg-black duration-200 "
//         )}
//         aria-label="Toggle Favorite"
//       >
//         {isFavorite ? <Heart className="fill-red-500 " /> : <Heart />}
//       </button>

//       {/* View Button */}
//       <button
//         className="w-11 h-11 flex items-center justify-center rounded-full text-black hover:text-white hover:bg-black duration-200"
//         aria-label="View Product"
//       >
//         <Eye />
//       </button>
//     </div>
//   );
// };

// export default ProdCardSide;
