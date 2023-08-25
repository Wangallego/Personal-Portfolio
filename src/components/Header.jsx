import React from 'react';

function Header() {
    return (
        <>
           <header className="flex justify-between items-center p-6 mx-auto h-full w-full">
        <h2 id="logo" className="text-2xl font-bold">Juan Basoa</h2>
        <img src="img/arrow.svg" alt="" className="flex md:hidden w-10 mr-6" />
        <ul className="hidden md:flex space-x-10 text-lg justify-center items-center">
            <li>
                <a href="index.html" className="text-gray-700 hover:text-gray-900 relative inline-block menu-link group">
                    Home
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </a>
            </li>
            <li>
                <a href="index.html" className="text-gray-700 hover:text-gray-900 relative inline-block menu-link group">
                    Portofolio
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-500 ease-in-out group-hover:w-full"></div>
                </a>
            </li>
            <li>
                <a href="index.html" className="text-gray-700 hover:text-gray-900 relative inline-block menu-link group">
                    About
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </a>
            </li>
            <li>
                <a href="index.html" className="text-gray-700 hover:text-gray-900 relative inline-block menu-link group">
                    Articles
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </a>
            </li>
            <li id="contacto" className="bg-blue-500 px-2 rounded py-1"><a href="contact.html" className="text-gray-700 hover:text-gray-900">Get In Touch</a></li>
        </ul>
    </header>
        </>
    );
}

export default Header;
