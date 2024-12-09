import appStore from '../../assets/appst.png'
import googlePlay from '../../assets/ggplay.png'
import qrCode from '../../assets/qr.png'
import carImage from '../../assets/mobie-car.png'
import bgimage from '../../assets/bg.f97c3f85.png'

const DownloadMobile = () => {
    return (
        <div className=" text-white rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-7xl xl:px-0 mx-5 xl:mx-auto mt-20" style={{ backgroundImage: `url('${bgimage}')` }}>
            <div className="flex flex-col items-start pl-10">
                <p className="text-red-700 font-bold text-sm md:text-base">
                    20% OFF FOR ONLINE BOOKING
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                    Download Free <span className="text-red-700">Mobile App</span> Today
                    For You!
                </h1>
                <div className="flex sm:flex-row flex-col sm:items-baseline items-center gap-4 mt-6 w-full sm:w-auto">
                    <img
                        src={appStore}
                        alt="Download on the App Store"
                        className="w-32 md:w-40"
                    />
                    <img
                        src={googlePlay}
                        alt="Get it on Google Play"
                        className="w-32 md:w-40"
                    />
                    <img
                        src={qrCode}
                        alt="QR Code"
                        className="w-24 h-24"
                    />
                </div>
            </div>

            <div className="sm:w-1/2 sm:mt-0 mt-10">
                <img
                    src={carImage}
                    alt="Car"
                    className="w-full max-w-md object-contain"
                />
            </div>
        </div>
    )
}

export default DownloadMobile