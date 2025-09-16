import { AlertCircle, RefreshCw, UserPlus, Ban } from "lucide-react";
import { useState, useEffect } from "react";

export default function PageUnavailable() {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [referralCode, setReferralCode] = useState('');

    useEffect(() => {
        // Fetch referralCode from localStorage
        const storedReferralCode = localStorage.getItem('referralCode');
        if (storedReferralCode) {
            setReferralCode(storedReferralCode);
        }
    }, []);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            window.location.reload();
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full text-center">

                {/* Icon */}
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <UserPlus className="w-8 h-8 text-green-600" />
                </div>

                {/* Main Message */}
                <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                    Begin Your Journey 🚀
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    A fresh start is just one step away. <br />
                    Click below to get going.
                </p>

                {/* (Old Goofy Pricing Message - still here but commented out) */}
                {/* <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                    Oops... We Don’t Do Pricing Here 🤷
                </h1>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Looking for pricing? Yeah… about that. <br />
                    We don’t have one. <br />
                </p> */}

                {/* Status Info (also kept but commented out) */}
                {/* <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <div className="text-left">
                            <h3 className="text-sm font-medium text-gray-900 mb-1">
                                Quick heads up
                            </h3>
                            <p className="text-sm text-gray-600">
                                Instead of waiting for a pricing page that doesn’t exist,
                                just go ahead and begin your journey.
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* Action Buttons */}
                <div className="space-y-3">
                    {/* <button
                        onClick={handleRefresh}
                        disabled={isRefreshing}
                        className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                        <RefreshCw
                            className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`}
                        />
                        {isRefreshing ? 'Refreshing...' : 'Try Again Anyway'}
                    </button> */}

                    <a
                        href={referralCode ? `https://app.craddule.com/login?ref=${referralCode}` : 'https://app.craddule.com/login'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                    >
                        <button
                            className="w-full flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
                        >
                            <UserPlus className="w-4 h-4 mr-2" />
                            Begin your journey
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
