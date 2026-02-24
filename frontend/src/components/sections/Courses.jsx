import React, { useState, useEffect, useRef } from 'react';
import { Code, Disc, Send, MessageSquare, Globe, Mail, MapPin, Icon } from 'lucide-react';
import SecHeading from '../common/SecHeading';
import { frontCourses } from '../../All data/courses';
import { useNavigate } from 'react-router-dom'
import AnimatedContent from '../../animations/AnimatedContent'
import useReveal from '../../hooks/useReveal.js'






export default function Courses({ toggleEnrollModal }) {

    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // animations ref:
    useReveal(".fade-up");
    useReveal(".slide-up", { y: 80, duration: 1 });
    useReveal(".slide-left", { x: -100, y: 0 });
    useReveal(".slide-right", { x: 100, y: 120, duration: 0.5 });

    const navigate = useNavigate();



    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden flex flex-col justify-end">

            {/* --- BACKGROUND EFFECTS --- */}
            {/* Ambient Blue Glow - Top Right */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
            {/* Ambient Blue Glow - Bottom Center (The "Floor" light) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-950/40 blur-[100px] rounded-full pointer-events-none z-0" />


            {/* Heading section */}
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
                delay={0.8}
            >
                <SecHeading
                    title="Our Courses"
                    heading="The Top Options For"
                    span="YOU"
                />
            </AnimatedContent>


            <div className="max-w-7xl mx-auto px-6 pb-12 pt-20 relative z-10 w-full my-0">

                {/* --- COURSE CARDS SECTION --- */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-0">


                    {
                        frontCourses?.map((course, index) => (

                            <div className="group relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-blue-900/50 transition-colors duration-500 flex flex-col justify-center items-center text-center slide-right" key={index}>

                                {/* Inner Glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 w-[70%] flex flex-col items-center">
                                    <div className="mb-6 relative">
                                        <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center shadow-lg shadow-black/50">
                                            <img src={course.courseImg} alt="course-image"
                                                className='size-cover w-full h-full rounded-full' />
                                        </div>

                                        {/* Decorative line */}
                                        <div className="absolute top-1/2 left-full w-24 h-[1px] bg-gradient-to-r from-zinc-700 to-transparent -translate-y-1/2 ml-4 hidden md:block"></div>
                                        <div className="absolute top-1/2 right-full w-24 h-[1px] bg-gradient-to-l from-zinc-700 to-transparent -translate-y-1/2 mr-4 hidden md:block"></div>
                                    </div>

                                    <h3 className="text-xl font-light mb-2">{course.courseName}</h3>
                                    <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto font-light">
                                        {course.duration}
                                    </p>

                                    <button onClick={toggleEnrollModal}
                                        type='button'
                                        className="bg-white hover:bg-zinc-200 text-black font-medium rounded-full px-5 py-1.5 md:px-8 md:py-3 transition-colors text-sm flex items-center gap-2">
                                        <span>Enroll Now</span>

                                    </button>
                                </div>
                            </div>
                        ))
                    }


                </div>

                <button className="mt-0 mx-auto bg-white hover:bg-zinc-200 text-black font-medium rounded-xl px-8 py-3 transition-colors text-sm flex items-center gap-2"
                    onClick={() => navigate('/courses')}>
                    <span>View All</span>
                </button>
            </div>

        </div>



    );


}