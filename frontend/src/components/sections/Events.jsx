import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { eventsFront } from "../../All data/events";
import { Navigate, useNavigate } from "react-router-dom";



export default function Events() {

    const scrollRef = useRef(null);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const navigate = useNavigate()


    const scroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return;

        const card = current.querySelector(".event-card");
        if (!card) return;

        const gap = 24;
        const cardWidth = card.offsetWidth + gap;

        current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    // Section visibility trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full py-20 md:py-24 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.15),transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start lg:items-center">
                {/* Left Content */}
                <div
                    className={`max-w-md text-white transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
                        Explore Our <span className="text-blue-400">Latest Events</span>
                    </h2>
                    <p className="mt-4 text-gray-300 text-sm sm:text-base">
                        Join hands-on workshops, expert seminars, and career-building events at our IT Academy.
                    </p>
                    <button className="mt-6 px-5 py-2 bg-blue-700 hover:bg-blue-600 transition rounded-full text-sm font-medium"
                        onClick={() => navigate('/events')}>
                        View All Events
                    </button>
                </div>

                {/* Carousel */}
                <div className="relative w-full">
                    <div ref={scrollRef} className="flex gap-6 scroll-smooth px-1 sm:px-2 no-scrollbar">
                        {eventsFront.map((event, i) => (
                            <div
                                key={i}
                                className={`event-card flex-shrink-0 h-[40%] w-[85%] sm:w-[60%] md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-16px)] bg-[#0b1220] border border-blue-900/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-900/40 hover:scale-110 transition-translate duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                                style={{ transitionDelay: `${i * 160}ms` }}
                            >
                                <img
                                    src={`${event.img}?auto=format&fit=crop&w=800&q=80`}
                                    alt={event.title}
                                    className="h-60 w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="p-4">
                                    <span className="text-xs bg-blue-800/40 text-blue-300 px-3 py-1 rounded-full">
                                        {event.tag}
                                    </span>
                                    <h3 className="mt-3 text-white font-semibold text-lg">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("left")}
                        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 bg-[#0f172a] border border-blue-800 p-2 rounded-full hover:bg-blue-900 transition"
                    >
                        <ChevronLeft className="text-white w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 bg-[#0f172a] border border-blue-800 p-2 rounded-full hover:bg-blue-900 transition"
                    >
                        <ChevronRight className="text-white w-5 h-5" />
                    </button>

                </div>
            </div>
        </section>
    );
}
