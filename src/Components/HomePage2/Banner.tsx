import bgImage from '../../assets/slide2.jpg'
import TabsFilters from '../TabFilters/Tabs'

const Banner = () => {
    return (
        <div className='relative mt-24'>
            <div className='h-screen'>
                <img src={bgImage} alt="" className='h-full w-full bg-center' />
            </div>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-5'>
                <div className='border-b-2 text-lg w-fit border-dotted border-red-700 mx-auto'>20% OFF FOR ONLINE BOOKING</div>

                <div className='text-7xl font-semibold'>
                    Modern <span className='text-red-700'>Classic</span> Incredible
                </div>
                <div className='text-lg'>Car is where early adopters and innovation seekers find</div>
                <button className='px-10 py-3 rounded-lg bg-red-700 text-lg hover:bg-[#181717] duration-300 ease-in'>Find a Car</button>
            </div>

            <div className="absolute bottom-32 xl:right-80 xl:left-80 md:right-32 md:left-32 right-5 left-5">
                <TabsFilters className='' />
            </div>

        </div>
    )
}

export default Banner