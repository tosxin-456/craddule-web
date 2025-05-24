import React from 'react';

export default function WaitingForAbby({ onClose }) {
    const redirect = () => {
        const referralCode = localStorage.getItem('referralCode');
        const baseUrl = 'https://app.craddule.com';

        if (referralCode) {
            window.location.href = `${baseUrl}/signup/${referralCode}`;
        } else {
            window.location.href = `${baseUrl}/signup`;
        }
    };

    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleProceed = () => {
        redirect();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white px-4 overflow-hidden" style={{ zIndex: 9999 }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 opacity-90"></div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-white border-opacity-20 relative" style={{ zIndex: 10000 }}>
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group cursor-pointer z-50"
                    aria-label="Close modal"
                    type="button"
                >
                    <svg className="w-4 h-4 text-white group-hover:text-blue-200 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative z-10">
                    {/* Avatar or Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold mb-2 text-white">
                        Abby is generating your environment
                    </h2>

                    <p className="text-blue-100 mb-8 text-lg font-light">
                        When you click proceed, it could take a few seconds before the next page displays because ABBY is generating <span className=' font-bold ' >YOUR </span>  environment.
                    </p>

                    <button
                        onClick={handleProceed}
                        className="group relative font-semibold px-8 py-3 rounded-xl bg-primary text-white hover:shadow-2xl w-full cursor-pointer"
                        aria-label="Proceed to link"
                        type="button"
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            Proceed
                            <svg className="w-5 h-5 ml-2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}