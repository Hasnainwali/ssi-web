import React from 'react'

const RotatingCards = () => {

    const images = [
        { src: "/img1.jpg", color: "255,0,0" },
        { src: "/img2.jpg", color: "0,255,0" },
        { src: "/img3.jpg", color: "0,0,255" },
        { src: "/img4.jpg", color: "255,255,0" },
        { src: "/img5.jpg", color: "255,0,255" },
        { src: "/img6.jpg", color: "0,255,255" },
    ];


    return (
        <div className="carousel-wrapper">
            <div
                className="carousel-inner"
                style={{ "--quantity": images.length }}
            >
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="carousel-card"
                        style={{
                            "--index": i,
                            "--color-card": img.color,
                        }}
                    >
                        <img src={img.src} alt="" className="carousel-img" />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default RotatingCards