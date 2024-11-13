import { popularCars } from '@/data/Lists'
import { LuRepeat } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa6";
import { MdOutlineSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";

const PopularCarsList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-20 px-10">
            {popularCars.map((car) => (
                <div key={car.id} className="flex lg:flex-row flex-col border rounded-lg overflow-hidden shadow-lg">
                    <div className="relative lg:h-72 h-96 lg:w-2/5">
                        <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
                        {car.featured && (
                            <div className="absolute top-2 left-2 bg-red-700 text-white px-2 py-1 text-xs rounded">Featured</div>
                        )}
                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs rounded">{car.year}</div>
                    </div>
                    <div className="bg-[#09051f] p-8 lg:w-3/5 text-white flex flex-col justify-between">
                        <div>
                            <p className="text-sm text-red-700 font-medium">{car.model}</p>
                            <h3 className="text-lg font-bold">{car.name}</h3>
                            <div className="flex items-center justify-between lg:text-sm text-xs space-x-4 mt-2">
                                <span className='flex items-center gap-1'><FaGasPump className='mt-1' size={18} /><span className='flex flex-col'><strong className='xl:block hidden'>Fuel type:</strong> {car.fuelType}</span></span>
                                <span className='flex items-center gap-1'><MdOutlineSpeed className='mt-1' size={25} /><span className='flex flex-col'><strong className='xl:block hidden'>Mileage:</strong> {car.mileage}</span></span>
                                <span className='flex items-center gap-1'> <GiGearStickPattern className='mt-1' size={23} /><span className='flex flex-col'><strong className='xl:block hidden'>Transmission:</strong> {car.transmission}</span></span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <span className="text-2xl text-red-500">{car.price}</span>
                                <span className="text-gray-400 line-through ml-2">{car.originalPrice}</span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-3 bg-gray-700 rounded">
                                    <FaRegHeart size={20} />
                                </button>
                                <button className="p-3 bg-gray-700 rounded">
                                    <LuRepeat size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default PopularCarsList