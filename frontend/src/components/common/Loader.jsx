import React from "react";

export const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a] z-50">
            <div className="flex flex-col items-center gap-6">

                {/* Rotating Ring */}
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-900"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent animate-spin"></div>
                </div>

                {/* Academy Text */}
                <h1 className="text-white text-xl font-semibold tracking-wide">
                    SSI
                </h1>

                {/* Loading Dots */}
                <div className="flex gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:.2s]"></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:.4s]"></span>
                </div>

            </div>
        </div>
    );
};

