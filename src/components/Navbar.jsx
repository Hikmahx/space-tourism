import React from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

const Navbar = ({displayMenu}) => {
  return (
    <header className='absolute lg:top-10 z-10 sm:pl-12 sm:ml-2 flex items-center justify-between w-full font-barlow'>
      <div className='wrapper relative flex items-center justify-between w-full'>
        <div className='logo lg:w-2/5 p-6 sm:p-0'>
          <img src={logo} alt='logo' />
        </div>
        <div className='header-line absolute left-28 z-10 bg-white hidden lg:block'></div>
        <div onClick={displayMenu} className="hamburger-menu z-10 m-6 sm:m-0 sm:hidden cursor-pointer flex flex-col items-center">
          <img className="hamburger-icon w-full" src={hamburger} alt="icon" />
          <img className="close-icon w-full" src={close} alt="icon" />
        </div>
        <nav className="menu flex-1 absolute sm:relative top-0 pt-28 sm:pt-0 pl-8 sm:pl-0 right-0 left-24 lg:left-0 ">
          <ul className='flex sm:items-center sm:justify-center text-white pr-8 uppercase h-screen sm:h-24 flex-col sm:flex-row text-lg lg:text-base font-thin'>
            <li className="mx-2 lg:mx-3 xl:mx-5 lg:h-full flex items-center my-3 active">
              <a href='/' className="whitespace-nowrap"><strong className="mr-2 sm:hidden xl:inline font-semibold">00</strong> Home</a>
            </li>
            <li className="mx-2 lg:mx-3 xl:mx-5 lg:h-full flex items-center my-3">
              <a href='/destination' className="whitespace-nowrap"><strong className="mr-2 sm:hidden xl:inline font-semibold">01</strong> Destination</a>
            </li>
            <li className="mx-2 lg:mx-3 xl:mx-5 lg:h-full flex items-center my-3">
              <a href='/crew' className="whitespace-nowrap"><strong className="mr-2 sm:hidden xl:inline font-semibold">02</strong> Crew</a>
            </li>
            <li className="mx-2 lg:mx-3 xl:mx-5 lg:h-full flex items-center my-3">
              <a href='/technology' className="whitespace-nowrap"><strong className="mr-2 sm:hidden xl:inline font-semibold">03</strong> Technology</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
