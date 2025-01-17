import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AOS from  'aos'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 200,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App