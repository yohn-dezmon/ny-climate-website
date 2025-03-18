import { useState } from "react";
import { GiHamburger } from "react-icons/gi";
import './HamburgerMenu.css';


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const listItemStyle = "px-4 py-2 hover:bg-gray-100 cursor-pointer";

    return (
        <div className="relative">
            <div className="cursor-pointer p-2 rounded group" onClick={() => setIsOpen(!isOpen)}>
                <GiHamburger size={24} className="hamburger-icon"/>
            </div>


            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 shadow-lg border rounded-lg z-50">
                    <ul className="py-2">
                    <li className={listItemStyle}>climate impacts</li>
                    <li className={listItemStyle}>climate action </li>
                    <li className={listItemStyle}>news</li>
                    <li className={listItemStyle}>data</li>
                    </ul>
            </div>
            )}
        </div>
    );
}

export default HamburgerMenu;
