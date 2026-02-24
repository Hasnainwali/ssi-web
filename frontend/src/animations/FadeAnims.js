import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function revealAnimation(selector, options = {}) {
    const {
        y = 40,
        x = 0,
        duration = 0.8,
        ease = "power3.out",
        stagger = 0.1,
        start = "top 85%",
        once = true,
    } = options;

    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
        gsap.fromTo(
            el,
            { y: y, x: x, opacity: 0 },
            {
                y: 0,
                x: 0,
                opacity: 1,
                duration: duration,
                ease: ease,
                scrollTrigger: {
                    trigger: el,
                    start: start,
                    toggleActions: once
                        ? "play none none none"
                        : "play none reverse none",
                },
            }
        );
    });
}
