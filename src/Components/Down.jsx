import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";

function Down() {
  return (
    <>
        <div className='flex  flex-row z-20 absolute bottom-0 px-24 w-full pb-9 justify-around'>

            <div className='text-white w-[50%]  flex flex-col bg-transparent'>

                <h1 className='text-9xl'>Keizer</h1>
                <p className='pt-9 space-x-3 pl-2 text-white/85'>
                    <span>WEB2</span><span> \ </span><span>WEB3</span><span> \ </span><span>UI/UX</span><span> \ </span><span>3D</span>
                    </p>
            </div>

            <div className='text-white w-[50%]  flex flex-col  bg-transparent justify-center items-end  text-white/80'>

                <p className='pt-6 w-[45%] text-lg '>Crafting Awesome Stories and Killer Designs to Make Brand Stand Out</p>
                <div className='pt-5 w-full flex gap-2 justify-end pr-4 text-sm  '>
                    <button className='rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border px-6 py-3 border-white/50  hover:bg-white/90 hover:text-black font-semibold  '>Contact us</button>
                    <button className='rounded-full flex items-center gap-5  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-white/50 pl-6 pr-2  hover:bg-white/90 hover:text-black font-semibold  '><p>Get Started</p><FaCirclePlus className='size-8 text-blue-600 '/></button>
                </div>

            </div>
                
        </div>
       
    </>
  )
}

export default Down