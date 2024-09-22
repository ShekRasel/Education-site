import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';

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
    <div className='items-center z-40 fixed  transition-all ease-in-out w-full '>
      <div className={`flex justify-between w-full pb-1 px-4 pt-8 sm:px-12 xl:px-16 2xl:px-80 z-40 ${bgColor ? ' transition-all duration-500 ease-in-out bg-white':'transition-all duration-500 ease-in-out'}`}>
        <img src="Icons/logo.svg" className={`w-36 ${bgColor && '-translate-y-3 transition-all '}`} />

        <div className={`hidden lg:flex gap-6 xl:gap-8 items-center text-lg font-semibold ${bgColor && '-translate-y-3 transition-all duration-500'}`}>
          <ul className={`flex gap-6 xl:gap-8 ${bgColor ? 'text-black' : 'text-white'}`}>
            <li className='cursor-pointer'> 
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold text-xl"
                className=" hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link 
                to="course" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold  text-xl"
                className=" hover:text-orange-400"
              >
                Courses
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link 
                to="mentor" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold"
                className=" hover:text-orange-400"
              >
                Mentors
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link 
                to="blog" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold text-xl"
                className=" hover:text-orange-400"
              >
                Blog
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold text-xl"
                className=" hover:text-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button className='px-8 py-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold'>Get Started</button>
        </div>

        <div className={`lg:hidden ${bgColor ? '-translate-y-3 transition-all text-black': 'text-white'}`} onClick={openSlider}>
          <FaBars className='text-2xl' />
        </div>
      </div>

      {/* Shutter effect menu */}
      <div className={`transition-[max-height] duration-500 px-4 md:px-12 lg:hidden ease-in-out overflow-hidden ${hamBurgerMenu ? 'max-h-96' : 'max-h-0'}`}>
        <div className='bg-white px-4 py-4 font-semibold text-lg flex flex-col gap-2 shadow-lg'>
        <ul className={`flex flex-col gap-6 xl:gap-8`}>
            <li className='cursor-pointer'> 
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold text-xl"
                className=" hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link 
                to="course" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold  text-xl"
                className=" hover:text-orange-400"
              >
                Courses
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link 
                to="mentor" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold"
                className=" hover:text-orange-400"
              >
                Mentors
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link 
                to="blog" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold text-xl"
                className=" hover:text-orange-400"
              >
                Blog
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                activeClass="text-orange-400 font-bold text-xl"
                className=" hover:text-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button className='py-3 rounded-md bg-orange-400 hover:bg-orange-500 text-white text-lg font-semibold'>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
