import React from 'react';
import LogoCanvas from './canvases/Logo';

const AboutUs = () => {
  return (
    <div className='h-screen flex flex-col justify-start items-center container max-w-xl mx-auto'>
      <br />
      <div className='h-2/3'>
        <LogoCanvas />
      </div>
      <div className=''>
        <h1 className='text-4xl'>Biz Kimiz?</h1>
      </div>
    </div>
  )
}

export default AboutUs