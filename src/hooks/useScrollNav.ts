import { useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollNav = (onAfterScroll?: () => void) => {
    const scrollToSection = useCallback((id: string) => {
        const target = document.getElementById(id);
        if (!target) return;

        // ScrollTrigger가 pin으로 인해 offset을 가지고 있을 수 있으므로
        // ScrollTrigger.refresh() 후 실제 offsetTop을 계산
        ScrollTrigger.refresh();

        const top = target.getBoundingClientRect().top + window.scrollY;

        gsap.to(window, {
            scrollTo: { y: top, autoKill: true },
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                onAfterScroll?.();
            },
        });
    }, [onAfterScroll]);

    return { scrollToSection };
};