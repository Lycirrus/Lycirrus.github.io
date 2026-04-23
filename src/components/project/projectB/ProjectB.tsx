import { IoEllipsisHorizontal } from "react-icons/io5"
import { useRef } from "react"
import { useProjectScroll } from "../../../hooks/useProjectScroll"
import ProjectTitle from "../common/ProjectTitle"
import ProjectFeature from "../common/ProjectFeature"
import ProjectRole from "../common/ProjectRole"
import ProjectTS from "../common/ProjectTS"
import logo from "../../../assets/choco/logo.svg"
import titleImage from "../../../assets/choco/title_image.svg"
import { rolesB } from "../../data/roleData"
import { tsB } from "../../data/tsData"

const stacks = ["React", "TypeScript", "OpenVidu"]
const outlines = [
  "• MZ세대를 겨냥한 간편한 편지 전송 서비스 기획",
  "• 유저 리텐션을 위해 일부 편지 개봉 기회 제공",
  "• 기존 서비스와 차별점으로 당일 문자와 화상 채팅 기능 제공",
  "• 빠른 배포 및 피드백을 위한 애자일한 개발 진행"
]
const details = [
  "2025.01.13 ~ 2025.02.21",
  "6명 (Frontend 3명, Backend 2명, Infra 1명)",
  "SSAFY 12기 공통 프로젝트 우수상"
]
const features = [
  {
    feature: "편지 전송 & 수신",
    description: "초콜릿 형태로 편지를 작성해 전송. 발렌타인 당일 또는 일부 미리 개봉 가능한 리텐션 설계 적용.",
  },
  {
    feature: "편지 리스트",
    description: "날짜·편지 타입·개봉 여부에 따라 오버레이와 클릭 동작이 다르게 표시되는 편지함 UI.",
  },
  {
    feature: "화상 채팅",
    description: "OpenVidu(WebRTC) 기반 1:1 영상통화. 발렌타인 당일 정해진 시간에 90초 화상 채팅 입장 가능.",
  },
  {
    feature: "문자 채팅",
    description: "발렌타인 당일 1:1 텍스트 채팅 기능. 화상 채팅과 함께 차별화된 당일 소통 경험 제공.",
  },
]

const ProjectB = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useProjectScroll({ rootRef });

  return (
    <div className="w-full bg-pf-white" ref={rootRef}>
      <div className="pin-wrapper h-dvh max-w-7xl mx-auto py-3 px-6 md:px-12">
        <div className="h-full p-6 md:p-12 rounded-2xl">
          <div className="flex items-center pb-6 md:pb-12">
            <IoEllipsisHorizontal className="fill-pf-gray-200" />
            <IoEllipsisHorizontal className="fill-pf-gray-200 mr-3" />
            <p className="text-xs md:text-sm text-pf-gray-200">프로젝트</p>
          </div>
          <div className="relative h-full overflow-hidden pin-section">
            <div className="absolute inset-0 slide">
              <ProjectTitle 
                logo={logo} 
                stacks={stacks} 
                title="Chocoletter" 
                description=":모바일 웹 뷰 기반 발렌타인데이 시즈널 서비스" 
                outlines={outlines}
                details={details}
                imageUrl={titleImage}
                color="bg-pf-pink"
              />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectFeature title="Chocoletter" color="text-pf-pink" features={features} />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectRole 
                title="Chocoletter"
                textColor="text-pf-pink"
                bgColor="bg-pf-pink"
                roles={rolesB}
              />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectTS 
                title="Chocoletter" 
                textColor="text-pf-pink" 
                bgColor="bg-pf-pink" 
                items={tsB} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectB