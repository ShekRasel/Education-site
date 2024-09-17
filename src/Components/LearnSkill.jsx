import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { PiCertificateBold } from "react-icons/pi";


function LearnSkill() {
    const SkillSet = [
        {   icon:<FaRegEdit className='text-7xl p-4 border rounded-full bg-white'/>,
            header: 'Learn Anything',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quo velit itaque assumenda repellat quibusdam.'
        },
        {   icon:<PiDotsNineBold className='text-7xl p-4 border rounded-full bg-white'/>,
            header: 'Large Collections',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quo velit itaque assumenda repellat quibusdam.'
        },
        {   icon:<PiCertificateBold className='text-7xl p-4 border rounded-full bg-white'/>,
            header: 'Certified Instruction',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quo velit itaque assumenda repellat quibusdam.'
        },
    ];
  return (
    <div className='px-4 md:px-12 xl:px-16 2xl:px-80 mt-14 md:mt-32 2xl:mt-44  text-black'>
        <h1 className='text-center text-3xl md:text-5xl font-semibold'>Learn New Skills</h1>
        <p className='mt-8 text-center text-lg font-semibold lg:px-64  text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, pariatur. Nesciunt obcaecati voluptatem ipsa eveniet.</p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-center'>
            {SkillSet.map((skill,index)=>(
                <div className='border bg-gray-50 rounded-md px-3 py-10 shadow-xl hover:shadow-2xl transition-all ease-in-out delay-300' key={index}>
                    <span className='flex justify-center'>{skill.icon}</span>
                    <h1 className='text-2xl font-semibold mt-5'>{skill.header}</h1>
                    <p className='font-semibold mt-5'>{skill.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LearnSkill