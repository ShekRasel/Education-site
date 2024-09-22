import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

function Instructor() {
    const[isOpen, setIsOpen]= useState(null);
    const instractors = [
        {photo:'images/instructor11.jpg', name: 'Jesika Parnendaj',designation: 'Expert Designer'},
        {photo: 'images/instructor2.jpg', name: 'Jesika Parnendaj',designation: 'Expert Designer'},
        {photo: 'images/instructor5.avif', name: 'Jesika Parnendaj',designation: 'Expert Designer'},
        {photo: 'images/instructor6.avif', name: 'Jesika Parnendaj',designation: 'Expert Designer'}
    ]

    const openSlider = (index)=>{
        setIsOpen(index);
    }

    const closeSlider = ()=>{
        setIsOpen(null);
    }
  return (
    <div className='px-6 md:px-12 xl:px-16 2xl:px-80 mt-14 md:mt-32 2xl:mt-44'>
        <h1 className='text-3x md:text-5xl font-semibold text-center'>Our Expert Instructors</h1>
        <p className='text-lg text-gray-400 mt-8 text-center md:px-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum eaque at saepe iusto, ducimus aperiam.</p>

        <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10'>
            {instractors.map((instractor,index)=>(
                <div
                className='shadow-md rounded-md' 
                key={index}
                onMouseEnter={()=>{openSlider(index)}}
                onMouseLeave={closeSlider}
                >
                    <div className=' relative'>
                    <img src={instractor.photo} alt="" className=' rounded-t-md'/>
                        <div className={`flex flex-col p-3 gap-4 border-l-4 border-orange-400 bottom-0 z-50 left-0 absolute bg-white transition-all transform origin-bottom overflow-hidden ease-in-out duration-300 ${isOpen === index  ? 'max-h-96 scale-y-125' : 'max-h-0 scale-y-0'}`}>
                                <span><FaFacebookF/></span>
                                <span><FaTwitter className=''/></span>
                                <span><FaCamera/></span>
                        </div>    
                    </div>

                    <div className=' relative pb-8'>
                        <h1 className='text-2xl mt-6 font-semibold text-center'>{instractor.name}</h1>
                        <h1 className='text-lg text-gray-400 text-center font-semibold mt-3'>{instractor.designation}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Instructor