import CarBrandList from "./CarBrandList";

const CarsBrands = () => {
    return (
        <div className={`bg-gray-100 md:pt-40 pt-96 pb-20`}>
            <div className="max-w-7xl xl:px-0 px-5 mx-auto">
                <h4 className="uppercase text-red-700 underline text-center font-medium text-lg">Find your car by car brand</h4>

                <h2 className="text-6xl font-semibold text-center">Browse by Brands</h2>

                <CarBrandList className="lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4" background="bg-white" />
            </div>
        </div>
    )
}

export default CarsBrands