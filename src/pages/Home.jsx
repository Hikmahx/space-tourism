import React from 'react'

const Home = () => {
  let bgMobile = '/assets/home/background-home-mobile.jpg';
  let bgTablet = '/assets/home/background-home-tablet.jpg';
  let bgDesktop = '/assets/home/background-home-desktop.jpg';

  document.title = 'Space Tourism'


  return (
    <main className="home-wrapper">
      <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="background-img" />
      <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="background-img" />
      <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="background-img" />
      
      <div className="hero relative h-full mt-24 pt-4 sm:mt-44 sm:pt-6 lg:mt-32 lg:p-0  font-barlow text-light-blue max-w-xs sm:max-w-lg lg:max-w-none mx-auto lg:flex lg:items-center lg:justify-center xl:justify-between">
        <div className="container px-6 xl:px-20 flex flex-col lg:flex-row text-center lg:text-left items-center xl:items-end justify-center mx-auto">
          <div className="flex-1 sm:pb-28 lg:pb-0 ">
            <h1 className="uppercase text-base xl:text-3xl">
            So, you want to travel to
            <div className="font-belleFair text-white text-7xl sm:text-9xl py-7">
            Space
            </div>
            </h1>
            <p className="text-lg px-2 xl:leading-8">
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center xl:justify-end py-16 lg:py-0">
            <div className="circle relative cursor-pointer bg-white w-36 h-36 sm:w-60 sm:h-60   rounded-full flex items-center justify-center">
              <p className="uppercase font-belleFair text-very-dark-blue text-xl sm:text-3xl lg:text-3xl xl:font-medium">Explore</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
