import React from 'react'

const Login = () => {
  return (
    <div className="bg-gray-950 rounded-lg my-36  max-w-6xl md:mx-auto mx-2 ">
      <form
      
        className="max-w-5xl mx-auto pt-10 px-10 lg:px-0 text-white"
      >
        <div className="border-b border-b-white/10 pb-5">
          <h2 className="text-lg font-semibold uppercase leading-7">
            Registration Form
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            You need to provide required information to get register with us.
          </p>
        </div>
        <div className="border-b border-b-white/10 pb-5">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <h1 className='text-sm text-white'>Email</h1>
              <input
                type="email"
                name="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
              />
            </div>
            <div className="sm:col-span-3">
              <h1 className='text-sm text-white'>Password</h1>
              <input
                type="password"
                name="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
              />
            </div>
          </div>
        </div>
      
        <button
          type="submit"
          className="mt-5 bg-indigo-700 w-full py-2 uppercase text-base font-bold tracking-wide text-gray-300 rounded-md hover:text-white hover:bg-indigo-600 duration-200"
        >
            Login
        </button>
      </form>
      <p className="text-sm leading-6 text-gray-400 text-center -mt-2 py-10">
        Does not have an Account{" "}
        <button
          className="text-gray-200 font-semibold underline underline-offset-2 decoration-[1px] hover:text-white duration-200"
        >
          Register
        </button>
      </p>
    </div>
  )
}

export default Login
