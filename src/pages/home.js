import Subscribe from '../components/subscribe';
import Flexible from '../assets/images/flexible.png'
import Team from '../assets/images/team.png'
import Document from '../assets/images/document.png'
import Budgeting from '../assets/images/budgeting.png'
import Tracking from '../assets/images/tracking.png'
import Marketing from '../assets/images/marketing.png'
import Connect from '../assets/images/connect2.png'
import Explore from '../assets/images/explore.png'
import Check from '../assets/images/check.png'
import Dots from '../assets/images/dots.png'
import Main from '../assets/images/mainback2.svg'
import Main2 from '../assets/images/mainback3.svg'
import Main3 from '../assets/images/mainback4.svg'
import Design from '../assets/images/design2.png'
import '../input.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useNavigate, useParams } from 'react-router-dom';
import ReactGA from "react-ga4";


const Home = () => {
    ReactGA.initialize("G-125ZTWLY25");
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "Home"
    });

    const navigate = useNavigate();
    const { referralCode } = useParams()

    useEffect(() => {
        if (referralCode) {
            localStorage.setItem('referralCode', referralCode);
        }
    }, [referralCode]);

    const images = [
        Main,
        Main2,
        Main3
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [popupVisible, setPopupVisible] = useState(false);

    // const handleButtonClick = () => {
    //     setPopupVisible(!popupVisible);
    // };

    const handleButtonClick = () => {
        navigate('/pricing')
    };


    useEffect(() => {
        axios.get('https://ipinfo.io?token=aee064e2cc5a04')
            .then(response => {
                setData(response.data);
                console.log(data?.country)
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });

        const interval = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length);
        }, 3000); // 3 seconds
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <>
            <Navbar />
            {popupVisible && (
                <div className="popup w-[90%] md:w-[50%]">
                    <div className="float-right">
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" onClick={handleButtonClick}>
                            <rect width="24" height="24" fill="none" />
                            <g fill="none" stroke="#0A2640" stroke-width="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5" />
                            </g>
                        </svg>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path fill="none" stroke="#526484" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 17a5 5 0 0 0-3.537-3.538M17 17a5 5 0 0 0 1.296-4.834M17 17a5 5 0 0 0 4.834-1.295M17 17a5 5 0 0 0 3.537 3.539M17 17a5 5 0 0 0-1.296 4.834M17 17a5 5 0 0 0-4.834 1.296m1.297-4.834a5.05 5.05 0 0 0-1.297 4.834m1.297-4.834a5.05 5.05 0 0 1 4.833-1.296m0 0a5.01 5.01 0 0 1 3.538 3.539m0 0a5.05 5.05 0 0 1-1.297 4.834m0 0a5.05 5.05 0 0 1-4.832 1.295m0 0a5.01 5.01 0 0 1-3.539-3.538M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466" color="#526484" />
                        </svg>
                        <svg className='block md:hidden' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path fill="none" stroke="#526484" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 17a5 5 0 0 0-3.537-3.538M17 17a5 5 0 0 0 1.296-4.834M17 17a5 5 0 0 0 4.834-1.295M17 17a5 5 0 0 0 3.537 3.539M17 17a5 5 0 0 0-1.296 4.834M17 17a5 5 0 0 0-4.834 1.296m1.297-4.834a5.05 5.05 0 0 0-1.297 4.834m1.297-4.834a5.05 5.05 0 0 1 4.833-1.296m0 0a5.01 5.01 0 0 1 3.538 3.539m0 0a5.05 5.05 0 0 1-1.297 4.834m0 0a5.05 5.05 0 0 1-4.832 1.295m0 0a5.01 5.01 0 0 1-3.539-3.538M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466" color="#526484" />
                        </svg>
                    </div>
                    <div className='mt-5'>
                        <p className='text-center text-[15px] md:text-[18px] text-textBlack font-medium'>We know, we are also very eager to get you started on this journey.</p>
                        <p className='text-center text-[15px] md:text-[18px] text-textBlack font-medium'>We are coming live very soon.</p>
                        <p className='text-center text-[15px] md:text-[18px] text-textBlack font-medium'>In the interim, Join our waitlist and we will connect.</p>
                        <div className='flex justify-center mt-3 mb-4'>
                            <a href={referralCode ? `/${referralCode}` : '/'}
                                className='block mt-2 bg-deepBlue btn-sm btn-dark text-textBlue'>Join now</a>
                        </div>
                    </div>
                </div>
            )}
            <div className='bg-primary h-screen md:h-screen -mt-[150px]'>
                <div className='relative'>
                    <div className='mainCTA w-full absolute left-0'>
                    </div>
                    {data?.country == 'CA' ? <div className='canCTA w-full absolute left-0'>
                    </div> : <></>}
                    {data?.country == 'NG' ? <div className='nigCTA w-full absolute left-0'>
                    </div> : <></>}
                    {data?.country == 'GH' ? <div className='ghnCTA w-full absolute left-0'>
                    </div> : <></>}
                    {data?.country == 'SA' ? <div className='souCTA w-full absolute left-0'>
                    </div> : <></>}
                    <div className='absolute right-0'>
                        <img className='w-[550px]' src={Design} alt="" />
                    </div>
                </div>
                <div className="relative top-[120px] px-[30px] md:px-[129px]">
                    <div className='w-full grid grid-cols-12 md:gap-20 z-50'>
                        <div className='col-span-12 md:col-span-6 pt-[150px] md:pt-[170px]'>
                            <h1 className='text-white'>Your Launchpad to Success!</h1>
                            <p className='text-white'>We believe in the power of innovation <br /> and the potential of every startup to make a significant <br />impact.</p>
                            <div className='flex gap-4 mt-5 md:mt-10'>
                                <a href={`https://app.craddule.com/signUp/${referralCode ? referralCode : ''}`}
                                    className='btn btn-dark-outline bg-lightBlue border-lightBlue text-primary'>Get Started</a>
                                {/* <button className='btn btn-outline-light'>Explore</button> */}
                            </div>
                        </div>
                        <div className='hidden md:block md:col-span-6 pt-[100px]'>
                            <img className='bg-opacity-100' src={images[currentImage]} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[30px] md:px-[107px] py-[15px] my-10 md:my-24 bg-none'>
                <h2 className='text-center text-darkBlue mb-20'>Explore Our Features</h2>

                <div className='grid grid-cols-12 md:gap-5 items-start'>
                    <div className='col-span-12 md:col-span-4'>
                        <div className='mb-9'>
                            <img className='m-auto w-[30px] md:w-[50px]' src={Flexible} alt="" />
                            <p className='mt-2 md:mt-4 text-[24px] md:text-[28px] font-bold text-darkBlue text-center'>Flexible Plans</p>
                            <p className='mt-3 md:mt-5 text-[16px] text-textBlack text-center'>With our accelera8 plan you save time and launch your product just in time to infiltrate the market.</p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <div className='mb-9'>
                            <img className='m-auto w-[30px] md:w-[65px]' src={Team} alt="" />
                            <p className='mt-2 md:mt-4 text-[24px] md:text-[28px] font-bold text-darkBlue text-center'>Team Communication</p>
                            <p className='mt-3 md:mt-5 text-[16px] text-textBlack text-center'>Connect with your team members. Seamlessly assign tasks, review progress, share updates, and manage what each member can see.</p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <div className='mb-9'>
                            <img className='m-auto w-[30px] md:w-[50px]' src={Document} alt="" />
                            <p className='mt-2 md:mt-4 text-[24px] md:text-[28px] font-bold text-darkBlue text-center'>Document Management</p>
                            <p className='mt-3 md:mt-5 text-[16px] text-textBlack text-center'>Imagine having all your project documents neatly organized and easily accessible in one secure location.</p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <div className='mb-9'>
                            <img className='m-auto w-[30px] md:w-[50px]' src={Budgeting} alt="" />
                            <p className='mt-2 md:mt-4 text-[24px] md:text-[28px] font-bold text-darkBlue text-center'>Budgeting</p>
                            <p className='mt-3 md:mt-5 text-[16px] text-textBlack text-center'>Your project's financial health matters. With Craddule, budgeting is both a breeze and a strategic advantage.</p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <div className='mb-9'>
                            <img className='m-auto w-[30px] md:w-[50px]' src={Tracking} alt="" />
                            <p className='mt-2 md:mt-4 text-[24px] md:text-[28px] font-bold text-darkBlue text-center'>Track Your KPI</p>
                            <p className='mt-3 md:mt-5 text-[16px] text-textBlack text-center'>See your performance indicators displayed as graphs for easy understanding.</p>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <div className='mb-9'>
                            <img className='m-auto w-[30px] md:w-[50px]' src={Marketing} alt="" />
                            <p className='mt-2 md:mt-4 text-[24px] md:text-[28px] font-bold text-darkBlue text-center'>Marketing</p>
                            <p className='mt-3 md:mt-5 text-[16px] text-textBlack text-center'>The journey to success isn't complete without effective marketing. This  feature is your strategic partner.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-[30px] md:px-[107px] py-[15px] my-10 md:my-24 bg-none'>
                <div className='grid grid-cols-12 md:gap-20 items-start'>
                    <div className='col-span-12 md:col-span-6'>
                        <div className=''>
                            <img className='m-auto w-[300.6px] h-[350px] md:w-[582.6px] md:h-[560px]' src={Connect} alt="" />
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <div className=''>
                            <h2>We connect our customers with the best features.</h2>
                            <div className='flex gap-2 md:gap-3 items-center mt-5 md:mt-10'>
                                <img className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' src={Check} alt="" />
                                <p className='text-[14px] md:text-[16px]'>A comprehensive solution that guides and supports clients through the entire ideation-to-execution process.</p>
                            </div>
                            <div className='flex gap-2 md:gap-3 items-center mt-5 md:mt-10'>
                                <img className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' src={Check} alt="" />
                                <p className='text-[14px] md:text-[16px]'>We collaborate with our clients, offering expert guidance and leveraging our extensive network.</p>
                            </div>
                            <div className='flex gap-2 md:gap-3 items-center mt-5 md:mt-10'>
                                <img className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' src={Check} alt="" />
                                <p className='text-[14px] md:text-[16px]'>We provide the vital tools and support needed to transform concepts into impactful solutions.</p>
                            </div>
                        </div>
                        <a href={`https://app.craddule.com/signUp/${referralCode ? referralCode : ''}`} className='block btn btn-dark mt-5 md:mt-10'>Get Started</a>
                    </div>
                </div>
            </div>
            {/* <div className='px-[30px] md:px-[107px] py-[15px] my-10 md:my-24 bg-none'>
                            <div className='grid grid-cols-12 md:gap-20 items-start'>
                                <div className='col-span-12'>
                                    <div className='mt-8 md:mt-16'>
                                        <h2 >Explore Our Tools</h2>
                                        <div className='grid grid-cols-12 md:gap-5 mt-5 md:mt-10'>
                                            <div className='col-span-12 md:col-span-6 mb-2 md:mb-5'>
                                            <a href='/features'><div className='bg-white drop-shadow-sm px-[20px] md:px-[30px] py-[10px] md:py-[23px] flex gap-2 md:gap-5 items-center'>
                                                    <img className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' src={Dots} alt="" />
                                                    <p className='font-bold text-[16px] md:text-[20px] text-darkBlue'>Accelera8</p>
                                                </div></a>
                                            </div>
                                            <div className='col-span-12 md:col-span-6 mb-2 md:mb-5'>
                                            <a href='/features'><div className='bg-white drop-shadow-sm px-[20px] md:px-[30px] py-[10px] md:py-[23px] flex gap-2 md:gap-5 items-center'>
                                                    <img className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' src={Dots} alt="" />
                                                    <p className='font-bold text-[16px] md:text-[20px] text-darkBlue'>Graphs</p>
                                                </div></a>
                                            </div>
                                            <div className='col-span-12 md:col-span-6 mb-2 md:mb-5'>
                                            <a href='/features'><div className='bg-white drop-shadow-sm px-[20px] md:px-[30px] py-[10px] md:py-[23px] flex gap-2 md:gap-5 items-center'>
                                                    <img className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' src={Dots} alt="" />
                                                    <p className='font-bold text-[16px] md:text-[20px] text-darkBlue'>Craddule Hub</p>
                                                </div></a>
                                            </div>
                                            <div className='col-span-12 md:col-span-6'>
                                            <a href='/features'><div className='bg-white drop-shadow-sm px-[20px] md:px-[30px] py-[10px] md:py-[23px] flex gap-2 md:gap-5 items-center'>
                                                    <img className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' src={Dots} alt="" />
                                                    <p className='font-bold text-[16px] md:text-[20px] text-darkBlue'>KPI</p>
                                                </div></a>
                                            </div>
                                        </div>
                                        <a href='/features' className='btn btn-dark block mt-5 md:mt-10'>Learn More</a>
                                    </div>
                                </div>
                                <div className='col-span-12'>
                                    <div className=''>
                                        <img className='m-auto hidden md:w-[582.6px] md:h-[560px]' src={Explore} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
            {/* <Subscribe/> */}


            <Footer />
        </>
    )
};

export default Home;
