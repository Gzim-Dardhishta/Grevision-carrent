import { carListing } from "@/data/Lists"
import CarCard from "./CarCard"
import Filters from "./Filters"
import ViewFilters from "./ViewFilters"
import { useState } from "react"

const CarList = () => {
    const [viewType, setViewType] = useState('list')
    return (
        <div className="max-w-7xl xl:mx-auto mx-5 lg:grid lg:grid-cols-4 gap-6 mt-20">
            <div className="lg:col-span-1 border p-6">
                <Filters />
            </div>

            <div className="col-span-3">
                <ViewFilters setViewMode={setViewType} />
                <div className={viewType === "card" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
                    {carListing.map((car) => (
                        <CarCard
                            key={car.id}
                            viewType={viewType}
                            car={car}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarList