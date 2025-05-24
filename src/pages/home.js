import Subscribe from '../components/subscribe';
import Smart from '../assets/images/smart.svg'
import Financial from '../assets/images/insight.svg'
import Seamless from '../assets/images/exploration.svg'
import Pitch from '../assets/images/investor.svg'
import Check from '../assets/images/check.jpeg'
import Main from '../assets/bg-image/change-one.png'
import Main2 from '../assets/bg-image/change-two.png'
import Main3 from '../assets/bg-image/change-three.png'
import '../input.css'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useNavigate, useParams } from 'react-router-dom';
import ReactGA from "react-ga4";
import other1 from '../assets/images/group-1.svg';
import other2 from '../assets/images/group-2.svg';
import other3 from '../assets/images/group-3.svg';
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import Vision from '../assets/bg-image/Artificial intelligence (AI).jpeg';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import bg_video from '../assets/videos/coffee.mp4'
import WOW from "wowjs";
import "animate.css";
import PageSlider from '../components/slider';
import WaitingForAbby from '../components/WaitingForAbby';

const Home = () => {
    ReactGA.initialize("G-125ZTWLY25");
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "Home"
    });

    const navigate = useNavigate();
    const { referralCode } = useParams();
    const [code, setCode] = useState(null);

    // Refs for scroll animations
    const aboutRef = useRef(null);
    const featuresRef = useRef(null);
    const offerRef = useRef(null);
    const connectRef = useRef(null);

    // Animation controls
    const aboutControls = useAnimation();
    const featuresControls = useAnimation();
    const offerControls = useAnimation();
    const connectControls = useAnimation();

    // Check if elements are in view
    const aboutInView = useInView(aboutRef, { once: false, threshold: 0.2 });
    const featuresInView = useInView(featuresRef, { once: false, threshold: 0.2 });
    const offerInView = useInView(offerRef, { once: false, threshold: 0.2 });
    const connectInView = useInView(connectRef, { once: false, threshold: 0.2 });

    // Hero section animations
    const heroImgVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                duration: 1.2,
                bounce: 0.4
            }
        }
    };

    const heroTextVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 1,
                delay: 0.3
            }
        }
    };

    // Floating animation for the main image
    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    useEffect(() => {
        if (referralCode) {
            localStorage.setItem('referralCode', referralCode);
            setCode(referralCode);
        } else {
            const storedCode = localStorage.getItem('referralCode');
            if (storedCode) {
                setCode(storedCode);
            }
        }
    }, [referralCode]);

    useEffect(() => {
        new WOW.WOW({
            live: true,
            boxClass: "wow", // Adjusts class name for animation
            animateClass: "animate__animated", // Adjusts animation class
            offset: 0, // Determines the trigger point for animations
            mobile: true, // Enable animation on mobile devices
            duration: 2, // Makes the animation duration slower (default is 1)
        }).init();
    }, []);

    // Trigger animations when elements come into view
    useEffect(() => {
        if (aboutInView) {
            aboutControls.start('visible');
        }
        if (featuresInView) {
            featuresControls.start('visible');
        }
        if (offerInView) {
            offerControls.start('visible');
        }
        if (connectInView) {
            connectControls.start('visible');
        }
    }, [aboutInView, featuresInView, offerInView, connectInView]);

    const images = [
        Main,
        Main2,
        Main3,
    ];

    const imagestwo = [
        other1,
        other2,
        other3,
    ];

    const features = [
        {
            id: 1,
            image: Smart,
            title: "Smart Document Creation",
            description: "Create professional-grade documents with ease, powered by Abby.",
        },
        {
            id: 2,
            image: Financial,
            title: "Powerful Financial Insights",
            description: "Track financial performance and forecast revenue.",
        },
        {
            id: 3,
            image: Pitch,
            title: "Investor-Ready Pitch Decks",
            description: "Craft compelling pitch decks with expert guidance.",
        },
        {
            id: 4,
            image: Seamless,
            title: "Seamless Collaboration",
            description: "Assign tasks and track progress in real-time.",
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [popupVisible, setPopupVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(window.innerWidth >= 1024 ? 3 : 1);
    const [currentPage, setCurrentPage] = useState(0);

    // Card animation variants for staggered effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.6
            }
        }
    };

    // Handles drag movement
    const handleDrag = (_, info) => {
        const threshold = 50; // Adjust sensitivity
        if (info.offset.x < -threshold && currentIndex < features.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (info.offset.x > threshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth >= 1024 ? 2 : 1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(features.length / itemsPerView);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = () => {
        navigate('/pricing')
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + itemsPerView) % features.length
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [features.length, itemsPerView]);

    // Animation Variants
    const variants = {
        enter: { opacity: 0, x: 100 }, // Slide in from right
        center: { opacity: 1, x: 0 }, // Active item
        exit: { opacity: 0, x: -100 }, // Slide out to left
    };

    const handleDragEnd = (event, info) => {
        const swipeThreshold = 50;
        if (info.offset.x < -swipeThreshold) {
            handleNext();
        } else if (info.offset.x > swipeThreshold) {
            handlePrev();
        }
    };

    // Update itemsPerView when window size changes
    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth >= 1024 ? 3 : 1);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate total steps correctly
    const totalSteps = Math.ceil(features.length / itemsPerView);

    // Modify the next and previous handlers to move by itemsPerView
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    useEffect(() => {
        axios.get('https://ipinfo.io?token=aee064e2cc5a04')
            .then(response => {
                setData(response.data);
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

    // Rotate animation for the check icons
    const checkIconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    const handleGetStartedClick = () => {
        // e.preventDefault();
        setShowModal(true);
    };

    return (
        <>
            {popupVisible && (
                <motion.div
                    className="popup w-[90%] md:w-[50%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                >
                    <div className="float-right">
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" onClick={handleButtonClick}>
                            <rect width="24" height="24" fill="none" />
                            <g fill="none" stroke="#0A2640" stroke-width="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5" />
                            </g>
                        </svg>
                    </div>
                    <motion.div
                        className='flex justify-center mt-5'
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path fill="none" stroke="#526484" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 17a5 5 0 0 0-3.537-3.538M17 17a5 5 0 0 0 1.296-4.834M17 17a5 5 0 0 0 4.834-1.295M17 17a5 5 0 0 0 3.537 3.539M17 17a5 5 0 0 0-1.296 4.834M17 17a5 5 0 0 0-4.834 1.296m1.297-4.834a5.05 5.05 0 0 0-1.297 4.834m1.297-4.834a5.05 5.05 0 0 1 4.833-1.296m0 0a5.01 5.01 0 0 1 3.538 3.539m0 0a5.05 5.05 0 0 1-1.297 4.834m0 0a5.05 5.05 0 0 1-4.832 1.295m0 0a5.01 5.01 0 0 1-3.539-3.538M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466" color="#526484" />
                        </svg>
                        <svg className='block md:hidden' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none" />
                            <path fill="none" stroke="#526484" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 17a5 5 0 0 0-3.537-3.538M17 17a5 5 0 0 0 1.296-4.834M17 17a5 5 0 0 0 4.834-1.295M17 17a5 5 0 0 0 3.537 3.539M17 17a5 5 0 0 0-1.296 4.834M17 17a5 5 0 0 0-4.834 1.296m1.297-4.834a5.05 5.05 0 0 0-1.297 4.834m1.297-4.834a5.05 5.05 0 0 1 4.833-1.296m0 0a5.01 5.01 0 0 1 3.538 3.539m0 0a5.05 5.05 0 0 1-1.297 4.834m0 0a5.05 5.05 0 0 1-4.832 1.295m0 0a5.01 5.01 0 0 1-3.539-3.538M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466" color="#526484" />
                        </svg>
                    </motion.div>
                    <motion.div
                        className='mt-5'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <p className='text-center text-[15px] md:text-[18px] text-textBlack font-medium'>We know, we are also very eager to get you started on this journey.</p>
                        <p className='text-center text-[15px] md:text-[18px] text-textBlack font-medium'>We are coming live very soon.</p>
                        <p className='text-center text-[15px] md:text-[18px] text-textBlack font-medium'>In the interim, Join our waitlist and we will connect.</p>
                        <div className='flex justify-center mt-3 mb-4'>
                            <motion.a
                                href={referralCode ? `/${referralCode}` : '/'}
                                className='block mt-2 bg-deepBlue btn-sm btn-dark text-textBlue'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Join now
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <div className="mainCTA h-[90vh] md:h-[110vh] relative w-full px-[15px] md:px-[90px]">
                <Navbar />
                <div className="w-full grid grid-cols-12 md:gap-20 z-50">
                    <motion.div
                        className="col-span-12 md:col-span-6 pt-[60px] md:pt-[120px]"
                        initial="hidden"
                        animate="visible"
                        variants={heroTextVariants}
                    >
                        <h1 className="text-white">Build your dreams, change the world!</h1>
                        <p className="text-[#FFFFFF]">
                            Innovation is at the core of every new idea or business.  Take advantage of our advanced AI tools to build your dreams.
                            We believe in your ability to change the world!
                        </p>
                        <div className="flex hover:cursor-pointer gap-4 mt-5 md:mt-10">
                            <motion.a
                                // href={`https://app.craddule.com/signup${code ? `/${code}` : ''}`}
                                className="btn btn-dark-outline bg-[#193FAE] text-white"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleGetStartedClick()}

                            >
                                Get Started
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="col-span-12 pt-[50px] flex flex-col items-center md:col-span-6 md:pt-[70px]"
                        initial="hidden"
                        animate="visible"
                        variants={heroImgVariants}
                    >
                        <div className="flex justify-center w-full">
                            <motion.img
                                className="bg-opacity-100 md:w-[80%] w-[60%]"
                                src={images[currentImage]}
                                alt=""
                                animate={floatingAnimation}
                            />
                        </div>
                        <motion.p
                            className="text-[#A3A3A3] text-center mt-4 md:mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            "Your imagination is the window into a new world, let Craddule help you build it."
                        </motion.p>
                    </motion.div>
                </div>
            </div>
            {showModal && <WaitingForAbby onClose={() => setShowModal(false)} />}

            {/* Transition Section */}
            <div className="relative w-full py-16 md:py-24 bg-white" ref={aboutRef}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    {/* Content container */}
                    <motion.div
                        className="flex flex-col items-center"
                        initial="hidden"
                        animate={aboutControls}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                    >
                        {/* Heading with gradient text */}
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-8"
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { type: "spring", stiffness: 100 }
                                }
                            }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-600">
                                Seamlessly Turn Ideas Into Reality
                            </span>
                        </motion.h2>

                        {/* Cards that fade from white to video-matching colors */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                            variants={containerVariants}
                        >
                            {/* Card 1 */}
                            <motion.div
                                className="bg-gradient-to-b from-white to-indigo-50 rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full mb-4"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Ideate</h3>
                                    <p className="text-gray-600">Harness the power of AI to expand your creative horizons.</p>
                                </div>
                            </motion.div>
                            {/* Card 2 */}
                            <motion.div
                                className="bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 2a8 8 0 11-4.906 14.32l-2.924.732a1 1 0 01-1.22-1.22l.732-2.924A8 8 0 0110 2zm1 10a1 1 0 10-2 0v2a1 1 0 102 0v-2zm0-4a1 1 0 10-2 0v1a1 1 0 102 0V8z" clipRule="evenodd"></path>
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Evolve</h3>
                                    <p className="text-gray-600">Adapt, innovate, and grow with limitless possibilities.</p>
                                </div>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                className="bg-gradient-to-b from-white to-indigo-100 rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        className="w-16 h-16 flex items-center justify-center bg-indigo-200 rounded-full mb-4"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <svg className="w-8 h-8 text-indigo-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Launch</h3>
                                    <p className="text-gray-600">Bring your vision to life with our streamlined platform.</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Bottom gradient element to blend into video */}
                        <div className="w-full h-24 mt-16 bg-gradient-to-b from-white to-transparent"></div>
                    </motion.div>
                </div>
            </div>

            <div className="relative w-full min-h-screen">
                {/* Background Video */}
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <video
                        className="absolute min-w-full min-h-full object-cover"
                        src={bg_video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Overlay to make content more visible */}
                    <div className="absolute inset-0 bg-deeperBlue bg-opacity-50"></div>
                </div>

                {/* Content that will be displayed on top of the video */}
                <div className="relative  z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-white">
                    {/* Abby Section */}
                    <div className="w-full max-w-7xl mx-auto mt-16 md:mt-24 px-4">
                        <div className="bg-gray-50 shadow-md rounded-2xl p-6 md:p-8">
                            <div className="grid items-center gap-8">
                                {/* <div className="flex justify-center">
                                    <div className="relative overflow-hidden rounded-full border-4 border-[#193FAE]/70">
                                        <img
                                            className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] object-cover"
                                            src={Vision}
                                            alt="Abby Vision"
                                        />
                                    </div>
                                </div> */}
                                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="inline-block">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative">
                                            Abby
                                            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#193FAE]"></span>
                                        </h2>
                                    </div>
                                    <p className="text-lg md:text-xl text-gray-700 max-w-lg mt-4 leading-relaxed">
                                        With Abby, your AI-powered business assistant, it will take you less time to build your dream business than it will take you to finish a good cup of coffee. She handles the heavy lifting so you can focus on what truly matters
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-4">
                                        <button className="px-6 py-2 bg-[#193FAE] hover:bg-[#0E2A8E] transition-all rounded-md text-white">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="px-6 md:px-20 md:rounded-md w-full md:w-[90%] m-auto py-4 my-6 md:my-16 bg-none">
                <div className="w-fit m-auto">
                    <h2 className="text-center text-black border-b-8 border-[#193FAE] inline-block rounded-b-lg rounded-t-lg mx-auto pb-2 mb-4">
                        What we offer
                    </h2>
                </div>

                <div className="relative w-full mx-auto backdrop-blur-md rounded-2xl text-white p-6 overflow-hidden">
                    {/* Carousel Container */}
                    <div className="relative w-full overflow-hidden mb-10">
                        <motion.div
                            className="flex w-full gap-4"
                            animate={{
                                x: window.innerWidth < 768 ? `-${currentIndex * 100}%` : 0
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            drag={window.innerWidth < 768 ? "x" : false}
                            dragConstraints={{
                                left: window.innerWidth < 768 ? -((features.length - 1) * 100) + "%" : 0,
                                right: 0
                            }}
                            onDragEnd={handleDragEnd}
                        >
                            {/* Desktop View - Show all features in a row */}
                            <div className="hidden md:flex w-full gap-4">
                                {features.map((feature) => (
                                    <motion.div
                                        key={feature.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.6 }}
                                        className="relative flex flex-col items-start justify-between p-6 rounded-2xl 
                            flex-1 h-[300px] bg-primary text-white"
                                    >
                                        <div className="bg-black rounded-full w-[60px] h-[60px] flex items-center justify-center overflow-hidden mb-4">
                                            <img className="w-[35px] h-[35px] object-contain" src={feature.image} alt={feature.title} />
                                        </div>
                                        <div className="flex flex-col flex-grow justify-start">
                                            <p className="text-xl font-semibold text-start break-words max-w-full">
                                                {feature.title}
                                            </p>
                                            <p className="mt-3 text-sm text-gray-200 text-start leading-tight break-words max-w-full">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile View - Show one at a time */}
                            <div className="flex md:hidden w-full gap-4">
                                {features.map((feature) => (
                                    <motion.div
                                        key={feature.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.6 }}
                                        className="relative flex flex-col items-start justify-between p-6 rounded-2xl 
                            w-full shrink-0 h-[300px] bg-primary text-white"
                                    >
                                        <div className="bg-black rounded-full w-[60px] h-[60px] flex items-center justify-center overflow-hidden mb-4">
                                            <img className="w-[35px] h-[35px] object-contain" src={feature.image} alt={feature.title} />
                                        </div>
                                        <div className="flex flex-col flex-grow justify-start">
                                            <p className="text-[22px] font-semibold text-start break-words max-w-[95%]">
                                                {feature.title}
                                            </p>
                                            <p className="mt-3 text-[16px] text-gray-200 text-start leading-tight break-words max-w-[95%]">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Controls - Only show on mobile */}
                    <div className="flex flex-col items-center justify-center gap-4 mt-2 md:hidden">
                        {/* Progress Bar */}
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="w-full h-3 bg-gray-700 rounded-full relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-3 bg-primary rounded-full"
                                    animate={{ width: `${((currentIndex + 1) / features.length) * 100}%` }}
                                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                />
                            </div>
                            <p className="text-center mt-2 text-black font-medium">
                                {currentIndex + 1}/{features.length}
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-center gap-8 mt-2">
                            <button
                                onClick={handlePrev}
                                className="bg-gray-800 p-3 border-black border-solid border-[1px] bg-custom-gray rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                            >
                                <ChevronLeft size={24} className="text-black" />
                            </button>

                            <button
                                onClick={handleNext}
                                className="bg-gray-800 bg-custom-gray p-3 border-black border-solid border-[1px] rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                            >
                                <ChevronRight size={24} className="text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PageSlider />

            <div className='px-[30px] md:px-[107px] py-[15px] md:bg-bgVeryBlack md:mx-10 md:rounded-md text-black my-10 md:my-24 bg-none'>
                <div className='grid grid-cols-12 md:gap-20 items-start'>
                    <div className='col-span-12 md:col-span-6'>
                        <div className=''>
                            <h2 className='text-black' >We connect our customers with the best features.</h2>
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
                        <a
                           onClick={handleGetStartedClick}
                            className='block cursor-pointer btn btn-dark mt-5 md:mt-10'>Get Started</a>
                    </div>
                    <div className=' hidden md:block col-span-12 md:col-span-6'>
                        <div className=''>
                            <img className='m-auto w-[300.6px] h-[350px] md:w-[582.6px] md:h-[560px]' src={imagestwo[currentImage]} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
};

export default Home;