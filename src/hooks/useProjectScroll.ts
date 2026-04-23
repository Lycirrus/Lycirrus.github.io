import gsap from 'gsap'
import { useEffect } from 'react'

interface UseProjectScrollProps {
  rootRef: React.RefObject<HTMLDivElement | null>;
}

export const useProjectScroll = ({ rootRef }: UseProjectScrollProps) => {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".slide", rootRef.current);
      const pinSection = root.querySelector(".pin-section");
      const pinWrapper = root.querySelector(".pin-wrapper");

      if (!slides.length || !pinSection) return;

      gsap.set(slides[0], { autoAlpha: 1 });
      gsap.set(slides.slice(1), { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapper,
          start: "top top",
          end: `+=${(slides.length - 1) * 200}%`,
          pin: pinWrapper,
          scrub: 1,
          pinSpacing: true,
        }
      })

      slides.forEach((slide: HTMLElement, i) => {
        const previousSlide = slides[i - 1] as HTMLElement;
        if (!previousSlide) return;
        tl.to(slide, { autoAlpha: 1, duration: 0.2 })
          .to(previousSlide, { autoAlpha: 0, duration: 0.2 }, "<")
          .to({}, {duration: 1.5})
      })
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}