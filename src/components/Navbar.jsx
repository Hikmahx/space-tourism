import React from 'react'
import logo from '../assets/shared/logo.svg'

const Navbar = () => {
  return (
    <header className='absolute lg:top-10 z-10 pl-16 flex items-center justify-between w-full font-barlow'>
      <div className='wrapper relative flex items-center justify-between w-full'>
        <div className='logo w-2/5'>
          <img className='' src={logo} alt='logo' />
        </div>
        <div className='header-line absolute left-28 z-10 bg-white hidden lg:block'></div>
        <div className="hamburger"></div>
        <nav className="menu flex-1 ">
          <ul className='flex items-center justify-center text-white pr-8 uppercase h-24 lg:text-md font-thin'>
            <li className="mx-2 lg:mx-3 xl:mx-5 h-full flex items-center active">
              <a href='/'><strong className="mr-2 sm:hidden xl:inline">00</strong> Home</a>
            </li>
            <li className="mx-2 lg:mx-3 xl:mx-5 h-full flex items-center">
              <a href='/destination'><strong className="mr-2 sm:hidden xl:inline">01</strong> Destination</a>
            </li>
            <li className="mx-2 lg:mx-3 xl:mx-5 h-full flex items-center">
              <a href='/crew'><strong className="mr-2 sm:hidden xl:inline">02</strong> Crew</a>
            </li>
            <li className="mx-2 lg:mx-3 xl:mx-5 h-full flex items-center">
              <a href='/technology'><strong className="mr-2 sm:hidden xl:inline">03</strong> Technology</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
