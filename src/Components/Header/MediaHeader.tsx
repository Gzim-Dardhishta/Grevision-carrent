import { FaPhoneVolume } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa"


const MediaHeader = () => {
    return (
        <div className="bg-red-700 text-white md:flex items-center justify-between px-20 py-2 hidden">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <FaPhoneVolume />   +1 800 123 456 789
                </div>
                <div className="flex items-center gap-2">
                    <FiMail />   Mail Us: your_protect@mail.com
                </div>
            </div>

            <div className="flex items-center gap-4">
                <FaFacebookF className="cursor-pointer hover:text-black" />
                <FaTwitter className="cursor-pointer hover:text-black" />
                <FaPinterestP className="cursor-pointer hover:text-black" />
            </div>
        </div>
    )
}

export default MediaHeader