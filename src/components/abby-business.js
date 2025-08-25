import React, { useState, useEffect } from 'react';
import {
    Heart,
    MessageCircle,
    Edit3,
    BarChart3,
    Sparkles,
    ArrowRight,
    CheckCircle,
    Users,
    Target,
    Lightbulb,
    TrendingUp,
    Star,
    Zap,
    Shield,
    Globe,
    Play
} from 'lucide-react';
import WordsRefinedSection from './wordRefined';
import VisionToPitch from './pitchDeck';
import Check from '../assets/images/check.jpeg'
import WaitingForAbby from './WaitingForAbby';

export default function AbbyLandingPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        { icon: Heart, title: "Personalized to You", desc: "Built around your values and vision" },
        { icon: MessageCircle, title: "Smart Questions", desc: "Adaptive questionnaire for your business type" },
        { icon: Edit3, title: "Refined Content", desc: "AI-powered narrative enhancement" },
        { icon: BarChart3, title: "Compelling Pitches", desc: "Investor-ready presentations" }
    ];

    const stats = [
        { number: "10k+", label: "Businesses Launched" },
        { number: "95%", label: "Success Rate" },
        { number: "24/7", label: "AI Support" },
        { number: "5min", label: "Average Setup" }
    ];

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Tech Startup Founder",
            content: "Abby helped me transform my scattered ideas into a cohesive business plan that secured $2M in funding.",
            rating: 5
        },
        {
            name: "Marcus Rodriguez",
            role: "Restaurant Owner",
            content: "The personalized approach made all the difference. Abby understood my vision and helped me articulate it perfectly.",
            rating: 5
        },
        {
            name: "Emily Johnson",
            role: "E-commerce Entrepreneur",
            content: "From concept to pitch deck in hours, not weeks. Abby streamlined my entire business planning process.",
            rating: 5
        }
    ];

    const handleGetStartedClick = () => {
        // e.preventDefault();
        setShowModal(true);
    };

    return (
        <div className="min-h-screen text-black overflow-hidden">

            {/* Hero Section */}
            <section className="relative py-20 px-6 min-h-screen flex items-center">
                <div className="absolute inset-0 "></div>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3">
                                <Sparkles className="w-5 h-5 " />
                                <span className="font-medium">AI-Powered Business Planning</span>
                            </div>

                            <h1 className="text-7xl font-bold leading-tight">
                                Meet <span className="">Abby</span>
                                <br />
                                Your AI Business Partner
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Transform your business vision into reality with personalized AI guidance. From concept to pitch deck in minutes, not months.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleGetStartedClick}
                                    className="group px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Start Building Now
                                    <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                {/* <button className="group flex items-center gap-3 px-8 py-4 border border-gray-600 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300">
                                    <Play className="w-5 h-5" />
                                    Watch Demo
                                </button> */}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-6 rounded-3xl blur-2xl opacity-30"></div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                                    alt="Business planning workspace"
                                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Meet Abby - Redesigned with Blue Theme */}



            {/* Section 2: Right Questions */}
            <section className="min-h-screen flex items-center relative overflow-hidden bg-darkBlue text-white">
                <div className="max-w-6xl mx-auto px-8 w-full">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:bg-opacity-15 hover:shadow-lg cursor-pointer">
                                <h4 className="text-white mb-3 text-xl font-semibold">What's your vision?</h4>
                                <p className="text-base opacity-90 m-0">Tell us about the impact you want to make in the world.</p>
                            </div>
                            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:bg-opacity-15 hover:shadow-lg cursor-pointer">
                                <h4 className="text-white mb-3 text-xl font-semibold">Who's your audience?</h4>
                                <p className="text-base opacity-90 m-0">Help us understand who you're building this for.</p>
                            </div>
                            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:bg-opacity-15 hover:shadow-lg cursor-pointer">
                                <h4 className="text-white mb-3 text-xl font-semibold">What's your advantage?</h4>
                                <p className="text-base opacity-90 m-0">What makes your approach uniquely valuable?</p>
                            </div>
                        </div>
                        <div className="text-center text-white md:text-left">
                            <h2 className="text-4xl text-white md:text-5xl font-bold mb-6 leading-tight">
                                We Ask the Right Questions — So You Can Give the Right Answers
                            </h2>
                            <div className="w-15 h-1 bg-primary mb-6 mx-auto md:mx-0" style={{ backgroundColor: '#4f46e5' }}></div>
                            <p className="text-lg mb-6 leading-relaxed opacity-80">
                                Building a business starts with asking the right questions.
                            </p>
                            <p className="text-lg mb-6 leading-relaxed opacity-80">
                                Abby guides you through a smart, adaptive questionnaire — tailored specifically to your business
                                type, stage, and aspirations. Each question is designed to draw out clarity and strategy,
                                helping you form the backbone of your core business documents, one thoughtful answer at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {showModal && <WaitingForAbby onClose={() => setShowModal(false)} />}
            <WordsRefinedSection />
            <VisionToPitch />

            {/* CTA Section */}
            <section className="py-32 px-6 ">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="relative inline-block mb-12">
                        <div className="absolute -inset-6 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                        <div className="relative rounded-full p-6">
                            <Lightbulb className="w-20 h-20 text-black" />
                        </div>
                    </div>

                    <h2 className="text-6xl font-bold mb-8">Ready to Build Something That Feels Like You?</h2>

                    <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        Join thousands of entrepreneurs who've transformed their ideas into successful businesses with Abby's AI-powered guidance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={handleGetStartedClick}

                            className="group px-16 py-8 rounded-full font-semibold text-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
                            Get Started
                            <ArrowRight className="inline ml-4 w-7 h-7 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-400">No credit card required • Free to start • 5-minute setup</p>
                    </div>
                </div>
            </section>
        </div >
    );
}