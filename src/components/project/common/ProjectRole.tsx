interface RoleImage {
  src: string
  label: string
}

interface Role {
  role: string
  description: string
  images?: RoleImage[]
}

interface ProjectRoleProps {
  title: string
  textColor: string
  bgColor: string
  roles: Role[]
}

const ProjectRole = ({ title, textColor, bgColor, roles = [] }: ProjectRoleProps) => {
  const hasImages = roles.some((r) => r.images && r.images.length > 0)

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className={`text-sm md:text-base tracking-widest ${textColor}`}>{title}</p>
        <p className="font-semibold text-lg md:text-xl">담당 역할</p>
      </div>

      {/* flex-1 + min-h-0 — 남은 높이를 차지하되 넘치지 않음 */}
      <div className={`flex-1 min-h-0 grid gap-8 ${hasImages ? "grid-cols-[1fr_1.2fr]" : "grid-cols-1"} items-start pb-12`}>

        {/* 좌측 이미지 — h-full로 부모 높이에 맞춤 */}
        {hasImages && (
          <div className="h-full min-h-0 flex flex-col gap-5">
            {roles.map((r, ri) =>
              r.images && r.images.length > 0 ? (
                <div key={ri} className="flex-1 min-h-0 flex flex-col gap-1">
                  <div className={`flex-1 min-h-0 grid gap-2 ${
                    r.images.length === 1 ? "grid-cols-1" :
                    r.images.length === 2 ? "grid-cols-2" :
                    "grid-cols-3"
                  }`}>
                    {r.images.map((img, ii) => (
                      <img
                        key={ii}
                        src={img.src}
                        alt={img.label}
                        className="h-full w-full rounded-lg object-contain border border-pf-gray-100 min-h-0"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-pf-gray-200 flex-shrink-0">{r.images[0].label}</p>
                </div>
              ) : null
            )}
          </div>
        )}

        {/* 우측 역할 리스트 */}
        <div className="flex flex-col gap-6">
          {roles.map((r, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className={`inline-block w-[3px] h-[14px] rounded-full flex-shrink-0 ${bgColor}`} />
                <p className="font-semibold text-sm md:text-base text-pf-black">{r.role}</p>
              </div>
              <p className="text-xs md:text-sm text-pf-gray-300 leading-relaxed pl-[11px]">
                {r.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProjectRole