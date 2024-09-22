import React from 'react'

function Hero() {
  return (
    <div className='lg:flex border-blue-700  h-[800px]  bg-slate-800' id='home'>
        <div className='w-1/2 hidden xl:block'>
          <img src="images/hero-img.png" alt="" className='= w-full h-full object-cover'/>
        </div>
        <div className='w-full h-full xl:w-1/2 bg-slate-800  relative'>
          <div className='w-full h-full'>
            <img src="images/edu.jpg" alt="" className=' bg-slate-800 w-full h-full opacity-20 object-cover'/>
          </div>

          <div className=' absolute top-0 left-0 z-20 text-white  2xl:w-3/4 pl-6 pr-2 sm:pl-14 lg:pl-40 xl:pl-24 2xl:pr-4 xl:pr-8 mt-24 md:mt-52 '>
            <div className='text-3xl sm:text-6xl font-bold'>
              <h1 className=''>Education and Online</h1>
              <h1> Course Site Template</h1>
            </div>
            <p className='font-bold pt-10 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Id, culpa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, id.</p>

            <button className='bg-white rounded-full px-9 py-4 text-black mt-10 font-semibold hover:bg-orange-400 transition-all delay-300 ease-out  hover:-translate-y-2 hover:text-white'>Courses</button>
          </div>
        </div>
    </div>
  )
}

export default Hero