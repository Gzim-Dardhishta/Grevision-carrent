import { makes } from "@/data/Lists"
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const ViewFilters = ({ setViewMode }: { setViewMode: (s: string) => void }) => {
    return (
        <div>
            <div className="mb-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div className="text-lg">Showing 1–12 of <span className="text-red-700">54</span> results</div>
                    <div className="w-44">
                        <div className="w-full">
                            <select
                                id="make-select"
                                className="w-full p-3 py-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select Make
                                </option>
                                {makes.map((m, index) => (
                                    <option value={m} key={index}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-gray-100 p-5 rounded-md">
                    <div className="flex items-center gap-2">
                        <div className="text-lg font-medium cursor-pointer">All <span className="text-gray-400">(100)</span></div>
                        <div className="text-lg font-medium cursor-pointer">New <span className="text-gray-400">(100)</span></div>
                        <div className="text-lg font-medium cursor-pointer">Used <span className="text-gray-400">(100)</span></div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaList onClick={() => setViewMode('list')} size={22} className="cursor-pointer" />
                        <IoGrid onClick={() => setViewMode('card')} size={23} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFilters