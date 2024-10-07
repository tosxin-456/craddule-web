import '../input.css'
import Design from '../assets/images/yellow_designer.png'
import Design2 from '../assets/images/yellow_designer_1.png'
// import {SiInstagram} from 'react-icons/si'
// import {TbBrandTelegram} from 'react-icons/tb'

const Subscribe = () => {
     
    return(
        <div className='subscribe w-full my-10 md:my-20 px-[30px] md:px-[139px] bg-opacity-0'>
            <div className='relative'>
                <img className='absolute right-[0px] w-[500px]' src={Design} alt="" />
            </div>
            <div className='bg-primary rounded-md px-3 md:px-0 py-[50px] md:py-[61px]'>
                <h2 className='text-center text-[30px] text-white leading-[35px] mb-2 md:mb-5'>Join our Waitlist</h2>
                <div class="relative">
                    <input type="text" name="" id="" placeholder='Your email address' className='block m-auto md:w-[400px] border border-primary text-[12px] md:text-[16px] py-[8px] md:py-[8.5px] pl-4 md:pl-8 pr-[40px] rounded-[24px] focus:border focus:border-primary z-[1000]'/>
                    <a href='/waiting' id="btn" class="px-4 md:px-10 py-[8px] md:py-2 font-semibold rounded-[24px] border-none text-primary text-[12px] md:text-[16px] bg-lightBlue top-1/2 absolute right-0 transform -translate-x-[18px] md:-translate-x-[336px] -translate-y-1/2 hover:translate-y-none">Join</a>
                </div>
            </div>
            <div className='relative'>
                <img className='absolute left-[0px] bottom-0 w-[500px]' src={Design2} alt="" />
            </div>
        </div>
    )
};

export default Subscribe;