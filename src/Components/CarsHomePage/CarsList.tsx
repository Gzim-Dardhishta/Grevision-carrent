import { cars } from "@/data/Lists";
import { Button } from "../ui/button"
import { useState } from "react";
import CarCard from "./CarCard";


const CarsList = () => {
    const [selected, setSelected] = useState('All Status');

    const tabs = [
        { label: 'All Status', value: 'All Status' },
        { label: 'New Cars', value: 'New Cars' },
        { label: 'Used Cars', value: 'Used Cars' }
    ];


    return (
        <div className="py-20 md:px-20 px-10">

            <div className="mb-10 flex md:flex-row flex-col justify-between md:items-center">
                <div className="md:mb-0 mb-8">
                    <h4 className="uppercase text-red-700 underline font-medium text-lg">Trusted Car DeAler Service</h4>

                    <h2 className="md:text-5xl text-4xl font-semibold">Explore all Vehicles</h2>
                </div>

                <div className="flex">
                    {tabs.map((tab) => (
                        <Button
                            key={tab.value}
                            onClick={() => setSelected(tab.value)}
                            className={`relative px-4 py-2 rounded-md font-semibold hover:bg-red-600 hover:text-white ${selected === tab.value
                                ? 'bg-red-600 text-white'
                                : 'bg-white text-black'
                                }`}
                        >
                            {tab.label}
                            {selected === tab.value && (
                                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-600"></span>
                            )}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    )
}

export default CarsList