import { useEffect } from "react";
import { revealAnimation } from "../animations/FadeAnims.js";

export default function useReveal(selector, options) {
    useEffect(() => {
        revealAnimation(selector, options);
    }, []);
}
