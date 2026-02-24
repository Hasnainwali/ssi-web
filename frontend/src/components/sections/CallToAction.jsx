import React, { useState } from 'react';
import { Send, MessageSquare, Twitter, Instagram, Youtube, Linkedin, PhoneForwarded, Facebook } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import useReveal from '../../hooks/useReveal.js'
import { contactLinks } from '../../All data/actions.js';


/**
 * AnimatedBorderWrapper Component
 * Handles the continuous rotating border animation and internal glow
 */
const AnimatedBorderWrapper = ({ children, className = "", delay = "" }) => (
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

const SocialCard = ({ title, description, icon: Icon, colorClass, delay, Link }) => (
    <AnimatedBorderWrapper delay={delay} className="flex-1">
        <div className="p-6 flex items-center gap-4 cursor-pointer h-full transition-colors duration-300 hover:bg-blue-500/[0.03]">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
            </div>
            <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10 transition-transform duration-300 group-hover:scale-110`}>
                <a href={Link}>
                    <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
                </a>
            </div>
        </div>
    </AnimatedBorderWrapper>
);

const CallToAction = () => {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    // animations ref:
    useReveal(".fade-up");
    useReveal(".slide-up", { y: 80, duration: 1 });
    useReveal(".slide-left", { x: -100, y: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", email);
    };

    const footerIcons = [
        { Icon: Twitter, href: "#" },
        { Icon: Instagram, href: "#" },
        { Icon: Youtube, href: "#" },
        { Icon: Linkedin, href: "#" }
    ];

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 font-sans selection:bg-blue-500/30">
            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

            <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Main Get In Touch Card */}
                <AnimatedBorderWrapper delay="delay-0">
                    <div className="p-6 md:p-8 flex flex-col items-center text-center h-full slide-left">
                        <div className="mb-6">
                            <span className="text-2xl font-bold tracking-tighter text-blue-500 tracking-wider">SSI</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 fade-up">Get in Touch</h1>
                        <p className="text-slate-400 text-sm mb-8 max-w-[240px]">
                            Be the first to hear latest updates. Receive latest news about Courses & Discounts.
                        </p>

                        <form onSubmit={handleSubmit} className="w-full max-w-sm mb-8">
                            <div className="relative group/input">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="contact-input"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bottom-1 px-6 bg-white text-black text-xs font-bold 
                             rounded-full hover:bg-slate-200 active:scale-95 transition-all duration-200"
                                >
                                    Submit
                                </button>
                            </div>

                            <div className="mt-4 flex items-start gap-2 text-left">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        checked={agreed}
                                        onChange={() => setAgreed(!agreed)}
                                        className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded border border-slate-700 
                               bg-transparent checked:bg-blue-600 checked:border-blue-600 transition-all"
                                    />
                                    <svg className="absolute h-3.5 w-3.5 pointer-events-none hidden peer-checked:block text-white p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <label htmlFor="consent" className="text-[10px] text-slate-500 cursor-pointer select-none leading-tight">
                                    I agree to the processing of personal data. Principles of personal data processing.
                                </label>
                            </div>
                        </form>

                        {/* Social Icons for Contact */}
                        <div className="mt-auto pt-4 border-t border-slate-800/50 w-full flex justify-center gap-5">
                            {contactLinks.map(({ Icon, href }, idx) => (
                                <a key={idx} href={href} className="text-slate-500 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </AnimatedBorderWrapper>

                {/* Side Actions Column */}
                <div className="flex flex-col gap-4">
                    <SocialCard
                        className='slide-up'
                        title="Connect on WhatsApp!"
                        description="Catch us for daily queries, insights and updates."
                        Link="https://wa.me/+923213268095"
                        icon={FaWhatsapp}
                        colorClass="bg-indigo-500"
                        delay="delay-150"
                    />
                    <SocialCard
                        className='slide-up'
                        title="Follow on Facebook!"
                        description="Connect with us and interact with our community."
                        icon={Facebook}
                        Link="https://www.facebook.com/share/1GnGfZfxD3/"
                        colorClass="bg-indigo-500"
                        delay="delay-300"
                    />
                </div>

            </div>
        </div>
    );
};

export default CallToAction;