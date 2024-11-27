import { Banner } from '@/Components/Banner1'
import { BestSellingCar } from '@/Components/BestSellingCars'
import { CarsBrands } from '@/Components/Brands'
import { BrowseCars } from '@/Components/BrowseCarsCategory'
import { BusinessCars } from '@/Components/Business'
import { BuyCar } from '@/Components/BuyNewCar'
import { CarsList } from '@/Components/CarsHomePage'
import { Deals } from '@/Components/DealsStats'
import { FrequentlyQuestions } from '@/Components/FAQs'
import { Header } from '@/Components/Header'
import { PartnerSlider } from '@/Components/Partners'
import { PopularCarsList } from '@/Components/PopularCars'
import { ClientReviews } from '@/Components/Reviews'
import { Footer } from '@/Components/shared'

const HomePage = () => {
    return (
        <div className=' relative'>
            <Header />
            <Banner />
            <CarsBrands />
            <CarsList title='Explore all Vehicles' text='Trusted Car DeAler Service' />
            <BrowseCars />
            <PartnerSlider />
            <PopularCarsList />
            <BestSellingCar />
            <Deals />
            <ClientReviews />
            <FrequentlyQuestions />
            <BuyCar />
            <BusinessCars />
            <Footer />
        </div>
    )
}

export default HomePage