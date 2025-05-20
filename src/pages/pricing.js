import '../input.css';
import Check_icon from '../assets/images/check_icon.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useNavigate, useParams } from 'react-router-dom';
import ReactGA from "react-ga4";
import WOW from "wowjs";
import "animate.css";
import { motion, AnimatePresence } from "framer-motion";
import { Repeat, Wallet, ChevronLeft, MapPin, Globe } from 'lucide-react';

const Pricing = () => {
    // Google Analytics Initialization
    ReactGA.initialize("G-125ZTWLY25");
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "Pricing"
    });

    const navigate = useNavigate();
    const { referralCode } = useParams();

    // WOW.js Animation Initialization
    useEffect(() => {
        new WOW.WOW({
            live: true,
            boxClass: "wow",
            animateClass: "animate__animated",
            offset: 0,
            mobile: true,
            duration: 2,
        }).init();
    }, []);

    // Referral Code Storage
    useEffect(() => {
        if (referralCode) {
            localStorage.setItem('referralCode', referralCode);
        }
    }, [referralCode]);

    // State Management
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [userIp, setUserIP] = useState("");
    const [currency, setCurrency] = useState('₦');
    const [currencyCode, setCurrencyCode] = useState('NGN');
    const [monthlyPrice, setMonthlyPrice] = useState('15,000');
    const [lifetimePrice, setLifetimePrice] = useState('35,000');
    const [isAfrican, setIsAfrican] = useState(true);
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
    const [locationName, setLocationName] = useState("Nigeria");

    // Location, Currency and Price Detection
    useEffect(() => {
        const detectLocation = async () => {
            try {
                const response = await axios.get('https://ipinfo.io?token=aee064e2cc5a04');
                setData(response.data);

                // List of African country codes
                const africanCountries = [
                    'NG'
                ];

                // Check if user is in an African country
                const isInAfrica = africanCountries.includes(response.data.country);
                setIsAfrican(isInAfrica);

                // Set location display name
                if (response.data.country === 'NG') {
                    setLocationName("Nigeria");
                } else if (isInAfrica) {
                    setLocationName("Africa");
                } else {
                    setLocationName("International");
                }

                // Set pricing based on location
                if (isInAfrica) {
                    setCurrency('₦');
                    setCurrencyCode('NGN');
                    setMonthlyPrice('15,000');
                    setLifetimePrice('35,000');
                } else {
                    setCurrency('$');
                    setCurrencyCode('USD');
                    setMonthlyPrice('15');
                    setLifetimePrice('35');
                }

                setLoading(false);
            } catch (error) {
                console.error("Error detecting location:", error);
                // Default to Nigerian pricing if location detection fails
                setCurrency('₦');
                setCurrencyCode('NGN');
                setMonthlyPrice('15,000');
                setLifetimePrice('35,000');
                setIsAfrican(true);
                setLocationName("Nigeria");
                setLoading(false);
            }
        };

        detectLocation();
    }, []);

    // IP Address Fetching
    useEffect(() => {
        const fetchUserIP = async () => {
            try {
                const response = await fetch('https://api64.ipify.org?format=json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserIP(data.ip);
            } catch (error) {
                console.error("Error fetching IP address:", error);
            }
        };

        fetchUserIP();
    }, []);

    // Payment Plan Features
    const getFeatures = () => [
        {
            id: 2,
            icon: <Repeat size={30} className="text-white" />,
            title: "Subscription Plan",
            description: `Get unlimited access at just ${currency}${monthlyPrice} per month.`,
            buttonText: "Start Monthly Plan",
            onClick: () => window.location.href = `https://app.craddule.com/signup/${referralCode ? referralCode : ''}?plan=monthly`
        },
        {
            id: 3,
            icon: <Wallet size={30} className="text-white" />,
            title: "One-Time Payment",
            description: `Pay ${currency}${lifetimePrice} once and get full access for a single project—no recurring fees.`,
            buttonText: "Get Lifetime Access",
            onClick: () => window.location.href = `https://app.craddule.com/signup/${referralCode ? referralCode : ''}?plan=lifetime`
        }
    ];

    if (loading) {
        return (
            <>
                <Navbar />
                <div className='px-4 md:px-24 py-8 md:py-16 bg-gray-50 min-h-screen flex justify-center items-center'>
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading pricing details...</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className='px-4 md:px-24 py-8 md:py-16 bg-gray-50'>
                <div className='max-w-5xl mx-auto'>
                    {/* Page Title */}
                    <h1 className='text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 animate-fadeIn'>
                        Simple & flexible plans built for everyone
                    </h1>
                    <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeIn animate-delay-200'>
                        Choose the plan that best fits your needs and start building your dream product today.
                    </p>

                    {/* Location Indicator */}
                    {/* <div className="flex items-center justify-center mb-8 text-gray-600">
                        <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                            {isAfrican ? (
                                <MapPin size={18} className="text-blue-600 mr-2" />
                            ) : (
                                <Globe size={18} className="text-blue-600 mr-2" />
                            )}
                            <span className="text-sm font-medium">
                                {locationName} Pricing ({currencyCode})
                            </span>
                        </div>
                    </div> */}

                    {/* Pricing Card */}
                    <AnimatePresence mode="wait">
                        {!showPaymentOptions && (
                            <motion.div
                                key="pricing-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className='grid grid-cols-1 place-items-center'
                            >
                                <div className='bg-darkBlue rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-slideInRight w-full max-w-md'>
                                    <div className='p-8'>
                                        {/* Feature List */}
                                        <div className='space-y-4 mb-8'>
                                            {[
                                                "Dedicated Product Launch Support",
                                                "In-depth Market Analysis",
                                                "Priority Customer Support",
                                                "Fast Track Product Launch",
                                                "Industry Feedback",
                                                "Start Your Ideation for Free"
                                            ].map((feature, index) => (
                                                <div key={index} className='flex items-center'>
                                                    <img
                                                        className='w-3 h-3 mr-3 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12'
                                                        src={Check_icon}
                                                        alt="Checkmark"
                                                    />
                                                    <p className='text-white'>{feature}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Subscribe Button */}
                                        <div className="w-full flex justify-center">
                                            <button
                                                className='border-white border-solid border-[2px] bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:translate-y-1'
                                                onClick={() => window.location.href = `https://app.craddule.com/signup/${referralCode ? referralCode : ''}`}
                                            >
                                                Start your Project
                                            </button>
                                        </div>
                                        <p className="text-white mt-2 text-center mb-6 max-w-2xl mx-auto">Explore, validate and refine your idea with no commitment fees or hidden costs</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Payment Options Container */}
                    <div className="container mx-auto p-4 bg-white flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            {!showPaymentOptions ? (
                                <motion.div
                                    key="ideation"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-blue-50 text-blue-900 p-6 rounded-xl text-center mb-8 max-w-2xl w-full"
                                >
                                    <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                                        Ready to kickstart your product journey? Explore our pricing options below.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowPaymentOptions(true)}
                                        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold 
                                        hover:bg-blue-700 transition-colors duration-300 shadow-md"
                                    >
                                        Get Started
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="payment-options"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full"
                                >
                                    {/* Back Button */}
                                    <button
                                        onClick={() => setShowPaymentOptions(false)}
                                        className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
                                    >
                                        <ChevronLeft className="mr-2 bg-primary text-white rounded-full" />
                                        Back
                                    </button>

                                    <div className="grid md:grid-cols-2 gap-6 justify-center max-w-5xl w-full">
                                        {getFeatures().map((feature) => (
                                            <motion.div
                                                key={feature.id}
                                                whileHover={{ scale: 1.05 }}
                                                className="bg-primary border border-blue-100 text-blue-900 p-6 rounded-xl 
                                                shadow-md flex flex-col text-white items-center text-center transition-all duration-300 w-full"
                                            >
                                                <div className="bg-black rounded-full p-4 mb-4">
                                                    {feature.icon}
                                                </div>
                                                <h3 className="text-xl text-white font-bold mb-2">{feature.title}</h3>
                                                <p className="text-white mb-4">{feature.description}</p>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={feature.onClick}
                                                    className="border-white border-solid border-[2px] bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:translate-y-1"
                                                >
                                                    {feature.buttonText}
                                                </motion.button>
                                                <motion.p className='mt-3 text-[14px]'>
                                                    We do not charge for this plan till you have completed your project ideation phase.
                                                </motion.p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Custom Plan Section */}
                    <div className='mt-16 text-center animate-fadeIn animate-delay-500'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                            Need a custom plan for your team?
                        </h3>
                        <p className='text-gray-600 mb-6'>
                            Contact us for a tailored enterprise solution.
                        </p>
                        <button
                            className='bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-1'
                            onClick={() => window.location.href = 'mailto:sales@craddule.com'}
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Pricing;