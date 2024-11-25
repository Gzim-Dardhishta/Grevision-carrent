import { Card, CardContent } from '../ui/card'
import car from '../../assets/c3.png'
import { FaArrowRight } from 'react-icons/fa6'
import bg from '../../assets/ellips.png'

const CarInvertory = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center xl:gap-20 gap-16 xl:px-20 px-10 mt-28'>

            <Card className='text-white flex items-center justify-between sm:pr-28 py-16 sm:pb-12 pb-52 relative lg:w-1/2 w-full group bg-black rounded-none'>
                <CardContent className='sm:max-w-80 w-full'>
                    <p className='md:text-3xl text-2xl font-semibold'>Search Over 18000+ Used Vehicles</p>

                    <button className='uppercase bg-inherit p-0 mt-4 flex items-center gap-2 text-red-700 font-medium'>VIEW INVERTORY  <FaArrowRight /></button>
                </CardContent>

                <div className='absolute sm:top-0 top-44 right-0'>
                    <CardContent className='p-0 pb-10'>
                        <div className='w-[220px] h-[220px]' style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat' }}></div>
                    </CardContent>

                    <CardContent className='absolute right-[8%] top-[30%] xl:w-96 md:w-80  lg:w-64 w-64 group-hover:scale-110 duration-300 ease-in-out'>
                        <img src={car} alt="" />
                    </CardContent>
                </div>
            </Card>

            <Card className='text-white flex items-center justify-between sm:pr-28 py-16 sm:pb-12 pb-52 relative lg:w-1/2 w-full group bg-black rounded-none'>
                <CardContent className='sm:max-w-80 w-full'>
                    <p className='md:text-3xl text-2xl font-semibold'>Search Over 18000+ Used Vehicles</p>

                    <button className='uppercase bg-inherit p-0 mt-4 flex items-center gap-2 text-red-700 font-medium'>VIEW INVERTORY  <FaArrowRight /></button>
                </CardContent>

                <div className='absolute sm:top-0 top-44 right-0'>
                    <CardContent className='p-0 pb-10'>
                        <div className='w-[220px] h-[220px]' style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat' }}></div>
                    </CardContent>

                    <CardContent className='absolute right-[8%] top-[30%] xl:w-96 md:w-80  lg:w-64 w-64 group-hover:scale-110 duration-300 ease-in-out'>
                        <img src={car} alt="" />
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default CarInvertory