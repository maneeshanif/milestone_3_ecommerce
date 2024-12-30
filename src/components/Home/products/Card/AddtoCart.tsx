// "use client";
// // Import necessary dependencies
// import { useEffect, useState } from "react";
// import {Plus,Minus} from "lucide-react";
// import toast from "react-hot-toast";
// import { twMerge } from "tailwind-merge";
// import { CardProps } from "./Card";
// import { useAtom } from "jotai"; // Jotai for state management
// import { productAtom } from "@/store/productAtom";
// import { cartAtom, addToCart, decreaseQuantity } from "@/store/cartAtom"; // Assuming you have these in the store
// // import PriceTag from "./PriceTag"; // Assuming you have the PriceTag component for displaying price

// const AddToCartBtn = ({
//   className,
//   title,
//   product,
//   showPrice = true,
// }: {
//   className?: string;
//   title?: string;
//   product?: CardProps;
//   showPrice?: boolean;
// }) => {
//   const [existingProduct, setExistingProduct] = useState<CardProps | null>(null);
//   const [Products] = useAtom(productAtom);
//   const [cartProduct, setCartProduct] = useAtom(cartAtom); // Jotai cart state

//   useEffect(() => {
//     const availableItem = cartProduct.find((item) => item?._id === product?._id);
//     setExistingProduct(availableItem || null);
//   }, [product, cartProduct]);

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart(product, setCartProduct); // Using the addToCart action
//       console.log("Product added to cart");
//       toast.success(`${product?.name.substring(0, 10)} added successfully!`);
//     } else {
//       toast.error("Product is undefined!");
//     }
//   };

//   const handleDeleteProduct = () => {
//     if (existingProduct) {
//       if (existingProduct?.quantity > 1) {
//         decreaseQuantity(existingProduct?._id, setCartProduct); // Using the decreaseQuantity action
//         toast.success(`${product?.name.substring(0, 10)} decreased successfully`);
//       } else {
//         toast.error("You cannot decrease less than 1");
//       }
//     }
//   };

//   const newClassName = twMerge(
//     "bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
//     className
//   );

// //   const getRegularPrice = () => {
// //     if (existingProduct) {
// //       return Products?.regularPrice * existingProduct?.quantity;
// //     } else {
// //       return product?.regularPrice;
// //     }
// //   };

// //   const getDiscountedPrice = () => {
// //     if (existingProduct) {
// //       return products?.discountedPrice * existingProduct?.quantity;
// //     } else {
// //       return product?.discountedPrice;
// //     }
// //   };

//   return (
//     <>
    
//       {existingProduct ? (
//         <div className="flex self-center items-center justify-center gap-2">
//           <button
//             onClick={handleDeleteProduct}
//             className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
//           >
//             <Minus />
//           </button>
//           <p className="text-base font-semibold w-10 text-center">
//             {existingProduct?.name.substring(0, 10)}
//           </p>
//           <button
//             onClick={handleAddToCart}
//             className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
//           >
//             <Plus />
//           </button>
//         </div>
//       ) : (
//         <button onClick={handleAddToCart} className={newClassName}>
//           {title ? title : "Add to cart"}
//         </button>
//       )}
//     </>
//   );
// };

// export default AddToCartBtn;
