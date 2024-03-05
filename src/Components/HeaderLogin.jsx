import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-cyan-900">
            <div className=" mx-auto px-1 px-mx-4 flex justify-between items-center h-16">
                <Link to="/">
                    <img
                        src="../../public/logo5.png"
                        alt="logo"
                        className="h-8"
                    />
                </Link>



                <div className='relative'>
                        <button
                            onClick={toggleDropdown}
                            id="dropdownHoverButton"
                            data-dropdown-toggle="dropdownHover"
                            data-dropdown-trigger="click"
                            className="focus:outline-none text-center inline-flex items-center"
                            type="button"
                        >
                            <div className="flex flex-row items-center gap-2">
                                <div className=" inline-flex items-center justify-center w-10 h-10  bg-gray-100 rounded-full">
                                    <span class="font-medium text-gray-600 ">JL</span>
                                </div>
                                <div className="font-medium ">
                                    <div>Jese Leos</div>
                                </div>
                            </div>
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <div id="dropdownHover" className={`z-10 ${isDropdownOpen ? 'absolute' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHover">
                                <li>
                                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Cerrar sesión</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </header>
    )
}

export default Header;