import bgImage from '../../assets/slide2.jpg'
import TabsFilters from '../TabFilters/Tabs'
import { Button } from '../ui/button'
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
                <Button className='px-10 py-6 bg-red-700 text-lg'>Find a Car</Button>
            </div>

            <TabsFilters />
        </div>
    )
}

export default Banner