import { FaPhoneVolume } from "react-icons/fa6";

const TopInfo = () => {
    return (
        <div className="border p-2 rounded-md absolute top-[-4em] w-full">
            <div className="flex md:flex-row flex-col items-center justify-between md:space-y-0 space-y-6 bg-red-700 text-white p-6 rounded">
                <div className="text-2xl font-semibold">
                    Find Local Car & Dealers
                </div>

                <div className="flex sm:flex-row flex-col items-center gap-6 md:w-fit justify-between w-full">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full border">
                            <FaPhoneVolume />
                        </div>
                        <div>
                            <div className="text-lg font-medium">Phone Number</div>
                            <div>(671) 555-0110</div>
                        </div>
                    </div>
                    <div>
                        <button className="p-5 px-10 rounded-lg duration-200 ease-in-out text-[1em] font-medium hover:bg-[#0c0a26] hover:text-white bg-white text-black">More Listing</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopInfo