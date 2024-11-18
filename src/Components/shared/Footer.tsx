import TopFooter from "./TopFooter"
import logo from '../../assets/logo2.png'
import { MdLocationPin } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { footerLinks } from "@/data/Lists";
import { Link } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import { Checkbox } from "../ui/checkbox";
import BottomFooter from "./BottomFooter";
import car1 from '../../assets/ft-left.png'
import car2 from '../../assets/ft-right.png'

const Footer = () => {
    return (
        <div className="bg-black text-white lg:px-20 px-10 mt-20 relative overflow-hidden">

            <TopFooter />

            <div className="flex lg:flex-row flex-col justify-between mt-14 pb-10">
                <div className="lg:w-1/4 md:w-1/2 lgLmb-0 mb-10 space-y-5">
                    <div><img src={logo} alt="" /></div>

                    <div>
                        The world’s first and largest digital market for crypto collectibles and non-fungible (NFTs). Buy
                    </div>
                    <div className="text-lg">
                        <div className="flex items-center gap-2"><MdLocationPin className="text-red-600" /> 14 New South Head Rd,Triple 3148London, UK</div>
                        <div className="flex items-center gap-3"><IoMail className="text-red-600" />  needhelp@company.com</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black text-white">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold mb-4">{section.category}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, idx) => (
                                    <li key={idx} className="group text-lg">
                                        <Link
                                            to={link.url}
                                            className="relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-100 after:transition-all after:duration-300 group-hover:after:w-full"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="md:w-1/4">
                    <h3>Newsletter</h3>

                    <div className="flex items-center border-b">
                        <input className="bg-inherit py-5 placeholder-gray-400 focus:outline-none w-full" placeholder="Enter Email Address" />
                        <FaRegPaperPlane size={24} />
                    </div>


                    <div className="flex items-center space-x-2 mt-6">
                        <Checkbox id="terms" className="border-white" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I agree to all your terms and policies
                        </label>
                    </div>
                </div>
            </div>

            <BottomFooter />

            <div className="w-96 absolute -bottom-6 -left-56 xl:block hidden"><img src={car1} alt="" /></div>
            <div className="w-96 absolute -bottom-6 -right-56 xl:block hidden"><img src={car2} alt="" /></div>
        </div>
    )
}

export default Footer