import { cars } from '@/data/Lists'
import CarCard from '../CarsHomePage/CarCard'

const CarsList = () => {
    return (
        <div className='pt-80 pb-10 -mt-48 bg-gray-100 w-full'>
            <div className='max-w-7xl mx-auto xl:px-0 px-5'>
                <div>
                    <div className='border-b-2 text-lg w-fit border-dotted border-red-700 mx-auto'>20% OFF FOR ONLINE BOOKING</div>
                    <h4 className='text-6xl font-semibold text-center my-5'>Find the Best Deals</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>

                <div className='w-fit mx-auto my-20'>
                    <button className='bg-red-700 p-5 rounded-lg text-white hover:bg-[#1d1c1c] duration-300 ease-in px-10 text-lg'>More Listing</button>
                </div>
            </div>
        </div>
    )
}

export default CarsList