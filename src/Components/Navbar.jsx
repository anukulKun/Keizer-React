import React from 'react'

function navbar() {
  return (
    <div className="text-white w-full items-center z-50 fixed flex flex-row bg-transparent pt-9 px-24">
          <div className='Logo w-[30%]'> Logo</div>
          <div className="flex flex-row gap-14 ml-auto w-[30%] text-white/85 ">
            <a className='hover:text-white' href="">Home</a>
            <a className='hover:text-white' href="">About Us</a>
            <a className='hover:text-white' href="">Services</a>
            <a className='hover:text-white' href="">Projects</a>
          </div>
          {/* <div className=' basis-[10%]'>  
            <button className=" rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border px-3 py-2 ">Let's Talk</button>
          </div> */}
    </div>
  )
}

export default navbar