import BasicCard from "../common/BasicCard"
import { useWindowSize } from "../../hooks/useWindowSize"

const certs = [
  { name: "정보처리기사", date: "2025.06" },
  { name: "SQLD", date: "2024.04" },
  { name: "ADsP", date: "2024.03" },
  { name: "빅데이터분석기사", date: "2025.12" },
  { name: "측량및지형공간정보기사", date: "2024.06" },
]

const ExpCertification = () => {
  const width = useWindowSize();
  const cols = width ? 3 : 2;
  const re = certs.length % cols;

  return (
    <div className="flex flex-col gap-3 career-card">
      <p className="font-bold text-lg md:text-xl text-pf-black">Certificate</p>
      <div data-wrap>
        <BasicCard color="violet">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {certs.map((cert, i) => (
              <div key={i} className="flex flex-col gap-3 min-w-0">
                <div>
                  <p className="text-sm md:text-base break-keep font-semibold text-pf-gray-300">{cert.name}</p>
                  <p className="text-xs md:text-sm text-pf-gray-200">{cert.date}</p>
                </div>
                { i < certs.length - re && <hr className="border-dashed border-pf-gray-100" />}
              </div>
            ))}
          </div>
        </BasicCard>
      </div>
    </div>
  )
}

export default ExpCertification