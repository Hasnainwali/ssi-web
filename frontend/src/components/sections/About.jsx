
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Code, Monitor, PenTool, Box, Terminal, Menu, X, ChevronRight,
    Star, Users, Clock, CheckCircle, Search, MapPin, Phone, Mail,
    Calendar, Award, Briefcase, ArrowRight, Play, ExternalLink,
    Linkedin, Facebook, Youtube, Instagram, X as XIcon, GraduationCap,
    Trophy, FileCheck
} from 'lucide-react';
import SecHeading from '../common/SecHeading';
import useReveal from '../../hooks/useReveal.js'
import AnimatedContent from '../../animations/AnimatedContent.jsx'




const TiltCard = ({ children, className = "" }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        setRotation({ x: yPct * -20, y: xPct * 20 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setRotation({ x: 0, y: 0 }); }}
            className={`relative h-full transition-all duration-200 ease-out will-change-transform cursor-pointer ${className}`}
            style={{
                transformStyle: "preserve-3d",
                transform: isHovered
                    ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
                    : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            }}
        >
            <div className="relative z-10 h-full w-full">
                {children}
            </div>

            {/* Glass Glare */}
            {isHovered && (
                <div
                    className="absolute inset-0 pointer-events-none z-20 rounded-2xl overflow-hidden"
                    style={{
                        background: `radial-gradient(circle at ${rotation.y + 50}% ${rotation.x + 50}%, rgba(255,255,255,0.1) 0%, transparent 80%)`,
                    }}
                />
            )}
        </div>
    );
};




const About = () => {
    // animations ref:
    useReveal(".fade-up");
    useReveal(".slide-up", { y: 80, duration: 1 });
    useReveal(".slide-left", { x: -100, y: 0 });

    const navigate = useNavigate();

    const AboutArray = [
        {
            icon: Users,
            title: "Expert Instructors",
            color: "text-blue-400",
            glow: "shadow-blue-500/20",
            desc: "Learn directly from experienced industry professionals who share real-world knowledge and practical skills."
        },
        {
            icon: Monitor,
            title: "Modern Labs",
            color: "text-indigo-400",
            glow: "shadow-indigo-500/20",
            desc: "Practice in fully equipped computer labs with high-performance machines and the latest professional software."
        },
        {
            icon: Award,
            title: "Certification",
            color: "text-sky-400",
            glow: "shadow-sky-500/20",
            desc: "Receive professional certificates after course completion that are valued by employers internationally."
        },
        {
            icon: Briefcase,
            title: "Job Support",
            color: "text-blue-300",
            glow: "shadow-blue-400/20",
            desc: "Get career support including CV building, portfolio guidance, and dedicated interview preparation."
        },
    ];

    // console.log(AboutArray);



    return (
        <>
            <section className='relative min-h-screen grid justify-center container mx-auto w-[90%] font-sans'>

                {/* header */}


                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.5}
                >
                    <SecHeading
                        title="Who We Are"
                        heading='Why Choose Our'
                        span="Institute"
                    />
                </AnimatedContent>


                <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 text-white mb-16">

                    {/* Card 1: col-span-1 */}
                    <div className="slide-left">
                        <TiltCard className="glass-card card-base rounded-2xl p-6 flex flex-col items-start justify-center group">
                            <Users className={`size-10 mb-6 ${AboutArray[0].color}`} />
                            <h2 className='font-bold text-2xl mb-4 text-slate-100'>{AboutArray[0].title}</h2>
                            <p className='text-slate-400 text-sm leading-relaxed'>{AboutArray[0].desc}</p>
                        </TiltCard>
                    </div>

                    {/* Card 2: col-span-2, flex-col justify-end */}
                    <div className="slide-up lg:col-span-2">
                        <TiltCard className="glass-card card-base rounded-2xl p-8 flex flex-col justify-end group">
                            <Monitor className={`size-12 mb-6 ${AboutArray[1].color}`} />
                            <h2 className='font-bold text-3xl mb-4 text-slate-100'>{AboutArray[1].title}</h2>
                            <p className='text-slate-400 text-base leading-relaxed max-w-md'>{AboutArray[1].desc}</p>
                        </TiltCard>
                    </div>

                    {/* Card 3: col-span-2, justify-end/center, items-baseline */}
                    <div className="slide-left lg:col-span-2">
                        <TiltCard className="glass-card card-base rounded-2xl p-8 flex flex-col justify-center lg:justify-end lg:items-baseline group">
                            <Award className={`size-12 mb-6 ${AboutArray[2].color}`} />
                            <h2 className='font-bold text-3xl mb-4 text-slate-100'>{AboutArray[2].title}</h2>
                            <p className='text-slate-400 text-base leading-relaxed max-w-md'>{AboutArray[2].desc}</p>
                        </TiltCard>
                    </div>

                    {/* Card 4: col-span-1 */}
                    <div className="slide-up">
                        <TiltCard className="glass-card card-base rounded-2xl p-4 group flex flex-col items-start justify-center">
                            <Briefcase className={`size-10 mb-6 ${AboutArray[3].color}`} />
                            <h2 className='font-bold text-xl mb-4 text-slate-100'>{AboutArray[3].title}</h2>
                            <p className='text-slate-400 text-sm leading-relaxed'>{AboutArray[3].desc}</p>
                        </TiltCard>
                    </div>

                </div>
                <div className='mx-auto'>
                    <button className='hero-cta-1'
                        onClick={() => navigate('/about')}>
                        Explore more about us
                    </button>
                </div>


            </section>


            {/* Inject CSS */}
            <style>
                {`
                .slide-up { opacity: 0; transform: translateY(50px); transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1); }
                .slide-left { opacity: 0; transform: translateX(-50px); transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1); }
                .active { opacity: 1 !important; transform: translate(0, 0) !important; }
                
                .glass-card {
                    background: linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .ambient-glow {
                    animation: pulse-slow 8s infinite ease-in-out;
                }
                `}
            </style>
        </>
    )
}

export default About