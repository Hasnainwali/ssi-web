import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaTiktok,
    FaYoutube,
    FaPhone,
} from "react-icons/fa";
import { socialLinks } from '../../All data/socialLinks.js';
import { contactLinks } from '../../All data/actions.js'

const Footer = () => {
    return (
        <>
            <footer className="relative overflow-hidden bg-[#050505] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-12 pb-10 border-t border-zinc-900/50 px-6 sm:px-10 lg:px-16">

                {/* Bottom Ambient Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-950/40 blur-[100px] rounded-full pointer-events-none z-0" />

                {/* Grid Floor Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none z-0 opacity-30">
                    <div
                        className="w-full h-full absolute inset-0"
                        style={{
                            backgroundImage: `
              linear-gradient(to right, rgba(30, 64, 175, 0.25) 1px, transparent 10px),
              linear-gradient(to bottom, rgba(30, 64, 175, 0.25) 1px, transparent 10px)
            `,
                            backgroundSize: '60px 60px',
                            transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(1.5)',
                            transformOrigin: 'bottom center',
                            maskImage: 'linear-gradient(to top, black, transparent 80%)',
                            WebkitMaskImage: 'linear-gradient(to top, black, transparent 80%)'
                        }}
                    />
                </div>

                {/* Logo & Socials */}
                <div className="lg:col-span-5 flex flex-col justify-between z-10 text-center sm:text-left">
                    <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
                            <div className=" w-10 h-10 flex items-center justify-center rounded text-white font-bold text-lg">
                                <Link to='/'><img src='./Pngs/logo.png' alt='logo' className="text-white w-full" /></Link>

                            </div>
                            <span className="text-2xl font-semibold tracking-tight text-white">Bannu</span>
                        </div>

                        <div className="mb-8">
                            <p className="text-zinc-500 text-xs font-bold tracking-wider mb-4">FOLLOW US</p>
                            <div className="flex justify-center sm:justify-start gap-4">
                                {socialLinks.map(({ Icon, href }, i) => (

                                    <a
                                        key={i}
                                        href={href}
                                        className="text-zinc-500 hover:text-white transition-colors bg-zinc-900/50 w-9 h-9 rounded-full flex items-center justify-center border border-zinc-800 hover:border-blue-900">
                                        <Icon className="w-4 h-4" />
                                    </a>

                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-[13px] leading-relaxed mt-8 sm:mt-0">
                        <p className="font-bold mb-1">LEADING IT INSTITUTE IN BANNU</p>
                        <p>Railway Road Bannu Kpk Pakistan</p>
                    </div>
                </div>

                {/* Contacts & Quick Links Wrapper */}
                <div className="grid grid-cols-2 gap-8 col-span-1 sm:col-span-2 lg:col-span-4 z-10 text-left">

                    {/* Contacts */}
                    <div>
                        <h4 className="text-xs font-bold tracking-wider mb-6">CONTACTS</h4>
                        <ul className="space-y-3">
                            {contactLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="hover:text-blue-400 text-sm transition-colors font-light block">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold tracking-wider mb-6">QUICK LINKS</h4>
                        <div className="space-y-3">
                            {[
                                { name: 'Home', to: '/' },
                                { name: 'About', to: '/about' },
                                { name: 'Become a Student', to: '/courses' },
                                { name: 'Results', to: '/results' },
                                { name: 'Events', to: '/events' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="hover:text-blue-400 text-sm transition-colors font-light block"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className="bg-zinc-950 py-5 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[12px] text-zinc-400 px-6 sm:px-10 lg:px-16 text-center md:text-left">
                <p className="mb-3 md:mb-0">SSI BANNU 2026. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link to="/privacy-terms" className="hover:text-zinc-200">Terms of use</Link>
                    <Link to="/privacy-terms" className="hover:text-zinc-200">Privacy Policy</Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
