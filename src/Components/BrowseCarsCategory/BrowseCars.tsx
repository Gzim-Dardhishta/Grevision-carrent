import { carsCategory } from '@/data/Lists'
import bgImage from '../../assets/bg1.ef9c8a7e.jpg'
import { MdArrowOutward } from 'react-icons/md'

const BrowseCars = () => {
    return (
        <div className='h-fit bg-cover bg-center lg:p-20 p-10 flex lg:flex-row flex-col' style={{ backgroundImage: `url(${bgImage})` }}>

            <div className='lg:w-1/2 lg:mb-0 mb-10'>
                <div className="md:mb-0 mb-8">
                    <h4 className="uppercase text-red-700 underline font-medium text-lg">Trusted Car Delaer Service</h4>

                    <h2 className="md:text-5xl text-4xl font-semibold text-white">Browse By Body</h2>
                </div>

                <div className='text-gray-200 font-medium my-10 w-4/5'>
                    For 15 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle
                </div>
                <div>
                    <button className='text-lg bg-red-700 text-white px-7 py-4 rounded-lg hover:bg-[#131351]'>View All Listing</button>
                </div>

            </div>

            <div className='lg:w-1/2 bg-white grid md:grid-cols-3 grid-cols-2 items-center'>
                {carsCategory.map((c, index) => (
                    <div
                        key={index}
                        className={`h-full flex flex-col py-10 pt-16 md:px-0 px-4 justify-center items-center relative group cursor-pointer`}
                    >
                        <div className='w-fit mx-auto'>
                            <img src={c.image} alt="" />
                        </div>
                        <div className='text-center mt-4 font-semibold text-xl'>{c.name}</div>

                        <div
                            className="absolute top-6 right-6 transform -translate-x-4 group-hover:translate-x-0 rounded-full bg-red-700 p-2 text-white opacity-0 group-hover:opacity-100 duration-300 ease-in-out"
                        >
                            <MdArrowOutward size={20} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BrowseCars