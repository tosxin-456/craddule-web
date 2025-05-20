import '../input.css';
import Logo1 from '../assets/images/Craddule logo 1.png';
import Logo2White from '../assets/images/Craddule logo 2 white.png';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [referralCode, setReferralCode] = useState('');
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        // Fetch referralCode from localStorage
        const storedReferralCode = localStorage.getItem('referralCode');
        if (storedReferralCode) {
            setReferralCode(storedReferralCode);
        }
        
        // Get current year for copyright
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    // Function to create link with referral code if available
    const getLink = (path) => {
        return referralCode ? `${path}/${referralCode}` : path;
    };

    return (
        <footer className="w-full bg-deepBlue text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10">
                    {/* Logo and Company Description */}
                    <div className="lg:col-span-5">
                        <a href={getLink('/')} className="inline-flex items-center mb-6 group">
                            <img 
                                src={Logo1} 
                                className="w-[50px] md:w-[60px] transition-transform duration-300 group-hover:scale-110" 
                                alt="Craddule Logo" 
                            />
                            <p className="ml-3 text-[26px] md:text-[32px] font-black text-white">
                                Craddule
                            </p>
                        </a>
                        <p className="text-[14px] md:text-[16px] text-gray-300 leading-relaxed mt-4 max-w-md">
                            Craddule is a team of seasoned entrepreneurs, business strategists, and industry experts committed to supporting startups at every stage of their development.
                        </p>
                        
                    </div>

                    {/* Footer Links */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Useful Links */}
                            <div>
                                <h3 className="text-[16px] md:text-[18px] font-semibold mb-4 text-white relative">
                                    Useful Links
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                                </h3>
                                <ul className="space-y-3 mt-5">
                                    <li>
                                        <a 
                                            href={getLink('/about')} 
                                            className="text-[14px] md:text-[16px] text-gray-300 hover:text-primary transition-colors duration-200"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href={getLink('/contact')} 
                                            className="text-[14px] md:text-[16px] text-gray-300 hover:text-primary transition-colors duration-200"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h3 className="text-[16px] md:text-[18px] font-semibold mb-4 text-white relative">
                                    Company
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                                </h3>
                                <ul className="space-y-3 mt-5">
                                    <li>
                                        <a 
                                            href={getLink('/')} 
                                            className="text-[14px] md:text-[16px] text-gray-300 hover:text-primary transition-colors duration-200"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href={getLink('/pricing')} 
                                            className="text-[14px] md:text-[16px] text-gray-300 hover:text-primary transition-colors duration-200"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h3 className="text-[16px] md:text-[18px] font-semibold mb-4 text-white relative">
                                    Resources
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                                </h3>
                                <ul className="space-y-3 mt-5">
                                    <li>
                                        <a 
                                            href={getLink('/features')} 
                                            className="text-[14px] md:text-[16px] text-gray-300 hover:text-primary transition-colors duration-200"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="/privacy/policy" 
                                            className="text-[14px] md:text-[16px] text-gray-300 hover:text-primary transition-colors duration-200"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <p className="text-[14px] text-gray-400 text-center md:text-left">
                        Copyright &copy; {currentYear}, Craddule. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;