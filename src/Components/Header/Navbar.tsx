import { NavLinks } from '@/data/Lists'
import logo from '../../assets/logo2@.png'
import { Link } from 'react-router-dom'
import { FiPlusCircle } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { FC, useState } from 'react'
import { LoginPopUp } from '../Login'
import { SidebarMobile } from '../shared';

type NavBarType = {
    className?: string
    btnClass?: string
}

const Navbar: FC<NavBarType> = ({ className, btnClass }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openLogin = () => {
        setIsSidebarOpen(false)
        setIsLoginOpen(true)
    }

    return (
        <div className={`flex items-center justify-between bg-white p-5 shadow ${className}`}>
            <Link to={'/'}>
                <img src={logo} alt="" className='w-28' />
            </Link>

            <div className='lg:flex hidden items-center lg:gap-8 gap-5'>

                <div className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer">
                        Home
                        <RiArrowDownSLine className="group-hover:rotate-180 transition-transform duration-300" />
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    <div className="absolute top-4 w-44 left-0 mt-2 p-4 bg-white shadow-lg rounded-md flex flex-col gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                        {NavLinks.home?.map((h) => (
                            <Link
                                to={h.path}
                                key={h.text}
                                className="hover:text-red-500"
                            >
                                {h.text}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='relative'>
                    <Link to={'/'}>Cars</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>

                <div className='relative'>
                    <Link to={'/'}>Pages</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>

                <div className='relative'>
                    <Link to={'/'}>News</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>

                <div className='relative'>
                    <Link to={'/'}>Contact Us</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
            </div>

            <div className='lg:flex hidden items-center gap-5'>
                <div className='flex items-center'>
                    <Link to={'/signup'} className='hover:text-red-700'>Register /  </Link>
                    <div onClick={() => setIsLoginOpen(true)} className='hover:text-red-700 cursor-pointer'>Log In</div>
                </div>
                <Link to={'/'}>
                    <button className={`py-4 px-7 hover:bg-red-700 rounded-lg hover:text-white flex items-center gap-2 ${btnClass}`}>Listing yours <FiPlusCircle /></button>
                </Link>
            </div>

            <div className='lg:hidden block cursor-pointer'>
                <FiMenu size={30} onClick={() => setIsSidebarOpen(true)} />
            </div>


            {isLoginOpen && (
                <LoginPopUp setIsOpen={setIsLoginOpen} />
            )}

            {isSidebarOpen && (
                <SidebarMobile openLogin={openLogin} />
            )}

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    )
}

export default Navbar