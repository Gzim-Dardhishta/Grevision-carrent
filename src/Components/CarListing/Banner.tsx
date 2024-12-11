import bgImage from '../../assets/slide3.jpg'

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
            <div className=" z-10 flex md:flex-row flex-col md:gap-0 gap-20 items-center justify-between w-full max-w-7xl xl:px-0 mx-5 xl:mx-auto">
                <div className='w-full md:text-left text-center'>
                    <div>
                        <div className="text-lg font-medium uppercase border-b-2 w-fit md:mx-0 mx-auto border-gray-400 text-white">

                            Trusted Dealer, Rental
                        </div>
                        <div className='uppercase text-4xl font-medium text-white md:w-4/5'>Mercedez benz 2023 new car</div>
                        <div>
                            <div className='text-3xl font-medium text-white my-5'>$ 180.99 / <span className='text-red-700 text-xl'>$2860</span></div>
                        </div>
                        {/* <Button className='bg-red-700 p-7 text-lg'>Go To Listing</Button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner