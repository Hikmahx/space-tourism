import React, { useEffect } from 'react'
import {technology} from '../data.json'

const Technology = () => {
  let bgMobile ='/assets/technology/background-technology-mobile.jpg'
  let bgTablet ='/assets/technology/background-technology-tablet.jpg'
  let bgDesktop = '/assets/technology/background-technology-desktop.jpg'

  useEffect(()=>{
    getTechnologies()
    // eslint-disable-next-line    
  },[])

  document.title = 'Space Tourism Technology'

  
  const getTechnologies = ()=>{
    let techHeader = document.querySelectorAll('.tech-text h2')
    let techText = document.querySelectorAll('.tech-text p')
    let techImg = document.querySelectorAll('.tech-img-wrapper')
    let circles = document.querySelectorAll('.tech-number .circle')

    techHeader[0].classList.add('active')
    techText[0].classList.add('active')
    techImg[0].classList.add('active')

    for (let number = 0; number < circles.length; number++) {
      circles[number].addEventListener('click', ()=>{
        circles.forEach(circle=>{circle.classList.remove('active')})
        circles[number].classList.add('active')
        techHeader.forEach(header=>{
          header.classList.remove('active');
        })
        techText.forEach(text=>{
          text.classList.remove('active');
        })
        techImg.forEach(img=>{
          img.classList.remove('active')
        })

        techHeader[number].classList.add('active');
        techText[number].classList.add('active');
        techImg[number].classList.add('active');
      })
    }
  }


  return (
      <div className="tech-wrapper lg:overflow-hidden">
        <img className="absolute md:hidden top-0 bottom-0 w-full h-full" src={bgMobile} alt="background-img" />
        <img className="absolute hidden md:block lg:hidden top-0 bottom-0 w-full h-full" src={bgTablet} alt="background-img" />
        <img className="absolute hidden md:hidden lg:block top-0 bottom-0 w-full h-full" src={bgDesktop} alt="background-img" />

        <div className="lg:pl-16 xl:pl-40 technology relative mt-20 sm:mt-28 md:mt-32 font-barlow text-white pb-20 mb-1 md:mb-4 xl:mb-6">
        <h1 className="uppercase text-center md:text-left md:pl-8 lg:pl-0 text-base sm:text-2xl lg:text-3xl tracking-widest mb-9 md:mb-14 md:pb-1"><strong className="mr-4 text-grayish-blue xl:font-bold">03</strong>space launch 101</h1>          
          <div className="tech-container flex flex-col lg:flex-row text-center mx-auto lg:items-center">
            <div className="tech-imgs lg:w-2/5 lg:order-3 w-full mb-10 lg:mb-0">
            {technology.map(technology=>(
              <div key={technology.name} className="tech-img-wrapper">
                <img className="lg:hidden w-full" src={technology.images.landscape} alt="technology-img"/>
                <img className="hidden lg:block w-full" src={technology.images.portrait} alt="technology-img"/>                
              </div>
            ))}
            </div>
            <div className="tech-number z-10 lg:flex-1 lg:order-1 flex lg:flex-col items-center lg:items-start justify-center font-belleFair">
              <div className="circle active flex items-center justify-center w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-grayish-blue hover:border-white cursor-pointer transition-colors m-2 lg:m-3">
                <span className="md:text-lg lg:text-2xl xl:text-3xl">1</span>  
              </div>
              <div className="circle flex items-center justify-center w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-grayish-blue hover:border-white cursor-pointer transition-colors m-2 lg:m-3">
                <span className="md:text-lg lg:text-2xl xl:text-3xl">2</span>  
              </div>
              <div className="circle flex items-center justify-center w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-grayish-blue hover:border-white cursor-pointer transition-colors m-2 lg:m-3">
                <span className="md:text-lg lg:text-2xl xl:text-3xl">3</span>  
              </div>
            </div>

            <div className="tech-text lg:w-2/5 lg:order-2 lg:text-left mt-4 md:mt-9 lg:mt-0 lg:mr-4 xl:mr-0 lg:flex lg:flex-col justify-center xl:justify-start ">
              {technology.map(technology=>(
              <h2 key={technology.name} className="uppercase text-base text-light-blue sm:text-lg md:tracking-widest">
                the terminology...
                  <div className="font-belleFair text-white text-2xl sm:text-4xl xl:text-6xl pt-1 pb-4 md:pt-4 xl:pb-2  md:tracking-wide">
                    {technology.name}
                  </div>
              </h2>
              ))}
              {technology.map(technology=>(
                <p key={technology.name} className="text-base tracking-wider xl:tracking-widest text-light-blue px-6 lg:px-0 max-w-lg lg:max-w-md md:text-lg md:leading-7 lg:leading-8 mx-auto lg:mx-0">
                  {technology.description}
                </p>  
              ))}
            </div>


          </div>
        </div>
      </div>
  )
}

export default Technology
