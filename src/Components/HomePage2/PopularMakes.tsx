import { popularMakes } from '@/data/Lists'
import CarCard from '../CarsHomePage/CarCard'
import { useState } from 'react';

const PopularMakes = () => {

    const [activeButton, setActiveButton] = useState('');

    const carMakes = ["Cadillac", "Audi", "Bmw", "Mercedez", "Haundai"];

    return (
        <div className='max-w-7xl xl:px-0 px-5 mx-auto mt-24'>

            <div className="flex lg:flex-row flex-col justify-between items-center text-center bg-white lg:mb-0 mb-12">

                <div className='lg:my-12'>
                    <div className="text-center lg:text-left mx-auto py-10 md:pb-0 pb-10">
                        <div className='border-b-2 text-lg border-dotted border-red-700 w-fit'>20% OFF FOR ONLINE BOOKING</div>
                        <div className="text-5xl font-semibold">Popular Makes by</div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {carMakes.map((make, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveButton(make)}
                            className={`px-5 text-sm py-2 rounded-md shadow-sm border ${activeButton === make
                                ? "bg-red-700 text-white"
                                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {make}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularMakes.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>

            <div className='w-fit mx-auto my-10'>
                <button className='bg-red-700 p-5 rounded-lg text-white hover:bg-[#1d1c1c] duration-300 ease-in px-10 text-lg'>More Listing</button>
            </div>
        </div>
    )
}

export default PopularMakes