import React from 'react'
// import bgMobile from './assets/technology/background-technology-mobile.jpg'
// import bgTablet from './assets/technology/background-technology-tablet.jpg'
// import bgDesktop from './assets/technology/background-technology-desktop.jpg'


const Technology = () => {
  let bgMobile ='/assets/technology/background-technology-mobile.jpg'
  let bgTablet ='/assets/technology/background-technology-tablet.jpg'
  let bgDesktop = '/assets/technology/background-technology-desktop.jpg'

  return (
    <div>
      <div className="crew-wrapper h-screen lg:overflow-hidden">
        <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="background-img" />
        <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="background-img" />
        <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="background-img" />
      </div>
    </div>
  )
}

export default Technology
