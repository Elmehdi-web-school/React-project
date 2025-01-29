import React from 'react'
import Laptop from '../assets/laptop.jpg';


const Analytics = () => {
  return (
    <>
        <div className="Analytics w-full bg-white my-40 py-10 px-4">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img data-aos='zoom-in' data-aos-duration='500' data-aos-once-='true' src={Laptop} alt="laptop" className='w-[500px] mx-auto my-4'/>
                <div className='flex flex-col justify-center'>
                    <p data-aos='zoom-out' data-aos-duration='500' data-aos-once-='true' className='text-teal-500 font-bold '>DATA ANALYTICS DASHBOARD</p>
                    <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once-='true' className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p data-aos='zoom-out' data-aos-duration='500' data-aos-once-='true'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <button data-aos='zoom-in' data-aos-duration='500' data-aos-once-='true' className='bg-black text-teal-500 w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Analytics