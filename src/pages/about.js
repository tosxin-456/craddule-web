import BuildCTA from '../components/buildCTA';
import Innovation from '../assets/images/innovation.png'
import Inclusion from '../assets/images/inclusion.png'
import Collaboration from '../assets/images/collaboration.png'
import Excellence from '../assets/images/excellence.png'
import Hands from '../assets/images/who.png'
import Vision from '../assets/images/vision 5.png'
import '../input.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ReactGA from "react-ga4";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const About = () => {
     
  ReactGA.initialize("G-125ZTWLY25");
  ReactGA.send({ 
   hitType: "pageview", 
   page: window.location.pathname, 
   title: "About Us" 
 });
    const navigate = useNavigate();
    const [referralCode, setReferralCode] = useState('');

    useEffect(() => {
        // Fetch referralCode from localStorage
        const storedReferralCode = localStorage.getItem('referralCode');
        if (storedReferralCode) {
            setReferralCode(storedReferralCode);
        }
    }, []);
    return(
        <>
            <Navbar/>
            <div className='px-[30px] md:px-[139px] md:py-[15px] my-10 md:my-24 bg-none'>
                <div className='grid md:gap-20 grid-cols-12'>
                    <div className='col-span-12 mb-10 md:mb-0 md:col-span-7'>
                        <p className='text-primary font-bold'>Our story</p>
                        <h2 className='mb-2 md:mb-4'>Who We <br/>Are</h2>
                        <p className='text-[14px] md:text-[16px]'>
                            Craddule is a team of seasoned entrepreneurs, business strategists, and industry experts committed to supporting startups at every stage of their development. With years of experience and a passion for innovation, we provide comprehensive support to ensure your startup not only survives 
                            but thrives in a competitive market.  
                        </p>
                    </div>
                    <div className='col-span-12 md:col-span-5'>
                        <img className='m-auto w-[350px] rounded-md' src={Hands} alt="" />
                    </div>
                </div>
                <div className='grid md:gap-20 grid-cols-12 mt-10 mb:mt-48'>
                    <div className='hidden md:block md:col-span-7'>
                        <img className='m-auto mt-10 w-[500px] rounded-md' src={Vision} alt="" />
                    </div>
                    <div className='col-span-12 md:col-span-5'>
                        <h2 className='mb-2 md:mb-4'>Our Mission</h2>
                        <p className='text-[14px] md:text-[16px]'>
                            Our mission is simple: to help startups succeed. At Craddule, 
                            we believe that innovation and entrepreneurship are the driving forces of progress, we understand the unique challenges that new ventures face and offer tailored solutions to meet these challenges head-on. Whether it's refining your business model, securing funding, or crafting a go-to-market strategy, Craddule is here to guide you every step of the way. 
                        </p>
                    </div>
                    <div className='col-span-12 md:col-span-7 md:hidden mt-7 md:mt-0'>
                        <img className='m-auto w-[350px] rounded-md' src={Vision} alt="" />
                    </div>
                </div>
            </div>

            <div className='px-[30px] md:px-[139px] py-[15px] my-10 md:my-24 bg-none'>
            <h2 className='mb-8 md:mb-16'>Our Values</h2>
                <p className='text-[16px] md:text-[24px] -mt-8 mb:-mt-16'>At Craddule, we're passionate about</p>
                <div className='mt-5 md:mt-12'>
                    <div className='flex-wrap md:flex md:flex-nowrap gap-4'>
                        <div className='md:w-1/2'>
                            <div className='flex gap-2 md:gap-5'>
                                <img className='w-[50px] h-[50px] md:w-auto md:h-auto' src={Innovation} alt="" />
                                <div>
                                    <p className='text-[16px] md:text-[30px] text-primary'>Innovation</p>
                                    <p className='text-[12px] md:text-[20px] text-black'>We embrace creativity and outside-the-box thinking.</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 md:mt-0 md:w-1/2'>
                            <div className='flex gap-2 md:gap-5'>
                                <img className='w-[50px] h-[50px] md:w-auto md:h-auto' src={Inclusion} alt="" />
                                <div>
                                    <p className='text-[16px] md:text-[30px] text-primary'>Inclusion</p>
                                    <p className='text-[12px] md:text-[20px] text-black'>We support diversity and equal opportunities for all.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-wrap md:flex md:flex-nowrap gap-4 mt-3 md:mt-16'>
                        <div className='md:w-1/2'>
                            <div className='flex gap-2 md:gap-5'>
                                <img className='w-[50px] h-[50px] md:w-auto md:h-auto' src={Collaboration} alt="" />
                                <div>
                                    <p className='text-[16px] md:text-[30px] text-primary'>Collaboration</p>
                                    <p className='text-[12px] md:text-[20px] text-black'>We believe that together, we can achieve more.</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <div className='flex gap-2 md:gap-5'>
                                <img className='w-[50px] h-[50px] md:w-auto md:h-auto' src={Excellence} alt="" />
                                <div>
                                    <p className='text-[16px] md:text-[30px] text-primary'>Excellence</p>
                                    <p className='text-[12px] md:text-[20px] text-black'>We strive for exceptional results and continuous improvement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BuildCTA/>
            <div className='px-[30px] md:px-[139px] py-[15px] my-10 md:my-24 bg-none'>
                <h2 className='mb-5 md:mb-16'>Additional Considerations</h2>
                <div className='fle-wrap md:flex gap-4'>
                    <div className='w-full md:w-1/2'>
                        <h4>Custom Features/Add-ons</h4>
                        <p className='text-textBlack'>Offer additional features or modules as add-ons for users who need specialized functionalities beyond their subscribed tier.</p>
                    </div>
                    <div className='w-full mt-3 md:mt-0 md:w-1/2'>
                        <h4>Feedback-Driven Improvements</h4>
                        <p className='text-textBlack'>Feedback is only given by industry professionals.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default About;