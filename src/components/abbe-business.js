import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Sparkles, Presentation, ArrowRight, Zap, Target, Users, Lightbulb, CheckCircle } from 'lucide-react';

const AbbyBusinessJourney = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sections = [
        {
            title: "Meet Abby — The Heart of Your Business Journey",
            subtitle: "Your vision matters — and Abby is here to bring it to life.",
            description: "Think of Abby as the engine that powers your business dreams. She's your AI partner, designed not just to help you start a business, but to shape it around your values, your goals, and your voice. Abby doesn't tell you what your business should be — she helps you build the one you believe in.",
            icon: Heart,
            gradient: "from-pink-500 to-rose-500",
            bgGradient: "from-pink-50 to-rose-50",
            features: ["Values-driven approach", "Personalized guidance", "Your voice, amplified"]
        },
        {
            title: "We Ask the Right Questions — So You Can Give the Right Answers",
            subtitle: "Building a business starts with asking the right questions.",
            description: "Abby guides you through a smart, adaptive questionnaire — tailored specifically to your business type, stage, and aspirations. Each question is designed to draw out clarity and strategy, helping you form the backbone of your core business documents, one thoughtful answer at a time.",
            icon: MessageCircle,
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            features: ["Smart questionnaire", "Adaptive to your needs", "Strategic clarity"]
        },
        {
            title: "Your Words, Refined by Abby",
            subtitle: "Turn your thoughts into polished, powerful narratives.",
            description: "Once you've answered the curated questions, Abby steps in again — reviewing your inputs and enhancing them with smart suggestions, improved phrasing, and strategic language. It's not just spellcheck — it's storycraft, backed by AI, aligned with your voice.",
            icon: Sparkles,
            gradient: "from-purple-500 to-indigo-500",
            bgGradient: "from-purple-50 to-indigo-50",
            features: ["AI-powered refinement", "Strategic language", "Your authentic voice"]
        },
        {
            title: "Your Vision, Now a Pitch",
            subtitle: "Documents are just the beginning — now it's time to present.",
            description: "Abby transforms your refined content into a compelling pitch deck, tailored to capture the attention of investors, partners, and collaborators. Whether you're in the room or sending it across the world, Abby ensures your story is heard — and remembered.",
            icon: Presentation,
            gradient: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-50 to-teal-50",
            features: ["Compelling pitch decks", "Investor-ready", "Memorable presentations"]
        }
    ];

    const FloatingElement = ({ delay, children }) => (
        <div
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );

    const SectionCard = ({ section, index, isActive }) => {
        const IconComponent = section.icon;

        return (
            <div
                className={`relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${isActive
                        ? `bg-gradient-to-br ${section.bgGradient} border-transparent shadow-2xl`
                        : 'bg-white/80 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                    }`}
                onClick={() => setActiveSection(index)}
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${section.gradient} shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-darkBlue" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                        <p className="text-gray-600 font-medium">{section.subtitle}</p>
                    </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{section.description}</p>

                <div className="space-y-2">
                    {section.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                    ))}
                </div>

                {isActive && (
                    <div className="absolute -top-2 -right-2">
                        <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <FloatingElement delay={0}>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-6">
                                <Zap className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm font-medium text-gray-700">Powered by AI</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Build Your Business with{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Abby
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Your AI partner for turning vision into reality, one thoughtful step at a time.
                            </p>
                        </div>
                    </FloatingElement>

                    {/* Floating Icons */}
                    <div className="absolute top-20 left-10 animate-bounce">
                        <Target className="w-8 h-8 text-blue-500/30" />
                    </div>
                    <div className="absolute top-32 right-20 animate-pulse">
                        <Lightbulb className="w-6 h-6 text-yellow-500/30" />
                    </div>
                    <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
                        <Users className="w-7 h-7 text-green-500/30" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Section Navigation */}
                <FloatingElement delay={200}>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {sections.map((section, index) => {
                            const IconComponent = section.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveSection(index)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeSection === index
                                            ? `bg-gradient-to-r ${section.gradient} 
                                            bg-primary
                                            text-white shadow-lg`
                                            : 'bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg'
                                        }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span className="hidden sm:inline">Section {index + 1}</span>
                                </button>
                            );
                        })}
                    </div>
                </FloatingElement>

                {/* Section Cards */}
                <FloatingElement delay={400}>
                    <div className="grid gap-8 mb-16">
                        {sections.map((section, index) => (
                            <SectionCard
                                key={index}
                                section={section}
                                index={index}
                                isActive={activeSection === index}
                            />
                        ))}
                    </div>
                </FloatingElement>

                {/* Call to Action */}
                {/* <FloatingElement delay={600}>
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Ready to Build Something That Feels Like You?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Let Abby help you get started. Whether you're at step one or step twenty, it starts with a conversation.
                            </p>
                            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-50 hover:scale-105 shadow-lg hover:shadow-xl">
                                <span className="flex items-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </button>
                        </div>
                    </div>
                </FloatingElement> */}
            </div>

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>
        </div>
    );
};

export default AbbyBusinessJourney;