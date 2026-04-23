import { IoEllipsisHorizontal } from "react-icons/io5"
import { useRef } from "react"
import { useProjectScroll } from "../../../hooks/useProjectScroll"
import ProjectTitle from "../common/ProjectTitle"
import ProjectFeature from "../common/ProjectFeature"
import ProjectRole from "../common/ProjectRole"
import ProjectTS from "../common/ProjectTS"
import logo from "../../../assets/mw/logo.svg"
import titleImage from "../../../assets/mw/title_image.svg"
import { rolesC } from "../../data/roleData"
import { tsC } from "../../data/tsData"

const stacks = ["React", "TypeScript", "PWA"]
const outlines = [
  "• 교실 내 가상 경제 시스템을 통한 실전 금융 교육 제공",
  "• 학생 모바일 웹앱 / 선생님 PC 웹으로 역할별 최적화 UX 설계",
  "• RAG 기반 챗봇으로 학급 경제 질문에 답변",
  "• PWA 적용으로 앱 설치 없이 네이티브 앱 경험 제공"
]
const details = [
  "2025.04.14 ~ 2025.05.22",
  "6명 (Full-Stack 3명, Frontend 1명, Backend/Infra 1명, AI 1명)"
]
const features = [
  {
    feature: "예적금",
    description: "학생이 학급 가상 통장에 예금·적금 상품을 가입하고 이자와 만기를 직접 관리하는 금융 경험 제공.",
  },
  {
    feature: "직업",
    description: "선생님이 직업을 생성하고 월급·최대 인원·설명을 설정. 학생에게 직업을 배정해 매달 월급 지급.",
  },
  {
    feature: "부동산",
    description: "학급 내 자리(책상)를 가상 부동산으로 설정. 학생들이 가상 화폐로 자리를 구매하고 거래.",
  },
  {
    feature: "상점",
    description: "선생님이 아이템을 등록하고 학생이 학급 화폐로 구매하는 가상 상점. 경제 순환 구조 완성.",
  },
]

const ProjectC = () => {
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
                title="머니위즈" 
                description=":핀테크 기반 초등 학급 경제 활동 지원 웹/웹앱 서비스" 
                outlines={outlines}
                details={details}
                imageUrl={titleImage}
                color="bg-pf-blue"
              />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectFeature title="머니위즈" color="text-pf-blue" features={features} />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectRole 
                title="머니위즈"
                textColor="text-pf-blue"
                bgColor="bg-pf-blue"
                roles={rolesC}
              />
            </div>
            <div className="absolute inset-0 slide">
              <ProjectTS 
                title="머니위즈" 
                textColor="text-pf-blue" 
                bgColor="bg-pf-blue" 
                items={tsC} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectC