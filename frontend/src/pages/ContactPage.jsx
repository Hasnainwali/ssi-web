import react, { useState, useEffect } from 'react'
import {
    Code, Menu, X, Search, MapPin, Phone, Mail,
    ArrowRight, Facebook, Linkedin, Youtube, Instagram,
    Send, MessageSquare, Globe, CheckCircle, Clock, Map
} from 'lucide-react';





const ContactPage = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
        }, 2000);
    };


    const ExternalLinkIcon = ({ className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={className}
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    );



    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 bg-[#0F172A] overflow-hidden">
                {/* Background Ambience */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Page Header */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-sm border border-blue-500/20 mb-6">
                            <MessageSquare className="w-4 h-4 mr-2" /> 24/7 Support Available
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Let's Start Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Journey</span>
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Whether you have questions about our courses, need career counseling, or want to partner with us, our team in Bannu is ready to help.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">

                        {/* LEFT: Contact Information (4 cols) */}
                        <div className="lg:col-span-5 space-y-6 animate-fade-in-left">

                            {/* Contact Cards */}
                            <div className="bg-[#1E293B]/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group hover:-translate-y-1">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors shrink-0">
                                        <Phone className="w-6 h-6 text-blue-400 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">Call Us Directly</h3>
                                        <p className="text-slate-400 text-sm mb-2">Available Mon-Sat, 9am to 6pm</p>
                                        <a href="tel:+923001234567" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                                            +92319162469
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1E293B]/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all group hover:-translate-y-1">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors shrink-0">
                                        <Mail className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">Email Support</h3>
                                        <p className="text-slate-400 text-sm mb-2">For admissions & general inquiries</p>
                                        <a href="mailto:info@ssi.com" className="text-lg font-bold text-white hover:text-emerald-400 transition-colors break-all">
                                            info@ssi.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1E293B]/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all group hover:-translate-y-1">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-600 transition-colors shrink-0">
                                        <MapPin className="w-6 h-6 text-purple-400 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">Visit Institute</h3>
                                        <p className="text-slate-400 text-sm">
                                            Near Sahara Bakers Railway Road,<br />
                                            Bannu, KPK, Pakistan
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-6">
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4">Follow Us</p>
                                <div className="flex space-x-4">
                                    {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all hover:scale-110">
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Form & Map (7 cols) */}
                        <div className="lg:col-span-7 space-y-8 animate-fade-in-right">

                            {/* Form Container */}
                            <div className="bg-[#1E293B] border border-slate-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                {/* Decorative Gradient Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500" />

                                {formStatus === 'success' ? (
                                    <div className="text-center py-16 animate-fade-in-up">
                                        <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                                            <CheckCircle className="w-12 h-12 text-emerald-500" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                                        <p className="text-slate-400 mb-8 max-w-md mx-auto">
                                            Thank you for contacting SSI Bannu. A member of our admissions team will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setFormStatus('idle')}
                                            className="text-blue-400 font-semibold hover:text-white flex items-center justify-center mx-auto transition-colors"
                                        >
                                            Send another message <ArrowRight className="ml-2 w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2 group">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">First Name</label>
                                                    <input required type="text" className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700" placeholder="e.g. Ahmad" />
                                                </div>
                                                <div className="space-y-2 group">
                                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Last Name</label>
                                                    <input required type="text" className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700" placeholder="e.g. Khan" />
                                                </div>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Email Address</label>
                                                <input required type="email" className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700" placeholder="name@example.com" />
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Select Topic</label>
                                                <div className="relative">
                                                    <select className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                                                        <option>Course Admissions</option>
                                                        <option>Fee Structure</option>
                                                        <option>Technical Support</option>
                                                        <option>Job Opportunities</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                        <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">Your Message</label>
                                                <textarea required rows="4" className="w-full bg-slate-900/50 border border-slate-600 rounded-xl p-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700 resize-none" placeholder="Tell us how we can help..." />
                                            </div>

                                            <button
                                                disabled={formStatus === 'sending'}
                                                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed group"
                                            >
                                                {formStatus === 'sending' ? (
                                                    <span className="flex items-center"><span className="animate-spin mr-2">⏳</span> Processing Request...</span>
                                                ) : (
                                                    <span className="flex items-center">Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                                                )}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>

                            {/* Google Map */}
                            <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl h-[350px] relative group hover:shadow-blue-900/20 transition-all">
                                {/* CSS Filter for Dark Mode Map Effect */}
                                <iframe
                                    title="Bannu Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106141.07172864386!2d70.5287680790159!3d32.99081514757519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d81023246f906f%3A0x7d06634c06209587!2sBannu%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707570000000!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="group-hover:scale-[1.02] transition-transform duration-700"
                                ></iframe>

                                {/* Map Overlay Badge */}
                                <div className="absolute bottom-6 left-6 bg-[#0F172A]/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl flex items-center max-w-xs">
                                    <div className="bg-blue-600 p-2 rounded-lg mr-3">
                                        <Map className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">SSI Bannu Campus</p>
                                        <a
                                            href="https://goo.gl/maps/xyz"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-400 text-xs hover:underline flex items-center mt-1"
                                        >
                                            Get Directions <ExternalLinkIcon className="w-3 h-3 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        .animate-fade-in-down { animation: fade-in-down 0.3s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0F172A; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>

        </>




    );



};





export default ContactPage