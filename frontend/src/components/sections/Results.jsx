import React from "react";
import { Award, Users, FolderKanban, TrendingUp } from "lucide-react";
import useReveal from '../../hooks/useReveal.js'






export default function Results() {

    // animations ref:
    useReveal(".fade-up");
    useReveal(".slide-up", { y: 80, duration: 1 });
    useReveal(".slide-left", { x: -100, y: 0 });


    return (
        <section className="relative w-full py-24 bg-gradient-to-b from-[#0f0f12] via-[#0b1220] to-[#0a0f1a] overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-700/20 blur-[120px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center slide-left">
                {/* LEFT TEXT CONTENT */}
                <div className="space-y-6">
                    <p className="text-blue-400 text-sm tracking-widest uppercase">Student Success</p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Real Results From <span className="text-blue-500">Our Lab</span>
                    </h2>

                    <p className="text-gray-300 max-w-lg leading-relaxed">
                        Our students build real-world projects, master in-demand skills, and
                        achieve career breakthroughs. From web development to advanced
                        programming, success stories start here.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <Stat icon={<Users />} number="1,200+" label="Students Trained" />
                        <Stat icon={<Award />} number="350+" label="Certifications" />
                        <Stat icon={<FolderKanban />} number="500+" label="Projects Built" />
                        <Stat icon={<TrendingUp />} number="95%" label="Success Rate" />
                    </div>
                </div>

                {/* RIGHT DASHBOARD MOCKUP */}
                <div className="relative">
                    <div className="bg-gradient-to-br from-[#121826] to-[#0d1320] border border-white/5 rounded-2xl shadow-2xl p-6 backdrop-blur-xl slide-up">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-semibold">Student Performance</h3>
                            <span className="text-xs text-blue-400 bg-blue-900/40 px-3 py-1 rounded-full">Live Data</span>
                        </div>

                        <div className="space-y-4">
                            <Progress label="Web Development" value={90} />
                            <Progress label="UI/UX Design" value={85} />
                            <Progress label="Programming" value={92} />
                            <Progress label="Freelancing" value={80} />
                        </div>

                        {/* Chart Glow Line */}
                        <div className="mt-8 h-24 w-full bg-gradient-to-r from-blue-900/20 via-blue-700/30 to-blue-900/20 rounded-lg blur-[1px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stat({ icon, number, label }) {
    return (
        <div className="flex items-start gap-4 bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition">
            <div className="text-blue-400">{icon}</div>
            <div>
                <h4 className="text-white font-semibold text-lg">{number}</h4>
                <p className="text-gray-400 text-sm">{label}</p>
            </div>
        </div>
    );
}

function Progress({ label, value }) {
    return (
        <div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}
