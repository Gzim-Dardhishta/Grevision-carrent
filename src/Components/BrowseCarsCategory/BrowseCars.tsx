import { carsCategory } from '@/data/Lists'
import bgImage from '../../assets/bg1.ef9c8a7e.jpg'
import { Button } from '../ui/button'
import { MdArrowOutward } from 'react-icons/md'

const BrowseCars = () => {
    return (
        <div className='h-fit bg-cover bg-center p-20 flex' style={{ backgroundImage: `url(${bgImage})` }}>

            <div className='w-1/2'>
                <div className="md:mb-0 mb-8">
                    <h4 className="uppercase text-red-700 underline font-medium text-lg">Trusted Car Delaer Service</h4>

                    <h2 className="md:text-5xl text-4xl font-semibold text-white">Browse By Body</h2>
                </div>

                <div className='text-gray-400 font-medium my-10'>
                    For 15 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle
                </div>
                <div>
                    <Button className='text-lg bg-red-700 p-7'>View All Listing</Button>
                </div>

            </div>

            <div className='w-1/2 bg-white grid grid-cols-3 items-center'>
                {carsCategory.map((c, index) => (
                    <div key={index} className='border h-full flex flex-col py-10 pt-16 justify-center items-center relative group cursor-pointer'>
                        <div className='w-fit mx-auto'><img src={c.image} alt="" /></div>
                        <div className='text-center mt-4 font-semibold text-xl'>{c.name}</div>

                        <div className="absolute top-6 right-6 rounded-full bg-red-700 p-2 text-white hidden group-hover:block duration-300 ease-in" ><MdArrowOutward size={20} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BrowseCars