import Navbar from "../components/navigator/Navbar";
import Navigator from "../components/navigator/Navigator";
import MainScreen from "../components/main/MainScreen"
import StackScreen from "../components/stack/StackScreen"
import ExpScreen from "../components/experience/ExpScreen"
import ProjectA from "../components/project/projectA/ProjectA";
import ProjectB from "../components/project/projectB/ProjectB";
import ProjectC from "../components/project/projectC/ProjectC";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export function MainPage() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };
  
  return (
    <div className="w-full bg-pf-black">
      <Navbar isOpen={isOpen} handleMenuClick={handleMenuClick} />
      <Navigator isOpen={isOpen} />
      <MainScreen />
      <ExpScreen />
      <StackScreen />
      <ProjectA />
      <ProjectB />
      <ProjectC />
    </div>
  )
}
