import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {

  const [nav, setNav] = useState(true);

  const hundleNav = ()=>{
    setNav(!nav);
  }

  return (
    <>
        <div className='header text-white flex justify-between items-center h-24 max-w-[1250px] mx-auto px-4'>
            <h1 className={nav? 'text-teal-400 font-bold text-3xl mb-1': 'opacity-0'}>Finance</h1>
            <ul className='mainNav hidden md:flex'>
                <li className='p-2 m-2 cursor-pointer relative font-medium'>Home</li>
                <li className='p-2 m-2 cursor-pointer relative font-medium'>Company</li>
                <li className='p-2 m-2 cursor-pointer relative font-medium'>Resources</li>
                <li className='p-2 m-2 cursor-pointer relative font-medium'>Support</li>
                <li className='p-2 m-2 cursor-pointer relative font-medium'>Blog</li>
                <li className='p-2 m-2 cursor-pointer relative font-medium'>Contact</li>
                <li className='p-2 m-2 cursor-pointer relative font-medium'>About</li>
            </ul>
            <ul className={nav?'log md:flex':'hidden'}>
              <li className='p-2 m-2 cursor-pointer text-black bg-white rounded-full'><span className='p-3 font-medium text-sm text-center'>Login</span></li>
            </ul>
            <div onClick={hundleNav} className='block md:hidden z-[2]'>
              {!nav? <AiOutlineClose size={22} className='text-black cursor-pointer'/>: <AiOutlineMenu size={22} className='font-bold cursor-pointer'/>}
            </div>
            <div className={!nav ?'fixed top-0 right-0 w-[50%] max-w-[400px] z-[1] h-full border-r text-black border-r-gray-900 bg-[#fff] ease-in-out duration-200 rounded-l-md md:hidden': 'fixed right-[-100%]'}>
              <h1 className='text-black font-bold text-3xl m-6'>Finance</h1>
                <ul className='mobile font-medium p-4'>
                    <li className='myLi p-2 m-2 cursor-pointer border-b border-gray-500'>Home</li>
                    <li className='myLi p-2 m-2 cursor-pointer border-b border-gray-500'>Resources</li>
                    <li className='myLi p-2 m-2 cursor-pointer border-b border-gray-500'>Contact</li>
                    <li className='myLi p-2 m-2 cursor-pointer border-b border-gray-500'>About</li>
                </ul>
              <ul className='pt-[37%] ml-[20px]'>
                <button className='w-[95%] mb-4 pb-2 border text-sm border-black font-normal rounded-full p-1'>Login</button>
                <button className='w-[95%] border text-sm font-medium cursor-pointer text-white bg-teal-400 rounded-full p-[6px]'>Download for Android</button>
              </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar