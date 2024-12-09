import { Navbar } from '@/Components/Header'
import { Banner, BestSellerCars, BestSellingCar, BookingCar, CarInvertory, CarsList, ClientReviews, DownloadMobile, Features, LatestNews, PopularMakes, Vehiclestypes } from '@/Components/HomePage2'
import { Footer } from '@/Components/shared'

const HomePage2 = () => {
    return (
        <div>
            <Navbar className='w-screen xl:mx-0 mx-0 xl:px-20 px-5 rounded-b-none shadow-none fixed top-0 left-0 z-50' btnClass='bg-black text-white' />
            <Banner />
            <BookingCar />
            <Vehiclestypes />
            <Features />
            <BestSellingCar />
            <CarsList />
            <CarInvertory />
            <ClientReviews />
            <BestSellerCars />
            <PopularMakes />
            <DownloadMobile />
            <LatestNews />
            <Footer />
        </div>
    )
}

export default HomePage2