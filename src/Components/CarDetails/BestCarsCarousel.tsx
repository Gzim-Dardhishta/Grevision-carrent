
import { bestcars } from "@/data/Lists";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CiHeart } from "react-icons/ci";
import { FaGasPump } from "react-icons/fa6";
import { MdOutlineSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";

const BestCarsCarousel = () => {
    return (
        <div className="w-full py-6">
            <Carousel>
                <CarouselContent className="">
                    {bestcars.map((car) => (
                        <CarouselItem key={car.id} className="md:basis-1/3 sm:basis-1/2 lg:basis-1/4 py-3">
                            <div className="bg-white rounded-lg border overflow-hidden">
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={car.image}
                                        alt={car.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <button className="absolute top-3 right-3 bg-white hover:bg-red-700 duration-300 ease-in-out p-2 hover:text-white rounded-full shadow-md">
                                        <CiHeart />
                                    </button>
                                </div>

                                {/* Details */}
                                <div className="p-4">
                                    <h3 className="text-lg my-2 font-semibold text-gray-800">
                                        {car.title}
                                    </h3>
                                    <div className="flex items-center text-yellow-500 space-x-1">
                                        {"⭐".repeat(car.rating)}
                                        <span className="text-gray-500 text-sm">({car.reviews} Reviews)</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                                        <div className="flex flex-col items-center space-x-1">
                                            <FaGasPump size={18} />
                                            <span>{car.fuel}</span>
                                        </div>
                                        <div className="flex flex-col  items-center space-x-1">
                                            <MdOutlineSpeed size={20} />
                                            <span>{car.distance}</span>
                                        </div>
                                        <div className="flex flex-col items-center space-x-1">
                                            <GiGearStickPattern size={18} />
                                            <span>{car.transmission}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-4 border-t">
                                        <div className="flex flex-col">
                                            <span className="line-through text-gray-400 text-sm">${car.oldPrice}</span>
                                            <span className="text-red-500 text-lg font-medium">
                                                ${car.price}
                                            </span>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-red-500 font-medium hover:underline"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default BestCarsCarousel