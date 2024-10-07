import Main from '../assets/images/mainback2.svg'
import Main2 from '../assets/images/mainback3.svg'
import Main3 from '../assets/images/mainback4.svg'
import Design from '../assets/images/design2.png'
import '../input.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/nav';
import Logo2White from '../assets/images/Craddule logo 2 white.png';

const N404 = () => {

    const [data, setData] = useState();
    const images = [
        Main,
        Main2,
        Main3
    ];
    
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    useEffect(() => {
        axios.get('https://ipinfo.io?token=00c346dda0a290')
        .then(response => {
            setData(response.data);
            console.log(data?.country)
        })
        .catch(error => {
            console.error(error);
        });
    },[]);

    return(
        <>
            <div className={'flex justify-between items-center px-[30px] md:px-[139px] py-[15px] md:py-[15px] md:pt-[35px] bg-none z-[999] relative top-0'}>
                <div className='w-fit'>
                    <a href="/" className={'text-[30px] md:text-[44px] font-manrope font-semibold text-white'}>
                        <img src={ Logo2White} className={'w-[100px] md:w-[150px]'} />
                    </a>
                </div>
                <div className='hidden md:flex gap-2'>
                    <a href="/" className='nav-item btn btn-light'>
                        Join
                    </a>
                </div>
                <svg className={show?'hidden':'md:hidden'} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" onClick={handleShow}>
                    <rect width="24" height="24" fill="none" />
                    <path fill="none" stroke={'#ffffff'} stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"/>
                </svg>
            </div>
            <div className='bg-primary h-screen md:h-screen -mt-[170px]'>
                <div className='relative'>
                    <div className='mainCTA w-full absolute left-0'>
                    </div>
                    {data?.country == 'CA' ?<div className='canCTA w-full absolute left-0'>
                    </div> : <></>}
                    {data?.country == 'NG' ?<div className='nigCTA w-full absolute left-0'>
                    </div> : <></>}
                    {data?.country == 'GH' ?<div className='ghnCTA w-full absolute left-0'>
                    </div> : <></>}
                    {data?.country == 'SA' ?<div className='souCTA w-full absolute left-0'>
                    </div> : <></>}
                    <div className='absolute right-0'>
                        <img className='w-[550px]' src={Design} alt="" />
                    </div>
                </div>
                <div className="px-[30px] md:px-[129px] pt-[250px] md:pt-[300px]">
                    <div className='w-full grid grid-cols-12 z-50'>
                        <div className='col-span-12 z-50'>
                            <h1 className='text-white text-center'>404</h1>
                            <p className='text-white text-center text-[23px] font-semibold mt-5'>This page is not found or still under production</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default N404;