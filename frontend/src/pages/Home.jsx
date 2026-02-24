import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

import Hero from '../components/sections/Hero'
import Achievements from '../components/sections/Achievements'
import Courses from '../components/sections/Courses'
import Results from '../components/sections/Results'
import Events from '../components/sections/Events'
import Team from '../components/sections/Team'
import About from '../components/sections/About'
import CallToAction from '../components/sections/CallToAction'
import { EnrollmentModal } from '../components/common/EnrollmentModel';
// import Galaxy from '../animations/Galaxy';




const Home = ({ toggleEnrollModal }) => {

    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

    return (
        <>
            <main className="home-bg">

                {/* <div className='absolute inset-0 w-full'>
                    <Galaxy
                        mouseRepulsion
                        mouseInteraction
                        rotationSpeed={0.1}
                        starSpeed={0.5}
                        speed={0.3}
                    />
                </div> */}

                {/* 1. Top Right Glow */}
                <div className="glow-accent-top" />
                <div className="card-md-glow" />

                {/* 2. Bottom Center Horizon Glow */}
                <div className="glow-accent-bottom" />

                {/* 3. Perspective Grid Floor */}
                <div className="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none z-0 opacity-40">
                    {/* The 'bg-grid-perspective' class handles all the 3D transforms and gradients */}
                    <div className="w-full h-full absolute inset-0 bg-grid-perspective" />
                </div>


                <Hero />
                {/* <hr className='text-white' /> */}

                <About />
                {/* <hr className='text-white' /> */}

                <Achievements />
                {/* <hr className='text-white' /> */}

                <Courses toggleEnrollModal={() => setIsEnrollModalOpen(true)} />
                {/* <hr className='text-white' /> */}

                <Results />
                {/* <hr className='text-white' /> */}

                <Team />
                {/* <hr className='text-white' /> */}

                <Events />
                {/* <hr className='text-white' /> */}

                <CallToAction />
                {/* <hr className='text-white' /> */}


            </main>

            {/* apply form */}
            <EnrollmentModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
            />


            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-3 z-40 animate-bounce-slow animate-fade-in-up">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110 animate-pulse">
                    <a href="https://wa.me/+923213268095">
                        <FaWhatsapp className="w-6 h-6 font-bold" />
                    </a>
                </button>
            </div>

            {/* Floating gmail Button */}
            <div className="fixed bottom-22 right-3 z-40 animate-pulse">
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110">
                    <a href="mailto:info@ssi.com">
                        <FaEnvelope className="w-6 h-6 font-bold" />
                    </a>
                </button>
            </div>

        </>
    )
}

export default Home