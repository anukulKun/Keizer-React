import React, { useEffect } from 'react'
import Landing from './Pages/Landing'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Projects from './Pages/Projects'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
   
    const locomotiveScroll = new LocomotiveScroll();
  }, [])
  
  return (

    <>
      <Navbar/>
      <Landing />
      <Projects/>
      <About/>
    </>
    
  )
}

export default App