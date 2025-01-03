"use client";
import React , { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { productAtom , Product} from '@/store/productAtom';
import FormattedPrice  from '@/components/cart/FormatedPrice';
import FooterTop from '@/components/Footer/FooterTop';
import { Eye, Star } from 'lucide-react';
import { IoClose } from 'react-icons/io5';
import AddToCartBtn from '@/components/Home/products/Card/AddtoCart';

interface ProductPageProps {
    params: Promise<{
      _id: string;
    }>;
  }


const ProductPage=  ({params}: ProductPageProps) => {
  const [products] =  useAtom(productAtom);
  const [product1, setProduct] = useState<Product | null>(null);
  // const [imgUrl, setImgUrl] = useState<string [] | string>([""]);
  const [color, setColor] = useState<string>("");

  const colors = ["#000", "#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"];

  const normalizedImageUrls = Array.isArray(product1?.ImageUrl)
  ? product1.ImageUrl
  : product1?.ImageUrl
  ? [product1.ImageUrl]
  : [];


    const asyncProd = async ({params}: ProductPageProps , products : Product[]) => {
      const {_id} = await  params;
   
    const product = products.find((Product) => Product._id === _id);
    if (!product) {
        return <div>Product not found</div>;
    }
    
    setProduct(product);
    
    };
    useEffect(() => {
      asyncProd({params}, products);
    }, [params, products]);
    // asyncProd({params}, products);


    return (
        <>
        <div className="mx-auto max-w-screen-xl flex flex-col items-center px-2 md:px-0 py-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-start">
                <div>
                  {normalizedImageUrls.map((item : string, index : number) => (
                    <Image
                    src={item || '/images/placeholder.png'} 
                    alt={`Product image ${index}`}
                    key={index}
                    width={100} 
                    height={100} 
                    // className={}
                    // onClick={() => setImgUrl(item)}
                  />
                  ))}
                </div>
                <div >
                  <Image src={product1?.ImageUrl || '/images/placeholder.png'} alt={product1?.name || ""}  width={500} height={300}/>
  {/* {typeof  === 'string' ? (
    <Image src={imgUrl} alt="mainImage" />
  ) : (
    <Image src={imgUrl[0]} alt="mainImage" />
  )} */}
</div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">{product1?.name}</h2>
                <div className="flex items-center justify-between">
                {/* <FormattedPrice amount={product1?.discountedPrice || (product1?.regularPrice || 200) * 0.8 || (23)} /> */}
                  <FormattedPrice
                  amount={product1?.discountedPrice || product1?.regularPrice}
                    // regularPrice={product1?.regularPrice}
                    // discountedPrice={product1?.discountedPrice}
                    // className="text-xl"
                  />
                  <div className="flex items-center gap-1">
                    <div className="text-base text-lightText flex items-center">
                      <Star size={16} />
                      <Star size={16} />
                      <Star size={16} />
                      <Star size={16} />
                      <Star size={16} />
                    </div>
                    <p className="text-base font-semibold">{`(234 reviews)`}</p>
                  </div>
                </div>
                <p className="flex items-center">
                  <Eye className="mr-1" />{" "}
                  <span className="font-semibold mr-1">
                    34
                  </span>{" "}
                  peoples are viewing this right now
                </p>
                <p>
                  You are saving{" "}
                  <span className="text-base font-semibold text-green-500">
                    <FormattedPrice
                      amount={
                        (product1?.regularPrice || 200) -
                        (product1?.discountedPrice || 100)
                      }
                      // regularPrice={productData?.regularPrice}
                      // discountedPrice={productData?.discountedPrice}
                      // amount={
                      //   productData?.regularPrice! -
                      //   productData?.discountedPrice!
                      // }
                    />
                  </span>{" "}
                  upon purchase
                </p>
                <div>
                  {color && (
                    <p>
                      Color:{" "}
                      <span
                        className="font-semibold capitalize"
                        style={{ color: color }}
                      >
                        {color}
                      </span>
                    </p>
                  )}
                  <div className="flex items-center gap-x-3">
                    {colors.map((item) => (
                      <div
                        key={item}
                        className={`${
                          item === color
                            ? "border border-black p-1 rounded-full"
                            : "border-transparent"
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full cursor-pointer"
                          style={{ backgroundColor: item }}
                          onClick={() => setColor(item)}
                        />
                      </div>
                    ))}
                  </div>
                  {color && (
                    <button
                      onClick={() => setColor("")}
                      className="font-semibold mt-1 flex items-center gap-1 hover:text-red-600 duration-200"
                    >
                      <IoClose /> Clear
                    </button>
                  )}
                </div>
                <p>
                  Brand:{" "}
                  <span className="font-medium">First Class</span>
                </p>
                <p>
                  Category:{" "}
                  <span className="font-medium">{product1?.category}</span>
                </p>
                <AddToCartBtn
                  product={product1 ?? undefined}
                  title="Buy now"
                  className="bg-black/80 py-3 text-base text-gray-200 hover:scale-100 hover:text-white duration-200"
                />
                <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
                  <Image
                    src="/images/payment.png"
                    alt="payment"
                    className="w-auto object-cover"
                    width={200}
                    height={100}
                  />
                  <p className="font-semibold">
                    Guaranteed safe & secure checkout
                  </p>
                </div>
              </div>
            </div>




















            {/* <h1>{product1?.name}</h1>
            <Image src={product1?.ImageUrl || ""} alt={product1?.name || ""}  width={100} height={100}/>
            <p>{product1?.regularPrice}</p>
            <p>{product1?.discountedPrice}</p>
            <p>{product1?.category}</p>
            <p>{product1?.stock}</p> */}


        </div>

<FooterTop />
        </>
    );
};

export default ProductPage;



// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       this is the product page 
//     </div>
//   )
// }

// export default page
