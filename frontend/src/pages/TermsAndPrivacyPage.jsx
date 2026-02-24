import React, { useState, useEffect } from 'react';
import {
    Code, Menu, X, ArrowRight, Shield, FileText, Lock,
    AlertCircle, Check, Globe, ChevronRight, Scale
} from 'lucide-react';

const TermsAndPrivacyPage = () => {

    // 2. PAGE HEADER
    const PageHeader = () => (
        <header className="pt-32 pb-20 bg-[#0F172A] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm mb-6">
                    <Scale className="w-4 h-4 mr-2 text-blue-400" />
                    Legal Information
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Terms of Use & <span className="text-blue-500">Privacy Policy</span>
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Transparency is key to our relationship with students. Please read the following documents to understand your rights and responsibilities at SSI Bannu.
                </p>
                <p className="text-slate-500 text-sm mt-4">Last Updated: February 2026</p>
            </div>
        </header>
    );

    // 3. MAIN CONTENT (TABS & TEXT)
    const LegalContent = () => {
        const [activeTab, setActiveTab] = useState('terms'); // 'terms' or 'privacy'

        return (
            <section className="bg-[#0F172A] pb-20 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* SIDEBAR NAVIGATION (Sticky) */}
                        <div className="lg:w-1/4">
                            <div className="sticky top-28 bg-[#1E293B] border border-slate-700 rounded-2xl p-2 shadow-xl">
                                <button
                                    onClick={() => setActiveTab('terms')}
                                    className={`w-full flex items-center p-4 rounded-xl transition-all mb-2 ${activeTab === 'terms'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                        }`}
                                >
                                    <FileText className="w-5 h-5 mr-3" />
                                    <span className="font-semibold">Terms of Use</span>
                                    {activeTab === 'terms' && <ChevronRight className="w-4 h-4 ml-auto" />}
                                </button>

                                <button
                                    onClick={() => setActiveTab('privacy')}
                                    className={`w-full flex items-center p-4 rounded-xl transition-all ${activeTab === 'privacy'
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                        }`}
                                >
                                    <Lock className="w-5 h-5 mr-3" />
                                    <span className="font-semibold">Privacy Policy</span>
                                    {activeTab === 'privacy' && <ChevronRight className="w-4 h-4 ml-auto" />}
                                </button>
                            </div>

                            {/* Support Box */}
                            <div className="mt-8 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                                <h4 className="text-white font-bold mb-2 flex items-center"><AlertCircle className="w-4 h-4 mr-2 text-blue-400" /> Need Help?</h4>
                                <p className="text-sm text-slate-400 mb-4">If you have specific questions about these policies, please contact our legal team.</p>
                                <a href="tel:+92319162469" className="text-blue-400 text-sm font-semibold hover:underline">Contact Support &rarr;</a>
                            </div>
                        </div>

                        {/* CONTENT AREA */}
                        <div className="lg:w-3/4 bg-[#1E293B] border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden animate-fade-in-up">

                            {/* Decorative Top Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeTab === 'terms' ? 'from-blue-500 to-cyan-500' : 'from-emerald-500 to-teal-500'}`} />

                            {activeTab === 'terms' ? (
                                <div className="space-y-8 text-slate-300">
                                    <div className="border-b border-slate-700 pb-6 mb-6">
                                        <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
                                            <FileText className="w-8 h-8 mr-3 text-blue-500" /> Terms of Use
                                        </h2>
                                        <p className="text-slate-400">Please read these terms carefully before enrolling in any course.</p>
                                    </div>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h3>
                                        <p className="leading-relaxed">
                                            By accessing and using the SSI Bannu website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">2. Course Enrollment & Certification</h3>
                                        <ul className="list-none space-y-3">
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                                <span>Enrollment is confirmed only upon payment of the requisite fees (if applicable).</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                                <span>Certificates are awarded only to students who maintain 80% attendance and pass final evaluations.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                                <span>SSI Bannu reserves the right to withhold certificates for misconduct or non-payment of dues.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">3. Student Conduct</h3>
                                        <p className="leading-relaxed mb-4">
                                            Students are expected to maintain a professional environment within the institute premises and digital platforms. The following behaviors are strictly prohibited:
                                        </p>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 text-sm">
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                <li>• Harassment or discrimination of any kind.</li>
                                                <li>• Misuse of lab equipment or institute property.</li>
                                                <li>• Sharing login credentials with non-students.</li>
                                                <li>• Plagiarism in assignments and projects.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h3>
                                        <p className="leading-relaxed">
                                            All course materials, including slides, videos, code repositories, and branding, are the intellectual property of SSI Bannu. Students are granted a limited license to use these materials for personal learning only. Redistribution or commercial use is strictly prohibited.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">5. Refund Policy</h3>
                                        <p className="leading-relaxed">
                                            Course fees are generally non-refundable. However, in exceptional cases (e.g., medical emergency), a 50% refund may be processed if a request is made within the first week of classes. No refunds will be entertained after 7 days of the course start date.
                                        </p>
                                    </section>
                                </div>
                            ) : (
                                <div className="space-y-8 text-slate-300">
                                    <div className="border-b border-slate-700 pb-6 mb-6">
                                        <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
                                            <Lock className="w-8 h-8 mr-3 text-emerald-500" /> Privacy Policy
                                        </h2>
                                        <p className="text-slate-400">How we collect, use, and protect your personal data.</p>
                                    </div>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">1. Information We Collect</h3>
                                        <p className="leading-relaxed mb-4">
                                            We collect information to provide better services to our students. This includes:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                                                <h4 className="font-bold text-white mb-1">Personal Info</h4>
                                                <p className="text-sm text-slate-400">Name, CNIC, Email, Phone Number, and Mailing Address provided during registration.</p>
                                            </div>
                                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                                                <h4 className="font-bold text-white mb-1">Academic Info</h4>
                                                <p className="text-sm text-slate-400">Previous educational records, assignment scores, and attendance data.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">2. How We Use Information</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <Shield className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                                                <span>To process admissions and generate student ID cards.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Shield className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                                                <span>To communicate course schedules, exam dates, and institute updates.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <Shield className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                                                <span>To issue verifiable digital and physical certificates upon completion.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">3. Data Protection</h3>
                                        <p className="leading-relaxed">
                                            We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">4. Third-Party Disclosure</h3>
                                        <p className="leading-relaxed">
                                            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">5. Cookies</h3>
                                        <p className="leading-relaxed">
                                            Our website uses cookies to enhance the user experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
                                        </p>
                                    </section>
                                </div>
                            )}

                            {/* Disclaimer Footer inside content */}
                            <div className="mt-12 pt-8 border-t border-slate-700 text-center">
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Legal Disclaimer</p>
                                <p className="text-sm text-slate-400 italic">
                                    SSI Bannu reserves the right to modify these terms at any time. Significant changes will be communicated via email or website notice.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    };



    return (
        <section className="bg-[#0F172A] min-h-screen text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
            {/* Global Animations Style Block */}
            <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-fade-in-down { animation: fade-in-down 0.3s ease-out forwards; }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0F172A; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>

            <PageHeader />
            <LegalContent />

        </section>
    );
}

export default TermsAndPrivacyPage