import React, { useState, useEffect, useRef, memo } from "react";
import { Users, BookOpen, Globe, Briefcase } from "lucide-react";
import { stats } from "../../All data/achievements";
import SecHeading from "../common/SecHeading";
import AnimatedContent from '../../animations/AnimatedContent'


/* ------------------ Animated Number (runs only when visible) ------------------ */
const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

  }, [start, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

/* ------------------ Stat Card (memoized to prevent re-renders) ------------------ */
const StatCard = memo(({ icon: Icon, label, value, suffix = "+" }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden p-[1px] transform-gpu">

      {/* Hover Border Animation (removed infinite spin) */}
      <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_85%,#3b82f6_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500" />

      {/* Card Content (lighter blur for performance) */}
      <div className="relative bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-900/80 transition-all duration-300">

        <div className="mb-4 p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform duration-300">
          <Icon size={28} />
        </div>

        <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">
          <AnimatedNumber value={value} />
          <span className="text-blue-500">{suffix}</span>
        </h3>

        <p className="text-zinc-400 font-light text-sm tracking-widest uppercase">
          {label}
        </p>

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
    </div>
  );
});

/* ------------------ Main Component ------------------ */
export default function Achievements() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">


        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.7}
        >
          {/* Header */}
          <SecHeading
            title="Our Achievements"
            heading="Proven Track of"
            span="Excellence"
          />
        </AnimatedContent>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (


            <AnimatedContent
              key={index}
              distance={100}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.9}
            >
              {/* Header */}
              <StatCard
                key={index}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
              />
            </AnimatedContent>

          ))}
        </div>
      </div>
    </div>
  );
}
