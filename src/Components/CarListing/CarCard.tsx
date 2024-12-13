import { FaGasPump, FaTachometerAlt, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
import { GrSync } from "react-icons/gr";

export interface Car {
    id: number;
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    fuelType: string;
    mileage: string;
    transmission: string;
    reviews: number;
    rating: number;
    featured?: boolean;
}

const CarCard = ({ viewType, car }: { viewType: string, car: Car }) => {
    return (
        <>
            {viewType === "card" ? (
                <div className="bg-white rounded-lg overflow-hidden border">
                    <div className="relative">
                        <img
                            className="w-full h-48 object-cover"
                            src={car.image}
                            alt={car.name}
                        />
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                            <CiHeart size={22} />
                        </button>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-900">{car.name}</h2>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 text-lg">
                                {"★".repeat(Math.floor(car.rating))}
                            </span>
                            <span className="text-gray-600 ml-2 text-sm">({car.reviews} Reviews)</span>
                        </div>
                        <div className="flex justify-between mt-4 text-gray-700">
                            <div className="flex flex-col items-center gap-2">
                                <FaGasPump />
                                <span>{car.fuelType}</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaTachometerAlt />
                                <span>{car.mileage}</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <FaCogs />
                                <span>{car.transmission}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400 line-through">${car.oldPrice}</p>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-medium text-gray-900">${car.price}</p>
                                <Link
                                    to="/car-details"
                                    className="text-red-600 font-medium hover:underline flex items-center"
                                >
                                    View Details <span className="ml-1"><FiArrowUpRight /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className="sm:grid sm:grid-cols-3 bg-white rounded-lg overflow-hidden border">
                        <div className="relative flex-shrink-0 w-full sm:col-span-1">
                        <img
                                className="w-full h-full object-cover"
                                src={car.image}
                                alt={car.name}
                        />
                            {car.featured && (
                                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-2 py-1 rounded">Featured</span>
                            )}
                    </div>
                        <div className="col-span-2 w-full p-4">
                            <div className=" pl-4">
                                <h2 className="text-lg font-medium text-gray-900">{car.name}</h2>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-500 text-lg">
                                        {"★".repeat(Math.floor(car.rating))}
                                    </span>
                                    <span className="text-gray-600 ml-2 text-sm">( {car.reviews} Reviews )</span>
                                </div>
                                <div className="flex justify-between mt-4 text-gray-700">
                                    <div className="flex gap-2 mr-8">
                                        <FaGasPump />
                                        <div className="flex lg:flex-row items-center flex-col">
                                            <span className="md:block hidden text-sm">Fuel type</span>
                                            <span>{car.fuelType}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mr-8">
                                        <FaTachometerAlt />
                                        <div className="flex lg:flex-row items-center flex-col">
                                            <span className="text-sm md:block hidden ">Mileage</span>
                                            <span>{car.mileage}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCogs />
                                        <div className="flex lg:flex-row items-center flex-col">
                                            <span className="text-sm md:block hidden">Transmission</span>
                                            <span>{car.transmission}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button className="flex items-center gap-2 px-2 py-1 rounded-3xl bg-gray-100">
                                        <CiHeart />
                                        Favorite
                                    </button>
                                    <button className="flex items-center gap-2 px-2 py-1 rounded-3xl bg-gray-100">
                                        <GrSync />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-end justify-between mt-3">
                                <div className="pl-4">
                                    <div className="text-gray-400 line-through font-medium">${car.oldPrice}</div>
                                    <div className="text-2xl font-medium text-gray-900">${car.price}</div>
                                </div>
                                <Link
                                    to="/car-details"
                                    className="mt-2 px-4 py-3 border border-red-700 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white duration-300 ease-in-out flex items-center gap-2"
                                >
                                    View Details <FiArrowUpRight />
                                </Link>
                            </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarCard;
