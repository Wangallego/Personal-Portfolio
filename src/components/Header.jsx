import { useState } from 'react';
import ContactList from '../components/ContactList';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar px-6 relative'>
      <h2 id="logo" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Juan Basoa</h2>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <li
          className={'text-indigo-400 font-bold relative inline-block menu-link group  mr-10'}
        >
          <Link to="/">Home</Link>
          <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
        </li>
        <li
          className={'text-indigo-400 font-bold relative inline-block menu-link group  mr-10'}
        >
          <Link to="#Portfolio">Portfolio</Link>
          <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
        </li> 
        <li className={'text-indigo-400 font-bold relative inline-block menu-link group  mr-10'}>
          <Link to="/articles">Articles</Link>
          <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
        </li>
        <ContactList />
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
          <ul className="list-none flex justify-start items-start flex-1 flex-col text-white">
            <li
              className={`text-white relative inline-block menu-link group mr-10`}
            >
              <Link to="/">Home</Link>
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li
              className={`text-white relative inline-block menu-link group mr-10`}
            >
              <Link to="/">Portfolio</Link>
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li
              className={`text-white relative inline-block menu-link group mr-10`}
            >
              <Link to="/">About</Link>
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <li
              className={`text-white relative inline-block menu-link group mr-10`}
            >
              <Link to="/articles">Articles</Link>
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </li>
            <ContactList />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;