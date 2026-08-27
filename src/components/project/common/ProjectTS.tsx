import type { TSItem } from "../../data/tsData"
import LightBox from "../../common/LightBox"

interface ProjectTSProps {
  title: string
  textColor: string
  bgColor: string
  item: TSItem
  listLength: number
  index: number
}

const ProjectTS = ({ title, textColor, bgColor, item, listLength, index }: ProjectTSProps) => {
  return (
    <div className="h-full flex flex-col gap-6 md:mb-10 relative">
      <div className="flex flex-col gap-3">
        <p className={`text-sm md:text-base tracking-widest ${textColor}`}>{title}</p>
        <p className="font-semibold text-lg md:text-xl dark:text-pf-white">트러블슈팅</p>
      </div>

      <div className="absolute flex flex-col gap-1 top-30 -left-5">
        {Array.from({ length: listLength }, (_, i) => (
          <div key={i} className={`w-1.5 h-10 ${i === index ? bgColor : 'bg-pf-gray-100'}`}></div>
        ))}
      </div>

      <div className="flex-1 flex flex-col mt-8 pb-12 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* 제목 */}
          <p className="font-semibold text-base text-pf-black dark:text-pf-white leading-snug">
            『 {item.title} 』
          </p>
          {/* 내용 */}
          <div
            className="flex flex-col gap-3 text-sm text-pf-black dark:text-pf-white"
          >
            <div className="flex w-9/10 justify-center">
              <LightBox src={item.image} alt={item.title} />
            </div>
            <div className="flex flex-col gap-3 pb-6">
              <p className="font-semibold">문제 원인</p>
              <ul>
                {item.problem.map((problem, i) => (
                  <li key={i} className="leading-snug">
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 pb-6">
              <p className="font-semibold">해결 과정</p>
              <ul>
                {item.solution.map((solution, i) => (
                  <li key={i} className="leading-snug">
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 pb-6">
              <p className="font-semibold">결과</p>
              <ul>
                {item.result.map((result, i) => (
                  <li key={i} className="leading-snug">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTS