import BuildCTA from '../components/buildCTA';
import Subscribe from '../components/subscribe';
import Accelera from '../assets/images/accelera.png'
import Hub from '../assets/images/hub.png'
import Builder from '../assets/images/builder.png'
import Chat from '../assets/images/chat.png'
import KPI from '../assets/images/kpi.png'
import Graphs from '../assets/images/graphs.png'
import '../input.css'
import { useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ReactGA from "react-ga4";

const Features = () => {
    ReactGA.initialize("G-125ZTWLY25");
    ReactGA.send({ 
     hitType: "pageview", 
     page: window.location.pathname, 
     title: "Features" 
   });  

    return(
        <>
            <Navbar/>
            <div className='px-[30px] md:px-[107px] py-[15px] mt-10 md:my-24 bg-none'>
                <h2 className='text-center text-deepBlue mb-10 md:mb-20'>Our Features</h2>

                <div className='grid grid-cols-12 gap-5 items-start'>
                    <div className='card col-span-12 md:col-span-4'>
                        <img className='m-auto' src={Accelera} alt="" />
                        <p className='mt-4 text-[20px] md:text-[28px] font-bold text-primary text-center'>Accelera8</p>
                        <p className='mt-1 md:mt-5 text-[13px] md:text-[16px] text-textBlack text-center'>Save time and launch your product just in time to infiltrate the market with no compromises on our service or your product quality.</p>
                    </div>
                    <div className='card col-span-12 md:col-span-4'>
                        <img className='m-auto' src={Hub} alt="" />
                        <p className='mt-4 text-[20px] md:text-[28px] font-bold text-primary text-center'>Craddule hub</p>
                        <p className='mt-1 md:mt-5 text-[13px] md:text-[16px] text-textBlack text-center'>Store, categorize, and access your project documentation effortlessly. No more frantic searches for that crucial file—organize, access, and collaborate with ease.</p>
                    </div>
                    <div className='card col-span-12 md:col-span-4'>
                        <img className='m-auto' src={Builder} alt="" />
                        <p className='mt-4 text-[20px] md:text-[28px] font-bold text-primary text-center'>Timeline Builder</p>
                        <p className='mt-1 md:mt-5 text-[13px] md:text-[16px] text-textBlack text-center'>Schedule, assign, and track tasks seamlessly, ensuring that your project stays on course and deadlines are met with ease. Say goodbye to missed timelines and hello to streamlined productivity.</p>
                    </div>
                    <div className='card col-span-12 md:col-span-4'>
                        <img className='m-auto' src={Chat} alt="" />
                        <p className='mt-4 text-[20px] md:text-[28px] font-bold text-primary text-center'>Chat</p>
                        <p className='mt-1 md:mt-5 text-[13px] md:text-[16px] text-textBlack text-center'>Our communication tool keeps everyone on the same page. No more communication gaps—just smooth, transparent, and effective team communication.</p>
                    </div>
                    <div className='card col-span-12 md:col-span-4'>
                        <img className='m-auto' src={KPI} alt="" />
                        <p className='mt-4 text-[20px] md:text-[28px] font-bold text-primary text-center'>KPI</p>
                        <p className='mt-1 md:mt-5 text-[13px] md:text-[16px] text-textBlack text-center'>Tracking your progress has never been made easier, see your performance indicators displayed as graphs for easy understanding.</p>
                    </div>
                    <div className='card col-span-12 md:col-span-4'>
                        <img className='m-auto' src={Graphs} alt="" />
                        <p className='mt-4 text-[20px] md:text-[28px] font-bold text-primary text-center'>Graphs</p>
                        <p className='mt-1 md:mt-5 text-[13px] md:text-[16px] text-textBlack text-center'>Set, monitor, and manage your budgets effectively for different project stages. Stay within your financial boundaries while maximizing the impact of your resources.</p>
                    </div>
                </div>
            </div>
            
            <BuildCTA/>
            <Footer/>
        </>
    )
};

export default Features;