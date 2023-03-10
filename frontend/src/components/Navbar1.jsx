import React, { useEffect, useState } from 'react';
import navLogo from "../img/nav-logo.png";

import PowerIcon from '@mui/icons-material/Power';

const Navbar1 = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [height, setHeight] = useState("h-28");
    const [titleFlex, setTitleFlex] = useState("flex-col");
    
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    useEffect(() => {
        if (window.scrollY > 15) {
            setHeight("h-16");
            setTitleFlex("flex-row");
        }
        if (window.scrollY < 15) {
            setHeight("h-28");
            setTitleFlex("flex-col");
        }

    });



  return (
    <div className={`fixed top-0 w-screen ${height} bg-[#ebf0f0] z-10 transition-all duration-300 ease-linear`}>
        <nav className='flex justify-between items-center h-full container max-w-8xl px-8 py-2 mx-auto'>
            <div className='flex basis-1/3 h-full items-center'>
                <img src={navLogo} alt="iss" className='h-full ' />
                <div className={`flex ${titleFlex} flex-wrap ml-3 font-semibold transition-all duration-300 ease-linear`}>
                    <p className='mr-1'>İYTE</p>
                    <p className='mr-1'>Yazılım</p>
                    <p>Topluluğu</p>
                </div>
            </div>
            <div className='flex basis-1/3 justify-between'>
                <h3 className='cursor-pointer py-2 px-4 hover:bg-orange-600/10 rounded-xl transition duration-300'>Ana Sayfa</h3>
                <h3 className='cursor-pointer py-2 px-4 hover:bg-orange-600/10 rounded-xl transition duration-300'>Biz Kimiz?</h3>
                <h3 className='cursor-pointer py-2 px-4 hover:bg-orange-600/10 rounded-xl transition duration-300'>Etkinlikler</h3>
                <h3 className='cursor-pointer py-2 px-4 hover:bg-orange-600/10 rounded-xl transition duration-300'>S.S.S.</h3>
                <h3 className='cursor-pointer py-2 px-4 hover:bg-orange-600/10 rounded-xl transition duration-300'>İletişim</h3>
            </div>
            <div className='flex basis-1/3 justify-end'>
                <button className='py-2 px-4 rounded-lg bg-green-500 font-semibold'>
                    <div className='absolute ml-16 -mt-4 w-5 h-5 rounded-md bg-red-700 text-red-400 flex justify-center items-center text-sm'>0</div>
                    <div>Yarışmalar</div>
                </button>
                <button className='ml-2 py-2 px-4 rounded-lg bg-purple-400 transition-all duration-300 ease-linear hover:bg-purple-500 font-semibold'>Üye Ol</button>
                <button className='ml-2 py-2 px-4 rounded-lg bg-yellow-500 font-semibold'>
                    <PowerIcon style={{ height: "36px" }} className='absolute text-white/50 z-0 -ml-8 text-4xl' />
                    <p className='relative z-10'>Destekle</p>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar1