
import React from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className="z-40 top-0 overflow-hidden h-screen">
        <Spline
          className=" hidden  sm:block w-full h-full scale-150"
          scene="https://prod.spline.design/BBqBOb17wDG41O97/scene.splinecode"
        />
    </div>
  );
}




