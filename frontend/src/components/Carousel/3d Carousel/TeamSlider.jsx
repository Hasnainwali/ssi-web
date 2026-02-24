import { useEffect, useState, useRef } from "react";

const TEAM_MEMBERS = [
    {
        id: 1,
        name: "SYED MUNIB",
        role: "CEO",
        tag: "LEADERSHIP",
        image: "./images/image-1.webp",
        bio: "CEO and Owner, 3D modeling and management specialist, leading creative projects with strong leadership, strategic vision, and technical expertise",
    },
    {
        id: 2,
        name: "AHMED",
        role: "Senior UX Designer",
        tag: "DESIGN",
        image: "./images/image-2.webp",
        bio: "Co-Founder with strong development expertise, driving product innovation, technical strategy, and scalable digital solutions",
    },
    {
        id: 3,
        name: "M AZAM",
        role: "MS Office EXPERT",
        tag: "ENGINEERING",
        image: "./images/image-3.webp",
        bio: "MS Office expert and creative graphic designer, delivering professional documents, data solutions, and visually impactful designs",
    },
    {
        id: 4,
        name: "MR WAHAB",
        role: "COMPUTER ARCHITECT",
        tag: "ARCHITECT",
        image: "./images/image-4.webp",
        bio: "Computer expert and CIT master with strong technical skills in IT fundamentals, software handling, and practical computer applications",
    },
    {
        id: 5,
        name: "M IBRAHIM",
        role: "Backend Specialist",
        tag: "ENGINEERING",
        image: "./images/image-5.webp",
        bio: "Optimizing database queries and API response times.",
    },
    {
        id: 6,
        name: "MR ABID",
        role: "FULL STACK(MERN)",
        tag: "TEAM LEADER",
        image: "./images/image-6.webp",
        bio: "Full Stack (MERN) and React Native Developer with strong networking knowledge, building secure, scalable, and high-performance web and mobile applications.",
    },
];

export default function TeamSlider() {
    const [active, setActive] = useState(0);
    const [activeCard, setActiveCard] = useState(null);
    const total = TEAM_MEMBERS.length;
    const intervalRef = useRef(null);

    useEffect(() => {

        intervalRef.current = setInterval(() => {
            setActive((prev) => (prev + 1) % total);
        }, 4000);
        return () => clearInterval(intervalRef.current);
    }, [total]);

    const getPosition = (index) => {
        const diff = (index - active + total) % total;

        if (diff === 0)
            return "translate-z-[260px] scale-100 opacity-100 z-30";
        if (diff === 1)
            return "translate-x-[55%] rotate-y-[45deg] scale-90 opacity-80 z-20";
        if (diff === total - 1)
            return "-translate-x-[55%] rotate-y-[-45deg] scale-90 opacity-80 z-20";

        return "scale-75 opacity-0 pointer-events-none";
    };

    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 overflow-hidden">
            <div className="relative w-full max-w-[1200px] h-[500px] sm:h-[550px] md:h-[600px] perspective-[1600px] flex items-center justify-center"

            >
                {TEAM_MEMBERS.map((member, index) => (
                    <div
                        key={member.id}

                        className={`absolute w-[260px] sm:w-[300px] md:w-[340px] h-[380px] sm:h-[420px] md:h-[460px] transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] transform-style-preserve-3d ${getPosition(index)}
                        `}
                    >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] group"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] via-transparent to-transparent" />

                            {/* Glass Reveal */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] backdrop-blur-xl bg-white/10 border-t border-white/20">
                                <span className="text-xs tracking-widest text-blue-400 font-medium">
                                    {member.tag}
                                </span>
                                <h3 className="text-white text-lg sm:text-xl font-semibold mt-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-300 text-sm">{member.role}</p>
                                <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Controls */}
                <button
                    onClick={() =>
                        setActive((prev) => (prev - 1 + total) % total)
                    }
                    className="absolute left-2 sm:left-6 md:left-1 shadow-sm shadow-blue-700 text-white px-4 py-2 rounded-xl backdrop-blur-md transition"
                >
                    Prev
                </button>

                <button
                    onClick={() => setActive((prev) => (prev + 1) % total)}
                    className="absolute right-2 sm:right-6 md:right-10 shadow-sm shadow-blue-700 text-white px-4 py-2 rounded-xl backdrop-blur-md transition"
                >
                    Next
                </button>
            </div>
        </section>
    );
}
