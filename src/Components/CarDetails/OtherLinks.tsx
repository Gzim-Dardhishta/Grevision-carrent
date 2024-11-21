import { Button } from "../ui/button"
import { PiSteeringWheel } from "react-icons/pi";

const OtherLinks = () => {
    return (
        <div className="space-y-4 border rounded-lg p-6 px-8 mt-10">
            <Button className="bg-red-700 hover:bg-white hover:text-red-700 border border-red-700 p-6 w-full">
                Schedule Test Driver<PiSteeringWheel />
            </Button>
            <Button className="border border-red-700 bg-white hover:text-white text-red-700 hover:bg-red-700 p-6 w-full">
                Schedule Test Driver<PiSteeringWheel />
            </Button>
        </div>
    )
}

export default OtherLinks