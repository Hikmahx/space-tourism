import React from 'react'
import {destinations} from '../data.json'

const Destination = () => {
  let bgMobile = '/assets/destination/background-destination-mobile.jpg';
  let bgTablet = '/assets/destination/background-destination-tablet.jpg';
  let bgDesktop = '/assets/destination/background-destination-desktop.jpg';

  
  return (
    
    <div className="destination-wrapper lg:overflow-hidden">
      <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="" />
      <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="" />
      <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="" />

      <div className="tabs relative mt-20 pt-2 pb-16 sm:mt-44 lg:mt-20  font-barlow text-white max-w-xs sm:max-w-lg lg:max-w-none mx-auto lg:flex lg:items-center lg:justify-center xl:justify-between">
        <div className="container flex flex-col lg:flex-row text-center lg:text-left items-center justify-center mx-auto">
          <div className="tab-left w-4/5 xl:w-1/2">
            <h1 className="uppercase text-base tracking-widest xl:text-3xl "><strong className="mr-4">01</strong>pick your destination</h1>

            <div className="img-wrapper w-full">
              <img className="w-full py-7 px-11" src={`${destinations[0].images.png.slice(1)}`} alt="tab-img" />
            </div>
            
          </div>
          <div className="tab-right w-4/5 xl:w-1/2 mx-auto xl:mx-0">
          <ul className="tab-header text-light-blue flex items-center justify-center xl:justify-start tracking-widest text-sm mb-4">
            <li className="tab-link uppercase mx-4 lg:ml-0 active">Moon</li>
            <li className="tab-link uppercase mx-4">Mars</li>
            <li className="tab-link uppercase mx-4">Europa</li>
            <li className="tab-link uppercase mx-4">Titan</li>
          </ul>
          <div className="tab-body">
            <h2 className="uppercase font-belleFair text-6xl lg:text-5xl py-1">{destinations[0].name}</h2>
            <p className="text-light-blue leading-6 mb-9">{destinations[0].description}</p>
            <div className="line my-6 bg-white w-full"></div>
            <div className="tab-info mt-8">
              <div className="distance mb-8">
                <div className="text-light-blue text-sm tracking-widest mb-2">AVG. DISTANCE</div>
                <div className="uppercase font-belleFair text-2xl">{destinations[0].distance}</div>
              </div>
              <div className="travel">
                <div className="text-light-blue text-sm tracking-widest mb-2">EST. TRAVEL TIME</div>
                <div className="uppercase font-belleFair text-2xl">{destinations[0].travel} </div>
              </div>
            </div>
          </div>
          </div>          
        </div>
      </div>
    </div>      
  )
}

export default Destination
