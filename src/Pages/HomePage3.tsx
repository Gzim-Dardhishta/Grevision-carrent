import { CarsList } from '@/Components/CarsHomePage'
import { Navbar } from '@/Components/Header'
import { Banner, ContactUs, ExploreCars, NewCars, OurDealers, WatchVideo } from '@/Components/HomePage3'
import { Footer } from '@/Components/shared'
import { Button } from '@/Components/ui/button'

const HomePage3 = () => {
    return (
        <div>
            <Navbar className='w-screen xl:mx-0 mx-0 xl:px-20 px-8 rounded-b-none shadow-none fixed top-0 left-0 z-50' btnClass='bg-black text-white' />
            <Banner />
            <ExploreCars />
            <div className='bg-gray-100 py-16'>
                <CarsList title='Feature Listing' />
                <div className='w-fit mx-auto'><Button className='bg-red-700 p-7 text-lg'>More Listiong</Button></div>
            </div>
            <WatchVideo />
            <NewCars />
            <OurDealers />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default HomePage3