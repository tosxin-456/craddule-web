import '../input.css'
import ContactImg from '../assets/images/contact.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ReactGA from "react-ga4";
const Contact = () => {
    ReactGA.initialize("G-125ZTWLY25");
    ReactGA.send({ 
     hitType: "pageview", 
     page: window.location.pathname, 
     title: "Contact Us" 
   });  

    const navigate = useNavigate();
    const { referralCode } = useParams()

    useEffect(() => {
        if (referralCode) {
            localStorage.setItem('referralCode', referralCode);
        }
    }, [referralCode]);
    return(
        <>
        <Navbar/>
        <div className='flex justify-between gap-20 items-start px-[30px] md:px-[139px] md:py-[15px] my-10 md:my-24 bg-none'>
            <div className='hidden md:block contact-img w-1/2 rounded-2xl'>
                <img src={ContactImg} alt="" />
            </div>
            <div className='m-auto w-[95%] md:w-1/2 text-deepBlue'>
                <span className='text-[12px] md:text-[14px]'>Please leave a message</span>
                <h3 className='text-[30px] text-deepBlue -mt-2 md:-mt-0'>Contact Us</h3>
                <div className='mt-3 md:mt-8'>
                    <div>
                        <span className='font-[700] text-[14px]'>Name</span>
                        <input className='w-full border border-textBlack text-[16px] p-3' type="text" name="" id=""  placeholder='Full name' />
                    </div>
                    <div className='mt-5'>
                        <span className='font-[700] text-[14px]'>Email</span>
                        <input className='w-full border border-textBlack text-[16px] p-3' type="text" name="" id=""  placeholder='Email address' />
                    </div>
                    <div className='mt-5'>
                        <span className='font-[700] text-[14px]'>Message</span>
                        <textarea className='w-full h-[100px] border border-textBlack text-[16px] p-3' type="text" name="" id=""  placeholder='Type your message...' />
                    </div>
                    <div className='mt-5 flex items-center'>
                        <input type="checkbox" name="" id="" />
                        <span className='pl-2 text-[14px]'>I accept the Terms & Conditions</span>
                    </div>
                    <div className='mt-6'>
                        <button className='btn btn-dark'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
};

export default Contact;