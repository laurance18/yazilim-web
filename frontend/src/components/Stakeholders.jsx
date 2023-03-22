import React from 'react';
import Cengo from "../assets/TRASH_BIN/cengo1.png";
import Iyte from "../assets/TRASH_BIN/iyte_logo-tur-232x232.png";
import Pyro from "../assets/TRASH_BIN/logo_black_alpha.png";
import Teknopark from "../assets/TRASH_BIN/teknopark_izmir.png";

const StakeHolder = ({ image, link }) => {
  return(
    <div className='bg-gray-300 flex items-center justify-center grayscale rounded-sm hover:grayscale-0 transition-all duration-200 ease-linear cursor-pointer'>
      <img src={image} alt="image" className='w-32 h-32 object-contain' />
    </div>
  )
}

const Stakeholders = () => {
  return (
    <div className='bg-gray-800 py-4'>
      <div className='flex flex-col justify-center container max-w-4xl mx-auto items-center'>
        <div className='my-12'>
          <h1 className='title text-center text-4xl text-white font-bold cursor-pointer'>Paydaşlarımız</h1>
          <div className='line'></div>
        </div>
        <div className='grid grid-cols-4 gap-4 w-full'>
          <StakeHolder image={Iyte} />
          <StakeHolder image={Teknopark} />
          <StakeHolder image={Cengo} />
          <StakeHolder image={Pyro} />
          {/* <StakeHolder image={} /> */}
        </div>
      </div>
    </div>
  )
}

export default Stakeholders