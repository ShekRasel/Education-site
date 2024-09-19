import React from 'react'
import { IoColorPaletteSharp } from "react-icons/io5";
import { SiMarketo } from "react-icons/si";
import { FaCamera } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { TbSeo } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";

function Catagories() {
    const cards = [{logo:<IoColorPaletteSharp/>,header:'Design'},
        {logo:<GiProgression />,header:'Development'},
        {logo:<SiMarketo/>,header:'Marketing'},
        {logo:<TbSeo />,header:'SEO'},
        {logo:<FaCamera />,header:'Photography'},
        {logo:<IoBarChart/>,header:'Business'},
        {logo:<FaMagnifyingGlass />,header:'Analysis'},
        {logo:<DiAndroid />,header:'IT & Software'}
    ]
  return (
    <div className=' px-4 sm:px-6 md:px-12 xl:px-16 2xl:px-80 mt-16 md:mt-44'>
        <h1 className='text-3xl md:text-5xl font-semibold text-center'>Top Catagories</h1>
        <p className='p-4 text-xl text-gray-400 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum qui neque delectus, ea assumenda, placeat fugiat quasi aspernatur tenetur est repellendus aliquid sint corrupti mollitia?
        </p>

        <div className='mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {cards.map((card,index)=>(
                <div className='p-6 py-10 rounded-sm shadow-md flex flex-col  items-center' key={index}>
                    <span className='text-center text-5xl'>{card.logo}</span>
                    <h1 className='text-2xl font-semibold text-center mt-6'>{card.header}</h1>
                </div>
            ))}
        </div>

        <div className='w-full flex justify-center'>
            <button className='border border-orange-300 px-10 py-4 rounded-full mt-16 text-lg font-semibold hover:text-orange-400'>View All Course</button>
        </div>

    </div>
  )
}

export default Catagories