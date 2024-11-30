import { Navbar } from "@/Components/Header"
import { PopularMakes } from "@/Components/HomePage2"
import { NewCars } from "@/Components/HomePage3"
import { AutoLocanCalculator } from "@/Components/HomePage4"
import { Banner, ExploreCars, FindSpecialCar } from "@/Components/HomePage6"
import { Footer } from "@/Components/shared"


const HomePage6 = () => {
    return (
        <div>
            <Navbar className='w-screen xl:mx-0 mx-0 xl:px-20 px-8 rounded-b-none shadow-none fixed top-0 left-0 z-50' btnClass='bg-black text-white' />
            <Banner />
            <ExploreCars />
            <PopularMakes />
            <FindSpecialCar />
            <NewCars />
            <NewCars />
            <div className="mt-28">
                <AutoLocanCalculator />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage6