import React, { useEffect, useState } from 'react';
import navLogo from "../img/nav-logo.png";
import navLogo1 from "../assets/images/logo-colorful.png";
import navLogo2 from "../assets/images/a.png";

import { useNavigate } from 'react-router-dom';

import PowerIcon from '@mui/icons-material/Power';

const Navbar1 = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [height, setHeight] = useState("h-20");
    const [titleFlex, setTitleFlex] = useState("flex-col");
    
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    useEffect(() => {
        if (window.scrollY > 15) {
            setHeight("h-16");
            setTitleFlex("text-[10px]");
        }
        if (window.scrollY < 15) {
            setHeight("h-20");
            setTitleFlex("text-[12px]");
        }

    });

    const navigation = useNavigate();

  return (
    // bg-[#ebf0f0]
    <div className={`fixed top-0 w-screen ${height} bg-gradient-to-tl from-[#ebad4e] to-[#ff534f] z-50 transition-all duration-300 ease-linear shadow-xl`}>
        <nav className='flex justify-between items-center h-full container max-w-9xl px-8 py-2 mx-auto'>
            <div className='flex basis-1/3 h-full items-center'>
                <img src={navLogo2} alt="iss" className='h-full ' />
                <div className={`flex flex-col ${titleFlex} flex-wrap ml-3 font-semibold transition-all duration-300 ease-linear`}>
                    <p className='text-white'>İYTE</p>
                    <p className='text-white'>Yazılım</p>
                    <p className='text-white'>Topluluğu</p>
                </div>
            </div>
            <div className='flex basis-1/3 justify-between text-sm'>
                <h3 onClick={() => navigation("/")} className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Ana Sayfa</h3>
                <h3 onClick={() => navigation("/about")} className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Biz Kimiz?</h3>
                <h3 onClick={() => navigation("/events")} className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Etkinlikler</h3>
                <h3 onClick={() => navigation("/sss")} className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>S.S.S.</h3>
                <h3 className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>İletişim</h3>
                <h3 className='cursor-pointer text-white py-2 px-4 hover:shadow-xl hover:bg-white/10 rounded-xl transition duration-300'>Forum</h3>
            </div>
            <div className='flex basis-1/3 justify-end'>
                <button className='py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-300 shadow-xl'>
                    <div className='absolute ml-16 -mt-4 w-5 h-5 rounded-md bg-red-700 text-red-400 flex justify-center items-center text-sm'>0</div>
                    <div>Yarışmalar</div>
                </button>
                <button className='ml-2 py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-300 shadow-xl'>Üye Ol</button>
                <button className='ml-2 py-2 px-4 rounded-lg hover:bg-[#FFDF00] bg-[#FFDF00]/30 transition-all duration-300 shadow-xl'>
                    <p className='relative z-10'>Destekle</p>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar1