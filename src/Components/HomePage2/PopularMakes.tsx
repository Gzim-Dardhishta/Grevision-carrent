import { popularMakes } from '@/data/Lists'
import CarCard from '../CarsHomePage/CarCard'
import { Button } from '../ui/button'
import { useState } from 'react';

const PopularMakes = () => {

    const [activeButton, setActiveButton] = useState('');

    const carMakes = ["Cadillac", "Audi", "Bmw", "Mercedez", "Haundai"];

    return (
        <div className='lg:px-20 px-10 mt-24'>
            <div className='my-20'>
                <div className="text-center mx-auto py-10 md:pb-0 pb-10">
                    <div className='border-b-2 text-lg border-dotted border-red-700 w-fit mx-auto'>20% OFF FOR ONLINE BOOKING</div>
                    <div className="text-5xl font-semibold">Popular Makes by</div>
                </div>
            </div>

            <div className="text-center pb-10 bg-white">

                <div className="flex flex-wrap justify-center gap-4">
                    {carMakes.map((make, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveButton(make)}
                            className={`px-6 py-2 rounded-lg shadow-sm border ${activeButton === make
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
                <Button className='py-7 px-12 md:text-lg bg-red-700'>More Listing</Button>
            </div>
        </div>
    )
}

export default PopularMakes