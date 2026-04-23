import MainScreen from "../components/main/MainScreen"
import StackScreen from "../components/stack/StackScreen"
import ExpScreen from "../components/experience/ExpScreen"
import ProjectA from "../components/project/projectA/ProjectA";
import ProjectB from "../components/project/projectB/ProjectB";
import ProjectC from "../components/project/projectC/ProjectC";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export function MainPage() {
  
  return (
    <div className="w-full bg-pf-black">
      <MainScreen />
      <ExpScreen />
      <StackScreen />
      <ProjectA />
      <ProjectB />
      <ProjectC />
    </div>
  )
}
