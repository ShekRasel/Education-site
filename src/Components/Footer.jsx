import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
  return (

    <div className='px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-80 mt-16 md:mt-44'>

        <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:gap-0'>
            <div className=''>
                <img src="Icons/logo.svg" alt="" />
                <p className='mt-2 font-semibold text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga repellat aperiam dolore tempora neque quae!</p>
            </div>

            <div className=' md:ml-20'>
                <h1 className='text-xl font-semibold'>Quick Links</h1>
                <h2 className='text-lg font-semibold text-gray-500 mt-6'>Home</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>Courses</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>Events</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>Blog</h2>
            </div>

            <div className=' lg:ml-10'>
                <h1 className='text-xl font-semibold'>Our Courses</h1>
                <h2 className='text-lg font-semibold text-gray-500 mt-6'>Design</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>Development</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>Marketing</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>Seo Design</h2>
            </div>

            <div className='md:ml-20 lg:ml-0'>
                <h1 className='text-xl font-semibold'>Contact Us</h1>
                <h2 className='text-lg font-semibold text-gray-500 mt-6'>Phone:01648936921</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>Email:swe.rasel@gmail.com</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>Adress</h2>
                <h2 className='text-lg font-semibold text-gray-500 mt-2'>USA</h2>
            </div>
        </div>

        <div className='mt-12 border-t'>
            <div className='mt-8 mb-8 md:flex justify-between'>
                <h1 className='text-gray-500 font-semibold'>Designed and Developed by Shek Rasel</h1>
                <div className='flex gap-6 mt-4 md:mt-0'>
                    <span className='hover:text-orange-400 transition-all ease-in-out duration-500 text-xl'><FaFacebookF  /></span>
                    <span className='hover:text-orange-400 transition-all ease-in-out duration-500 text-xl'><FaTwitter  /></span>
                    <span className='hover:text-orange-400 transition-all ease-in-out duration-500 text-xl'><FaLinkedinIn  /></span>
                    <span className='hover:text-orange-400 transition-all ease-in-out duration-500 text-xl'><RiInstagramFill /></span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer