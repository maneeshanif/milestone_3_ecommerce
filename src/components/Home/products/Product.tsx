"use client";

import Link from 'next/link'
import React,{ useState } from 'react'
import PaginationProd from './pagination/PaginationProd'
import { useAtom } from 'jotai'
import { productAtom  } from '@/store/productAtom'
// import ProductCard from './Card/Card'

const ProductSection = () => {
  const [products] = useAtom(productAtom);
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  


  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="max-w-screen-xl mx-auto h-auto ">
        {/* title */}
       <div className='my-10'>
        <div className='flex items-center justify-between'>
            <h1 className='font-bold text-4xl'> Top Selling Products</h1>
            <Link href={'/product'} className='text-sm relative font-semibold text-black group'>View All</Link>
            <span className='absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300'></span>
        </div>
         <div className='w-full h-[1px] bg-gray-200' />
       </div>
         {/* products */}
        <PaginationProd 
          products={products}
          current={currentPage}
          total={totalPages}
          onChange={(page) => setCurrentPage(page)}
        
        />
          {/* <ProductCard  /> */}

    </div>
  )
}

export default ProductSection
