import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function OnlineLearn() {
  return (
    <div className='lg:flex px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-80 mt-16 md:mt-44 justify-between gap-8 items-center '>
        <div className='lg:w-1/2'>
            <h1 className='text-3xl md:text-5xl font-semibold '>Welcome To Online Learning</h1>
            <p className='text-lg text-gray-400 mt-7 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet ipsam aperiam in delectus ipsum sit quos repellendus harum? Velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore accusamus officiis nulla praesentium quasi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sint.</p>

            <div className='flex w-fit items-center  gap-2 mt-4 border-b border-orange-400 text-orange-400 hover:border-b-4 transition-all duration-300 cursor-pointer'>
                <h1 className='text-xl'>Read More</h1>
                <IoIosArrowRoundForward className='text-2xl mt-1 hover:translate-x-3 transition-all duration-300'/>
            </div>
        </div>

        <div className='lg:w-1/2 mt-10 md:mt-20 lg:mt-0'>
            <img src="images/welcome-img.png" alt="" />
        </div>
    </div>
  )
}

export default OnlineLearn