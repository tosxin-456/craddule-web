import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Lightbulb,
    Wrench,
    PenTool,
    CheckCircle,
    Rocket,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

const phases = [
    {
        name: "Ideation",
        description:
            "This phase focuses on identifying the problem, understanding the market gap, and defining opportunities. It's where ideas are born and shaped.",
        icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&auto=format",
        imageAlt: "Creative brainstorming session with people generating ideas",
        questions: 10,
        value:
            "A tailored business plan and an early pitch deck to communicate your idea clearly.",
    },
    {
        name: "Initial Design",
        description:
            "Here, the product design takes form. It's about creating structures and planning how the solution will look and evolve as it grows.",
        icon: <PenTool className="w-8 h-8 text-indigo-500" />,
        image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Design sketches and wireframes on paper",
        questions: 7,
        value: "Scalable design guidelines and a product roadmap to guide growth.",
    },
    {
        name: "Prototyping the Product",
        description:
            "This phase is about building and testing a working version of the idea. It helps validate concepts and gather real feedback with minimal resources.",
        icon: <Wrench className="w-8 h-8 text-teal-500" />,
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Hands working on a prototype with tools and components",
        questions: 5,
        value:
            "A go-to-market strategy, user personas guide, and user onboarding framework.",
    },
    {
        name: "Validating and Testing",
        description:
            "At this stage, the product is tested with real users or target audiences to ensure it solves the intended problem and resonates with the market.",
        icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Analytics dashboard showing testing results and user feedback",
        questions: 5,
        value: "Validated insights, risk analysis, and a tested product framework.",
    },
    {
        name: "Commercialization",
        description:
            "Finally, the product is prepared for the market. Pricing, distribution, and promotion strategies are defined to maximize adoption and impact.",
        icon: <Rocket className="w-8 h-8 text-red-500" />,
        image:
            "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=350&fit=crop&auto=format",
        imageAlt: "Rocket launch representing product launch and market entry",
        questions: 7,
        value:
            "Pricing strategies, marketing campaigns, and a final investor-ready pitch deck.",
    },
];

const PhasesOverview = () => {
    const [current, setCurrent] = useState(0);

    const nextPhase = () =>
        setCurrent((prev) => (prev === phases.length - 1 ? 0 : prev + 1));
    const prevPhase = () =>
        setCurrent((prev) => (prev === 0 ? phases.length - 1 : prev - 1));

    return (
        <section className="py-12 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                From Idea to Pitch Deck
            </h2>

            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.6 }}
                        className="overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800"
                    >
                        <div className="relative h-60 md:h-72 overflow-hidden">
                            <img
                                src={phases[current].image}
                                alt={phases[current].imageAlt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">
                                {phases[current].icon}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                {phases[current].name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                {phases[current].description}
                            </p>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                                {phases[current].questions} Key Questions
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 italic">
                                Outcome: {phases[current].value}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <button
                    onClick={prevPhase}
                    className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:scale-105 transition"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                    onClick={nextPhase}
                    className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:scale-105 transition"
                >
                    <ArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Outcome Section */}
            {current === phases.length - 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
                >
                    <div className="mb-6">
                        <img
                            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=200&fit=crop&auto=format"
                            alt="Professional presentation setup with charts and graphs"
                            className="w-64 h-40 object-cover rounded-xl mx-auto shadow-md"
                        />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        The Outcome
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
                        Going through each phase leads to a complete pitch deck — a clear,
                        structured presentation of your idea, design, testing, and
                        commercialization strategy.
                    </p>
                </motion.div>
            )}
        </section>
    );
};

export default PhasesOverview;
