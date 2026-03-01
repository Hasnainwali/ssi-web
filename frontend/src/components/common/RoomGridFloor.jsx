import React from 'react'

export const RoomGridFloor = () => {



  return (
    <>
      {/* 3D Room Grid Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[600px] opacity-70">
          <div
            className="w-full h-full absolute inset-0"
            style={{
              backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.7) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.7) 1px, transparent 1px)
        `,
              backgroundSize: '60px 60px',
              transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(1.5)',
              transformOrigin: 'bottom center',
              maskImage: 'linear-gradient(to top, black 40%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 95%)',
            }}
          />
        </div>

        {/* Left Wall */}
        <div className="absolute top-0 left-0 w-[500px] h-full opacity-60 hidden lg:block">
          <div
            className="w-full h-full absolute inset-0"
            style={{
              backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.7) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.7) 1px, transparent 1px)
        `,
              backgroundSize: '60px 60px',
              transform: 'perspective(1000px) rotateY(55deg) translateX(-120px) scale(1.3)',
              transformOrigin: 'left center',
              maskImage: 'linear-gradient(to right, black 20%, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 90%)',
            }}
          />
        </div>

        {/* Right Wall */}
        <div className="absolute top-0 right-0 w-[500px] h-full opacity-60 hidden lg:block">
          <div
            className="w-full h-full absolute inset-0"
            style={{
              backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.7) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.7) 1px, transparent 1px)
        `,
              backgroundSize: '60px 60px',
              transform: 'perspective(1000px) rotateY(-55deg) translateX(120px) scale(1.3)',
              transformOrigin: 'right center',
              maskImage: 'linear-gradient(to left, black 20%, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 90%)',
            }}
          />
        </div>

      </div>
    </>
  )
}

