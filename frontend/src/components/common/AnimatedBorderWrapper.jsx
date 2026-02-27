import React from 'react'

export const AnimatedBorderWrapper = ({ children, className = "", delay = "" }) => (
    <div className={`relative p-[1.5px] overflow-hidden rounded-[2rem] group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both ${delay} ${className}`}>
        {/* The Continuous Moving Border Element */}
        <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e3a8a_0%,#3b82f6_25%,#0a0c10_50%,#3b82f6_75%,#1e3a8a_100%)] opacity-100" />

        {/* Inner Card Content */}
        <div className="relative h-full w-full bg-[#0d121d] rounded-[1.95rem] overflow-hidden">
            {/* Constant Internal Blue Glows */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-600/15 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-900/20 blur-[60px] pointer-events-none" />

            {children}
        </div>
    </div>
);

