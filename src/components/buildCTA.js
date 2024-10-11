import { useEffect, useState } from 'react';
import '../input.css'
// import {SiInstagram} from 'react-icons/si'
// import {TbBrandTelegram} from 'react-icons/tb'

const BuildCTA = () => {
    const [referralCode, setReferralCode] = useState('');

    useEffect(() => {
        // Fetch referralCode from localStorage
        const storedReferralCode = localStorage.getItem('referralCode');
        if (storedReferralCode) {
            setReferralCode(storedReferralCode);
        }
    }, []);
     
    return(
        <div className='bg-primary px-[30px] md:px-[139px] h-[150px] md:h-[243px] w-full'>
            <div className='relative'>
                <div className='buildCTA md:absolute w-full left-0'>
                </div>
            </div>
            <div className="relative -top-32 md:-top-0 text-center">
                <div className='justify-between w-full md:flex items-center h-[243px]'>
                    <p className='my-3 md:my-0 text-[25px] md:text-[58px] text-white md:float-left'>To build a lasting brand </p>
                    <a href={referralCode ? `/pricing/${referralCode}` : '/pricing'} className='btn btn-outline-light text-[12px] md:text-[20px] md:loat-right'>
                        <span>Start now</span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default BuildCTA;