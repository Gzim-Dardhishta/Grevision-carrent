import { steps } from '@/data/Lists'
import { FaCarSide } from "react-icons/fa";
import { Button } from '../ui/button';
import { GoArrowUpRight } from "react-icons/go";
import image6 from '../../assets/image6.jpg'

const FindSpecialCar = () => {
    return (
        <div className='bg-slate-100 lg:px-20 px-10'>
            <div className="py-12">
                <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className=" flex flex-col space-y-4 group"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full group-hover:bg-red-700 group-hover:text-white duration-300 ease-in-out text-xl font-semibold text-gray-800">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex lg:flex-row flex-col-reverse py-20'>
                <div className='lg:w-1/2 flex flex-col justify-between'>
                    <div className='text-5xl font-semibold'>Finding your special car</div>

                    <div className='flex items-center divide-x-2 my-12'>
                        <div className='md:pr-24 pr-10 pl-0'>
                            <FaCarSide size={55} className='text-red-700' />
                            <div className='text-5xl font-medium my-4'>14k+</div>
                            <div className='text-lg font-medium'>Total Car sold</div>
                        </div>
                        <div className='md:pl-24 pl-10'>
                            <FaCarSide size={55} className='text-red-700' />
                            <div className='text-5xl font-medium my-4'>14k+</div>
                            <div className='text-lg font-medium'>Total Car sold</div>
                        </div>
                    </div>
                    <Button className='text-lg bg-red-700 px-10 py-7 w-fit'>Search Cars <GoArrowUpRight /></Button>
                </div>

                <div className='lg:w-1/2 lg:mb-0 mb-10'>
                    <img src={image6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FindSpecialCar