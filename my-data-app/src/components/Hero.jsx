import React from "react";
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <>
        <div className="Hero text-white z-[10]">
            <div className='w-full text-center mt-[100px] mx-auto max-w-[800px] flex flex-col justify-center'>
                <p className='text-teal-500 uppercase font-bold text-sm p-1'>Growing with data Analytics</p>
                <h3 className='md:text-5xl sm:text-4xl text-2xl'>Grow with data.</h3>
                <div className='pt-2'>
                    <p className='text-xl font-medium inline mr-1'>Fast, flexible financing for</p>
                    <ReactTyped className="text-gray-500 font-bold" strings={['BTB', 'BTC', 'SASS']} typeSpeed={150} backSpeed={140} loop/>
                </div>
                <p className='p-3 md:text-2xl text-xl font-semibold text-gray-500 sm:w-[70%] sm:ml-[120px]'>Monitor your data analytics to increace revenue for BTB, BTC & SASS platforms.</p>
                <button className="bg-teal-500 p-2 font-medium text-xl rounded-md mt-4 w-[200px] px-6 mx-auto">Get Started</button>
            </div>
        </div>
    </>
  )
}

export default Hero