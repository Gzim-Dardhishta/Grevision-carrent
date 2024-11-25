import { Navbar } from '@/Components/Header'
import { Banner, BestSellingCar, BookingCar, CarInvertory, CarsList, ClientReviews, Features, Vehiclestypes } from '@/Components/HomePage2'

const HomePage2 = () => {
    return (
        <div>
            <Navbar className='w-screen xl:mx-0 mx-0 xl:px-20 px-8 rounded-b-none shadow-none fixed top-0 left-0 z-50' btnClass='bg-black text-white' />
            <Banner />
            <BookingCar />
            <Vehiclestypes />
            <Features />
            <BestSellingCar />
            <CarsList />
            <CarInvertory />
            <ClientReviews />
        </div>
    )
}

export default HomePage2