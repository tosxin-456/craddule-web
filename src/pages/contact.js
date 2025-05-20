import '../input.css'
import ContactImg from '../assets/images/contact.svg'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ReactGA from "react-ga4";
import { API_BASE_URL } from '../config/apiConfig';

const Contact = () => {
    ReactGA.initialize("G-125ZTWLY25");
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "Contact Us"
    });

    const navigate = useNavigate();
    const { referralCode } = useParams();

    useEffect(() => {
        if (referralCode) {
            localStorage.setItem('referralCode', referralCode);
        }
    }, [referralCode]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const [responseType, setResponseType] = useState(null); // 'success' or 'error'
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    // Animation states
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isFaqVisible, setIsFaqVisible] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState(null);

    useEffect(() => {
        // Staggered animations on page load
        setTimeout(() => setIsHeaderVisible(true), 300);
        setTimeout(() => setIsFormVisible(true), 600);
        setTimeout(() => setIsFaqVisible(true), 900);

        // Optional: Add scroll event listener for scroll animations
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const faqSection = document.getElementById('faq-section');

            if (faqSection && scrollPosition > faqSection.offsetTop - window.innerHeight * 0.8) {
                setIsFaqVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setAcceptedTerms(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage(null);

        try {
            const res = await fetch(`${API_BASE_URL}/api/mail/contact-us`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success) {
                setResponseType('success');
                setResponseMessage('Your message has been sent successfully! We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                setAcceptedTerms(false);
            } else {
                setResponseType('error');
                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseType('error');
            setResponseMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Animation helper classes
    const fadeInUp = "transition-all duration-700 ease-out";
    const slideInLeft = "transition-all duration-700 ease-out";
    const slideInRight = "transition-all duration-700 ease-out";
    const pulse = "transition duration-300 transform hover:scale-105";

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                <div
                    className={`text-center mb-12 ${fadeInUp} ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions or need assistance? We're here to help. Fill out the form below and we'll respond as soon as possible.
                    </p>
                </div>

                <div
                    className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl ${fadeInUp} ${isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Left side - Contact info */}
                        <div
                            className={`w-full md:w-2/5 bg-gray-800 p-8 md:p-12 flex flex-col justify-between ${slideInLeft} ${isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                                <div className="space-y-8">
                                    <div className={`flex items-center ${pulse}`}>
                                        <div className="bg-blue-500/20 p-3 rounded-full flex items-center justify-center mr-4 animate-pulse">
                                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white">Phone</h3>
                                            <p className="text-gray-300 mt-1">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className={`flex items-center ${pulse}`} style={{ transitionDelay: '0.3s' }}>
                                        <div className="bg-blue-500/20 p-3 rounded-full flex items-center justify-center mr-4 animate-pulse" style={{ animationDelay: '0.5s' }}>
                                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white">Email</h3>
                                            <p className="text-gray-300 mt-1">support@craddule.com</p>
                                        </div>
                                    </div>
                                    <div className={`flex items-center ${pulse}`} style={{ transitionDelay: '0.4s' }}>
                                        <div className="bg-blue-500/20 p-3 rounded-full flex items-center justify-center mr-4 animate-pulse" style={{ animationDelay: '1s' }}>
                                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white">Location</h3>
                                            <p className="text-gray-300 mt-1">123 Innovation Way, Tech Valley</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-lg font-medium text-white mb-4">Connect with us</h3>
                                <div className="flex space-x-4">
                                    {['twitter', 'instagram', 'facebook', 'linkedin'].map((social, index) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className={`bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 p-3 rounded-full transition-all duration-300 flex items-center justify-center`}
                                            onMouseEnter={() => setHoveredSocial(social)}
                                            onMouseLeave={() => setHoveredSocial(null)}
                                            style={{
                                                transform: hoveredSocial === social ? 'translateY(-5px) scale(1.1)' : 'translateY(0) scale(1)',
                                                transitionDelay: `${0.1 * index}s`
                                            }}
                                        >
                                            {social === 'twitter' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                                </svg>
                                            )}
                                            {social === 'instagram' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                                </svg>
                                            )}
                                            {social === 'facebook' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                                                </svg>
                                            )}
                                            {social === 'linkedin' && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                                </svg>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right side - Contact form */}
                        <div
                            className={`w-full md:w-3/5 bg-white p-8 md:p-12 ${slideInRight} ${isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>

                            {responseMessage ? (
                                <div
                                    className={`mb-8 p-4 rounded-lg ${responseType === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}
                                    style={{ animation: 'fadeIn 0.5s ease-out' }}
                                >
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            {responseType === 'success' ? (
                                                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                            ) : (
                                                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                                </svg>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium">{responseMessage}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="transition duration-300 transform hover:translate-y-1">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div className="transition duration-300 transform hover:translate-y-1" style={{ transitionDelay: '0.1s' }}>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div className="transition duration-300 transform hover:translate-y-1" style={{ transitionDelay: '0.2s' }}>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    {/* <div className="flex items-center transition duration-300 hover:bg-gray-50 p-2 rounded-lg" style={{ transitionDelay: '0.3s' }}>
                                        <input
                                            id="terms"
                                            name="terms"
                                            type="checkbox"
                                            required
                                            checked={acceptedTerms}
                                            onChange={handleCheckboxChange}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                                            I accept the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                                        </label>
                                    </div> */}

                                    <div className="transition duration-300 transform hover:translate-y-1" style={{ transitionDelay: '0.4s' }}>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white bg-primary font-medium py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-75 shadow-sm hover:shadow-lg transform hover:-translate-y-1"
                                        >
                                            {loading ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="faq-section"
                    className={`mt-16 bg-white rounded-xl shadow-lg p-8 ${fadeInUp} ${isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)', transitionDelay: '0.6s' }}
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "What is Craddule?",
                                content: "Craddule is a comprehensive platform designed to help businesses and individuals launch and manage their products effectively."
                            },
                            {
                                title: "How do I get started?",
                                content: "You can get started by signing up for our free trial or contacting our sales team for a personalized demo."
                            },
                            {
                                title: "Do you offer enterprise solutions?",
                                content: "Yes, we offer customized enterprise solutions. Please contact our sales team for more information."
                            },
                            {
                                title: "How can I cancel my subscription?",
                                content: "You can cancel your subscription at any time from your account settings or by contacting our support team."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-md hover:bg-blue-50"
                                style={{
                                    transitionDelay: `${0.1 * index}s`,
                                    opacity: isFaqVisible ? 1 : 0,
                                    transform: isFaqVisible ? 'translateY(0)' : 'translateY(20px)'
                                }}
                            >
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.title}</h3>
                                <p className="text-gray-600">{faq.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add keyframe animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `}</style>

            <Footer />
        </>
    );
};

export default Contact;