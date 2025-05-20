import React, { useState, useEffect } from 'react';

// Import images
import signup from '../assets/scroll_images/signUp.jpeg';
import login from '../assets/scroll_images/login.jpeg';
import projects_page from '../assets/scroll_images/projectspage.jpeg';
import home_page from '../assets/scroll_images/homepage.jpeg';
import phase from '../assets/scroll_images/phasesummary.jpeg';
import questions from '../assets/scroll_images/questions.jpeg';

const PageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Rearranged slides to make phase summary the last one
    const slides = [
        {
            image: signup,
            title: "Sign Up",
            description: "Get started with Craddule by creating your account. Our simple signup process helps you join our community of innovators in just a few clicks."
        },
        {
            image: login,
            title: "Log In",
            description: "Securely access your Craddule account with our streamlined login page. Get back to building your startup vision in seconds."
        },
        {
            image: projects_page,
            title: "Projects Page",
            description: "Manage all your startup projects in one place. Track progress, set milestones, and organize your entrepreneurial journey efficiently."
        },
        {
            image: home_page,
            title: "Home Page",
            description: "Your personalized dashboard gives you an overview of your projects and progress. Access all of Craddule's powerful tools from one central hub."
        },
        {
            image: questions,
            title: "Questions",
            description: "Answer targeted questions that help refine your business model. Our expert-crafted prompts ensure you address all critical aspects of your startup."
        },
        {
            image: phase,
            title: "Phase Summary",
            description: "Your answers to key business questions are transformed into a structured phase summary using AI. This tailored roadmap ensures you move forward with a clear, well-defined strategy."
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-fadeIn">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Platform Tour</span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Discover Craddule</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-gray-700">Take a tour through our intuitive platform designed to support your startup journey</p>
                </div>

                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Image display area */}
                    <div className="relative h-96 md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-100">
                        {/* Using actual imported images */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src={slides[currentSlide].image}
                                alt={`${slides[currentSlide].title} screenshot`}
                                className="w-full h-full object-contain p-4"
                            />
                        </div>

                        {/* Navigation arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Description area */}
                    <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{slides[currentSlide].title}</h3>
                        <p className="text-gray-700 mb-6">{slides[currentSlide].description}</p>

                        {/* Dots indicator */}
                        <div className="flex justify-center space-x-2 mt-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {[0, 2, 5].map((index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 cursor-pointer"
                            onClick={() => goToSlide(index)}
                        >
                            <h4 className="font-semibold text-lg text-gray-900 mb-2">{slides[index].title}</h4>
                            <p className="text-sm text-gray-600">{slides[index].description.substring(0, 100)}...</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PageSlider;