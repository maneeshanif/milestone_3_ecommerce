import  Link  from "next/link";

import FormattedPrice from "../cart/FormatedPrice";
import AddToCartBtn from "../Home/products/Card/AddtoCart";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { useAtom } from "jotai";

import Image from "next/image";
import { CardProps } from "../Home/products/Card/Card";
import { cartAtom } from "@/store/cartAtom";

const CartProduct = ({ product }: { product: CardProps }) => {
  const [favoriteProducts, setRemoveProduct] = useAtom(cartAtom);

const handleRemoveProduct = () => {
  if (product) {
    console.log('Cart before removal:', favoriteProducts);
    console.log('Removing product with ID:', product._id);

    setRemoveProduct((prev) => {
      const updatedCart = prev.filter((item) => item._id !== product._id);
      console.log('Updated cart:', updatedCart);
      toast.success(`${product?.name.substring(0, 20)} deleted successfully!`);
      return updatedCart;
    });

  }
};



  favoriteProducts.map((product) => {
    if (product._id === product._id) {
      return 'product already in favorite';
    }
    // console.log(product); 
  });
  
  return (
    <div className="flex py-6 sm:py-10">
      <Link href={`/product/${product?._id}`}>
        <Image
          src={product?.ImageUrl}
          alt="productImage"
          width={100}
          height={100}
          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48 border border-skyText/30 hover:border-skyText duration-300"
        />
      </Link>
      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
          <div className="flex flex-col gap-1 col-span-3">
            <h3 className="text-base font-semibold w-full">
              {product?.name.substring(0, 80)}
            </h3>
            <p className="text-xs">
              Brand: <span className=" font-medium">Lalan Tap</span>
            </p>
            <p className="text-xs">
              Category: <span className="font-medium">{product?.category}</span>
            </p>
            <div className="flex items-center gap-6 mt-2">
              <p className="text-base font-semibold">
                <FormattedPrice
                  amount={product?.discountedPrice * product?.stock}
                />
              </p>
              <AddToCartBtn product={product} showPrice={false} />
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute right-0 top-0">
              <button
                onClick={handleRemoveProduct}
                className="-m2 inline-flex p-2 text-gray-600 hover:text-red-600"
              >
                <IoClose className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* {product?.isStock && (
            <p className="mt-4 flex space-x-2 text-sm text-gray-700">
              <FaCheck className="text-lg text-green-500" />{" "}
              <span>In Stock</span>
            </p>
          )} */}
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
      </div>
    </div>
  );
};

export default CartProduct;