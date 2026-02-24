import React from 'react'
import Carousel from '../Carousel/Slider.jsx'
import SecHeading from '../common/SecHeading.jsx'
import AnimatedContent from '../../animations/AnimatedContent.jsx'
import { useNavigate } from 'react-router-dom'
import TeamSlider from '../Carousel/3d Carousel/TeamSlider.jsx'



const Team = () => {

  const navigate = useNavigate();


  return (
    <>
      <section className='relative font-sans'>

        {/* heading */}

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
          delay={0.5}
        >
          <SecHeading
            title="Behind The Great Works"
            heading="Meet Our"
            span="Leadership"
          />
        </AnimatedContent>

        <div>
          <TeamSlider />
        </div>

        {/* <div className='mx-auto my-10'>
          <button className='hero-cta-1 text-sm'
            onClick={() => navigate('/gallery')}
          >View Our Gallery</button>

        </div> */}

      </section>
    </>
  )
}

export default Team