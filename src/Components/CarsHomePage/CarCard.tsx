
import { FaGasPump, FaRoad, FaCogs } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';
import { AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai';
import { GrSync } from "react-icons/gr";
import { FC } from 'react';

export interface Car {
    id: number;
    title: string;
    description: string;
    price: string;
    year: number;
    fuelType: string;
    mileage: string;
    transmission: string;
    imagesCount: number;
    featured: boolean;
    imageUrl: string;
}

interface CarCardProps {
    car: Car;
}


const CarCard: FC<CarCardProps> = ({ car }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg relative bg-white">
            {car.featured && (
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs uppercase rounded">
                    Featured
                </div>
            )}

            <div className="absolute top-2 right-2 flex space-x-1">
                <div className="flex items-center bg-white text-gray-800 px-2 py-1 rounded text-xs shadow">
                    <FiCamera className="mr-1" />
                    {car.imagesCount}
                </div>
                <div className="bg-red-600 text-white px-2 py-1 text-xs rounded">
                    {car.year}
                </div>
            </div>

            <img
                src={car.imageUrl}
                alt={car.title}
                className="w-full h-72 object-cover"
            />

            <div className="p-6">
                <p className="text-red-600 text-sm font-normal mb-1">
                    {car.description}
                </p>
                <h2 className="text-xl font-semibold my-2">{car.title}</h2>
                <div className="text-red-600 text-xlg font-semibold">{car.price}</div>

                <div className="flex justify-between items-center mt-4 text-gray-600">
                    <div className="flex text-sm">
                        <FaGasPump className="mr-1 mt-1" />
                        <div className='flex flex-col'>
                            <span className='text-gray-400 font-medium xl:block hidden'>Fuel type</span>
                            <span className=" text-black">{car.fuelType}</span>
                        </div>
                    </div>
                    <div className="flex text-sm">
                        <FaRoad className="mr-1 mt-1" />
                        <div className='flex flex-col'>
                            <span className='text-gray-400 font-medium xl:block hidden'>Mileage</span>
                            <span className="text-black ">{car.mileage}</span>
                        </div>
                    </div>
                    <div className="flex text-sm">
                        <FaCogs className="mr-1 mt-1" />
                        <div className='flex flex-col'>
                            <span className='text-gray-400 font-medium xl:block hidden'>Transmission</span>
                            <span className="text-black">{car.transmission}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-6 py-4 border-t flex justify-between items-center text-sm text-gray-600">
                <button className="flex items-center text-gray-700 hover:text-red-700 font-medium">
                    VIEW DETAILS <AiOutlineArrowRight className="ml-1" />
                </button>
                <div className="flex space-x-4 text-gray-500">
                    <div className='p-3 rounded bg-gray-200 cursor-pointer'>
                        <GrSync className="w-5 h-5 hover:text-red-600" />
                    </div>
                    <div className='p-3 rounded bg-gray-200 cursor-pointer'>
                        <AiOutlineHeart className="w-5 h-5 hover:text-red-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
