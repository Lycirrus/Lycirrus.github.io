import { IoEllipsisHorizontal } from "react-icons/io5"
import { useRef } from "react"
import { useProjectScroll } from "../../../hooks/useProjectScroll"
import ProjectTitle from "../common/ProjectTitle"
import ProjectFeature from "../common/ProjectFeature"
import ProjectRole from "../common/ProjectRole"
import ProjectTS from "../common/ProjectTS"
import logo from "../../../assets/ssgg/logo.svg"
import titleImage from "../../../assets/ssgg/title_image.svg"
import { rolesA } from "../../data/roleData"
import { tsA } from "../../data/tsData"

const stacks = ["React", "TypeScript", "SCSS"]
const outlines = [
  "• 무인 매장 점주들의 CCTV 데이터 활용 및 부담 완화",
  "• VLM을 이용하여 실시간으로 이상행동 자동 감지",
  "• 이상행동 기록 및 레포트 제공",
  "• 사용자 편의를 위한 챗봇 기능 구현"
]
const details = [
  "2025.04.14 ~ 2025.05.22",
  "6명 (Full-Stack 3명, Frontend 1명, Backend/Infra 1명, AI 1명)",
  "SSAFY 12기 자율 프로젝트 우수상 · 에스원 기업연계"
]
const features = [
  {
    feature: "실시간 화면 & 이상탐지",
    description: "VLM 기반 CCTV 실시간 모니터링. 이상행동 감지 시 AI 서버에서 즉시 프론트로 신호를 전달해 화면에 표출.",
  },
  {
    feature: "이상행동 아카이브",
    description: "이상탐지 순간의 영상을 자동 저장. 캘린더 기반 날짜별 조회로 점주가 원하는 시점의 기록을 빠르게 확인.",
  },
  {
    feature: "데일리 레포트",
    description: "시간대별 인원 통계·이상행동 분포·구역별 발생 현황을 차트로 시각화한 일일 보고서 제공.",
  },
  {
    feature: "챗봇",
    description: "매장 운영 및 이상행동 관련 질문에 실시간으로 답변하는 AI 챗봇으로 점주 편의 지원.",
  },
]

const ProjectA = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useProjectScroll({ rootRef });

  return (
    <div className="w-full bg-pf-bg" ref={rootRef}>
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
                title="시시각각" 
                description=":CCTV 실시간 이상행동 감지 및 정보 제공 무인 매장 AI 보안 솔루션" 
                outlines={outlines}
                details={details}
                imageUrl={titleImage}
                color="bg-pf-violet"
              />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectFeature title="시시각각" color="text-pf-violet" features={features} />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectRole 
                title="시시각각" 
                textColor="text-pf-violet" 
                bgColor="bg-pf-violet" 
                roles={rolesA} 
              />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectTS 
                title="시시각각" 
                textColor="text-pf-violet" 
                bgColor="bg-pf-violet" 
                items={tsA} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectA