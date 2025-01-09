import { FaMapMarkerAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuRepeat } from "react-icons/lu";

const CarTopInfo = () => {
    return (
        <div className="w-full pb-4 mt-16 border-b border-gray-200">
            <div className="flex md:flex-row flex-col justify-between">
                <div className="space-y-6">
                    <div className="flex items-center gap-6">
                        <span className="bg-red-700 text-white text-sm px-3 rounded-full">-34%</span>

                        <div className="flex items-center space-x-4 text-gray-600">
                            <span>
                                <span className="text-gray-900 font-medium">Make:</span> Toyota
                            </span>
                            <span>
                                <span className="text-gray-900 font-medium">Model:</span> XC60
                            </span>
                            <span>
                                <span className="text-gray-900 font-medium">Body:</span> Sedan
                            </span>
                        </div>
                    </div>

                    <h2 className="mt-4 text-4xl font-semibold text-gray-900">Chevrolet Suburban 2021</h2>
                </div>


                <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-red-500">
                        <button className="flex items-center space-x-1">
                            <CiHeart size={20} />
                            <span className="text-black uppercase">Favorite</span>
                        </button>
                        <button className="flex items-center space-x-1">
                            <LuRepeat size={20} />
                            <span className="text-black uppercase">Compare</span>
                        </button>
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
                        <span className="text-2xl font-semibold text-gray-900">$46,000</span>
                        <span className="text-gray-400 line-through">$48,000</span>
                    </div>
                </div>

            </div>

            <div className="flex items-center text-gray-600 mt-4">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                <span>Boston, MA, United States</span>
            </div>
        </div>
    );
};

export default CarTopInfo;
