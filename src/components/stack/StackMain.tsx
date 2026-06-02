import BasicStar from "../common/BasicStar"
import type { MainStack } from "../data/stackData"

const StackMain = ({ mainStacks }: { mainStacks: MainStack[] }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-12">
      <hr className="border-pf-gray-100 dark:border-pf-gray-300" />
      <div>
        {mainStacks.map((stack, index) => (
          <div key={index} className="flex flex-col gap-3 md:gap-12 pb-3 md:pb-12">
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <div className="flex justify-between md:flex-col md:gap-3 md:justify-normal md:w-48 md:shrink-0">
                <div className="flex flex-col">
                  <p className="text-base md:text-xl font-bold text-pf-black dark:text-pf-white">{stack.name}</p>
                  <p className="text-xs text-pf-gray-100 dark:text-pf-gray-300">{stack.annotation}</p>
                </div>
                <BasicStar cnt={stack.star} />
              </div>
              <ul className="flex flex-col gap-1 md:w-1/2 md:shrink-0">
                {stack.descriptions.map((desc, i) => (
                  <li key={i} className="relative text-sm md:text-sm text-pf-gray-300 dark:text-pf-gray-100 pl-1">
                    <span className="absolute -left-1 top-2.25 w-1 h-1 rounded-full bg-teal-400" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-pf-gray-100 dark:border-pf-gray-300"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackMain