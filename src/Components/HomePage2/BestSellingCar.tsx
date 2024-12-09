import car from '../../assets/car3.png'

const BestSellingCar = () => {
    return (
        <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white rounded-lg overflow-hidden max-w-7xl xl:mx-auto mx-5 mt-32">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center px-10 py-10 lg:px-20">
                <div>
                    <div className="text-red-700 font-semibold mb-2">
                        Best selling Car
                    </div>
                    <h4 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        Modern Interior Living <br />
                        Room Blueprint
                    </h4>
                    <p className="text-lg font-mediu mb-6">
                        From <span className="font-medium text-xl lg:text-2xl text-red-700">$12,499.00</span>
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg shadow-md text-lg font-medium">
                        Buy Now
                    </button>
                </div>

                <div className="relative">
                    <img
                        src={car}
                        alt="Car"
                        className="w-full"
                    />
                    <div className='absolute top-8 left-0 bg-red-700 rounded-full'>
                        <div className="bg-red-700 border-2 border-dotted m-1 text-white rounded-full shadow-lg p-4 w-20 h-20 flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-xl font-bold">29%</span>
                                <br />
                                <span className="text-sm">OFF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellingCar