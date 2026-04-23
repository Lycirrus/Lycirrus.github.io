import ThreeCircles from "./decoration/ThreeCircles"
import DownArrow from "./decoration/DownArrow"

const MainScreen = () => {
  return (
    <div className="w-full h-dvh bg-pf-white">
      <div className="w-full h-full">
        <ThreeCircles />
        <DownArrow />
      </div>
    </div>
  )
}

export default MainScreen