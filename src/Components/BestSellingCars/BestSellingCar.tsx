import TopInfo from './TopInfo'
import mast from '../../assets/mast.png'
import car from '../../assets/car.png'
import { FaGasPump } from "react-icons/fa6";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { Button } from '../ui/button';

const BestSellingCar = () => {
    return (
        <div className='lg:px-20 px-10 bg-gray-100 mt-44 relative'>

            <TopInfo />

            <div className='pt-10'>
                <div className='flex flex-col items-center my-24'>
                    <div className='text-lg text-red-700 border-b border-red-700 pb-[1px] font-medium uppercase'>Find your car by car brand</div>
                    <div className='text-5xl font-semibold'>Best selling Cars</div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='w-3/5 relative'>
                        <div className='absolute top-[-4.2em] left-0'><img src={mast} alt="" /></div>
                        <div className='z-50'><img src={car} alt="" /></div>
                    </div>

                    <div className='w-1/3 shadow-xl p-16 px-12'>
                        <div className='uppercase text-lg text-red-700 font-medium'>New arrival</div>
                        <div className='text-2xl font-medium'>Ford Explorer XLT-2018</div>
                        <div className='text-gray-400 my-5'>For 15 years, we raising the standard of used car ret with one of the most innovative
                            and reliable used ve programmes ever created. A comprehensive</div>
                        <div className='flex items-baseline gap-2'>
                            <div className='text-2xl font-medium text-red-700'>$114700</div>
                            <div className='text-gray-400 line-through'>$119000</div>
                        </div>

                        <div className='flex items-center justify-between my-7'>
                            <div className='flex gap-2'>
                                <div className='mt-2'><FaGasPump size={18} /></div>
                                <div className='flex flex-col'>
                                    <span>Fuel Type</span>
                                    <span>Petrol</span>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='mt-2'><MdSpeed size={21} /></div>
                                <div className='flex flex-col'>
                                    <span>Milage</span>
                                    <span>90 k.m</span>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='mt-2'><GiGearStickPattern size={20} /></div>
                                <div className='flex flex-col'>
                                    <span>Transmission</span>
                                    <span>Auto</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button className='bg-red-700 text-white hover:bg-[#0c092b] py-6 px-10'>Buy now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellingCar