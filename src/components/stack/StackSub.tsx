const subStacks = [
  { name: "Tailwind CSS", description: "일관된 디자인 시스템을 빠르게 구현할 수 있습니다."},
  { name: "SCSS", description: "컴포넌트 단위로 스타일을 분리하고 변수를 활용할 수 있습니다."},
  { name: "Zustand", description: "간결한 전역 상태를 설계하고 적용할 수 있습니다."},
  { name: "Axios", description: "HTTP 메서드를 활용하여 API 통신을 효율적으로 처리할 수 있습니다."},
  { name: "PWA", description: "서비스 워커와 웹 앱 매니페스트를 활용하여 오프라인에서도 작동하는 웹 애플리케이션을 개발할 수 있습니다."},
  { name: "Git", description: "git을 통해 프로젝트를 관리하며, rebase 전략으로 충돌을 최소화 할 수 있습니다."},
  { name: "Figma", description: "디자인 도구를 활용하여 UI/UX 디자인을 시각화하고 협업할 수 있습니다."},
  { name: "Vite / npm", description: "빠른 빌드와 개발 환경을 제공하는 도구를 활용하여 프로젝트를 관리할 수 있습니다."},
  { name: "Jira", description: "작업을 체계적으로 관리하고 팀과의 협업을 원활하게 할 수 있습니다."},
]

const StackSub = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-6">
      <p className="text-sm text-pf-gray-300">S U B</p>
      <hr className="border-pf-gray-100" />
      <div>
        {subStacks.map((stack, index) => (
          <div key={index} className="flex flex-col gap-3 md:gap-6 pb-3 md:pb-6">
            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
              <p className="text-sm shrink-0 md:text-base font-semibold text-pf-black">{stack.name}</p>
              <div className="relative flex md:w-1/2 md:shrink-0">
                <span className="absolute -left-1 top-2.25 w-1 h-1 rounded-full bg-teal-400" />
                <p className="text-sm pl-1 text-pf-gray-300">{stack.description}</p>
              </div>
            </div>
            <hr className="border-pf-gray-100"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackSub