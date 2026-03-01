import React, { memo, useMemo } from 'react';




// --- Background Animation Component ---
export const RainBackground = memo(() => {
    // Generate random properties for the "raindrops" only once on mount
    const drops = useMemo(() => {
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            // Slow animations: random duration between 6s and 12s
            animationDuration: `${Math.random() * 8 + 8}s`,
            // Random delay so they don't all start at once
            animationDelay: `${Math.random() * 10}s`,
            // Varying lengths for the lines
            height: `${Math.random() * 10 + 20}vh`,
            // Subtle opacities
            opacity: Math.random() * 0.4 + 0.1,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <style>
                {`
          @keyframes slow-rain {
            0% {
              transform: translateY(-100vh);
            }
            100% {
              transform: translateY(100vh);
            }
          }
        `}
            </style>
            {drops.map((drop) => (
                <div
                    key={drop.id}
                    className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
                    style={{
                        left: drop.left,
                        height: drop.height,
                        opacity: drop.opacity,
                        animation: `slow-rain ${drop.animationDuration} linear infinite`,
                        animationDelay: drop.animationDelay,
                    }}
                />
            ))}
        </div>
    );
});