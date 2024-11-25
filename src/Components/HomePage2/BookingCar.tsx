import { CarBrandList } from "../Brands"
import car from '../../assets/car2.png'
const BookingCar = () => {
    return (
        <div className="xl:mt-44 md:mt-48 mt-96 xl:px-20 px-10">
            <div className="flex md:flex-row flex-col justify-between items-center">
                <div className="md:w-2/5 md:pb-0 pb-10">
                    <div className='border-b-2 text-lg border-dotted border-red-700 w-fit'>20% OFF FOR ONLINE BOOKING</div>
                    <div className="text-5xl font-bold">We,re Trusted Your Car <span className="text-red-700">Dealer</span></div>
                </div>

                <div className="pl-4 md:w-2/5 border-l-2 border-red-700 text-gray-500">
                    For 15 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of
                </div>
            </div>

            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-2/6">
                    <CarBrandList className="text-white lg:grid-cols-2 grid-cols-3 gap-0 border-0 divide-x divide-y" background="bg-black py-4 pt-1" />
                </div>


                <div className="lg:w-4/6">
                    <div className="flex items-center w-full mx-auto mt-10 md:px-10">
                        <div className="hover:bg-gray-100 rounded p-5 md:px-7 px-0 flex md:flex-row flex-col gap-2 w-full md:text-left text-center"><span className="md:text-6xl text-3xl font-medium text-red-700">20</span> <span className="pt-5 font-medium text-sm">Skilled<br />Speakers</span></div>
                        <div className="hover:bg-gray-100 rounded p-5 md:px-7 px-0 flex md:flex-row flex-col gap-2 w-full md:text-left text-center"><span className="md:text-6xl text-3xl font-medium text-red-700">12k</span> <span className="pt-5 font-medium text-sm">Active <br /> Customers</span></div>
                        <div className="hover:bg-gray-100 rounded p-5 md:px-7 px-0 flex md:flex-row flex-col gap-2 w-full md:text-left text-center"><span className="md:text-6xl text-3xl font-medium text-red-700">15</span> <span className="pt-5 font-medium text-sm">Open <br /> Showroom</span></div>
                    </div>

                    <div className="relative">
                        <div>
                            <img src={car} alt="" />
                        </div>

                        <div className="absolute right-16 top-16 shadow-xl bg-white p-4 py-8">
                            <div className="text-5xl font-medium text-center text-red-700">25</div>
                            <div className="w-1/2 mx-auto text-center text-lg">year of experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCar