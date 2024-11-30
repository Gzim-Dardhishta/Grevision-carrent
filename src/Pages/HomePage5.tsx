import { Deals } from '@/Components/DealsStats'
import { FrequentlyQuestions } from '@/Components/FAQs'
import { Navbar } from '@/Components/Header'
import { PopularMakes, Vehiclestypes } from '@/Components/HomePage2'
import { NewCars, OurDealers } from '@/Components/HomePage3'
import { Banner } from '@/Components/HomePage4'
import { ContactUs } from '@/Components/HomePage5'
import { PopularCarsList } from '@/Components/PopularCars'
import { Footer } from '@/Components/shared'

const HomePage5 = () => {
    return (
        <div>
            <Navbar className='w-screen xl:mx-0 mx-0 xl:px-20 px-8 rounded-b-none shadow-none fixed top-0 left-0 z-50' btnClass='bg-black text-white' />
            <Banner />
            <PopularCarsList />
            <Vehiclestypes />
            <div className='mt-28'>
                <Deals />
            </div>
            <div className='lg:pt-20 md:pt-96 pt-[65em]'>
                <OurDealers />
            </div>
            <NewCars />
            <PopularMakes />
            <FrequentlyQuestions />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default HomePage5