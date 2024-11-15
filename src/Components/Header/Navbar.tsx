import { NavLinks } from '@/data/Lists'
import logo from '../../assets/logo2@.png'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card"
import { Link } from 'react-router-dom'
import { Button } from "../ui/button"
import { FiPlusCircle } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-white xl:mx-20 mx-10 p-5 rounded-b-xl shadow'>
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
                <div className=''>
                    <Link to={''} className='hover:text-red-700'>Register /  </Link>
                    <Link to={''} className='hover:text-red-700'>Log In</Link>
                </div>
                <Link to={'/'}>
                    <Button className='p-6 hover:bg-red-700'>Listing yours <FiPlusCircle /></Button>
                </Link>
            </div>

            <div className='lg:hidden block cursor-pointer'>
                <FiMenu size={30} />
            </div>

        </div>
    )
}

export default Navbar