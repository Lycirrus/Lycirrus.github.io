import { IoEllipsisHorizontal } from "react-icons/io5"
import ProjectA from "./projectA/ProjectA"

const ProjectScreen = () => {
  return (
    <div className="w-full h-dvh bg-pf-bg">
      <div className="h-full max-w-7xl mx-auto py-3 px-6 md:px-12">
        <div className="h-full p-6 md:p-12 rounded-2xl">
          <div className="flex items-center pb-6 md:pb-12">
            <IoEllipsisHorizontal className="fill-pf-gray-200" />
            <IoEllipsisHorizontal className="fill-pf-gray-200 mr-3" />
            <p className="text-xs md:text-sm text-pf-gray-200">프로젝트</p>
          </div>
          <div className="h-full flex flex-col gap-6 md:gap-12">
            <ProjectA />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectScreen