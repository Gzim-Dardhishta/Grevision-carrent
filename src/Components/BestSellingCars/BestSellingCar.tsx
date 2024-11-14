import TopInfo from './TopInfo'
import mast from '../../assets/mast.png'
import car from '../../assets/car.png'
import { FaGasPump } from "react-icons/fa6";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { Button } from '../ui/button';
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";

interface Marker {
    id: number;
    top: string;
    left: string;
    title: string;
    description: string;
}

const BestSellingCar = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<Marker | null>(null);

    const markers: Marker[] = [
        { id: 1, top: '20%', left: '30%', title: 'Car Suspension Disc', description: 'Lorem Ipsum Dolor Sit Amet Ectetur Adipisicing Elit' },
        { id: 2, top: '55%', left: '15%', title: 'Car Wheel', description: 'Lorem Ipsum Dolor Sit Amet Ectetur Adipisicing Elit' },
        { id: 3, top: '30%', left: '70%', title: 'Car Engine', description: 'Lorem Ipsum Dolor Sit Amet Ectetur Adipisicing Elit' },
    ];

    const handleHover = (item: Marker) => {
        setHoveredItem(item);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='lg:px-20 px-10 bg-gray-100 mt-44 relative'>

            <TopInfo />

            <div className='sm:pt-10 pt-36'>
                <div className='flex flex-col items-center my-24'>
                    <div className='text-lg text-red-700 border-b border-red-700 pb-[1px] font-medium uppercase'>Find your car by car brand</div>
                    <div className='text-5xl font-semibold'>Best selling Cars</div>
                </div>

                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <div className='lg:w-3/5 relative'>
                        <div className='absolute top-[-4.2em] left-0'><img src={mast} alt="" /></div>
                        <div className='z-50'><img src={car} alt="" /></div>

                        <div className='p-2 bg-red-700 text-white w-fit rounded-full absolute top-0 right-10'>
                            <div className='p-4 px-3 rounded-full border-2 w-fit border-dotted'>
                                <div className='text-3xl font-semibold'>29<span className='text-sm'>%</span></div>
                            </div>
                        </div>

                        {markers.map((marker) => (
                            <div
                                key={marker.id}
                                className='p-2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full absolute cursor-pointer'
                                style={{ top: marker.top, left: marker.left }}
                                onMouseEnter={() => handleHover(marker)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="text-xl font-semibold"><FiPlus /></span>
                            </div>
                        ))}

                        {isHovered && hoveredItem && (
                            <div
                                className='absolute bg-white p-4 rounded-lg shadow-md border border-gray-300 w-64'
                                style={{ top: `calc(${hoveredItem.top} - 1.5rem)`, left: `calc(${hoveredItem.left} + 2.4rem)` }}
                            >
                                <div className="absolute -left-2 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>

                                <div className="relative">
                                    <h3 className='text-md font-bold text-black mb-1'>{hoveredItem.title}</h3>
                                    <p className='text-sm text-gray-500 leading-tight'>{hoveredItem.description}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='xl:w-1/3 lg:w-2/5 shadow-xl p-16 px-12'>
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
                                    <span className='xl:block hidden'>Fuel Type</span>
                                    <span>Petrol</span>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='mt-2'><MdSpeed size={21} /></div>
                                <div className='flex flex-col'>
                                    <span className='xl:block hidden'>Milage</span>
                                    <span>90 k.m</span>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='mt-2'><GiGearStickPattern size={20} /></div>
                                <div className='flex flex-col'>
                                    <span className='xl:block hidden'>Transmission</span>
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