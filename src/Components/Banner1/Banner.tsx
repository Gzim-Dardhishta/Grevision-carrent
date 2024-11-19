import bannerBg from '../../assets/bg-banner.jpg';
import carBanner from '../../assets/car-banner.png'
import offer from '../../assets/offer.png'
import arrow from '../../assets/icon.png'
import { FaPlay, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import TabsFilters from '../TabFilters/Tabs';

const Banner = () => {
    const [showModal1, setShowModal1] = useState(false)
    return (
        <div
            className="pt-56 pb-32 h-fit bg-cover bg-center md:px-20 px-10 flex lg:flex-row flex-col items-center justify-end relative"
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            <div className='absolute top-24 left-[-18em] bottom-0 md:flex hidden justify-between items-center gap-96 rotate-90 text-white w-fit h-fit'>
                <div className='transform rotate-180'>Contact@gmail.com</div>
                <div className='transform rotate-180'>(603) 555-0123</div>
            </div>
            <div className='lg:w-1/2 lg:pl-14'>
                <h4 className='uppercase lg:text-xl text-lg text-slate-50 border-b-4 border-gray-400 w-fit'>Trusted Dealer, Rental</h4>
                <h1 className='lg:text-7xl text-5xl font-bold text-slate-50 mt-2'>Premium Car Collection..</h1>

                <p className='text-xl text-slate-50 my-10'>Car is where early adopters and innovation seekers find lively imaginative tech before it hits the mainstream.</p>

                <div className='flex items-center gap-10'>
                    <button className='p-4 px-8 rounded-lg text-white text-lg font-medium bg-red-700 hover:bg-[#0e183e]'>Go To Listing</button>
                    <button className='p-6 rounded-full py-6 bg-white text-red-700'><FaPlay /></button>
                </div>
            </div>

            <div className='lg:w-1/2 relative'>
                <img src={carBanner} className='' alt="Car Banner" />

                <div className='absolute top-0 w-36 h-36 bg-contain bg-no-repeat bg-center'
                    style={{ backgroundImage: `url(${offer})` }}>

                    <div className='flex flex-col justify-center items-center mt-10 text-4xl font-bold text-white'>
                        <p className=''>40<span className='text-xl'>%</span></p>
                        <span className='text-xl'>OFF</span>
                    </div>
                </div>

                <div className='absolute top-36'>
                    <img className='w-full' src={arrow} alt="arrow icon" />
                </div>

                <div className='absolute top-2/3 md:left-1/3 p-4 rounded-full bg-white text-red-700 cursor-pointer' onClick={() => setShowModal1(!showModal1)}>
                    <div className='realtive'>
                        <FaXmark />
                        {showModal1 && (
                            <div className='absolute md:top-[-1em] top-14 md:left-16 left-0 font-medium p-5 px-6 rounded bg-black text-white whitespace-nowrap'>
                                <p className='text-xl mb-2'>Luxury Ford Car  <span className='text-red-700'>$13000</span></p>
                                <p className='text-gray-500'>1421 San Pedro St, Los Angeles, CA</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <>
                <TabsFilters />
            </>
        </div>
    );
};

export default Banner;
