import React from 'react'
import { useState } from 'react'
import { navLinks} from '../constants'
import menu from '../assets/menu.svg'

import close from '../assets/close.svg'


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
  
    return (
      <nav className='w-full flex py-6 justify-between items-center navbar px-6'>
        <h2 id="logo" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Juan Basoa</h2>
  
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`text-indigo-400 font-bold relative inline-block menu-link group   ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </a>
            </li>
          ))}
          <li id="contacto" className="bg-indigo-400 px-2 rounded py-1 ml-10 font-medium">
            <a href="mailto:juanbc06@gmail.com" className="text-white">
              Get In Touch
            </a>
          </li>
        </ul>
  
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[32px] bg-gradient-to-br from-blue-400 via-indigo-300 to-slate-400 p-2 rounded-lg  h-[32px] object-contain cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />
  
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } justify-center items-center p-6 bg-gradient-to-br from-blue-400 via-indigo-300 to-slate-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-gray-900 ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
export default NavBar