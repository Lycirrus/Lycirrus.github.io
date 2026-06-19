import { useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const useScrollNav = (onAfterScroll?: () => void) => {
    const scrollToSection = useCallback((id: string) => {
        const target = document.getElementById(id);
        if (!target) return;

        ScrollTrigger.refresh();

        const top = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({ top, behavior: "auto" });

        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            onAfterScroll?.();
        });
    }, [onAfterScroll]);

    return { scrollToSection };
};