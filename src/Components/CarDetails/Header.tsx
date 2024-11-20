import { NavLinks } from '@/data/Lists'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@radix-ui/react-hover-card'
import { Link } from 'lucide-react'
import { useState } from 'react'
import { FiPlusCircle, FiMenu } from 'react-icons/fi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { LoginPopUp } from '../Login'
import { SidebarMobile } from '../shared'
import logo from '../../assets/logo2@.png'
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {

    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openLogin = () => {
        setIsSidebarOpen(false)
        setIsLoginOpen(true)
    }

    return (
        <div>
            <div className='flex items-center justify-between bg-white xl:mx-20 mx-6 p-5 rounded-b-xl'>
                <div>
                    <img src={logo} alt="" className='w-28' />
                </div>

                <div className='lg:flex hidden items-center lg:gap-8 gap-5'>
                    <HoverCard>
                        <HoverCardTrigger className="flex items-center gap-1 cursor-pointer group relative">
                            Home
                            <RiArrowDownSLine className="group-hover:rotate-180 group-hover:duration-300" />
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </HoverCardTrigger>
                        <HoverCardContent className='flex flex-col gap-3'>
                            {NavLinks.home?.map((h) => (
                                <Link to={h.path} className='hover:text-red-500'>{h.text}</Link>
                            ))}
                        </HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                        <HoverCardTrigger className="flex items-center gap-1 cursor-pointer group relative">
                            Cars
                            <RiArrowDownSLine className="group-hover:rotate-180 group-hover:duration-300" />
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </HoverCardTrigger>
                        <HoverCardContent className='flex flex-col gap-3'>
                            {NavLinks.cars?.map((h) => (
                                <Link to={h.path} className='hover:text-red-500'>{h.text}</Link>
                            ))}
                        </HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                        <HoverCardTrigger className="flex items-center gap-1 cursor-pointer group relative">
                            Pages
                            <RiArrowDownSLine className="group-hover:rotate-180 group-hover:duration-300" />
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </HoverCardTrigger>
                        <HoverCardContent className='flex flex-col gap-3'>
                            {NavLinks.page?.map((h) => (
                                <Link to={h.path} className='hover:text-red-500'>{h.text}</Link>
                            ))}
                        </HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                        <HoverCardTrigger className="flex items-center gap-1 cursor-pointer group relative">
                            News
                            <RiArrowDownSLine className="group-hover:rotate-180 group-hover:duration-300" />
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </HoverCardTrigger>
                        <HoverCardContent className='flex flex-col gap-3'>
                            {NavLinks.news?.map((h) => (
                                <Link to={h.path} className='hover:text-red-500'>{h.text}</Link>
                            ))}
                        </HoverCardContent>
                    </HoverCard>

                    <div className='relative'>
                        <Link to={'/'}>Contact Us</Link>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </div>
                </div>

                <div className='lg:flex hidden items-center gap-5'>
                    <div className='flex items-center'>
                        <Link to={''} className='hover:text-red-700'>Register /  </Link>
                        <div onClick={() => setIsLoginOpen(true)} className='hover:text-red-700 cursor-pointer'>Log In</div>
                    </div>
                    <Link to={'/'}>
                        <button className='py-4 px-7 hover:bg-red-700 rounded-lg hover:text-white flex items-center gap-2'>Listing yours <FiPlusCircle /></button>
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

            <div className='flex items-center gap-3 mx-12 text-sm font-medium border-b py-5'>
                <div className='text-red-600'>Home</div>
                <IoIosArrowForward />
                <div className='text-gray-500'> Property Listing</div>
            </div>
        </div>
    )
}

export default Header