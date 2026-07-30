import Navbar from "../components/navigator/Navbar";
import Navigator from "../components/navigator/Navigator";
import NavCover from "../components/navigator/NavCover";
import MainScreen from "../components/main/MainScreen"
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
      {isOpen && <NavCover onClose={handleMenuClick} />}
      <MainScreen />
      <ProjectA />
      <ProjectB />
      <ProjectC />
    </div>
  )
}
