import bgImage from '../../assets/bg6.e4ae4275.jpg'
import TabsFilters from '../TabFilters/Tabs'
import { Button } from '../ui/button'

const Banner = () => {
    return (
        <div
            className="relative py-40 lg:px-20 px-10"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="absolute z-0 top-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to bottom, rgba(2, 11, 46, .65), rgba(2, 11, 46, .65))',
                }}
            ></div>

            <div className='z-10 relative w-fit mx-auto text-center text-white my-32'>
                <div className='border-b w-fit mx-auto font-medium text-xl'>Save up to <span className='text-red-700 text-lg'>15%</span></div>
                <h1 className="text-white text-7xl font-semibold">Find Perfect Car. Let’s Go!</h1>
                <div className=' mt-6 font-medium'>Unlimited mileage · No hidden fees · Free cancellation</div>

                <div className='flex items-center gap-8 justify-center my-16'>
                    <Button className='bg-red-700 px-10 text-lg py-7'>View Invertory</Button>
                    <Button className='bg-red-700 px-10 text-lg py-7'>About Us</Button>
                </div>
            </div>

            <TabsFilters className='top-[45em]' />
        </div>
    )
}

export default Banner