import React, { useEffect, useRef, useState } from "react";


// Reusable hook for reveal animation
const useReveal = (threshold = 0.2) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible];
};

const features = [
    {
        title: "No Time Limit Learning",
        desc: "Students can learn at their own pace without pressure. We focus on strong concepts and practical implementation.",
    },
    {
        title: "Fast Skill Growth",
        desc: "Our structured roadmap helps students move from beginner to job-ready with real-world practice projects.",
    },
    {
        title: "Modern Lab Environment",
        desc: "Hands-on training with updated tools, software, and development practices used in the industry.",
    },
    {
        title: "Career-Focused Programs",
        desc: "Courses are designed based on current market demand to help students start freelancing or jobs quickly.",
    },
];

const Card = ({ title, desc, delay }) => {
    const [ref, visible] = useReveal();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`relative p-6 rounded-2xl border border-blue-900/40 
            bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-xl 
            transform transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
};

export default function AboutPage() {
    const [ref, visible] = useReveal(0.15);

    return (
        <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">

            <div className="relative max-w-6xl mx-auto px-6">

                {/* ===== CEO Section ===== */}
                <div
                    ref={ref}
                    className={`grid md:grid-cols-2 gap-12 items-center mb-20
                    transition-all duration-1000 ease-out
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                    {/* Image */}
                    <div className="flex justify-center rounded-2xl">
                        <img
                            src='./images/about-hero.webp'
                            alt="Institute Owner"
                            loading="lazy"
                            decoding="async"
                            className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300 ease-in-out max-w-sm object-cover"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Message from Our CEO
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            Our mission is to provide practical and career-focused IT education.
                            We believe learning should not be limited by time or pressure.
                            Every student deserves guidance, real-world exposure, and confidence.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-6">
                            We focus on skill-building, industry tools, and real projects so our
                            students can start freelancing, internships, or jobs with confidence.
                            Our goal is not just teaching — it is building future professionals.
                        </p>

                        <blockquote className="border-l-4 border-blue-600 pl-4 text-blue-400 italic">
                            "Success comes from strong foundations, consistent practice,
                            and the courage to keep learning."
                        </blockquote>
                    </div>
                </div>

                {/* ===== Why Choose Section ===== */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Choose Our IT Academy?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We provide practical, career-focused training with modern tools and a supportive learning environment.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((item, i) => (
                        <Card
                            key={i}
                            title={item.title}
                            desc={item.desc}
                            delay={i * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
