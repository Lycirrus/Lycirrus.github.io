import { useRef } from "react"
import { IoEllipsisHorizontal } from "react-icons/io5";
import StackMain from "./StackMain";
import StackSub from "./StackSub";

const StackScreen = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={sectionRef} className="w-full min-h-dvh bg-pf-white">
      <div className="h-full max-w-7xl mx-auto py-3 px-6 md:px-12">
        <div className="h-full p-6 md:p-12 rounded-2xl">
          <div className="flex items-center pb-6 md:pb-12">
            <IoEllipsisHorizontal className="fill-pf-gray-200" />
            <IoEllipsisHorizontal className="fill-pf-gray-200 mr-3" />
            <p className="text-xs md:text-sm text-pf-gray-200">기술 스택</p>
          </div>
          <div className="flex flex-col gap-6 md:gap-12">
            <StackMain />
            <StackSub />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackScreen