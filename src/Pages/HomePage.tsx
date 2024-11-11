import { Banner } from '@/Components/Banner1'
import { CarsBrands } from '@/Components/Brands'
import { BrowseCars } from '@/Components/BrowseCarsCategory'
import { CarsList } from '@/Components/CarsHomePage'
import { Header } from '@/Components/Header'

const HomePage = () => {
    return (
        <div className=' relative'>
            <Header />
            <Banner />
            <CarsBrands />
            <CarsList />
            <BrowseCars />
        </div>
    )
}

export default HomePage