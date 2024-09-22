import React from 'react'

function Contact() {
  return (
    <div className='px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-80 mt-16 md:mt-44 lg:flex gap-20' id='contact'>
        <div className=' md:w-3/5'>
            <h1 className='text-3xl md:text-5xl font-semibold mt-6'>Get In Touch</h1>
            <p className='font-semibold text-gray-500 mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consequatur quisquam necessitatibus obcaecati enim harum amet.</p>
            <h1 className='text-2xl font-semibold mt-4'>Hot Line Call Us 24/7</h1>
            <h1 className='text-2xl font-semibold mt-6'>01648936921</h1>
            <h1 className='text-2xl font-semibold mt-6'>swe.rasel@gmail.com</h1>
        </div>

        <div className=' w-full mt-8'>
            <form action="">
                <div className='md:flex gap-4'>
                    <input type="text" className='px-4 py-4 outline-orange-300 border rounded-md text-gray-500 w-full' placeholder='Name'/>
                    <input type="text" className='px-4 py-4 outline-orange-300 border rounded-md text-gray-500 w-full mt-4 md:mt-0' placeholder='Email'/>
                </div>
                <input type="text" className='px-4 py-4 outline-orange-300 border rounded-md text-gray-500 w-full mt-4' placeholder='Subject'/>
                <textarea type="text-area" className='h-32 px-4 pt-4  border outline-orange-300 mt-4 w-full' placeholder='Message'/>
                <div className='flex justify-end'>
                    <button className='px-8 py-3 font-semibold rounded-md bg-orange-400 text-white mt-6'> Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact