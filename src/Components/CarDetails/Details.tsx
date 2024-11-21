import Header from './Header'
import CarTopInfo from './CarTopInfo'
import Carousel from './Carousel'
import CarDescriptions from './CarDescriptions'
import CarFeatures from './CarFeatures'
import LoanCalculator from './LoanCalculator'
import CustomerReview from './CustomerReview'
import AddReviewForm from './AddReviewForm'
import BestCarsCarousel from './BestCarsCarousel'
import { Footer } from '../shared'
import OtherLinks from './OtherLinks'
import ContactForm from './ContactForm'

const Details = () => {
    return (
        <div>
            <Header />
            <div className='px-10 lg:px-20'>
                <CarTopInfo />
                <Carousel />
                <div className='flex gap-10'>
                    <div className='w-4/6'>
                        <CarDescriptions />
                        <CarFeatures />
                        <LoanCalculator />
                        <CustomerReview />
                        <AddReviewForm />
                    </div>
                    <div>
                        <OtherLinks />
                        <ContactForm />
                    </div>
                </div>
                <BestCarsCarousel />
            </div>
            <Footer />
        </div>
    )
}

export default Details