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
import AbbyBusinessJourney from '../components/abbe-business';
import AbbyLandingPage from '../components/abby-business';

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

            <AbbyLandingPage />



            <Footer />

        </>
    )
};

export default Home;