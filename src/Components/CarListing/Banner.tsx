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
            <div
                className="absolute z-0 top-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to bottom, rgba(140, 140, 140, 0.5), rgba(0, 0, 0, 0.4))',
                }}
            ></div>
            <div className="relative flex md:flex-row flex-col md:gap-0 gap-20 items-center justify-between w-full max-w-7xl xl:px-0 mx-5 xl:mx-auto">
                <div className='w-full text-center'>
                    <div>
                        <div className="text-lg font-medium uppercase text-white">

                            Save up to 15%
                        </div>
                        <div className='uppercase text-5xl font-medium text-white'>Autohix <span className='text-red-700'>Rental</span> Car</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner