import { popularMakes } from '@/data/Lists'
import CarCard from '../CarsHomePage/CarCard'
import { Button } from '../ui/button'

const PopularMakes = () => {
    return (
        <div className='lg:px-20 px-10 mt-24'>
            <div className='my-20'>
                <div className="text-center mx-auto py-10 md:pb-0 pb-10">
                    <div className='border-b-2 text-lg border-dotted border-red-700 w-fit mx-auto'>20% OFF FOR ONLINE BOOKING</div>
                    <div className="text-5xl font-semibold">Top 10 bestseler car</div>
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