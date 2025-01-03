"use client";
import { MdClose } from "react-icons/md";

// import { useAtom } from "jotai";
import { CardProps } from "../Home/products/Card/Card";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AddToCart from "../Home/products/Card/AddtoCart";
import FormattedPrice from "../cart/FormatedPrice";
import { useAtom } from "jotai";
import { favoriteProductsAtom } from "@/store/favprodAtom";
import Image from "next/image";

const FavoriteProductCard = ({ product }: { product: CardProps }) => {
  const [favoriteProducts, setFavoriteProducts] = useAtom(favoriteProductsAtom);
//  = useAtom();

  const removeFromFavorite = (id: string) => {
    setFavoriteProducts((prev) => prev.filter((product) => product._id !== id));



  }
  const router = useRouter();
  return (
    <div className="flex py-6">
      <div className="min-w-0 flex-1 lg:flex lg:flex-col">
        <div className="lg:flex-1">
          <div className="sm:flex">
            <div>
              {favoriteProducts.length === 0 && (
                <p className="text-sm text-gray-500">No favorite products</p>
              )}
              
              <h4 className="font-medium text-gray-900">{product?.name}</h4>
              <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse odio a reprehenderit tempora fugiat inventore voluptates, necessitatibus aperiam aut explicabo, ad, laborum assumenda tenetur!
              </p>
              <p className="text-sm mt-1">
                Brand: <span className="font-medium">First Class</span>
              </p>
              <p className="text-sm mt-1">
                Category:{" "}
                <span className="font-medium">{product?.category}</span>
              </p>
            </div>
            <span
              onClick={() => {
                removeFromFavorite(product?._id);
                toast.success("Removed from favorite successfully!");
              }}
              className="text-lg text-gray-600 hover:text-red-600 duration-200 cursor-pointer inline-block mt-4 sm:mt-0"
            >
              <MdClose />
            </span>
          </div>
          <div className="flex text-sm items-center gap-6 font-medium py-4">
            <AddToCart product={product} className="w-32" />
          </div>
        </div>
        <p>
          You are saving{" "}
          <span className="text-sm font-semibold text-green-500">
            <FormattedPrice
              amount={product?.regularPrice - product?.discountedPrice}
            />
          </span>{" "}
          upon purchase
        </p>
      </div>
      <div
        onClick={() => router.push(`/product/${product?._id}`)}
        className="ml-4 flex-shrink-0 h-20 w-20 sm:w-40 sm:h-40 sm:order-first sm:m-0 sm:mr-6 border border-gray-200 rounded-md hover:border-skyText duration-200 cursor-pointer group overflow-hidden"
      >
        <Image
          src={product?.ImageUrl}
          alt="productImage"
          width={200}
          height={200}
          className="h-full w-full rounded-lg object-cover object-center group-hover:scale-110 duration-200"
        />
      </div>
    </div>
  );
};

export default FavoriteProductCard;