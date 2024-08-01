import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Spline from '../Components/Spline';
import Down from '../Components/Down';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TbRibbonHealth } from 'react-icons/tb';

function Landing() {
  const mainRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    if (mainRef.current && topRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,  // Element to trigger the animation
          start: 'top top',          // Start when top of the element is at the top of the viewport
          end: 'bottom center',      // End when bottom of the element is at the bottom of the 
          pin: true,                
          scrub: 5,                  // Smooth scrubbing
          markers:true
        },
      });

      // Animate the topRef element
      tl.to(topRef.current, {
        y: '100%', // Animate Y-axis to 100%
        ease: 'none', // Use a linear easing
      });
    }
  }, []);

  return (
    <div ref={mainRef}>
      <div  data-scroll  className='h-screen relative z-10 w-full'>
        <Spline />
        <Down />
        <div ref={topRef} className='w-full h-full absolute -top-[100%] bg-purple-400'></div>
      </div>
    </div>
  );
}

export default Landing;
