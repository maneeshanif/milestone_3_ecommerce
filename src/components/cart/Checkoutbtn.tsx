import React from 'react'

const Checkoutbtn = () => {

  return (
    <div className="mt-6">
    {true ? (
      <button
        // onClick={handleCheckout}
        type="button"
        className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
      >
        Checkout
      </button>
    ) : (
      <>
        <button
          className="w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed"
          disabled
        >
          Checkout
        </button>
        <p className="mt-2 text-sm font-medium text-red-500 text-center">
          Need to sign in to make checkout
        </p>
      </>
    )}
  </div>
  )
}

export default Checkoutbtn
