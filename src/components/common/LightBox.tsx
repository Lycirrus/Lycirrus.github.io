import { useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

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
      <div className="sm:max-w-160 aspect-video rounded-xl border border-pf-gray-100 dark:border-pf-gray-300 cursor-zoom-in" onClick={handleOpen}>
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl hover:opacity-60 transition-opacity duration-200" />
      </div>
      {isOpen && createPortal(
        <div className="fixed inset-0 z-100 bg-pf-bg-dark/90 flex items-center justify-center" onClick={handleClose}>
          <div className="relative flex justify-center w-full max-h-[90dvh]" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-8 right-4 text-pf-gray-100 hover:text-pf-white transition-colors" onClick={handleClose}>
              <IoCloseCircleOutline size={36} />
            </button>
            <img src={src} alt={alt} className="max-w-[90dvw] max-h-[90dvh] object-contain rounded-xl" />
          </div>
        </div>,
        document.getElementById("box-root") as HTMLElement
      )}
    </>
  )
};

export default LightBox;