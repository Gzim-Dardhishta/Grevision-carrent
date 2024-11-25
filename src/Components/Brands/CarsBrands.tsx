import CarBrandList from "./CarBrandList";

const CarsBrands = () => {
    return (
        <div className={`bg-gray-100 md:pt-40 pt-96 pb-20 md:px-20 px-10`}>
            <h4 className="uppercase text-red-700 underline text-center font-medium text-lg">Find your car by car brand</h4>

            <h2 className="text-6xl font-semibold text-center">Browse by Brands</h2>

            <CarBrandList className="lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4" background="bg-white" />
        </div>
    )
}

export default CarsBrands