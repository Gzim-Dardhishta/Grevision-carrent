import { Banner } from '@/Components/Banner1'
import { BestSellingCar } from '@/Components/BestSellingCars'
import { CarsBrands } from '@/Components/Brands'
import { BrowseCars } from '@/Components/BrowseCarsCategory'
import { CarsList } from '@/Components/CarsHomePage'
import { Deals } from '@/Components/DealsStats'
import { FrequentlyQuestions } from '@/Components/FAQs'
import { Header } from '@/Components/Header'
import { PartnerSlider } from '@/Components/Partners'
import { PopularCarsList } from '@/Components/PopularCars'
import { ClientReviews } from '@/Components/Reviews'

const HomePage = () => {
    return (
        <div className=' relative'>
            <Header />
            <Banner />
            <CarsBrands />
            <CarsList />
            <BrowseCars />
            <PartnerSlider />
            <PopularCarsList />
            <BestSellingCar />
            <Deals />
            <ClientReviews />
            <FrequentlyQuestions />
        </div>
    )
}

export default HomePage