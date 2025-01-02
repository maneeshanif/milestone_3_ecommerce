// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { useAtom } from 'jotai';
// import { productAtom } from '@/store/productAtom';
// import FooterTop from '@/components/Footer/FooterTop';
// import { NextPage } from 'next';

// interface ProductPageProps {
//     params: {
//       _id: string;
//     };
//   }

// const ProductPage: NextPage<ProductPageProps> = ({params}) => {
//     const id = params._id;
//     const [products] = useAtom(productAtom);
//     const product = products.find((product) => product._id === id);
//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         <>
//         <div className="mx-auto max-w-screen-xl flex flex-col items-center px-2 md:px-0 py-6">
//             <h1>{product.name}</h1>
//             <Image src={product.ImageUrl} alt={product.name}  width={100} height={100}/>
//             <p>{product.regularPrice}</p>
//             <p>{product.discountedPrice}</p>
//             <p>{product.category}</p>
//             <p>{product.stock}</p>


//         </div>

// <FooterTop />
//         </>
//     );
// };

// export default ProductPage;



import React from 'react'

const page = () => {
  return (
    <div>
      this is the product page 
    </div>
  )
}

export default page
