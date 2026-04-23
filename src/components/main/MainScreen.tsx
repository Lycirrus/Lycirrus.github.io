import ThreeCircles from "./decoration/ThreeCircles"
import DownArrow from "./decoration/DownArrow"
import { FiMail, FiGithub } from "react-icons/fi"

const MainScreen = () => {
  return (
    <div className="w-full h-dvh bg-pf-white relative overflow-hidden">
      <ThreeCircles />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tracking-[0.3em] text-pf-gray-200 uppercase">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pf-black">
            김한송
          </h1>
          <p className="text-base md:text-lg text-pf-gray-200 tracking-widest mt-1">
            Frontend Developer
          </p>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <a
            href="mailto:knhs4@naver.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-pf-gray-100 text-sm text-pf-gray-300 hover:bg-pf-bg transition-colors"
          >
            <FiMail size={14} />
            knhs4@naver.com
          </a>
          <a
            href="https://github.com/Lycirrus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-pf-gray-100 text-sm text-pf-gray-300 hover:bg-pf-bg transition-colors"
          >
            <FiGithub size={14} />
            Lycirrus
          </a>
        </div>
      </div>

      <DownArrow />
    </div>
  )
}

export default MainScreen