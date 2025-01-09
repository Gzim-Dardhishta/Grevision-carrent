import car from '../../assets/c3.png'
import { FaArrowRight } from 'react-icons/fa6'
import bg from '../../assets/ellips.png'

const CarInvertory = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center xl:gap-20 gap-16 max-w-7xl mx-auto xl:px-0 px-5 mt-28'>

            <div className="text-white flex items-center justify-between sm:pr-28 py-20 px-8 sm:pb-12 pb-52 relative lg:w-1/2 w-full group bg-black">
                <div className="sm:max-w-80 w-full">
                    <p className="md:text-3xl text-2xl font-semibold">Search Over 18000+ Used Vehicles</p>
                    <button className="uppercase bg-inherit p-0 mt-4 flex items-center gap-2 text-red-700 font-medium">
                        VIEW INVENTORY <FaArrowRight />
                    </button>
                </div>
                <div className="absolute sm:top-0 top-44 right-0">
                    <div className="p-0 pb-10">
                        <div
                            className="w-[220px] h-[220px]"
                            style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat' }}
                        ></div>
                    </div>
                    <div className="absolute right-[8%] top-[30%] xl:w-[360px]  md:w-80 lg:w-64 w-64 group-hover:scale-110 duration-300 ease-in-out">
                        <img src={car} alt="Car" />
                    </div>
                </div>
            </div>

            <div className="text-white flex items-center justify-between sm:pr-28 py-20 px-8 sm:pb-12 pb-52 relative lg:w-1/2 w-full group bg-black">
                <div className="sm:max-w-80 w-full">
                    <p className="md:text-3xl text-2xl font-semibold">Search Over 18000+ Used Vehicles</p>
                    <button className="uppercase bg-inherit p-0 mt-4 flex items-center gap-2 text-red-700 font-medium">
                        VIEW INVENTORY <FaArrowRight />
                    </button>
                </div>
                <div className="absolute sm:top-0 top-44 right-0">
                    <div className="p-0 pb-10">
                        <div
                            className="w-[220px] h-[220px]"
                            style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat' }}
                        ></div>
                    </div>
                    <div className="absolute right-[8%] top-[30%] xl:w-[360px]  md:w-80 lg:w-64 w-64 group-hover:scale-110 duration-300 ease-in-out">
                        <img src={car} alt="Car" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarInvertory