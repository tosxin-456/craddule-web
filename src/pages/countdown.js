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

const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

   
    useEffect(() => {
        const countdownDate = new Date('2024-08-31T00:00:00');
        const countInterval = setInterval(() => {
        const now = new Date();
        const distance = countdownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days<10){
            days = '0'.concat(days)
            setDays(days);
        }else{
            setDays(days);
        }
        if (hours<10){
            hours = '0'.concat(hours)
            setHours(hours);
        }else{
            setHours(hours);
        }
        if (minutes<10){
            minutes = '0'.concat(minutes)
            setMinutes(minutes);
        }else{
            setMinutes(minutes)
        }
        if (seconds<10){
            seconds = '0'.concat(seconds)
            setSeconds(seconds);
        }else{
            setSeconds(seconds)
        }
        }, 1000);
        return () => clearInterval(countInterval);

    }, []);

    return(
        <>
            <div className=''>
                <div className="px-[30px] md:px-[129px]">
                    <div className='mt-10'>
                        <a href="/" className='text-[40px] md:text-[44px] block text-center font-manrope font-semibold text-primary'>
                            Craddule
                        </a>
                        <div className='mt-20'>
                           <span className='block text-primary font-medium text-center text-[16px] md:text-[20px]'>Countdown to Launch</span>
                            <h1 className='text-primary text-center' id='days'>{days} Days to go</h1>
                            <span className='block text-primary font-medium text-center text-[16px] md:text-[20px] mt-5 -mb-3 md:-mb-14'>Countdown to the nearest day</span>
                            <div className='flex countdown-item justify-center gap-2'>
                                <span className='countdown-item' id='hours'>{hours}</span>:<span className='countdown-item' id='minutes'>{minutes}</span>:<span className='countdown-item' id='seconds'>{seconds}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Countdown;