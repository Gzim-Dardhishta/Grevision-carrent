import { Banner, CarList } from '@/Components/CarListing'
import { Navbar } from '@/Components/Header'
import { Footer } from '@/Components/shared'

const CarListingPage = () => {
    return (
        <div className=''>
            <Navbar className='w-screen xl:mx-0 mx-0 xl:px-20 px-8 rounded-b-none shadow-none fixed top-0 left-0 z-50' btnClass='bg-black text-white' />
            <Banner />
            <CarList />
            <Footer />
        </div>
    )
}

export default CarListingPage