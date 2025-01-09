import { carListing } from "@/data/Lists"
import CarCard from "./CarCard"
import Filters from "./Filters"
import ViewFilters from "./ViewFilters"
import { useState } from "react"
import { CiGrid42 } from "react-icons/ci";
import Pagination from "./Pagination"

const CarList = () => {
    const [viewType, setViewType] = useState('card')
    const [currentPage, setCurrentPage] = useState<number>(2);
    const [isFilterHidden, setIsFilterHidden] = useState(false)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="max-w-7xl xl:mx-auto mx-5">
            <div className="lg:grid lg:grid-cols-4 gap-6 mt-20 items-start">
                <div className="lg:col-span-1 border p-6 lg:mb-0 mb-10">
                    <div className="lg:block hidden"><Filters /></div>
                    <div className="lg:hidden block">
                        <div className="relative  z-10">
                            <div onClick={() => setIsFilterHidden(!isFilterHidden)} className="flex justify-between items-center cursor-pointer p-2 border rounded-md bg-white shadow-sm hover:bg-gray-100">
                                <span className="text-lg font-semibold">Search by Filter</span>
                                <button className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200">
                                    <CiGrid42 />
                                </button>
                            </div>

                            {isFilterHidden && (
                                <div className="absolute left-0 top-full mt-2 w-full bg-white border rounded-md shadow-lg p-5 z-50">
                                    <Filters />
                                </div>
                            )}
                        </div>
                    </div>
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

            <Pagination
                totalPages={5}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default CarList