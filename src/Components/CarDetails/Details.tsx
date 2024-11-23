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
            <div className='max-w-5xl mx-auto lg:px-0 px-8'>
                <CarTopInfo />
                <Carousel />
                <div className='flex md:flex-row flex-col lg:gap-10 gap-4'>
                    <div className='md:w-4/6'>
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