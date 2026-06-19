import { useScrollNav } from "../../hooks/useScrollNav";
import { navItems } from "../data/navData";

interface NavigatorProps {
    isOpen: boolean;
}

const Navigator = ({ isOpen }: NavigatorProps) => {
    const { scrollToSection } = useScrollNav();

    return (
        <div className={`fixed right-5 top-16 w-40 rounded-2xl border-2 border-pf-gray-200 dark:border-pf-gray-100 dark:bg-pf-black bg-pf-white p-2 shadow-lg
                transition-all duration-300 ease-out origin-top z-2
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
            <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-sm text-pf-gray-300 dark:text-pf-white px-3 py-2 rounded-xl hover:bg-pf-gray-200/30 dark:hover:bg-pf-gray-100/10 transition-colors"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Navigator