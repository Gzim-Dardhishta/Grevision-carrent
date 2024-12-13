import { carListing } from "@/data/Lists"
import CarCard from "./CarCard"
import Filters from "./Filters"
import ViewFilters from "./ViewFilters"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { CiGrid42 } from "react-icons/ci";
import Pagination from "./Pagination"

const CarList = () => {
    const [viewType, setViewType] = useState('list')
    const [currentPage, setCurrentPage] = useState<number>(2);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="max-w-7xl xl:mx-auto mx-5">
            <div className="lg:grid lg:grid-cols-4 gap-6 mt-20 items-start">
                <div className="lg:col-span-1 border p-6 lg:mb-0 mb-10">
                    <div className="lg:block hidden"><Filters /></div>
                    <div className="lg:hidden block">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex  justify-between">
                                    <DropdownMenuLabel className="text-lg font-semibold">Search by Filter</DropdownMenuLabel>
                                    <Button variant="outline"><CiGrid42 /></Button>
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="p-5 w-full">
                                <Filters />
                            </DropdownMenuContent>
                        </DropdownMenu>
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