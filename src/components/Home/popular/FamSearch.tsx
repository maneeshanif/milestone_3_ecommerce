import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const data = [
    {
        id: 1,
        name: "Smart Watches",
    },
    {
        id: 2,
        name: "Headphone",
    },
    {
        id: 3,
        name: "Cameras",
    },
    {
        id: 4,
        name: "Audio",
    },
    {
        id: 5,
        name: "Laptop & Computers",
    },
    {
        id: 6,
        name: "Cell Phones",
    }

]

const FamSearch = () => {
  return (
    <div className='max-w-screen-xl mx-auto md:px-0 px-2 '>
          <div className='my-10'>
        <div className='flex items-center justify-between'>
            <h1 className='font-bold text-4xl'> Popular Search</h1>
        </div>
         <div className='w-full h-[1px] bg-gray-200' />
         </div>
         {/* top search */}
         <div className='grid h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  w-auto   '>
           {data.map((item) => (
             <div key={item.id} className='flex rounded-full h-12 md:h-16 text-black border border-gray-300 bg-white hover:bg-black hover:text-white items-center justify-center'>
               <p className='text-sm font-semibold'>{item.name}</p>
             </div>
           ))}
         </div>
         {/*  brandbanner */}

         <div className="w-full py-5 md:py-0 my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden ">
        <Image
          src='/images/discountimg1.png'
          alt="discountedImgOne"
          width={200}
          height={200}
          className="hidden lg:inline-flex h-36"
        />
        <div className="flex flex-col flex-1 gap-1 items-center">
          <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
            <h2>Sony Headphone</h2>
            <Link
              href={"/product"}
              className="border border-red-600 px-4 py-2 text-xl md:text-3xl text-red-600 rounded-full"
            >
              Discount 20%
            </Link>
          </div>
          <p className="text-sm text-gray-600 font-medium">
            You’re out to play or stepping out to make
          </p>
        </div>
        <Image
          src= '/images/discountimg2.png'
          alt="discountedImgTwo"
          width={200}
          height={200}
          className="hidden lg:inline-flex h-36"
        />
      </div>
      {/* brands logo */}
      <div className="mt-7">
        <p className="font-bold text-2xl">Brands We Distribute</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-7">
          <div className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <Image
              src="/brands/brandOne.png"
              alt="brandOne"
              width={200}
              height={200}
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <Image
              src="/brands/brandTwo.png"
              alt="brandTwo"
              width={200}
              height={200}
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <Image
              src="/brands/brandThree.png"
              alt="brandThree"
              width={200}
              height={200}
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <Image
              src="/brands/brandFour.png"
              alt="brandFour"
              width={200}
              height={200}
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <Image
              src="/brands/brandFive.png"
              alt="brandFive"
              width={200}
              height={200}
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <Image
              src="/brands/brandSix.png"
              alt="brandSix"
              width={200}
              height={200}
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FamSearch
