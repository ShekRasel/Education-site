import React from 'react'

function Blog() {
    const blogs = [
        {
            image : 'images/blog-1.jpg',
            header : 'Modern website design tools',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam error dicta.'
        },
        {
            image : 'images/blog-2.jpg',
            header : 'How to install SSL',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam error dicta recusandae .'
        },
        {
            image : 'images/blog-3.jpg',
            header : 'Getting started with Figma',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam.'
        }
    ]
  return (
    <div className=' px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-80 mt-16 md:mt-44'>
        <h1 className='text-3xl md:text-5xl font-semibold'>From The Blog</h1>
        <p className='mt-6 font-semibold text-gray-400 md:w-2/3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam error dicta recusandae consequuntur magnam id a. Temporibus, fugit eaque?</p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6  mt-10'>
            {
                blogs.map((blog)=>(
                    <div className=' overflow-hidden shadow-md hover:shadow-lg transition-shadow ease-in-out duration-300'>
                        <img src={blog.image} className='rounded-t-md transition transform hover:scale-110  overflow-hidden ease-in-out duration-300' alt="" />
                        <h1 className='text-2xl font-semibold mt-10  px-4'>{blog.header}</h1>
                        <p className='text-lg font-semibold mt-4 text-gray-500 px-4'>{blog.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blog