import ThreeCircles from "./decoration/ThreeCircles"
import DownArrow from "./decoration/DownArrow"
import { FiMail, FiGithub, FiFileText } from "react-icons/fi"
import resumePDF from "../../assets/이력서_김한송.pdf"

const MainScreen = () => {
  return (
    <div className="w-full h-dvh bg-pf-white dark:bg-pf-black relative overflow-hidden" id="main">
      <ThreeCircles />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tracking-[0.3em] text-pf-gray-200 dark:text-pf-gray-100 uppercase">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pf-black dark:text-pf-white">
            김한송
          </h1>
          <p className="text-base md:text-lg text-pf-gray-200 dark:text-pf-gray-100 tracking-widest mt-1">
            Frontend Developer
          </p>
        </div>

        <div className="w-106 flex flex-wrap justify-center items-center gap-3">
          <a 
            href={resumePDF}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-pf-gray-100 text-sm text-pf-gray-300 dark:text-pf-gray-100 hover:bg-pf-bg transition-colors"
          >
            <FiFileText size={14} />
            Resume
          </a>
          <a
            href="https://github.com/Lycirrus"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-pf-gray-100 text-sm text-pf-gray-300 dark:text-pf-gray-100 hover:bg-pf-bg transition-colors"
          >
            <FiGithub size={14} />
            Lycirrus
          </a>
          <a
            href="mailto:knhs4@naver.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-pf-gray-100 text-sm text-pf-gray-300 dark:text-pf-gray-100 hover:bg-pf-bg transition-colors"
          >
            <FiMail size={14} />
            knhs4@naver.com
          </a>
        </div>
      </div>

      <DownArrow />
    </div>
  )
}

export default MainScreen