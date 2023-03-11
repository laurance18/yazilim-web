import React from 'react';
import LogoCanvas from './canvases/Logo';

const AboutUs = () => {
  return (
    <div className='bg-gray-800 pb-20'>
      <div className='flex flex-col justify-start items-center container max-w-4xl mx-auto px-2'>
        <br/>
        <div className='h-3/5 mt-2 relative z-0'>
          <LogoCanvas />
        </div>
        <div className=''>
          <h1 className='relative z-10 text-4xl -mt-2 text-white'>Biz Kimiz?</h1>
        </div>
        <div className='text-center'>
          <p className='mt-8 text-white'>IYTE Yazılım Topluluğu 2011'de kurulmuş Bilgisayar Mühendisliği topluluğudur. Incididunt deserunt mollit ut eu eiusmod aliqua qui est est. Minim incididunt in exercitation eu. Adipisicing dolore quis ipsum anim tempor culpa mollit mollit magna. Laborum officia reprehenderit sunt duis non in incididunt occaecat sint sunt non veniam Lorem. In pariatur minim cupidatat reprehenderit aute amet aute do. Nisi magna consequat ut mollit elit id cupidatat veniam proident nulla et sint adipisicing. Duis magna incididunt in sint non Lorem enim minim dolor commodo labore.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs