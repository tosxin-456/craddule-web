import Main from '../assets/images/mainback2.svg'
import Main2 from '../assets/images/mainback3.svg'
import Main3 from '../assets/images/mainback4.svg'
import Design from '../assets/images/design2.png'
import '../input.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/nav';
import Navbar from '../components/navbar';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {

    const [data, setData] = useState();
    const [response, setResponse] = useState();
    let [loading, setLoading] = useState(false);
    const images = [
        Main,
        Main2,
        Main3
    ];
    
    const handleSubmit = () => {
        setLoading(true)
        var email = document.getElementById('email').value

        axios.post('https://craddd-cx3n.onrender.com/api/waitlist', {'email':email})
        .then(response => {
            setResponse(response);
            console.log(response?.data?.message);
            document.getElementById('email').value = '';
            setLoading(false);
            toast.success(response.data.message , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
        })
        .catch(error => {
            console.error(error?.response?.data?.error);
            setLoading(false);
            toast.error(error?.response?.data?.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
        });

    }

    useEffect(() => {
        axios.get('https://ipinfo.io?token=aee064e2cc5a04')
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
            <Navbar/>
            <div className='bg-primary h-[880px] -mt-[150px]'>
            <ToastContainer/>

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
                <div className="relative top-[120px] px-[30px] md:px-[129px]">
                    <div className='w-full grid grid-cols-12 md:gap-20 z-50'>
                        <div className='col-span-12 pt-[150px] md:pt-[170px]'>
                            {/* <h1 className='text-white text-center'>Craddule</h1> */}
                            <p className='text-white text-center text-[23px] md:text-[30px] font-semibold mt-5'>Are you ready to build your dreams and change the world?</p>
                            <p className='text-white text-center text-[16px] md:text-[20px] font-normal mt-0'>Get notified when we launch and get <strong>FREE</strong> 1 month access to all Craddule features</p>
                            <div className='flex justify-center mt-5 gap-2'>
                            <input className='px-5 py-2 bg-none rounded-[24px] text-center' id='email' type="text"  placeholder="Enter Email"/>
                            </div>
                            <button className='m-auto mt-3 btn btn-sm btn-outline-light flex gap-1 items-center' onClick={handleSubmit}>
                                <span>Join waitlist</span>
                                <ClipLoader
                                    color={'#ffffff'}
                                    loading={loading}
                                    cssOverride={{width:'14px', height:'14px'}}
                                    size={150}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='bg-primary h-screen md:h-screen -mt-[170px]'>
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
                <div className="px-[30px] md:px-[129px] pt-[300px] md:pt-[300px]">
                    <div className='w-full grid grid-cols-12 z-50'>
                        <div className='col-span-12 z-50'>
                            <h1 className='text-white text-center'>Craddule</h1>
                            <p className='text-white text-center text-[23px] font-semibold mt-5'>Are you ready to build your dreams and change the world?</p>
                            <div className='flex justify-center mt-5 gap-2'>
                                <input className='px-5 py-2 bg-none rounded-[24px]' type="text"  placeholder="Enter Email"/>
                            </div>
                            <a className='m-auto mt-3 block btn btn-sm btn-outline-light'  href='/waiting'>Join waitlist</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <ToastContainer /> */}
        </>
    )
};

export default Index;