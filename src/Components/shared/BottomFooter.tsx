import { FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP } from "react-icons/fa";

const BottomFooter = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center lg:px-24 border-t py-8">
            <div>Made with ❤️ by Themesflat</div>

            <div className="flex space-x-4 justify-center items-center bg-black p-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-red-700 transition duration-300 cursor-pointer">
                    <FaFacebookF className="text-white text-xl" />
                </div>

                <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-red-700 transition duration-300 cursor-pointer">
                    <FaTwitter className="text-white text-xl" />
                </div>

                <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-red-700 transition duration-300 cursor-pointer">
                    <FaVimeoV className="text-white text-xl" />
                </div>

                <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-red-700 transition duration-300 cursor-pointer">
                    <FaPinterestP className="text-white text-xl" />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="text-lg hover:text-red-700 duration-300 ease-in-out cursor-pointer">Privacy & Policy</div>
                <div className="text-lg hover:text-red-700 duration-300 ease-in-out cursor-pointer">Licensing</div>
            </div>
        </div >
    )
}

export default BottomFooter