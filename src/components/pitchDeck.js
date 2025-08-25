import React, { useState } from 'react';
import { ArrowRight, Presentation, BarChart3, Users } from 'lucide-react';
import WaitingForAbby from './WaitingForAbby';

const VisionToPitch = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const handleGetStartedClick = () => {
        // e.preventDefault();
        setShowModal(true);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Your Vision, Now a Pitch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Documents are just the beginning — now it's time to present.
                        Abby transforms your refined content into a compelling pitch deck, tailored to capture the attention of investors, partners, and collaborators. Whether you're in the room or sending it across the world, Abby ensures your story is heard — and remembered.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Document Transformation */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Document transformation and analysis"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-800">AI-Powered</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Document Analysis</h3>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Transform your refined documents into compelling pitch narratives with intelligent content analysis.
                            </p>
                            {/* <button
                                onClick={handleGetStartedClick}

                                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                                Learn more
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button> */}
                        </div>
                    </div>

                    {/* Presentation Design */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Professional presentation design and pitch deck creation"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-800">Design Ready</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                    <Presentation className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Presentation Design</h3>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Create stunning, investor-ready pitch decks with professional templates and smart formatting.
                            </p>
                            {/* <button
                                onClick={handleGetStartedClick}

                                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group">
                                Learn more
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button> */}
                        </div>
                    </div>

                    {/* Investor Engagement */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Investor engagement and business presentations"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-800">Engagement</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Investor Engagement</h3>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Connect with investors through compelling storytelling and persuasive, data-driven presentations.
                            </p>
                            {/* <button
                                onClick={handleGetStartedClick}

                                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors group">
                                Learn more
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                        <div className="text-white">
                            <h3 className="text-xl text-white font-bold mb-2">Ready to transform your vision?</h3>
                            <p className="text-blue-100">Start creating compelling pitch decks in minutes</p>
                        </div>
                        {/* <button
                            onClick={handleGetStartedClick}

                            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
                            Get Started
                        </button> */}
                    </div>
                </div>
            </div>
            {showModal && <WaitingForAbby onClose={() => setShowModal(false)} />}
        </section>
    );
};

export default VisionToPitch;