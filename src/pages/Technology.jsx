import React from 'react'
import {technology} from '../data.json'

const Technology = () => {
  let bgMobile ='/assets/technology/background-technology-mobile.jpg'
  let bgTablet ='/assets/technology/background-technology-tablet.jpg'
  let bgDesktop = '/assets/technology/background-technology-desktop.jpg'

  return (
      <div className="tech-wrapper lg:overflow-hidden">
        <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="background-img" />
        <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="background-img" />
        <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="background-img" />

        <div className="technology relative mt-20 sm:mt-28 font-barlow text-white pb-20 mb-1">
        <h1 className="uppercase text-center lg:text-left text-base sm:text-2xl tracking-widest mb-9"><strong className="mr-4 text-grayish-blue xl:font-bold">03</strong>space launch 101</h1>          
          <div className="tech-container flex flex-col text-center mx-auto">
            <div className="tech-imgs w-full mb-10">
              <div className="tech-img-wrapper">
              <img className="lg:hidden w-full" src={technology[0].images.landscape} alt="technology-img"/>
              <img className="hidden lg:block w-full" src={technology[0].images.portrait} alt="technology-img"/>                
              </div>
            </div>
            <div className="tech-number flex items-center justify-center font-belleFair">
              <div className="circle flex items-center justify-center w-10 h-10 rounded-full border-2 border-white m-2">
                <span className="">1</span>  
              </div>
              <div className="circle flex items-center justify-center w-10 h-10 rounded-full border-2 border-white m-2">
                <span className="">2</span>  
              </div>
              <div className="circle flex items-center justify-center w-10 h-10 rounded-full border-2 border-white m-2">
                <span className="">3</span>  
              </div>
            </div>

            <div className="tech-title mt-4">
              <h2 className="uppercase text-base text-light-blue sm:text-xl">
                the terminology...
                <div className="font-belleFair text-white text-2xl sm:text-4xl pt-1 pb-4">
                  {technology[0].name}
                </div>
              </h2>
              <p className="text-base px-2 tracking-wider text-light-blue px-6 max-w-lg mx-auto">
                {technology[0].description}
              </p>
            </div>


          </div>
        </div>
      </div>
  )
}

export default Technology
