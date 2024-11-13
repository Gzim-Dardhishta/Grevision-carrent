import { FaPhoneVolume } from "react-icons/fa6";
import { Button } from "../ui/button";


const TopInfo = () => {
    return (
        <div className="border p-2 rounded-md absolute top-[-4em] left-20 right-20">
            <div className="flex items-center justify-between bg-red-700 text-white p-6 rounded">
                <div className="text-2xl font-semibold">
                    Find Local Car & Dealers
                </div>

                <div className="flex items-center gap-6 ">
                    <div className="p-3 rounded-full border">
                        <FaPhoneVolume />
                    </div>
                    <div>
                        <div className="text-lg font-medium">Phone Number</div>
                        <div>(671) 555-0110</div>
                    </div>
                    <div>
                        <Button className="p-7 px-10 text-[1em] font-medium hover:bg-[#0c0a26] hover:text-white bg-white text-black">More Listing</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopInfo