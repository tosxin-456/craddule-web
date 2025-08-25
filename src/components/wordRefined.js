import React from 'react';
import { Edit3, Shield, ArrowRight, Sparkles } from 'lucide-react';

const WordsRefinedSection = () => {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-white text-gray-900">
            <div className="max-w-6xl mx-auto px-8 w-full">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Your Words, Refined by Abby
                        </h2>
                        <div className="w-15 h-1 bg-indigo-600 mb-6 mx-auto md:mx-0"></div>
                        <p className="text-lg mb-6 leading-relaxed opacity-80">
                            Turn your thoughts into polished, powerful narratives.
                        </p>
                        <p className="text-lg mb-6 leading-relaxed opacity-80">
                            Once you've answered the curated questions, Abby steps in again — reviewing your inputs and
                            enhancing them with smart suggestions, improved phrasing, and strategic language. It's not just
                            spellcheck — it's storycraft, backed by AI, aligned with your voice.
                        </p>
                    </div>
                    <div className="relative flex flex-col gap-8 h-96">
                        <div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=500&fit=crop&crop=center')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'brightness(0.9)'
                            }}
                        ></div>
                        <div className="relative z-10 bg-white bg-opacity-95 p-8 rounded-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-105">
                            <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-xl mb-4">
                                <strong>Before:</strong> "My app helps people find restaurants nearby that are good."
                            </div>
                            <div className="text-center text-indigo-600 text-2xl font-bold my-4">↓</div>
                            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-xl">
                                <strong>After:</strong> "Our platform connects food enthusiasts with exceptional local
                                dining experiences, curated through AI-powered recommendations and real-time availability."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WordsRefinedSection;
