const ThreeCircles = () => {
  return (
    <div className="relative w-[15%] min-w-24 aspect-square left-[15%] top-[10%]">
      <div className="absolute w-full aspect-square rounded-full bg-pf-blue opacity-50"></div>
      <div className="absolute w-full aspect-square rounded-full bg-pf-pink top-[70%] opacity-50"></div>
      <div className="absolute w-full aspect-square rounded-full bg-pf-violet top-[140%] opacity-50"></div>
    </div>
  )
}

export default ThreeCircles