import { useState } from "react";

interface LightBoxProps {
  src: string;
  alt: string;
}

const LightBox = ({ src, alt }: LightBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="md:max-w-3xl aspect-video rounded-xl border border-pf-gray-100 dark:border-pf-gray-300 cursor-zoom-in" onClick={handleOpen}>
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl hover:opacity-60 transition-opacity duration-200" />
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-100 bg-pf-bg-dark/70 flex items-center justify-center" onClick={handleClose}>
          <div className="relative w-full max-h-[90dvh]" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-9 right-0 text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors" onClick={handleClose}>
              <p>닫기</p>
            </button>
            <img src={src} alt={alt} className="max-w-[90dvw] max-h-[90dvh] object-contain rounded-xl" />
          </div>
        </div>
      )}
    </>
  )
};

export default LightBox;