// ─── 타입 정의 ───────────────────────────────────────────
interface TroubleItem {
  type: "trouble"
  title: string
  problem: string
  solution: string
}

interface DecisionItem {
  type: "decision" | "retrospect"
  title: string
  description: string
}

export type TSItem = TroubleItem | DecisionItem

interface ProjectTSProps {
  title: string
  textColor: string
  bgColor: string
  items: TSItem[]
}

// ─── 배지 라벨 ───────────────────────────────────────────
const BADGE: Record<TSItem["type"], string> = {
  trouble:    "트러블슈팅",
  decision:   "기술적 의사결정",
  retrospect: "회고",
}

// ─── 컴포넌트 ────────────────────────────────────────────
const ProjectTS = ({ title, textColor, bgColor, items = [] }: ProjectTSProps) => {
  // 2열 그리드: 아이템이 홀수면 마지막 카드가 full-width
  const isOdd = items.length % 2 !== 0

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className={`text-sm md:text-base tracking-widest ${textColor}`}>{title}</p>
        <p className="font-semibold text-lg md:text-xl">트러블슈팅 & 회고</p>
      </div>

      <div className="flex-1 flex flex-col justify-center -mt-[30px] pb-12">
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <div
                key={i}
                className={`flex flex-col gap-3 bg-pf-white rounded-xl p-5 border border-pf-gray-100
                  ${isOdd && isLast ? "col-span-2" : ""}`}
              >
                {/* 배지 */}
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit
                  ${item.type === "trouble" ? "bg-red-50 text-red-400" :
                    item.type === "decision" ? `bg-opacity-10 ${bgColor.replace("bg-", "bg-")}/10 ${textColor}` :
                    "bg-pf-gray-100/40 text-pf-gray-200"}`}
                  style={item.type === "decision" ? {} : {}}
                >
                  {BADGE[item.type]}
                </span>

                {/* 제목 */}
                <p className="font-semibold text-sm md:text-base text-pf-black leading-snug">
                  {item.title}
                </p>

                {/* 내용 */}
                {item.type === "trouble" ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-start">
                      <span className="text-xs text-red-400 font-medium flex-shrink-0 mt-0.5">문제</span>
                      <p className="text-xs md:text-sm text-pf-gray-300 leading-relaxed">{item.problem}</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className={`text-xs font-medium flex-shrink-0 mt-0.5 ${textColor}`}>대안</span>
                      <p className="text-xs md:text-sm text-pf-gray-300 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs md:text-sm text-pf-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectTS