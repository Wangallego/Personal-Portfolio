import React from 'react';
import twitter from '../assets/twitter.svg';
import gitHub from '../assets/gitHub.svg';
import linkedin from '../assets/linkedin.svg';



function Footer() {
  return (
    <footer className="bg-black h-24 flex text-white justify-center items-center px-6 md:px-12 relative bottom-0 w-full">
      <div>
        <ul className="flex justify-center items-center space-x-6">
          <li className="flex space-x-2 items-center">
            <img src={twitter} alt="" className="bg-white rounded-full p-1 w-[1.8rem]" />
            <a href="https://twitter.com/home" target="_blank" className="text-white">Twitter</a>
          </li>
          <li className="flex space-x-2 items-center">
            <img src={gitHub} alt="" className="bg-white rounded-full p-1 w-[1.8rem]" />
            <a href="https://github.com/Wangallego" target="_blank" className="text-white">GitHub</a>
          </li>
          <li className="flex space-x-2 items-center">
            <img src={linkedin} alt="" className="bg-white rounded-full p-1 w-[1.8rem]" />
            <a href="https://www.linkedin.com/in/juan-basoa-37bab0253/" target="_blank" className="text-white">Linkedin</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
