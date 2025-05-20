import '../input.css'
import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import Logo1 from '../assets/images/Craddule logo 1.png';
import Logo2White from '../assets/images/Craddule logo 2 white.png';

const Navbar = () => {

  const location = useLocation();
  const [height, setHeight] = useState(0);
  const [show, setShow] = useState(false);
  const basePath = location.pathname.split('/')[1] || '/'; // This gets the 'home' part
  const hasLettersAndNumbers = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/.test(basePath);
  const [referralCode, setReferralCode] = useState('');


  const pathSegments = location.pathname.split('/').filter(Boolean); // e.g. ['tyttyt'] or ['about', 'ref123']

  const knownPages = ['about', 'contact', 'features', 'pricing', 'waiting', '404', 'privacy'];

  const isHomePage = pathSegments.length <= 1 && !knownPages.includes(pathSegments[0]);
  useEffect(() => {
    // Fetch referralCode from localStorage
    const storedReferralCode = localStorage.getItem('referralCode');
    if (storedReferralCode) {
      setReferralCode(storedReferralCode);
    }
  }, []);
  // console.log(basePath)
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

  return (
    <>

      <div className={'flex w-full justify-between items-center px-[30px] md:px-[139px] py-[5px] pt-[20px] md:py-[0px] md:pt-[35px] bg-none z-[999] relative top-0'}>
        <div className='w-fit'>
          <a href={referralCode ? `/${referralCode}` : '/'}
            className="flex items-center gap-2 md:gap-3 text-[30px] md:text-[44px] font-manrope font-semibold text-white">

            <img
              src={isHomePage ? Logo2White : Logo1}
              className={`w-[60px] md:w-[70px] ${isHomePage ? 'w-[80px] md:w-[90px]' : ''}`}
              alt="Craddule Logo"
            />

            {!isHomePage && (
              <span className="font-manrope font-bold text-lg md:text-xl text-black">
                Craddule
              </span>
            )}
          </a>

        </div>
        <div className='text-[16px] font-semibold w-auto'>
          <ul className={`hidden md:flex justify-between items-center gap-7 ${isHomePage ? 'text-white' : 'text-black'}`}>
            <a href={referralCode ? `/${referralCode}` : '/'}>
              <li className='nav-item'>
                Home
              </li>
            </a>
            <a href={referralCode ? `/about/${referralCode}` : '/about'}>
              <li className='nav-item'>
                About
              </li>
            </a>
            <a href={referralCode ? `/features/${referralCode}` : '/features'}>
              <li className='nav-item'>
                Features
              </li>
            </a>
            <a href={referralCode ? `/pricing/${referralCode}` : '/pricing'}>
              <li className='nav-item'>
                Pricing
              </li>
            </a>
            <a href={referralCode ? `/contact/${referralCode}` : '/contact'}>
              <li className='nav-item'>
                Contact Us
              </li>
            </a>

            <a href={referralCode ? `https://app.craddule.com/login?referralCode=${referralCode}` : 'https://app.craddule.com/login'}>
              <li className='nav-item'>
                Login
              </li>
            </a>
            <a href={referralCode ? `/pricing/${referralCode}` : '/pricing'}>
              <li className={`nav-item btn ${!isHomePage ? 'bg-primary text-white rounded-full' : 'btn-light'}`}>
                Join
              </li>
            </a>

          </ul>
        </div>
        <svg className={show ? 'hidden' : 'md:hidden'} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" onClick={handleShow}>
          <rect width="24" height="24" fill="none" />
          <path fill="none" stroke={isHomePage ? '#FFFFFF' : '#000000'} strokeLinecap="round" strokeWidth="1.5" d="M20 7H4m16 5H4m16 5H4" />
        </svg>
      </div>


      <div
        className={
          show
            ? "side-nav fixed left-0 top-0 w-full h-screen bg-white py-[5px] pt-[20px] md:py-[15px] md:pt-[35px] px-[30px] z-[1000] sm:w-fit md:hidden"
            : "side-nav absolute left-[-1050px] top-0 w-[50px] bg-white px-[30px] pt-[20px] z-[1000]"
        }
      >
        <div className='flex justify-between items-center gap-5 w-full'>
          <div className='w-fit'>
            <a href={referralCode ? `/${referralCode}` : '/'}
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
        <ul className='mt-10'>
          <a href={referralCode ? `/${referralCode}` : '/'}>
            <li className="text-primary font-medium text-[16px] mb-[20px]">
              Home
            </li>
          </a>
          <a href={referralCode ? `/about/${referralCode}` : '/about'}>
            <li className="text-primary font-medium text-[16px] mb-[20px]">
              About
            </li>
          </a>
          <a href={referralCode ? `/features/${referralCode}` : '/features'}>
            <li className="text-primary font-medium text-[16px] mb-[20px]">
              Features
            </li>
          </a>
          <a href={referralCode ? `/pricing/${referralCode}` : '/pricing'}>
            <li className="text-primary font-medium text-[16px] mb-[20px]">
              Pricing
            </li>
          </a>
          <a href={referralCode ? `/contact/${referralCode}` : '/contact'}>
            <li className="text-primary font-medium text-[16px] mb-[20px]">
              Contact us
            </li>
          </a>
          <a href={referralCode ? `https://app.craddule.com/login` : 'https://app.craddule.com/login'}>
            <li className="text-white bg-primary py-1 px-5 rounded-full w-fit text-center border-primary border-[1px] font-medium text-[16px] mb-[20px]">
              Login
            </li>
          </a>
          <a href={referralCode ? `/pricing/${referralCode}` : '/pricing'} className=''>
            <li className='nav-item btn text-primary p-1 rounded-full w-[70%] text-center border-primary border-[1px] font btn-light mt-10'>
              Join
            </li>
          </a>
        </ul>
        <div className=''>
          <p className='text-textBlack text-center text-[12px] absolute bottom-0'>Craddule 2024. All rights reserved.</p>
        </div>
      </div>
    </>
  )
};

export default Navbar;