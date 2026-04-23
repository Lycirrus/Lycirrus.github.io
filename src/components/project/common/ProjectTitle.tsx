interface TitleProps {
  logo: string;
  stacks: string[];
  title: string;
  description: string;
  outlines: string[];
  details: string[];
  imageUrl: string;
  color: string;
}

const ProjectTitle = ({ logo, stacks, title, description, outlines, details, imageUrl, color }: TitleProps) => {
  return (
    <div className="h-full flex items-center pb-12">
      <div className="w-1/2 shrink-0">
        <div className="flex gap-3 md:gap-6">
          <img src={logo} alt="project logo" className="w-28 h-28 object-center" />
          <div className="flex flex-col gap-1 justify-center">
            {stacks.map((s, i) => (
              <div key={i} className={`${color} text-pf-white px-5 pb-1 w-fit font-semibold text-base md:text-lg`}>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-1">
          <p className="font-bold text-5xl pt-3">{title}</p>
          <p className="text-xs md:text-sm text-pf-gray-300">{description}</p>
        </div>
        <div>
          <div className="pt-6 font-semibold">| 프로젝트 개요</div>
          {outlines.map((outline, i) => (
            <div key={i} className="pl-1 pb-1">
              {outline}
            </div>
          ))}
          <div className="flex flex-col pt-3 gap-1 md:pt-6">
            {details.map((detail, i) => (
              <div key={i} className="text-xs md:text-sm text-pf-gray-300">
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src={imageUrl} alt="project image" className="w-full h-full object-center" />
      </div>
    </div>
  )
}

export default ProjectTitle