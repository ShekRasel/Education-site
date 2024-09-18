import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [bgColor, setBgColor] = useState(false);
  const [hamBurgerMenu, setHamBurgerMenu] = useState(false);

  const bgChanger = () => {
    if (window.scrollY > 20) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', bgChanger);
  }, [])

  const openSlider = () => {
    setHamBurgerMenu(!hamBurgerMenu);
  }

  return (
    <div className='items-center z-40 fixed text-orange-400 transition-all ease-in-out w-full '>
      <div className={`flex justify-between w-full pb-1 px-4 pt-8 sm:px-12 xl:px-16 2xl:px-80 z-40 ${bgColor && 'bg-white text-black transition-all delay-150 ease-out'}`}>
        <img src="Icons/logo.svg" className={`w-36 ${bgColor && '-translate-y-3 transition-all'}`} />

        <div className={`hidden lg:flex gap-6 xl:gap-8 items-center text-lg font-semibold ${bgColor && '-translate-y-3 transition-all'}`}>
          <ul className='flex gap-6 xl:gap-8'>
            <li>Home</li>
            <li>Courses</li>
            <li>Mentors</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <button className='px-8 py-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold'>Get Started</button>
        </div>

        <div className={`lg:hidden ${bgColor && '-translate-y-3 transition-all'}`} onClick={openSlider}>
          <FaBars className='text-2xl' />
        </div>
      </div>

      {/* Shutter effect menu */}
      <div className={`transition-[max-height] duration-500 px-4 md:px-12 lg:hidden ease-in-out overflow-hidden ${hamBurgerMenu ? 'max-h-96' : 'max-h-0'}`}>
        <div className='bg-white px-4 py-4 font-semibold text-lg flex flex-col gap-2 shadow-lg'>
          <h1>Rasel</h1>
          <h1>Courses</h1>
          <h1>Mentor</h1>
          <h1>Blog</h1>
          <h1>Contact</h1>
          <button className='py-3 rounded-md bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold'>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
