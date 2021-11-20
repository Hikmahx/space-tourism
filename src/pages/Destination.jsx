import React, { useEffect } from 'react'
import {destinations} from '../data.json'

const Destination = () => {
  let bgMobile = '/assets/destination/background-destination-mobile.jpg';
  let bgTablet = '/assets/destination/background-destination-tablet.jpg';
  let bgDesktop = '/assets/destination/background-destination-desktop.jpg';

  useEffect(() => {
    getDestination()
    // eslint-disable-next-line
  }, [])

  document.title = 'Space Tourism Destination'

  const getDestination = () =>{
    let tabLinks = document.querySelectorAll('.tab-link')

    let tabImg = document.querySelectorAll('.img-wrapper img');
    let tabHeader = document.querySelectorAll('.tab-body h2');
    let tabDesc = document.querySelectorAll('.tab-body p');
    let tabInfo = document.querySelectorAll('.tab-body .tab-info');
    
    tabImg[0].classList.add('active');
    tabHeader[0].classList.add('active');
    tabDesc[0].classList.add('active');
    tabInfo[0].classList.add('active');

    for (let number = 0; number < tabLinks.length; number++) {
      tabLinks[number].addEventListener('click', ()=>{
        tabLinks.forEach(link => {
          link.classList.remove('active');
        });
        tabImg.forEach(img => {
          img.classList.remove('active');
        });
        tabHeader.forEach(header=>{
          header.classList.remove('active');
        });
        tabDesc.forEach(desc=>{
          desc.classList.remove('active');
        });
        tabInfo.forEach(info=>{
          info.classList.remove('active');
        });
        
        tabLinks[number].classList.add('active');
        tabImg[number].classList.add('active');    
        tabHeader[number].classList.add('active');    
        tabDesc[number].classList.add('active');    
        tabInfo[number].classList.add('active');    
      })
    }
  }
    
  return (
    
    <div className="destination-wrapper lg:overflow-hidden">
      <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="background-img" />
      <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="background-img" />
      <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="background-img" />

      <div className="
        tabs relative mt-20 pt-2 xl:pt-0 pb-16 sm:pb-14 xl:pb-0 sm:mt-32 font-barlow text-white max-w-xs 
        sm:max-w-2xl lg:max-w-none mx-auto lg:flex lg:items-center lg:justify-center 
        xl:justify-between">
        <div className="container flex flex-col xl:flex-row text-center xl:text-left items-center justify-center mx-auto xl:px-20">
          <div className="tab-left w-4/5 sm:w-full xl:w-1/2 xl:px-2">
            <h1 className="uppercase text-base tracking-widest sm:text-2xl sm:text-left"><strong className="mr-4 text-grayish-blue xl:font-bold">01</strong>pick your destination</h1>

            <div className="img-wrapper w-full">
              {destinations.map(destination=>(
                <img key={destination.name} className="w-full max-w-2xl py-7 px-11 sm:pt-12 sm:px-44 xl:px-14 sm:pb-12 sm:mx-auto" src={`${destination.images.png.slice(1)}`} alt="tab-img" />
              ))}
            </div>
            
          </div>
          <div className="tab-right w-4/5 xl:w-1/2 mx-auto xl:mx-0 xl:pl-28 xl:pr-3">
          <ul className="tab-header text-light-blue flex items-center justify-center xl:justify-start tracking-widest text-sm sm:text-base mb-4 sm:mt-1">
            <li className="moon tab-link uppercase mx-4 lg:ml-0 active">Moon</li>
            <li className="mars tab-link uppercase mx-4">Mars</li>
            <li className="europa tab-link uppercase mx-4">Europa</li>
            <li className="titan tab-link uppercase mx-4">Titan</li>
          </ul>
          <div className="tab-body">
          {destinations.map(destination=>(
            <h2 key={destination.name}  className="uppercase font-belleFair text-6xl sm:text-7xl lg:text-8xl sm:mt-6 py-1 xl:mb-6">{destination.name}</h2>
          ))}
          {destinations.map(destination=>(
            <p key={destination.name}  className="text-light-blue leading-6 mb-3 sm:mt-4 sm:text-lg xl:text-xl sm:mb-5 xl:mb-7 xl:tracking-wider md:max-w-lg md:mx-auto">{destination.description}</p>
          ))}
            <div className="line my-6 bg-white w-full md:max-w-lg md:mx-auto"></div>
          {destinations.map(destination=>(           
            <div key={destination.name} className="tab-info mt-2 sm:mt-0 sm:flex sm:items-center sm:justify-around xl:justify-between md:max-w-lg md:mx-auto w-full">
              <div className="distance mb-8 sm:mb-0">
                <div className="text-light-blue text-sm sm:text-base tracking-widest mb-2">AVG. DISTANCE</div>
                <div className="uppercase font-belleFair text-2xl">{destination.distance}</div>
              </div>
              <div className="travel">
                <div className="text-light-blue text-sm sm:text-base tracking-widest mb-2">EST. TRAVEL TIME</div>
                <div className="uppercase font-belleFair text-2xl">{destination.travel} </div>
              </div>
            </div>
          ))}  
          </div>
          </div>          
        </div>
      </div>
    </div>      
  )
}

export default Destination
