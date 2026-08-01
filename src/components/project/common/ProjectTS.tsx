import type { TSItem } from "../../data/tsData"

interface ProjectTSProps {
  title: string
  textColor: string
  item: TSItem
  listLength: number
  index: number
}

const ProjectTS = ({ title, textColor, item, listLength, index }: ProjectTSProps) => {
  return (
    <div className="h-full flex flex-col gap-6 md:mb-10 relative">
      <div className="flex flex-col gap-3">
        <p className={`text-sm md:text-base tracking-widest ${textColor}`}>{title}</p>
        <p className="font-semibold text-lg md:text-xl dark:text-pf-white">트러블슈팅</p>
      </div>

      <div className="absolute flex flex-col gap-1 top-30 -left-1">
        {Array.from({ length: listLength }, (_, i) => (
          <div key={i} className={`w-1.5 h-10 bg-black`}></div>
        ))}
      </div>

      <div className="flex-1 flex flex-col mt-8 pb-12">
        <div className="flex flex-col gap-4">
          {/* 제목 */}
          <p className="font-semibold text-sm md:text-base text-pf-black dark:text-pf-white leading-snug">
            {item.title}
          </p>
          {/* 내용 */}
          <div
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-3 bg-pf-white dark:bg-pf-black rounded-xl p-5 border border-pf-gray-100 dark:border-pf-gray-300">
              {item.image}
            </div>
            <div>
              <p>문제 확인</p>
              <ul>
                {item.problem.map((problem, i) => (
                  <li key={i} className="text-sm md:text-base text-pf-black dark:text-pf-white leading-snug">
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p>해결 과정</p>
              <ul>
                {item.solution.map((solution, i) => (
                  <li key={i} className="text-sm md:text-base text-pf-black dark:text-pf-white leading-snug">
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p>결과</p>
              <ul>
                {item.result.map((result, i) => (
                  <li key={i} className="text-sm md:text-base text-pf-black dark:text-pf-white leading-snug">
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