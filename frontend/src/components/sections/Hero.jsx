import react, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import useReveal from '../../hooks/useReveal.js'
import FloatingCard from '../common/FloatingCard.jsx';
import FloatingCardLeft from '../common/FloatingCardLeft.jsx';
import { RoomGridFloor } from '../common/RoomGridFloor.jsx';
// import Galaxy from '../../animations/Galaxy.jsx';


const Hero = ({ toggleEnrollModal }) => {


  // animations ref:
  useReveal(".fade-up");
  useReveal(".slide-up", { y: 80, duration: 1 });
  useReveal(".slide-left", { x: -100, y: 0 });
  useReveal(".fade-in", { opacity: 0, opacity: 1 });


  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = ["Web Development", "3D Modeling", "Graphic Design", "Digital Marketing"];

  const heroTitle = useRef(null);

  const navigate = useNavigate();

  const time = new Date().toLocaleTimeString();

  useEffect(() => {
    // Typing effect logic
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  return (
    <section id="hero" className="hero-bg">

      {/* <div className='absolute inset-0 w-full'>
        <Galaxy
          mouseRepulsion
          mouseInteraction
          rotationSpeed={0.1}
          starSpeed={0.5}
          speed={0.3}
        />
      </div> */}


      {/* 3d grid floor effect */}
      <RoomGridFloor />


      <div className='hero-grid-container'>

        <div ref={heroTitle} className='hero-main grid justify-center items-center'>

          <div className='mx-auto mt-8'>
            <h1 className='main-h1 animate-fade-in-up'>Transform Your Future With</h1>

            <h2 className='main-h1 animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-500'>
              {rotatingTexts[textIndex]}
            </h2>
          </div>

          {/* CTA buttons... */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 pt-4 mx-auto slide-up">
            <button
              onClick={() => navigate('/courses')}
              className="hero-cta-1"
            >
              Explore Courses <ArrowRight className=" bg-blue-500 p-1 text-black rounded-lg ml-2 w-8 h-8 hover:translate-x-1 transition-transform duration-200 ease-in" />
            </button>

            <button className="hero-cta-2 slide-up">
              <a href="https://www.youtube.com/@SSIB_OFFICIAL">
                <Play className="mr-2 w-5 h-5 hover:rotate-360 transition-transform duration-200 ease-in" /></a>
              Watch Video
            </button>
          </div>
        </div>


        <div className="flex justify-center my-6">
          <div className="
      group relative 
      px-8 py-6 
      max-w-xl w-full 
      text-center 
      text-slate-300 
      rounded-2xl 
      bg-slate-800/60 
      backdrop-blur-xl 
      border border-white/10 
      shadow-[0_0_40px_rgba(0,255,200,0.05)]
      transition-all duration-500
      hover:-translate-y-2 
      hover:shadow-blue-600/20
      slide-up
    ">

            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 
      bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 blur-xl">
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-4 text-sm md:text-base font-medium tracking-wide">

              <span className="flex items-center gap-2">
                🚀 Professional IT Training
              </span>

              <span className="hidden md:block text-slate-600">|</span>

              <span className="flex items-center gap-2">
                👨‍🏫 Industry-Expert Instructors
              </span>

              <span className="hidden md:block text-slate-600">|</span>

              <span className="flex items-center gap-2">
                🎓 Joined Over 500+ Students
              </span>

            </div>
          </div>
        </div>
      </div>

      <div>
        <FloatingCard />
      </div>

      <div>
        <FloatingCardLeft />
      </div>


    </section>
  )
}

export default Hero