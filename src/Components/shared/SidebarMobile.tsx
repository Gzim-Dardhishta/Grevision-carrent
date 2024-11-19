import { useState } from "react";
import {
    FaUser,
    FaSearch,
    FaExchangeAlt,
    FaShoppingCart
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/logo2@.png'

type DropdownKeys = 'home' | 'cars' | 'page' | 'news';

const SidebarMobile = ({
    openLogin
}: {
    openLogin: () => void
}) => {


    const [isDropdownOpen, setIsDropdownOpen] = useState({
        home: false,
        cars: false,
        page: false,
        news: false,
    });

    const toggleDropdown = (key: DropdownKeys) => {
        setIsDropdownOpen((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <div className="w-80 bg-white shadow-lg h-screen fixed top-0 left-0 z-50">
            <div className="flex items-center px-6 py-4 border-b">
                <img src={logo} alt="MotorX Logo" className="h-8 w-auto" />
            </div>

            <div className="px-6 py-4">
                <ul className="space-y-4 text-gray-700">
                    <li className="text-sm font-medium">
                        <div
                            className="flex items-center justify-between text-sm font-medium cursor-pointer"
                            onClick={() => toggleDropdown("home")}
                        >
                            <span>Home</span>

                            <IoIosArrowDown />

                        </div>

                        {isDropdownOpen.home && (
                            <ul className="px-6 py-3 bg-gray-100 rounded-lg space-y-2 text-sm text-gray-600">
                                <li className="cursor-pointer hover:text-red-600 duration-300 ease-in-out">Home Page 1</li>
                                <li className="cursor-pointer hover:text-red-600 duration-300 ease-in-out">Home Page 2</li>
                                <li className="cursor-pointer hover:text-red-600 duration-300 ease-in-out">Home Page 3</li>
                                <li className="cursor-pointer hover:text-red-600 duration-300 ease-in-out">Home Page 4</li>
                                <li className="cursor-pointer hover:text-red-600 duration-300 ease-in-out">Home Page 5</li>
                                <li className="cursor-pointer hover:text-red-600 duration-300 ease-in-out">Home Page 6</li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <div
                            className="flex items-center justify-between text-sm font-medium cursor-pointer"
                            onClick={() => toggleDropdown("cars")}
                        >
                            <span>Cars</span>
                        </div>
                    </li>

                    <li>
                        <div
                            className="flex items-center justify-between text-sm font-medium cursor-pointer"
                            onClick={() => toggleDropdown("page")}
                        >
                            <span>Page</span>
                        </div>
                    </li>

                    <li>
                        <div
                            className="flex items-center justify-between text-sm font-medium cursor-pointer"
                            onClick={() => toggleDropdown("news")}
                        >
                            <span>News</span>
                        </div>
                    </li>

                    <li className="flex items-center text-sm font-medium">
                        <span>Contact Us</span>
                    </li>
                </ul>
            </div>

            <div className="px-6 py-4 mt-auto">
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center cursor-pointer" onClick={openLogin}>
                        <FaUser className="text-red-500 mr-4" />
                        <span>Login</span>
                    </li>
                    <li className="flex items-center">
                        <FaSearch className="text-red-500 mr-4" />
                        <span>Search</span>
                    </li>
                    <li className="flex items-center">
                        <FaExchangeAlt className="text-red-500 mr-4" />
                        <span>Compare</span>
                    </li>
                    <li className="flex items-center">
                        <FaShoppingCart className="text-red-500 mr-4" />
                        <span>Cart</span>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default SidebarMobile;
