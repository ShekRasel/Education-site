import React from 'react'
import { IoMdPeople } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";

function Course() {
    const courses = [
        {image: 'images/image1.jpg',
            header: 'Full-stack Web Development',
            reach: '3.5k',
            view: '12k',
            rating: '5.0',
            price:'$99.00'
        },
        {image: 'images/image2.jpg',
            header: 'UX/UI Design',
            reach: '3k',
            view: '11k',
            rating: '5.0',
            price:'$39.00'
        },
        {image: 'images/image3.jpg',
            header: 'Modern JavaScript',
            reach: '35k',
            view: '16k',
            rating: '4.0',
            price:'$19.00'
        },
        {image: 'images/image4.jpg',
            header: 'Business Development',
            reach: '1.5k',
            view: '12k',
            rating: '4.0',
            price:'$93.00'
        },
        {image: 'images/image5.jpg',
            header: 'Email Marketing 101',
            reach: '2.5k',
            view: '4k',
            rating: '5.0',
            price:'$92.00'
        },
        {image: 'images/image4.jpg',
            header: 'Getting Started with Python',
            reach: '1.5k',
            view: '14k',
            rating: '3.0',
            price:'$9.00'
        },

        
    ];
  return (
    <div className=' px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-80 mt-16 md:mt-44'>
        <h1 className='text-center text-3xl md:text-5xl font-semibold'>Popular Courses</h1>
        <p className='mt-8 text-center text-lg font-semibold lg:px-64  text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, pariatur. Nesciunt obcaecati voluptatem ipsa eveniet.</p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-center'>
            {courses.map((course,index)=>(
                <div className='border bg-white rounded-md px-4 py-6 shadow-xl hover:shadow-2xl  ease-in-out delay-300 overflow-hidden transition-all' key={index}>
                    <img src={course.image} className='transition-transform ease-out duration-500 hover:scale-125'/>
                    <h1 className='text-2xl font-semibold mt-7 hover:text-orange-300'>{course.header}</h1>
                    <div className='mt-7 flex  items-center justify-between'>

                        <div className='flex items-center gap-3 md:gap-2 lg:gap-3'>
                            <IoMdPeople  className='p-1 text-2xl md:text-3xl border rounded-full'/>
                            <h2 className='text-sm'>{course.reach}</h2>
                        </div>
                        <div className='flex items-center gap-3 md:gap-2 lg:gap-3'>
                            <MdRemoveRedEye className='p-1 text-2xl md:text-3xl border rounded-full'/>
                            <h2 className='text-sm'>{course.view}</h2>
                        </div>
                        <div className='flex items-center gap-3 md:gap-2 lg:gap-3'>
                            <IoIosStarOutline className='p-1 text-2xl md:text-3xl border rounded-full'/>
                            <h2 className='text-sm'>{course.rating}</h2>
                        </div>

                        <h1 className='font-bold text-orange-400 shadow-sm md:text-xl'>{course.price}</h1>
        
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full flex justify-center'>
            <button className='border border-orange-300 px-10 py-4 rounded-full mt-16 text-lg font-semibold hover:text-orange-400'>View All Course</button>
        </div>
    </div>
  )
}

export default Course