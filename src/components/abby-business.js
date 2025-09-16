import React, { useState, useEffect } from "react";
import {
    Sparkles,
    ArrowRight,
    Lightbulb,
} from "lucide-react";
import WordsRefinedSection from "./wordRefined";
import VisionToPitch from "./pitchDeck";
import WaitingForAbby from "./WaitingForAbby";

export default function AbbyLandingPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleGetStartedClick = () => {
        setShowModal(true);
    };

    return (
        <div className="min-h-screen text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-6 min-h-screen flex items-center">
                <div className="absolute inset-0"></div>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-medium">
                                    AI-Powered Business Planning
                                </span>
                            </div>

                            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                                Meet <span className="text-blue-600">Abby</span>
                                <br />
                                Your AI Business Partner
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Abby helps you go from idea to execution. Answer a guided set of
                                smart questions, and Abby instantly creates polished business
                                plans, pitch decks, and financial insights — ready for partners,
                                investors, and growth.
                            </p>

                            <button
                                onClick={handleGetStartedClick}
                                className="group px-8 py-4 rounded-lg font-semibold text-lg bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Start Free
                                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
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

            {/* Section 2: Right Questions */}
            <section className="min-h-screen flex items-center relative overflow-hidden bg-blue-900 text-white">
                <div className="max-w-6xl mx-auto px-8 w-full">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/15 hover:shadow-lg transition-all cursor-pointer">
                                <h4 className="text-white mb-3 text-xl font-semibold">
                                    What’s your vision?
                                </h4>
                                <p className="text-base opacity-90 m-0">
                                    Share the goals and impact you want your business to make.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/15 hover:shadow-lg transition-all cursor-pointer">
                                <h4 className="text-white mb-3 text-xl font-semibold">
                                    Who’s your audience?
                                </h4>
                                <p className="text-base opacity-90 m-0">
                                    Define who your customers are and how you’ll reach them.
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/15 hover:shadow-lg transition-all cursor-pointer">
                                <h4 className="text-white mb-3 text-xl font-semibold">
                                    What’s your advantage?
                                </h4>
                                <p className="text-base opacity-90 m-0">
                                    Highlight what sets your business apart in the market.
                                </p>
                            </div>
                        </div>
                        <div className="text-center text-white md:text-left">
                            <h2 className="text-4xl text-white md:text-5xl font-bold mb-6 leading-tight">
                                Abby Asks the Right Questions — You Provide the Answers
                            </h2>
                            <div
                                className="w-15 h-1 bg-primary mb-6 mx-auto md:mx-0"
                                style={{ backgroundColor: "#4f46e5" }}
                            ></div>
                            <p className="text-lg mb-6 leading-relaxed opacity-80">
                                Abby guides you through a tailored questionnaire, drawing out
                                the clarity you need to shape a strong strategy.
                            </p>
                            <p className="text-lg mb-6 leading-relaxed opacity-80">
                                Your answers become the backbone of business plans, pitch decks,
                                and financial reports — without endless trial and error.
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

                    <h2 className="text-5xl md:text-6xl font-bold mb-8">
                        Build a Business Plan That Works for You
                    </h2>

                    <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        Join thousands of entrepreneurs who use Abby to turn raw ideas into
                        structured, investor-ready strategies — all in less time than it
                        takes to make a cup of coffee.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={handleGetStartedClick}
                            className="group px-16 py-8 rounded-full font-semibold text-2xl bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                        >
                            Get Started
                            <ArrowRight className="inline ml-4 w-7 h-7 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-400">
                            Free to start • No credit card required • Setup in 5 minutes
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
