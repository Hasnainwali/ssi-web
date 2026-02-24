import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import img1 from './assets/image-1.webp';
import img2 from './assets/image-2.webp';
import img3 from './assets/image-3.webp';
import img4 from './assets/image-4.webp';
import img5 from './assets/image-5.webp';
// import img4 from './assets/image-6.webp';

const initialItems = [
    {
        img: img1,
        author: 'CEO',
        title: 'SYED MUNIB',
        topic: 'THE BACKBONE',
        desc: 'BSCS graduate skilled in 3D design, graphics, freelancing, game development, social media'
    },
    {
        img: img2,
        author: 'CO FOUNDER',
        title: 'AHMAD HAMID ',
        topic: 'THE INSTRUCTOR',
        desc: 'BSCS graduate currently working in a Dubai-based tech company with professional expertise'
    },
    {
        img: img3,
        author: 'GRAPHICS MASTER',
        title: 'AZAM KHAN',
        topic: 'MS OFFICE',
        desc: 'BSCS graduate skilled in graphic design, web development, and creative digital solutions'
    },
    {
        img: img4,
        author: 'COMPUTER EXPERT',
        title: 'MR WAHAB',
        topic: 'COMPUTER ARCHITECT',
        desc: 'BS graduate, civil engineer, AutoCAD and computer expert with technical project experience'
    },
    {
        img: img5,
        author: 'FULL STACK DEV',
        title: 'MOHD IBRAHIM',
        topic: 'FULL STACK ENGINEER',
        desc: 'MERN and Next.js developer creating amazing modern responsive webapps'
    },
    // {
    //     img: img6,
    //     author: 'MERN STACK AND NETWORK DEV',
    //     title: 'MR ABID',
    //     topic: 'WEB DEV',
    //     desc: 'MERN and REACT NATIVE developer creating amazing modern responsive web and android apps'
    // },
];

const Slider = () => {
    const [items, setItems] = useState(initialItems);
    const [animationType, setAnimationType] = useState('');
    const timeRunning = 3000;
    const timeAutoNext = 7000;
    const runTimeOut = useRef(null);
    const runNextAuto = useRef(null);

    const nextSlide = () => {
        showSlider('next');
    };

    const prevSlide = () => {
        showSlider('prev');
    };

    const showSlider = (type) => {
        if (type === 'next') {
            setItems((prev) => {
                const newItems = [...prev];
                const first = newItems.shift();
                newItems.push(first);
                return newItems;
            });
            setAnimationType('next');
        } else {
            setItems((prev) => {
                const newItems = [...prev];
                const last = newItems.pop();
                newItems.unshift(last);
                return newItems;
            });
            setAnimationType('prev');
        }

        clearTimeout(runTimeOut.current);
        runTimeOut.current = setTimeout(() => {
            setAnimationType('');
        }, timeRunning);

        clearTimeout(runNextAuto.current);
        runNextAuto.current = setTimeout(() => {
            nextSlide();
        }, timeAutoNext);
    };

    useEffect(() => {
        // Initial auto-run setup
        runNextAuto.current = setTimeout(() => {
            nextSlide();
        }, timeAutoNext);

        return () => {
            clearTimeout(runNextAuto.current);
            clearTimeout(runTimeOut.current);
        };
    }, []);

    return (
        <div className={`carousel ${animationType}`}>
            <div className="list">
                <div className='absolute inset-0 bg-black/50 z-10' />
                {items.map((item, index) => (
                    <div className="item z-40" key={index}>


                        <img src={item.img} alt={item.title} />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="title">{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <div className="des">{item.desc}</div>
                            {/* <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.img} alt={item.title} />
                        <div className="content">
                            <div className="title">{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button id="prev" onClick={prevSlide}>&lt;</button>
                <button id="next" onClick={nextSlide}>&gt;</button>
            </div>

            <div className="time"></div>
        </div>
    );
};

export default Slider;
