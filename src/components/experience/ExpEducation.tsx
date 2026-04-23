import BasicCard from "../common/BasicCard"

const edu = [
  { name: "인하대학교 공간정보공학과", period: "2017.02 ~ 2024.08 (졸업)" },
  { name: "삼성 청년 SW/AI 아카데미 12기 (SSAFY)", period: "2024.07 ~ 2025.06" },
]

const ExpEducation = () => {
  return (
    <div className="flex flex-2 flex-col gap-3 career-card">
      <p className="font-bold text-lg md:text-xl text-pf-black">Education</p>
      <div>
        <BasicCard color="blue">
          {edu.map((e, i) => (
            <div key={i} className="flex flex-col gap-3 min-w-0">
              <div>
                <p className="text-sm md:text-base font-semibold text-pf-gray-300">{e.name}</p>
                <p className="text-xs md:text-sm text-pf-gray-200">{e.period}</p>
              </div>
              {i !== edu.length - 1 && <hr className="border-dashed border-pf-gray-100" />}
            </div>
          ))}
        </BasicCard>
      </div>
    </div>
  )
}

export default ExpEducation