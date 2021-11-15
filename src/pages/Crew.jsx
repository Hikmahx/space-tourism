import React from 'react'
import {crew} from '../data.json'

const Crew = () => {
  let bgMobile = '/assets/crew/background-crew-mobile.jpg'
  let bgTablet = '/assets/crew/background-crew-tablet.jpg'
  let bgDesktop = '/assets/crew/background-crew-desktop.jpg'

  return (
    <div>
      <div className="crew-wrapper xl:min-h-screen lg:overflow-hidden">
        <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="" />
        <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="" />
        <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="" />

        <div className="relative slider mt-20 pb-28 pt-1 font-barlow text-white xl:px-20">
          <h1 className="uppercase mb-10 text-base sm:text-2xl text-center sm:text-left"><strong className="mr-4 text-grayish-blue xl:font-bold">02</strong>meet your crew</h1>
          <div className="container flex flex-col xl:flex-row text-center xl:text-left items-center justify-center mx-auto">

            <div className="slider-right md:order-2 w-4/5 xl:w-1/2">
              <div className="slider-img-wrapper px-16 max-w-24">
                <img className="px-2" src={`${crew[0].images.png.slice(1)}`} alt="slider-img"/>         
              </div>
              <div className="line bg-white mx-auto md:hidden"></div>
            </div>
            <div className="slider-left md:order-1 w-4/5 xl:w-1/2 flex flex-col">
              <div className="slider-info order-2 md:order-1">
                <h2 className="uppercase font-belleFair text-2xl sm:text-7xl lg:text-8xl sm:mt-6 py-1 xl:mb-6">
                  <span style={{color:'#61636a'}} className="block text-base mb-1">
                    {crew[0].role}
                  </span>
                  <span className="block mb-3">
                    {crew[0].name}
                  </span>
                </h2>
                <p className="text-light-blue text-base">
                  {crew[0].bio}
                </p>
              </div>
              <div className="manual-navigation order-1 md:order-2 w-full h-auto flex items-center justify-center lg:justify-start mt-6 mb-4">
                <span className="btn btn-1 w-3 h-3 rounded-full m-2 active"></span>
                <span className="btn btn-2 w-3 h-3 rounded-full m-2"></span>
                <span className="btn btn-3 w-3 h-3 rounded-full m-2"></span>
                <span className="btn btn-4 w-3 h-3 rounded-full m-2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew
