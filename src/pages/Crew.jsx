import React from 'react'
import {crew} from '../data.json'

const Crew = () => {
  let bgMobile = '/assets/crew/background-crew-mobile.jpg'
  let bgTablet = '/assets/crew/background-crew-tablet.jpg'
  let bgDesktop = '/assets/crew/background-crew-desktop.jpg'

  return (
    <div>
      <div className="crew-wrapper lg:overflow-hidden">
        <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="" />
        <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="" />
        <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="" />

        <div className="relative slider mt-20 pb-28 md:pb-0 pt-1 font-barlow text-white lg:px-10 xl:px-20 xl:mx-20 lg:flex lg:flex-col lg:justify-end">
          <h1 className="uppercase mb-10 xl:mb-0 text-base sm:text-2xl xl:text-3xl text-center sm:text-left sm:px-10 lg:px-0 sm:pt-8 xl:mt-2 xl:absolute xl:top-24"><strong className="mr-4 text-grayish-blue xl:font-bold">02</strong>meet your crew</h1>
          <div className="container flex flex-col lg:flex-row text-center lg:text-left items-center justify-center mx-auto">

            <div className="slider-right md:order-2 w-4/5 xl:w-1/2 overflow-hidden">
              <div className="img-slider ADD FXN HERE">
              <div className="slider-img-wrapper xl:px-4 max-w-xl lg:max-w-2xl mx-auto flex flex-row">
                {crew.map(crew=>(
                <img key={crew.name} className="mx-2 px-16 sm:px-5 lg:px-0 xl:pl-6 xl:mx-auto" src={`${crew.images.png.slice(1)}`} alt="slider-img"/>         
                ))}
              </div>
              </div>
              <div className="line bg-white mx-auto md:hidden"></div>
            </div>
            <div className="slider-left md:order-1 w-4/5 xl:w-1/2 flex flex-col xl:mt-20 overflow-hidden">
              <div className="slider-info-wrapper order-2 md:order-1 flex flex-row">

                {crew.map(crew=>(
                  <div key={crew.name} className="slider-info">

                    <h2 className="uppercase font-belleFair text-2xl sm:text-4xl xl:text-6xl sm:mt-6 py-1 xl:mb-6 whitespace-nowrap">
                      <span style={{color:'#61636a'}} className="block text-base sm:text-3xl xl:text-3xl mb-1 sm:mb-3 xl:mb-5">
                        {crew.role}
                      </span>
                      <span className="block mb-3">
                        {crew.name}
                      </span>
                    </h2>
                    <p className="text-light-blue text-base sm:text-lg xl:text-xl max-w-lg xl:max-w-md mx-auto lg:mx-0 xl:tracking-wider">
                      {crew.bio}
                    </p>                  
                  </div>
                ))}
              </div>
              <div className="manual-navigation order-1 md:order-2 w-full h-auto flex items-center justify-center lg:justify-start mt-6 sm:mt-7 mb-4 xl:mt-28">
                <span className="btn btn-1 w-3 h-3 xl:w-4 xl:h-4 rounded-full m-2 xl:m-3 active"></span>
                <span className="btn btn-2 w-3 h-3 xl:w-4 xl:h-4 rounded-full m-2 xl:m-3"></span>
                <span className="btn btn-3 w-3 h-3 xl:w-4 xl:h-4 rounded-full m-2 xl:m-3"></span>
                <span className="btn btn-4 w-3 h-3 xl:w-4 xl:h-4 rounded-full m-2 xl:m-3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew
