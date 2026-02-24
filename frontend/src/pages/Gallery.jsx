import React from 'react'
import DomeGallery from '../animations/DomeGallery.jsx'
import { BackBtn } from '../components/common/BackBtn.jsx'




const Gallery = () => {


    return (
        <>
            <section style={{ width: '100vw', height: '100vh' }}>
                <DomeGallery
                    fit={0.8}
                    minRadius={600}
                    maxVerticalRotationDeg={0}
                    segments={34}
                    dragDampening={2}
                    
                />

                {/* back-btn */}
      <div className="absolute top-14 md:top-28 left-3 md:left-15 mx-1 my-3 z-0">
        <BackBtn
         />
      </div>
            </section>

        </>
    )
}

export default Gallery