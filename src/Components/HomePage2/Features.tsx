import { featuresHomePage2 } from '@/data/Lists'

const Features = () => {
    return (
        <div className="px-10 xl:px-20 mt-10 xl:mt-20">
            <div className='flex md:flex-row flex-col justify-between'>
                <div className="mb-10">
                    <div className="text-red-700 font-medium uppercase border-b-2 border-dotted border-red-700 w-fit">
                        20% OFF FOR ONLINE BOOKING
                    </div>
                    <h2 className="text-5xl font-semibold mt-4">
                        Our Extra Features
                    </h2>
                </div>

                <div className="text-gray-500 text-lg max-w-3xl mb-16 md:w-2/5 border-l-4 border-red-700 pl-2">
                    For 15 years,
                    we have been raising the standard of used car retailing with one of the
                    most innovative and reliable used vehicle programs ever created.
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {featuresHomePage2.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center gap-4"
                    >
                        <div className="text-6xl">{feature.icon}</div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-gray-500">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features