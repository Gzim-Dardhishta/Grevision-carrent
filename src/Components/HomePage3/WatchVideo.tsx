import bgImage from '../../assets/bg1.ef9c8a7e.jpg'
import { IoPlaySharp } from "react-icons/io5";

const WatchVideo = () => {
    return (
        <div
            className="md:px-48 px-10 md:py-48 py-12 flex flex-col items-center justify-center relative lg:mx-20 mx-10 mt-32 rounded-3xl"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div>
                <div className='p-7 rounded-full bg-white cursor-pointer w-fit mx-auto mb-4'>
                    <IoPlaySharp size={38} color='red' />
                </div>
                <div className='md:text-6xl text-4xl text-white'>
                    Watch <span className='text-red-700'>Video</span>
                </div>
            </div>
        </div>
    )
}

export default WatchVideo