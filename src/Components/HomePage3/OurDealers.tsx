import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const OurDealers = () => {
    return (
        <div className="w-full lg:px-20 px-10 mt-32">
            <div className="flex items-center justify-between mb-10">
                <div className="text-5xl font-semibold pl-2 border-l-2 border-red-700">Our Dealers</div>
                <div className="text-lg text-red-700 cursor-pointer uppercase">More Members</div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center gap-10 w-full">
                {Array(4).fill(null).map((index) => (
                    <div className="flex flex-col items-center justify-center w-full" key={index}>
                        <div className="relative group w-full">
                            <div className=" h-96 bg-gray-100 z-50"></div>
                            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100">
                                <div className="animate-bounce flex items-center justify-center h-12 w-12 bg-white rounded-full shadow-lg">
                                    <GoArrowUpRight />
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-lg font-semibold">Cameron Williamson</p>
                        <p className="my-3">Digital Marketer</p>

                        <div className="flex items-center gap-4 text-lg text-gray-400 group">
                            <FaFacebookF className="hover:text-red-700 cursor-pointer" />
                            <FaTwitter className="hover:text-red-700 cursor-pointer" />
                            <FaYoutube className="hover:text-red-700 cursor-pointer" />
                            <FaInstagram className="hover:text-red-700 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurDealers