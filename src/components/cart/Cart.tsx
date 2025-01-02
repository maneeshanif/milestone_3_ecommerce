"use client";

import { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/cartAtom"; // Jotai atoms for state management
// import CartProduct from "@/components/CartProduct";
// import CheckoutBtn from "./Checkoutbtn";
import FormattedPrice from "./FormatedPrice";
// import { productAtom } from "@/store/productAtom";
import CartProduct from "./CartProd";

const Cart: React.FC = () => {
  const [totalAmt, setTotalAmt] = useState<{ regular: number; discounted: number }>({ regular: 0, discounted: 0 });
  const [cartProduct] = useAtom(cartAtom); // Jotai atom for cart products
  // const [Products] = useAtom(productAtom);
//   const [currentUser] = useAtom(userAtom); // Jotai atom for current user (if needed)

  const shippingAmt = 25;
  const taxAmt = 15;

  useEffect(() => {
    const totals = cartProduct.reduce(
      (sum, product) => {
        sum.regular += product?.regularPrice * product?.stock;
        sum.discounted += product?.discountedPrice * product?.stock;
        return sum;
      },
      { regular: 0, discounted: 0 }
    );
    setTotalAmt(totals);
  }, [cartProduct]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-0 py-6 md:py-10">
      {cartProduct.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

          <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            {/* Products Section */}
            <section className="lg:col-span-7">
              <div className="divide-y divide-gray-200 border-b border-t border-gray-200">
                {cartProduct.map((product) => (
                  <CartProduct product={product} key={product._id} />
                ))}
              </div>
            </section>

            {/* Order Summary Section */}
            <section className="mt-16 rounded-lg bg-gray-50 px-4  py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    <FormattedPrice amount={totalAmt.regular} />
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <FaQuestionCircle className="h-5 w-5 text-gray-400 ml-2" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    <FormattedPrice amount={shippingAmt} />
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <FaQuestionCircle className="h-5 w-5 text-gray-400 ml-2" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    <FormattedPrice amount={taxAmt} />
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Total Discount</dt>
                  <dd className="text-base font-medium text-gray-500">
                    <FormattedPrice amount={totalAmt.regular - totalAmt.discounted} />
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-lg font-bold text-gray-900">
                    <FormattedPrice amount={totalAmt.discounted + shippingAmt + taxAmt} />
                  </dd>
                </div>
              </dl>
              {/* <CheckoutBtn products={cartProduct} /> */}
            </section>
          </div>
        </>
      ) : (
        <div className="bg-white h-96 flex flex-col gap-2 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
          <p className="text-lg max-w-[600px] text-center text-gray-600 tracking-wide leading-6">
            Your cart is empty. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero ab nulla iure
            quibusdam obcaecati debitis minima explicabo quidem tenetur ad, voluptate iusto ratione natus. Maxime molestiae
            doloremque eaque nesciunt!
          </p>
          <Link
            href="/product"
            className="bg-gray-800 text-gray-200 px-8 py-4 rounded-md hover:bg-black hover:text-white duration-200 uppercase text-sm font-semibold tracking-wide"
          >
            Go to shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
