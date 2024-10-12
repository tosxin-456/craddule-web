import '../input.css'
import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Logo1 from '../assets/images/Craddule logo 1.png';
import Logo2White from '../assets/images/Craddule logo 2 white.png';

const Nav = () => {

  const location = useLocation();
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  useEffect(() => {
    // Fetch referralCode from localStorage
    const storedReferralCode = localStorage.getItem('referralCode');
    if (storedReferralCode) {
      setReferralCode(storedReferralCode);
    }
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      //   console.log('Page scrolled:', window.scrollY);
      setHeight(window.scrollY)
      //   console.log(height)
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);
  
  const basePath = location.pathname.split('/')[1] || '/'; 
  return (
    <>

      <div className={height < 70 ? 'flex justify-between items-center px-[30px] md:px-[139px] py-[15px] md:py-[15px] md:pt-[35px] bg-none z-[999] relative top-0' : 'flex justify-between items-center px-[30px] md:px-[139px] py-[15px] md:py-[15px] bg-white z-[1000] sticky top-0'}>
        <div className='w-fit'>
          <a href={referralCode ? `/home/${referralCode}` : '/home'}
            className={(basePath === 'home'|| location.pathname == '/' || location.pathname == '/home' || location.pathname == '/waiting' || location.pathname == '/waiting') && height < 70 ? 'text-[30px] md:text-[44px] font-manrope font-semibold text-white' : 'text-[30px] md:text-[44px] font-manrope font-semibold text-primary flex gap-2 items-center'}>
            <img src={(basePath === 'home' || location.pathname == '/' || location.pathname == '/home' || location.pathname == '/waiting') && height < 70 ? Logo2White : Logo1} className={(basePath === 'home' || location.pathname == '/' || location.pathname == '/home' || location.pathname == '/waiting') && height < 70 ? 'w-[100px] md:w-[150px]' : 'w-[50px] md:w-[70px]'} />
            <p className={(basePath === 'home' || location.pathname == '/' || location.pathname == '/home' || location.pathname == '/waiting') && height < 70 ? 'hidden' : 'block font-black'}>Craddule</p>
          </a>
        </div>
        <div className='hidden md:flex gap-2'>
          <a href={referralCode ? `/pricing/${referralCode}` : '/pricing'} className='nav-item btn btn-light'>
            Join
          </a>
          {/* <a href="/waiting" className='nav-item btn btn-dark-outline'>
                Countdown
              </a> */}
        </div>
        <svg className={show ? 'hidden' : 'md:hidden'} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" onClick={handleShow}>
          <rect width="24" height="24" fill="none" />
          <path fill="none" stroke={height < 70 ? '#ffffff' : '#0A2640'} stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4" />
        </svg>
      </div>

      <div
        className={
          show
            ? "side-nav fixed left-0 top-0 w-full h-screen bg-white py-[5px] pt-[20px] md:py-[15px] md:pt-[35px] px-[30px] z-[1000] sm:w-fit md:hidden"
            : "side-nav absolute left-[-1250px] top-0 w-[50px] bg-white px-[30px] pt-[20px] z-[1000]"
        }
      >
        <div className='flex justify-between items-center w-full gap-5'>
          <div className='w-fit'>
            <a href={referralCode ? `/home/${referralCode}` : '/home'}
              className={'text-[30px] md:text-[44px] font-manrope font-semibold text-primary flex items-center gap-2'}>
              <img src={Logo1} className={'w-[50px] md:w-[70px]'} />
              <p className={'block font-black'}>Craddule</p>
            </a>
          </div>
          <div className="">
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" onClick={handleShow}>
              <rect width="24" height="24" fill="none" />
              <g fill="none" stroke="#0A2640" stroke-width="1.5">
                <circle cx="12" cy="12" r="10" />
                <path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5" />
              </g>
            </svg>
          </div>
        </div>
        <div className='mt-20'>
          <ul className=''>

            {/* <a href="/waiting" className='nav-item block btn btn-dark-outline'>
                  <li>Countdown</li>
                </a> */}
            <a href={referralCode ? `/home/${referralCode}` : '/home'}
              className='nav-item block btn btn-dark mt-5'>
              <li>Join</li>
            </a>
          </ul>
          <p className='text-textBlack text-center text-[12px] absolute bottom-0'>Craddule 2024. All rights reserved.</p>
        </div>
      </div>
    </>
  )
};

export default Nav;