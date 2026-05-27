import { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const onClickDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`fixed right-4 top-4 w-16 md:w-22 h-8 flex justify-center z-1 rounded-full border-2 border-pf-gray-200 ${darkMode ? "bg-pf-gray-300" : "bg-pf-white"}`}>
            <div className="flex w-full justify-between items-center px-1 md:px-3">
                <button className="w-1/2 flex justify-center" onClick={onClickDarkMode}>
                    {darkMode ? <IoSunny className="fill-pf-white" /> : <IoMoon className="fill-pf-gray-300" />}
                </button>
                <button className="w-1/2 flex justify-center">
                    {isOpen ? <IoClose className="fill-pf-gray-300" /> : <IoMenu className="fill-pf-gray-300" />}
                </button>
            </div>
        </div>
    )
}

export default Navbar