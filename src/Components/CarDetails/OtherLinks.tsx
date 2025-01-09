import { PiSteeringWheel } from "react-icons/pi";

const OtherLinks = () => {
    return (
        <div className="space-y-4 border rounded-lg p-6 px-8 mt-10">
            <button className="bg-red-700 hover:bg-white hover:text-red-700 border border-red-700 p-6 w-full">
                Schedule Test Driver<PiSteeringWheel />
            </button>
            <button className="border border-red-700 bg-white hover:text-white text-red-700 hover:bg-red-700 p-6 w-full">
                Schedule Test Driver<PiSteeringWheel />
            </button>
        </div>
    )
}

export default OtherLinks