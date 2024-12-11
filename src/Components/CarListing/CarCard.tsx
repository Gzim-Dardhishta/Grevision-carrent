import { FaHeart, FaGasPump, FaTachometerAlt, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarCard = ({ viewType = "card" }) => {
    return (
        <>
            {viewType === "card" ? (
                <div className="max-w-sm bg-white rounded-lg overflow-hidden border">
                    {/* Card View */}
                    <div className="relative">
                        <img
                            className="w-full h-48 object-cover"
                            src="https://via.placeholder.com/400x200" // Replace with actual image URL
                            alt="Car"
                        />
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                            <FaHeart className="text-red-500" />
                        </button>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-900">Mercedez benz - c class</h2>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 text-lg">★★★★★</span>
                            <span className="text-gray-600 ml-2 text-sm">(2 Reviews)</span>
                        </div>
                        <div className="flex justify-between mt-4 text-gray-700">
                            <div className="flex items-center gap-2">
                                <FaGasPump />
                                <span>Petrol</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaTachometerAlt />
                                <span>90 k.m</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCogs />
                                <span>Auto</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400 line-through">$489</p>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-gray-900">$399</p>
                                <Link
                                    to="/car-details"
                                    className="text-red-600 font-semibold hover:underline flex items-center"
                                >
                                    View Details <span className="ml-1">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex bg-white rounded-lg overflow-hidden border p-4">
                    {/* List View */}
                    <div className="relative flex-shrink-0 w-48">
                        <img
                            className="w-full h-full object-cover rounded"
                            src="https://via.placeholder.com/400x200" // Replace with actual image URL
                            alt="Car"
                        />
                        <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-2 py-1 rounded">Featured</span>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="text-xl font-semibold text-gray-900">Mercedez benz - c class</h2>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 text-lg">★★★★★</span>
                            <span className="text-gray-600 ml-2 text-sm">(2 Reviews)</span>
                        </div>
                        <div className="flex mt-4 text-gray-700">
                            <div className="flex items-center gap-2 mr-8">
                                <FaGasPump />
                                <span className="text-sm">Fuel type</span>
                                <span>Petrol</span>
                            </div>
                            <div className="flex items-center gap-2 mr-8">
                                <FaTachometerAlt />
                                <span className="text-sm">Mileage</span>
                                <span>90 k.m</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCogs />
                                <span className="text-sm">Transmission</span>
                                <span>Auto</span>
                            </div>
                        </div>
                        <div className="flex mt-4 space-x-4">
                            <button className="flex items-center gap-2 px-4 py-2 border rounded text-gray-700">
                                <FaHeart />
                                Favorite
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 border rounded text-gray-700">
                                Compare
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                        <div className="text-gray-400 line-through text-sm">$489</div>
                        <div className="text-2xl font-bold text-gray-900">$399</div>
                        <Link
                            to="/car-details"
                            className="mt-2 px-4 py-2 border text-red-600 font-semibold rounded hover:bg-red-100"
                        >
                            View Details &rarr;
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarCard;
