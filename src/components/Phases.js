import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lightbulb,
    Wrench,
    PenTool,
    CheckCircle,
    Rocket,
    ArrowLeft,
    ArrowRight,
    Play,
    Pause,
    Clock,
    Target,
    TrendingUp,
    Presentation
} from "lucide-react";

const phases = [
    {
        name: "Ideation",
        description:
            "Transform raw concepts into structured opportunities. This foundational phase shapes the DNA of your venture through market analysis and problem validation.",
        icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&auto=format",
        imageAlt: "Creative brainstorming session with people generating ideas",
        questions: 11,
        duration: "8-12 minutes",
        bgColor: "bg-orange-100",
        darkBgColor: "bg-orange-900/30",
        value:
            "Tailored business plan and early pitch deck to communicate your vision clearly.",
    },
    {
        name: "Initial Design",
        description:
            "Architect your solution's blueprint. Create scalable frameworks that evolve with your vision, establishing the structural foundation for sustainable growth.",
        icon: <PenTool className="w-10 h-10 text-indigo-500" />,
        image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Design sketches and wireframes on paper",
        questions: 7,
        duration: "6-8 minutes",
        bgColor: "bg-indigo-100",
        darkBgColor: "bg-indigo-900/30",
        value: "Scalable design system and comprehensive product roadmap.",
    },
    {
        name: "Prototyping the Product",
        description:
            "Bring ideas to life through rapid iteration. Build, test, and refine working prototypes that validate core assumptions with minimal resource investment.",
        icon: <Wrench className="w-10 h-10 text-teal-500" />,
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Hands working on a prototype with tools and components",
        questions: 6,
        duration: "5-7 minutes",
        bgColor: "bg-teal-100",
        darkBgColor: "bg-teal-900/30",
        value: "Go-to-market strategy and user onboarding framework.",
    },
    {
        name: "Validating and Testing",
        description:
            "Prove market fit through rigorous testing. Gather real-world feedback from target users to ensure your solution creates genuine value and addresses core needs.",
        icon: <CheckCircle className="w-10 h-10 text-purple-500" />,
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Analytics dashboard showing testing results and user feedback",
        questions: 7,
        duration: "6-8 minutes",
        bgColor: "bg-purple-100",
        darkBgColor: "bg-purple-900/30",
        value: "Validated insights, risk analysis, and market-tested framework.",
    },
    {
        name: "Commercialization",
        description:
            "Execute your market entry strategy. Deploy comprehensive commercialization plans that maximize adoption, drive growth, and establish market presence.",
        icon: <Rocket className="w-10 h-10 text-red-500" />,
        image:
            "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Rocket launch representing product launch and market entry",
        questions: 5,
        duration: "4-6 minutes",
        bgColor: "bg-red-100",
        darkBgColor: "bg-red-900/30",
        value: "Pricing strategies, marketing campaigns, and investor-ready pitch deck.",
    },
    {
        name: "Pitch Deck",
        description:
            "Your complete success package. Transform your journey into a compelling pitch deck and business model that investors and stakeholders can’t ignore.",
        icon: <Presentation className="w-10 h-10 text-blue-500" />,
        image:
            "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Professional presentation setup with charts and graphs",
        questions: 8,
        duration: "10-15 minutes",
        bgColor: "bg-blue-100",
        darkBgColor: "bg-blue-900/30",
        value:
            "Investor-ready pitch deck, validated business model, and actionable roadmap.",
    },
];





const PhasesOverview = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    useEffect(() => {
        let interval;
        if (isAutoPlay) {
            interval = setInterval(() => {
                setCurrent(prev => (prev + 1) % phases.length);
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const nextPhase = () => setCurrent((prev) => (prev + 1) % phases.length);
    const prevPhase = () => setCurrent((prev) => (prev - 1 + phases.length) % phases.length);

    const currentPhase = phases[current];

    return (
        <section className="min-h-screen bg-blue-950 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent mb-6">
                        From Idea to Impact
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Navigate your product journey through five strategic phases, each designed to maximize value and minimize risk.
                    </p>
                </motion.div>

                {/* Progress Indicator */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center space-x-4">
                        {phases.map((phase, index) => (
                            <div key={index} className="flex items-center">
                                <motion.button
                                    onClick={() => setCurrent(index)}
                                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${index === current
                                        ? `bg-gradient-to-r ${currentPhase.color} text-white shadow-lg scale-110`
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:scale-105'
                                        }`}
                                    whileHover={{ scale: index === current ? 1.15 : 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="scale-75">
                                        {phase.icon}
                                    </div>
                                    {index === current && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full border-2 border-white/50"
                                            initial={{ scale: 1, opacity: 0.8 }}
                                            animate={{ scale: 1.3, opacity: 0 }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )}
                                </motion.button>
                                {index < phases.length - 1 && (
                                    <div className={`w-8 h-0.5 mx-2 transition-colors ${index < current ? `bg-gradient-to-r ${currentPhase.color}` : 'bg-gray-300 dark:bg-gray-600'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 1.05 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`bg-gradient-to-br ${currentPhase.bgGradient} dark:${currentPhase.darkBgGradient} rounded-3xl shadow-2xl overflow-hidden`}
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Image Section */}
                                <div className="relative h-80 md:h-96 overflow-hidden">
                                    <img
                                        src={currentPhase.image}
                                        alt={currentPhase.imageAlt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                    <div className={`absolute top-6 left-6 p-4 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg`}>
                                        <div className={`text-gradient bg-gradient-to-r ${currentPhase.color} bg-clip-text`}>
                                            {currentPhase.icon}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <div className="text-sm font-medium opacity-90">Phase {current + 1} of {phases.length}</div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <motion.h2
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                                    >
                                        {currentPhase.name}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
                                    >
                                        {currentPhase.description}
                                    </motion.p>

                                    {/* Stats */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex flex-wrap gap-6 mb-8"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${currentPhase.color}`}>
                                                <Target className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                                    {currentPhase.questions}
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                                    Key Questions
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${currentPhase.color}`}>
                                                <Clock className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {currentPhase.duration}
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                                    Timeline
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Outcome */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <TrendingUp className={`w-6 h-6 mt-1 bg-gradient-to-r ${currentPhase.color} bg-clip-text text-transparent`} />
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                    Expected Outcome
                                                </h4>
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    {currentPhase.value}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="flex justify-between items-center mt-8">
                        <button
                            onClick={prevPhase}
                            className="group flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">Previous</span>
                        </button>

                        <button
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full shadow-lg transition-all duration-300 ${isAutoPlay
                                ? `bg-gradient-to-r ${currentPhase.color} text-white`
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            <span className="font-medium">{isAutoPlay ? 'Pause' : 'Auto Play'}</span>
                        </button>

                        <button
                            onClick={nextPhase}
                            className="group flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <span className="text-gray-700 dark:text-gray-300 font-medium">Next</span>
                            <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhasesOverview;