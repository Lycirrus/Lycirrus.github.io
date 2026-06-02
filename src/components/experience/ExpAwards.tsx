import BasicCard from '../common/BasicCard'

const awards = [
  { name: "삼성 청년 SW/AI 아카데미 공통 프로젝트", date: "2025.02" },
  { name: "삼성 청년 SW/AI 아카데미 자율 프로젝트", date: "2025.05" },
]

const ExpAwards = () => {
  return (
    <div className="flex flex-col gap-3 career-card">
      <p className="font-bold text-lg md:text-xl text-pf-black dark:text-pf-white">Awards</p>
      <div data-wrap>
        <BasicCard color="green">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col gap-3 min-w-0">
              <div>
                <p className="text-sm md:text-base font-semibold text-pf-gray-300 dark:text-pf-white">{award.name}</p>
                <p className="text-xs md:text-sm text-pf-gray-200 dark:text-pf-gray-100">{award.date}</p>
              </div>
              {i !== awards.length - 1 && <hr className="border-dashed border-pf-gray-100 dark:border-pf-gray-300" />}
            </div>
          ))}
        </BasicCard>
      </div>
    </div>
  )
}

export default ExpAwards