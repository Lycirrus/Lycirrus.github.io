import BasicStar from "../common/BasicStar"

const mainStacks = [
  {
    name: "React",
    annotation: "with JavaScript / HTML / CSS",
    star: 3,
    descriptions: [
      "React를 사용하여 웹 애플리케이션을 개발한 경험이 있습니다.",
      "Recoil과 Zustand로 상태 관리를 할 수 있습니다.",
      "RESTful API를 기반으로 데이터를 요청할 수 있습니다.",
      "디렉토리 구조를 세분화하고, 공통 컴포넌트를 설계할 수 있습니다."
    ]
  },
  {
    name: "TypeScript",
    annotation: "with JavaScript",
    star: 2,
    descriptions: [
      "컴포넌트의 Props와 인터페이스를 명시적으로 정의할 수 있습니다.",
      "타입 정의 파일을 활용하여 외부 라이브러리와의 호환성을 높일 수 있습니다."
    ]
  },
  {
    name: "Tanstack Query",
    annotation: "",
    star: 2,
    descriptions: [
      "API 호출 시 캐싱을 이용해 불필요한 네트워크 요청을 줄였습니다.",
      "낙관적 업데이트로 사용자 경험을 향상시킬 수 있습니다."
    ]
  },
]

const StackMain = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-12">
      <hr className="border-pf-gray-100" />
      <div>
        {mainStacks.map((stack, index) => (
          <div key={index} className="flex flex-col gap-3 md:gap-12 pb-3 md:pb-12">
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <div className="flex justify-between md:flex-col md:gap-3 md:justify-normal md:w-48 md:shrink-0">
                <div className="flex flex-col">
                  <p className="text-base md:text-xl font-bold text-pf-black">{stack.name}</p>
                  <p className="text-xs text-pf-gray-100">{stack.annotation}</p>
                </div>
                <BasicStar cnt={stack.star} />
              </div>
              <ul className="flex flex-col gap-1 md:w-1/2 md:shrink-0">
                {stack.descriptions.map((desc, i) => (
                  <li key={i} className="relative text-sm md:text-sm text-pf-gray-300 pl-1">
                    <span className="absolute -left-1 top-2.25 w-1 h-1 rounded-full bg-teal-400" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-pf-gray-100"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackMain