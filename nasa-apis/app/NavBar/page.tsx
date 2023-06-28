'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import openButton from '../../service/hamburgerMenu.svg';
import closeButton from '../../service/close.svg';
import nasaLogo from '../../service/nasaLogo.png';

const NavBar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gray-900 fixed top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image width={20} height={20} className="w-20" src={nasaLogo.src} alt="NASA Logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src={closeButton.src} width={30} height={30} alt="close button" />
                ) : (
                  <Image src={openButton.src} width={30} height={30} alt="open button" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'p-12 md:p-0 block' : 'hidden'
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center font-bold md:flex">
              <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/imageGalery" onClick={() => setNavbar(!navbar)}>
                  Image Gallery
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/apod" onClick={() => setNavbar(!navbar)}>
                  Picture of the Day
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/epic" onClick={() => setNavbar(!navbar)}>
                  Epic
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/marsImages" onClick={() => setNavbar(!navbar)}>
                  Mars Images
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
