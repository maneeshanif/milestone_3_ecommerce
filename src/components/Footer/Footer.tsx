import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-4 justify-between  md:px-0 px-4 mb-8'>
        <p>@2024 LuckyMart E-commerce  by manees. All rights reserved.</p>
        <Image src="/images/payment.png" alt="payment-img" className="object-cover" width={200} height={200} />
    </div>
  )
}

export default Footer
