import React from 'react'
import RocketSvg from '../../assets/rocket.svg'
import PlanetsSvg from '../../assets/planets.svg'
import CloudsSvg from '../../assets/clouds.svg'
import { data } from 'autoprefixer'

const Hero = () => {

  const CloudBG1 = {
    backgroundImage : `url(${CloudsSvg})`,
    backgroundSize : 'contain',
    backgroundRepeat : 'no-repeat',
    backgroundPosition : 'bottom',
    transition: 'ease-in-out',
  }
  return (
    <>
      <div style={CloudBG1} className='bg-primary text-white flex items-center justify-center min-h-[630px] overflow-hidden relative'>
        <div className='container grid md:grid-cols-2 place-items-center' >
          {/* text section */}
          <div>
            <p
              data-aos="fade-up"
              className='text-center md:text-left space-y-6 py-10 md:py-0 relative z-10'>EXPLORE THE UNIVERSE</p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className='text-4xl md:text-6xl font-bold relative z-10'>Start Exploring <br /> All over the <span>Space</span></h1>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className='text-center md:text-left space-y-6 py-10 md:py-0 relative z-10'>Start to Explore in the Space, Navigate and Discover all the wonders of space</p>
            <div>
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                className='px-8 py-2 rounded-full shadow-custom-inset bg-secondary hover:scale-105 transition duration-200'>
                  Get Started
              </button>
            </div>
          </div>
          {/* animated rocket */}
          <div>
            <div data-aos="fade-up-right" data-aos-delay="700" data-aos-duration="1000" className='relative z-10'>
              <img
                src={RocketSvg}
                alt=""
                className='max-h-[500px] relative z-10 animate-rocket'/>
            </div>
            {/* planets */}
            <img 
              src={PlanetsSvg}
              alt=""
              className='absolute top-32 left-1/3 opacity-70 h-[250px]'
              data-aos="fade"
              data-aos-delay="600"
              data-aos-offset="0"
              data-aos-ease="ease-out-quad"
              data-aos-duration="700"
            />
            <img 
              src={PlanetsSvg}
              alt=""
              className='absolute -top-10 -left-20 opacity-70 h-[70px]'
            />
          </div>
        </div>
        {/* animated clouds */}
        <img src={CloudBG1} alt="" className='absolute bottom-[180px] md:bottom-[-100px] left-10 h-96 opacity-100'/>
      </div>
    </>
    
  )
}

export default Hero