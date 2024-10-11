import '../input.css'
// import {SiInstagram} from 'react-icons/si'
// import {TbBrandTelegram} from 'react-icons/tb'
import Logo1 from '../assets/images/Craddule logo 1.png';
import Logo2White from '../assets/images/Craddule logo 2 white.png';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [referralCode, setReferralCode] = useState('');

    useEffect(() => {
        // Fetch referralCode from localStorage
        const storedReferralCode = localStorage.getItem('referralCode');
        if (storedReferralCode) {
            setReferralCode(storedReferralCode);
        }
    }, []);
     
    return(
        <div className='footer w-full bg-white pt-[30px] md:pt-[60px] pb-[20px] px-[30px] md:px-[139px]'>
            <div className='md:flex justify-between text-white text-[20px]'>
                <div className='w-full md:w-[370px]'>
                    <div className='w-fit mb-5'>
                        <a href={referralCode ? `/${referralCode}` : '/'}
 className={'text-[30px] md:text-[44px] font-manrope font-semibold text-primary flex items-center gap-2'}>
                            <img src={Logo1} className={'w-[50px] md:w-[70px]'} />
                            <p className={'block font-black'}>Craddule</p>
                        </a>
                    </div>
                    <p className='text-[13px] md:text-[16px] text-textBlack'>Craddule is a team of seasoned entrepreneurs, business strategists, and industry experts committed to supporting startups at every stage of their development.</p>
                </div>
                <div className='flex flex-wrap w-auto justify-between md:gap-32 mt-5'>
                    <div className='mb-2 md:mb-10'>
                        <p className='text-[14px] md:text-[16px] font-semibold mb-2 md:mb-5 text-deepBlue'>Useful links</p>
                        <ul className='text-textBlack'>
                            <a href={referralCode ? `/about/${referralCode}` : '/about'}><li className='mb-3 text-[13px] md:text-[16px]'>About</li></a>
                            <a href={referralCode ? `/contact/${referralCode}` : '/contact'}><li className='mb-3 text-[13px] md:text-[16px]'>Contact</li></a>
                        </ul>
                    </div>
                    <div className='mb-2 md:mb-10'>
                        <p className='text-[14px] md:text-[16px] font-semibold mb-2 md:mb-5 text-deepBlue'>Company</p>
                        <ul className='text-textBlack'>
                            <a href={referralCode ? `/${referralCode}` : '/'}
><li className='mb-3 text-[13px] md:text-[16px]'>Home</li></a>
                            <a href={referralCode ? `/pricing/${referralCode}` : '/pricing'}><li className='mb-3 text-[13px] md:text-[16px]'>Pricing</li></a>
                        </ul>
                    </div>
                    <div className='mb-2 md:mb-10'>
                        <p className='text-[14px] md:text-[16px] font-semibold mb-2 md:mb-5 text-deepBlue'>Resources</p>
                        <ul className='text-textBlack'>
                            <a href={referralCode ? `/features/${referralCode}` : '/features'}><li className='mb-3 text-[13px] md:text-[16px]'>Features</li></a>
                            <a href="/privacy"><li className='mb-3 text-[13px] md:text-[16px]'>Privacy policy</li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='text-[13px] md:text-[16px] text-textBlack text-center'>copyright &copy; 2024, craddule</p>
            </div>
        </div>
    )
};

export default Footer;