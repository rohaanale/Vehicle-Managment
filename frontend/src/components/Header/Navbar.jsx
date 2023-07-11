import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2"
                         className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 2"></path>
                    </svg>
                    <Link to="/"><span className="ml-3 text-xl">Vehicle Managment System (VMS)</span></Link>
                </a>
                <nav
                    className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link to="/"><a className="mr-5 hover:text-gray-900">HOME</a></Link>
                    <Link to="/vehicle"><a className="mr-5 hover:text-gray-900">VEHICLE</a></Link>
                    <Link to="/services"><a className="mr-5 hover:text-gray-900">SERVICES</a></Link>
                    <Link to="/reports"><a className="mr-5 hover:text-gray-900">REPORTS</a></Link>
                    <Link to="/contact-us"><a className="mr-5 hover:text-gray-900">CONTACT US </a></Link>
                </nav>
                <Link to="/login">
                    <button type="button"
                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">SIGN
                        IN
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
