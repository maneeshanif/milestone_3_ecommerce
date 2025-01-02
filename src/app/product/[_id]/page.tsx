"use client";
import React from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { productAtom , Product} from '@/store/productAtom';
import FooterTop from '@/components/Footer/FooterTop';

interface ProductPageProps {
    params: Promise<{
      _id: string;
    }>;
  }


const ProductPage=  ({params}: ProductPageProps) => {
  const [products] =  useAtom(productAtom);
  const [product1, setProduct] = React.useState<Product | null>(null);
    const asyncProd = async ({params}: ProductPageProps , products : Product[]) => {
      const {_id} = await  params;
   
    const product = products.find((Product) => Product._id === _id);
    if (!product) {
        return <div>Product not found</div>;
    }
    // return product;
    setProduct(product);
    };
    asyncProd({params}, products);


    return (
        <>
        <div className="mx-auto max-w-screen-xl flex flex-col items-center px-2 md:px-0 py-6">
            <h1>{product1?.name}</h1>
            <Image src={product1?.ImageUrl || ""} alt={product1?.name || ""}  width={100} height={100}/>
            <p>{product1?.regularPrice}</p>
            <p>{product1?.discountedPrice}</p>
            <p>{product1?.category}</p>
            <p>{product1?.stock}</p>


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
