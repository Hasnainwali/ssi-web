import react, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import useReveal from '../../hooks/useReveal.js'
import FloatingCard from '../common/FloatingCard.jsx';
import FloatingCardLeft from '../common/FloatingCardLeft.jsx';
import Galaxy from '../../animations/Galaxy.jsx';


const Hero = ({ toggleEnrollModal }) => {


  // animations ref:
  useReveal(".fade-up");
  useReveal(".slide-up", { y: 80, duration: 1 });
  useReveal(".slide-left", { x: -100, y: 0 });


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

      {/* Grid Floor Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none z-0 opacity-40">
        <div
          className="w-full h-full absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(25, 64, 175, 0.3) 10px, transparent 1px),
              linear-gradient(to bottom, rgba(25, 64, 175, 0.3) 10px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(1.5)',
            transformOrigin: 'bottom center',
            maskImage: 'linear-gradient(to top, black, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to top, black, transparent 80%)'
          }}
        />
      </div>



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
              Explore Courses <ArrowRight className=" bg-blue-500 p-2 text-black rounded-lg ml-2 w-8 h-8" />
            </button>

            <button className="hero-cta-2 slide-up">
              <Play className="mr-2 w-5 h-5" /> Watch Video
            </button>
          </div>
        </div>


        <div className="text-center text-slate-400 text-lg md:text-xl  max-w-lg leading-relaxed my-2">
          <div className='max-w-full flex flex-col lg:flex-row gap-4'>
            <span className='hero-span-tag animate-fade'>Professional IT training</span>
            <span className='hero-span-tag animate-fade'>industry-expert instructors</span>
            <span className='hero-span-tag animate-fade'>Joined over 500+ students</span>
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