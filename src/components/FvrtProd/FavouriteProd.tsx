"use client";
import { useAtomValue } from "jotai";
import { favoriteProductsAtom } from "@/store/favprodAtom";
// import FavoriteProduct from "../ui/FavoriteProduct";
import Link from "next/link";
import FavoriteProductCard from "./FavouriteCard";

const Favorite = () => {
  const favoriteProduct = useAtomValue(favoriteProductsAtom);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-0 py-10">
      {favoriteProduct?.length > 0 ? (
        <div>
          <div className="border-b border-b-gray-300 pb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Favorite Products
            </h2>
            <p className="mt-2 text-sm text-gray-500 max-w-[500px] tracking-wide">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              ut commodi ipsam provident numquam, odit cupiditate, incidunt cum
              pariatur excepturi dicta laboriosam error quo dolore libero.
              Maxime ad laborum libero?
            </p>
          </div>
          <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
            <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
              {favoriteProduct?.map((product) => (
                <FavoriteProductCard key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-3xl flex-col gap-3 items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Nothing added to Favorite
          </h2>
          <p className="text-lg tracking-wide leading-6 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            harum ducimus, quod amet pariatur omnis ex dolorem, distinctio
            molestiae aspernatur iste aperiam nostrum tempore accusamus modi
            quos culpa corrupti ea.
          </p>
          <Link
            href="/product"
            className="w-full mt-2 rounded-md border border-transparent px-8 py-3 text-base font-medium text-amber-900 bg-gray-100 sm:w-auto hover:bg-black hover:text-white duration-200"
          >
            Add Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorite;
