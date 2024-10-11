import '../input.css'
import Check_icon from '../assets/images/check_icon.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { PaystackButton } from 'react-paystack';
import ReactGA from "react-ga4";
import { useNavigate, useParams } from 'react-router-dom';


const Pricing = () => {
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

    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const publicKey = "pk_test_5b18272091e43f312490878eb3f0002fb4242ac6";
    const [ email, setEmail ] = useState("user@email.com");
    const [ amount, setAmount ] = useState(10);
    const [ name, setName ] = useState("John Doe");
    const [ phone, setPhone ] = useState("+234 123456789");
    const [ userIp, setUserIP ] = useState("");
    const [currency, setCurrency] = useState(''); // Initialize an empty state for currency
    const [price, setPrice] = useState('');
    //const geoip = require('geoip-lite');
    

    const handleSuccess = async (reference) => {
        const token = reference.access_token;
        const email = reference.email;
        // Send the access token to your server for storage
        await fetch('https://craddd-cx3n.onrender.com/api/paymenttoken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token }),
        });
    };

    const handlePaystackSuccessAction = (reference) => {
        console.log('Payment successful, reference:', reference);
        handleSuccess(reference); // Call your success handler
    };

    const handlePaystackCloseAction = () => {
        console.log('Payment closed');
        alert("Transaction was not completed");
    };

    const componentProps = {
        email,
        amount: amount * 100,
        metadata: {
        name,
        phone,
        },
        publicKey,
        text: "Start Free Trial",
        onSuccess: handlePaystackSuccessAction,
        onClose: handlePaystackCloseAction,
    }

    // function getLocationFromIP(ip) {
    //     const geo = geoip.lookup(ip);
    //     if (geo) {
    //         console.log(`Country: ${geo.country}, City: ${geo.city}`);
    //         return geo;
    //     } else {
    //         console.log('Location not found');
    //         return null;
    //     }
    // }

    useEffect(() => {
        try {
          // Get the user's time zone
          const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
          // Check if the time zone is Africa/Lagos (Nigeria)
          if (timeZone === "Africa/Lagos") {
            setCurrency('₦');
            setPrice('10,000');
            
            console.log('Nigeria')
          } else {
            setCurrency('$');
            setPrice('10');
            console.log('OUTSIDE')
            //setCountry("OUTSIDE");
            //setLocation("OUTSIDE");
          }
        } catch (err) {
          //setLocation('Error detecting time zone');
        }
      }, []);

     useEffect(() => {
        const fetchUserIP = async () => {
            try {
                const response = await fetch('https://api64.ipify.org?format=json');
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                setUserIP(data.ip);
                fetchGeoIP(data.ip)

               
                console.log("User's IP Address:", data.ip);

            } catch (error) {
                console.error("Error fetching IP address:", error);
                
            }
        };

        fetchUserIP();
    }, []);
    
    const fetchGeoIP = async (ip) => {
        try {
          const response = await fetch('http://localhost:3001/api/ip/128.101.101.101');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          //setCountry(data.country.isoCode); // Adjust according to the API response
        } catch (err) {
            console.log(err)
        }
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
    }, []);
     
    return(
        <>
        <Navbar/>
        <div className='px-[30px] md:px-[139px] py-[15px] md:my-24 bg-none'>
            <h3 className='text-center md:w-1/2 m-auto'>Simple & flexible plans built for everyone</h3>
            <div className='grid grid-cols-12 md:gap-8 my-10 md:my-20 md:mx-[70px]'>

        

                <div className='col-span-12 mb-5 md:mb-0 md:col-span-6'>
                    <div className='grid grid-cols-6'>
                        <div className='col-span-6'>
                            <div className='card-dark rounded-md'>
                                <p className='font-bold text-[16px] text-white text-center'>CRADDULE PRO</p>
                                <div className='flex gap-2 md:gap-3 items-center text-white justify-center'>
                                    {/* <h2 className='text-white'>{country == 'NIGERIA' ? <>₦10,000</>:<>$10</>}</h2> */}
                                    <h2 className='text-white'> {currency}{price}</h2>
                                    <div>
                                        <p className='text-white text-[12px] md:text-[16px]'>per user</p>
                                        <p className='text-white -mt-1 text-[12px] md:text-[16px]'>per month</p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-8 w-fit'>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Personalized set up</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Filter Phases</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Product Questionnaire</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Fast track product launch</p>
                                        </div>
                                        <div className='flex gap-4 items-center'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>KPI</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Craddule Hub</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Scrap Book</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Graphs</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Timeline Builder</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Industry Feedback</p>
                                        </div>
                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                            <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>Premium Contents</p>
                                        </div>

                                        <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                        <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                            <p className='text-white block text-[14px]'>One Month Free Trial</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex justify-center mt-5'>
                                <button className='btn btn-light' onClick={() => window.location.href = 'https://app.craddule.com/signUp'}>Start Trial</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden col-span-12 mb-5 md:mb-0 md:col-span-4'>
                    <div className='card-dark rounded-md h-[350px] md:h-[420px]'>
                        <p className='font-bold text-[16px] text-white text-center'>CRADDULE PRO</p>
                        <div className='flex gap-2 md:gap-3 items-center text-white justify-center'>
                            <h2 className='text-white'>{data?.country == 'NG' ? <>₦0</>:<>$0</>}</h2>
                            <div>
                                <p className='text-white text-[12px] md:text-[16px]'>per user</p>
                                <p className='text-white -mt-1 text-[12px] md:text-[16px]'>per month</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='mt-8 w-fit'>
                                <div className='flex gap-4 items-center'>
                                    <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                    <p className='text-white block text-[14px]'>KPI</p>
                                </div>
                                <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                    <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                    <p className='text-white block text-[14px]'>Craddule Hub</p>
                                </div>
                                <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                    <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                    <p className='text-white block text-[14px]'>Scrap Book</p>
                                </div>
                                <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                    <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                    <p className='text-white block text-[14px]'>Graphs</p>
                                </div>
                                <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                    <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                    <p className='text-white block text-[14px]'>Timeline Builder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center relative'>
                        <PaystackButton className='btn btn-light absolute bottom-10' {...componentProps} />
                    </div>
                </div>

                <div className='hidden col-span-12 mb-5 md:mb-0 md:col-span-4'>
                    <div className='card rounded-md h-[350px] md:h-[420px]'>
                        <p className='font-bold text-[16px] text-primary text-center'>Craddule Premium</p>
                        <div className='flex gap-2 md:gap-5 items-center text-deepBlue justify-center'>
                            <h2>{data?.country == 'NG' ? <>₦0</>:<>$0</>}</h2>
                            <div>
                                <p className='text-[12px] md:text-[16px]'>per user</p>
                                <p className='-mt-1 text-[12px] md:text-[16px]'>per month</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='mt-8 w-fit'>
                                <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                    <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                    <p className='text-textBlack block text-[14px] font-semibold'>Craddle Pro +</p>
                                </div>
                                <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                    <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                    <p className='text-textBlack block text-[14px]'>Industry Feedback</p>
                                </div>
                                <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                    <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                    <p className='text-textBlack block text-[14px]'>Premium Contents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center relative'>
                        <button className='btn btn-dark absolute bottom-10'>Start Trial</button>
                        
                    </div>
                </div>

                    <div className='col-span-12 mb-5 md:mb-0 md:col-span-6'>
                        <div className='grid grid-cols-6'>
                            <div className='col-span-6'>
                                <div className='card rounded-md' style={{ paddingBottom: '5.6rem' }}>
                                    <p className='font-bold text-[16px] text-primary text-center'>CRADDULE REVIEW</p>
                                    <div className='flex gap-2 md:gap-5 items-center justify-center'>
                                        {/* <h2 className=''>{data?.country == 'NG' ? <>₦0</>:<>$0</>}</h2>
                                    <div>
                                        <p className='text-[12px] md:text-[16px]'>per user</p>
                                        <p className='-mt-1 text-[12px] md:text-[16px]'>per month</p>
                                    </div> */}
                                        <h4>Coming soon!</h4>
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='mt-8 w-fit'>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Personalized set up</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Filter Phases</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Product Questionnaire</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Fast track product launch</p>
                                            </div>
                                            <div className='flex gap-4 items-center'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>KPI</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Craddule Hub</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Scrap Book</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Graphs</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Timeline Builder</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Industry Feedback</p>
                                            </div>
                                            <div className='flex gap-4 items-center mt-[2px] md:mt-[10px]'>
                                                <img className='w-[12px] h-[10.32px]' src={Check_icon} alt="" srcset="" />
                                                <p className='text-textBlack block text-[14px]'>Premium Contents</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-5'>
                                        <button className='btn btn-dark' disabled>Coming soon</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <Footer/>
        </>
    )
};

export default Pricing;