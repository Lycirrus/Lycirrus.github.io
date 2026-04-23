import BasicCard from "../common/BasicCard"

const langs = [
  { name: "TOEIC", score: "725", date: "2024.05" },
  { name: "OPIC", score: "IM1", date: "2026.03" },
]

const ExpLanguage = () => {
  return (
    <div className="flex flex-1 flex-col gap-3 career-card">
      <p className="font-bold text-lg md:text-xl text-pf-black">Language Skills</p>
      <div>
        <BasicCard color="emerald">
          {langs.map((lang, i) => (
            <div key={i} className="flex flex-col gap-3 min-w-0">
              <div>
                <p className="text-sm md:text-base font-semibold text-pf-gray-300">{lang.name} - {lang.score}</p>
                <p className="text-xs md:text-sm text-pf-gray-200">{lang.date}</p>
              </div>
              {i !== langs.length - 1 && <hr className="border-dashed border-pf-gray-100" />}
            </div>
          ))}
        </BasicCard>
      </div>
    </div>
  )
}

export default ExpLanguage