import type { SubStack } from "../data/stackData"

const StackSub = ({ subStacks }: { subStacks: SubStack[] }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-6">
      <p className="text-sm text-pf-gray-300 dark:text-pf-gray-100">S U B</p>
      <hr className="border-pf-gray-100 dark:border-pf-gray-300" />
      <div>
        {subStacks.map((stack, index) => (
          <div key={index} className="flex flex-col gap-3 md:gap-6 pb-3 md:pb-6">
            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
              <p className="text-sm shrink-0 md:text-base font-semibold text-pf-black dark:text-pf-white">{stack.name}</p>
              <div className="relative flex md:w-1/2 md:shrink-0">
                <span className="absolute -left-1 top-2.25 w-1 h-1 rounded-full bg-teal-400" />
                <p className="text-sm pl-1 text-pf-gray-300 dark:text-pf-gray-100">{stack.description}</p>
              </div>
            </div>
            <hr className="border-pf-gray-100 dark:border-pf-gray-300"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackSub