import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";


function Navbar() {
  const [bgColor, setBgColor] = useState(false);

  const bgChanger = ()=>{
    if(window.scrollY > 20){
      setBgColor(true);
    }else{
      setBgColor(false);
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',bgChanger);
  },[])

  return (
    <div className={`px-4 sm:px-12 xl:px-16 2xl:px-80 z-40  flex justify-between fixed text-orange-400 pt-6 transition-all ease-in-out w-full  ${bgColor && 'bg-white text-black transition-all delay-150 ease-out '}`}>

        <img src="Icons/logo.svg" className={`w-36 ${bgColor && '-translate-y-3 transition-all'}`} />

        <div className={`hidden lg:flex gap-6 xl:gap-8 items-center text-lg font-semibold  ${bgColor && '-translate-y-3 transition-all'}`}>
            <ul className='flex gap-6 xl:gap-8'>
                <li>Home</li>
                <li>Courses</li>
                <li>Mentors</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            
            <button className='px-8 py-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold'>Get Started</button>
        </div>

      <div className='lg:hidden'>
          <FaBars/>
      </div>
        
    </div>
  )
}

export default Navbar