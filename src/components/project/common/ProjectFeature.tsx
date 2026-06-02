interface Feature {
  feature: string;
  description: string;
}
interface ProjectFeatureProps {
  title: string;
  color: string;
  features: Feature[]
}

const ProjectFeature = ({ title, color, features }: ProjectFeatureProps) => {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className={`text-sm md:text-base tracking-widest ${color}`}>{title}</p>
        <p className="font-semibold text-lg md:text-xl dark:text-pf-white">주요 기능</p>
      </div>
      <div className="flex-1 flex flex-col justify-center pb-12">
        <div className="grid grid-cols-2 gap-4 md:mb-48">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 bg-pf-white dark:bg-pf-black rounded-xl p-6 border border-pf-gray-100 dark:border-pf-gray-300"
            >
              <p className={`text-xs md:text-sm ${color}`}>0{index + 1}</p>
              <p className="font-semibold text-sm md:text-base text-pf-black dark:text-pf-white">
                {feature.feature}
              </p>
              <p className="text-xs md:text-sm text-pf-gray-300 dark:text-pf-gray-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectFeature