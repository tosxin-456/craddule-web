import React from 'react';
import loaderImage from '../assets/images/fav.png';

const BackgroundLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="relative w-24 h-24">
                {/* Spinning Circle */}
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
                {/* Image in Center */}
                <img
                    src={loaderImage}
                    alt="Loader"
                    className="w-full h-full object-contain rounded-full"
                />
            </div>
        </div>
    );
};

export default BackgroundLoader;
