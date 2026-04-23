const DownArrow = () => {
  return (
    <div className="relative left-1/2 w-[7%] max-w-16 top-3/5 -translate-x-1/2">
      <div className="animate-down-arrow">
        <div className="w-full aspect-3/2 bg-pf-gray-100 [clip-path:polygon(0_0,50%_100%,100%_0)]"></div>
      </div>
    </div>
  )
}

export default DownArrow 