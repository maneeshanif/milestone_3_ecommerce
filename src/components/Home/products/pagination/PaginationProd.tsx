import React from 'react'
import { CardProps } from '../Card/Card';
import ProductCard from '../Card/Card'



const PaginationProd = ({
    total,
    current,
    onChange,
    products,
  }: {
    total: number;
    current: number;
    onChange: (page: number) => void;
    products: CardProps[]; // Replace with your product type
  }) => {
    const startOffset = (current - 1) * 15;
    const endOffset = current * 15;
  return (
    <div className="space-y-6">
        {/* Products Grid */}
                  <ProductCard  />
        
      {/* Pagination Controls */}
      <div className='flex items-center justify-between'>
      <div className="flex justify-start space-x-2">
        {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`px-4 py-2 rounded ${
              current === page ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}


      </div>
      <p>
          Products from {startOffset + 1} to{" "}
          {Math.min(endOffset, products.length)} of {products.length}
        </p>
        </div>
    </div>
  )
}

export default PaginationProd

