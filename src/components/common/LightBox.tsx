import { useState } from "react";

interface LightBoxProps {
  src: string;
  alt: string;
}

const LightBox = ({ src, alt }: LightBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:max-w-3xl aspect-video rounded-xl border border-pf-gray-100 dark:border-pf-gray-300">
        <img src={src} alt={alt} className="w-full h-full object-contain rounded-xl" />
      </div>
    </>
  )
};

export default LightBox;