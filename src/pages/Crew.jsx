import React from 'react'
// import bgMobile from '../assets/crew/background-crew-mobile.jpg'
// import bgTablet from '../assets/crew/background-crew-tablet.jpg'
// import bgDesktop from '../assets/crew/background-crew-desktop.jpg'


const Crew = () => {
  let bgMobile = '/assets/crew/background-crew-mobile.jpg'
  let bgTablet = '/assets/crew/background-crew-tablet.jpg'
  let bgDesktop = '/assets/crew/background-crew-desktop.jpg'

  return (
    <div>
      <div className="crew-wrapper h-screen lg:overflow-hidden">
        <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="" />
        <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="" />
        <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="" />
      </div>
    </div>
  )
}

export default Crew
