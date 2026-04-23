import { IoEllipsisHorizontal } from "react-icons/io5";
import ExpEducation from "./ExpEducation";
import ExpAwards from "./ExpAwards";
import ExpCerticiation from "./ExpCertification";
import ExpLanguage from "./ExpLanguage";
import { useWindowSize } from "../../hooks/useWindowSize";

const ExpScreen = () => {
  const isDesktop = useWindowSize();
  // const containerRef = useExpScroll();

  return (
    <div className="w-full min-h-dvh bg-pf-bg">
      <div className="h-full max-w-7xl mx-auto py-3 px-6 md:px-12">
        <div className="h-full p-6 md:p-12 rounded-2xl">
          <div className="flex items-center pb-6 md:pb-12">
            <IoEllipsisHorizontal className="fill-pf-gray-200" />
            <IoEllipsisHorizontal className="fill-pf-gray-200 mr-3" />
            <p className="text-xs md:text-sm text-pf-gray-200">기본 이력</p>
          </div>
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex gap-6 md:gap-12">
              <ExpEducation />
              {isDesktop && <ExpLanguage />}
            </div>
            <ExpAwards />
            <ExpCerticiation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpScreen