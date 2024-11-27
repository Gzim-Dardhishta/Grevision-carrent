import bgImage from '../../assets/bg4.8174d87b.jpg'
import TabsFilters from '../TabFilters/Tabs'
const Banner = () => {
    return (
        <div
            className="h-screen flex flex-col items-center justify-center relative lg:px-20 px-10"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='border-b w-fit font-medium text-xl'>Save up to <span className='text-red-700 text-lg'>15%</span></div>
            <h1 className="text-white text-7xl font-semibold">Find <span className='text-red-700'>Perfect</span> Car. Let’s Go!</h1>
            <div className='text-xl font-medium'>Unlimited mileage · No hidden fees · Free cancellation</div>

            <TabsFilters className='top-[30em]' />
        </div>

    )
}

export default Banner