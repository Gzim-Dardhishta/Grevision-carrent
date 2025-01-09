import { vehicles } from "@/data/Lists"

const Vehiclestypes = () => {
    return (
        <div className="mt-32">
            <div className="bg-gray-100 pt-20 pb-64">
                <div className='border-b-2 text-lg w-fit border-dotted border-red-700 mx-auto'>20% OFF FOR ONLINE BOOKING</div>
                <div className="text-6xl lg:w-3/5 mx-auto font-semibold text-center">
                    Browse By Your favorite <span className="text-red-700">Vehicles</span>types
                </div>
            </div>

            <div className="grid md:grid-flow-col md:grid-cols-3 grid-cols-1 md:grid-rows-2 gap-4 p-6 w-full max-w-7xl xl:mx-auto xl:px-0 px-5 -mt-48">
                {vehicles.map((vehicle, index) => (
                    <div
                        key={vehicle.id}
                        className={`relative rounded-xl overflow-hidden shadow-lg group ${index === 0
                            ? 'col-span-1 sm:row-span-2 md:h-[550px] h-[400px]'
                            : index === 1
                                ? 'md:row-span-2 col-span-1 md:h-[550px] h-[400px]'
                                : 'row-span-1 col-span-1 md:h-[265px] h-[400px]'
                            }`}
                    >
                        <img
                            src={vehicle.image}
                            alt={vehicle.type}
                            className="w-full h-full object-cover group-hover:scale-110 duration-300 ease-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <button className="bg-red-700 p-5 rounded-lg text-white hover:bg-[#1d1c1c] duration-300 ease-in px-10 text-lg">
                                {vehicle.type}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vehiclestypes