import { useState, useEffect } from "react";
import { GiHamburger } from "react-icons/gi";
import { Link, useNavigate  } from 'react-router-dom';
import './HamburgerMenu.css';


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    // const location = useLocation();
    const navigate = useNavigate()

    const listItemStyle = "text-[10px] px-4 py-2 hover:bg-gray-100 cursor-pointer";

    const listItems = [
        {'title': 'energy & emissions', 'path': 'energy'},
        {'title': 'legislation', 'path': 'legislation'},
        // {'title': 'climate impacts', 'path': 'impacts'},
        {'title': 'climate action', 'path': 'action'},
        // {'title': 'news', 'path': 'news'},
        // {'title': 'data', 'path': 'data'}
    ]

    // useEffect(() => {
    //     setIsOpen(false); // Close menu when route changes
    // }, [location.pathname]);

    const handleClick = (path) => {
        console.log("got here!");
        setIsOpen(false);
        navigate(path)
    }
    
    const renderedListItems = listItems.map((item) => {
        return(
            <li key={item.path} className={listItemStyle} onClick={() => handleClick(`/${item.path}`)}>
                {item.title}
            </li>
        )
    });

    return (
        <div className="relative">
            <div className="cursor-pointer p-2 rounded group" onClick={() => setIsOpen(!isOpen)}>
                <GiHamburger size={19} className="hamburger-icon"/>
            </div>


            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-28 shadow-lg border rounded-lg z-50 bg-white">
                    <ul className="py-2">
                        {renderedListItems}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HamburgerMenu;
