import bg from '../../assets/bg1.674b8715.jpg'
import c1 from '../../assets/c1.png'
import { FaArrowRight } from "react-icons/fa6";
const CarCards = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center xl:gap-20 gap-16 max-w-7xl xl:px-0 px-5 mx-auto'>

            <div className='text-white rounded-xl flex items-center justify-between sm:pr-28 py-12 sm:pb-12 pb-52 relative lg:w-1/2 w-full group bg-center bg-cover' style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat' }}>
                <div className='sm:max-w-80 w-full p-6'>
                    <p className='md:text-3xl text-2xl font-semibold'>Are you looking for buy a new car</p>

                    <button className='uppercase bg-inherit p-0 mt-4 flex items-center gap-2'>View Details  <FaArrowRight /></button>
                </div>

                <div className='absolute sm:top-0 top-44 right-0'>
                    <div className='p-0 pb-10'>
                        <div className='w-[220px] h-[220px] rounded-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.01)]' style={{ backgroundColor: `hsla(0, 0%, 100%, .14)` }}></div>
                    </div>

                    <div className='absolute p-4 right-[8%] top-[30%] xl:w-80 md:w-80  lg:w-64 w-64 group-hover:scale-110 duration-300 ease-in-out'>
                        <img src={c1} alt="" />
                    </div>
                </div>
            </div>

            <div className='text-white rounded-xl flex items-center justify-between sm:pr-28 py-12 sm:pb-12 pb-52 relative lg:w-1/2 w-full group bg-center bg-cover' style={{ backgroundImage: `url('${bg}')`, backgroundRepeat: 'no-repeat' }}>
                <div className='sm:max-w-80 w-full p-6'>
                    <p className='md:text-3xl text-2xl font-semibold'>Are you looking for buy a new car</p>

                    <button className='uppercase bg-inherit p-0 mt-4 flex items-center gap-2'>View Details  <FaArrowRight /></button>
                </div>

                <div className='absolute sm:top-0 top-44 right-0'>
                    <div className='p-0 pb-10'>
                        <div className='w-[220px] h-[220px] rounded-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.01)]' style={{ backgroundColor: `hsla(0, 0%, 100%, .14)` }}></div>
                    </div>

                    <div className='absolute p-4 right-[8%] top-[30%] xl:w-80 md:w-80  lg:w-64 w-64 group-hover:scale-110 duration-300 ease-in-out'>
                        <img src={c1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCards