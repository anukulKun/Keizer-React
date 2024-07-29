import React from 'react'
import Navbar from '../Components/Navbar'
import Spline from '../Components/Spline'

import Down from '../Components/Down'

function Landing() {
  return (
    <>
      <div className='h-screen '>
        <Navbar/>
        <Spline />

        <Down />
      </div>
    </>
  )
}

export default Landing