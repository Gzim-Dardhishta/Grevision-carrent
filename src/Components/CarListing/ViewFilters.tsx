import { makes } from "@/data/Lists"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const ViewFilters = ({ setViewMode }: { setViewMode: (s: string) => void }) => {
    return (
        <div>
            <div className="mb-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div className="text-lg">Showing 1–12 of <span className="text-red-700">54</span> results</div>
                    <div className="w-44">
                        <Select>
                            <SelectTrigger className="w-full p-5">
                                <SelectValue placeholder="Make" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Make</SelectLabel>
                                    {makes.map((m, index) => (
                                        <SelectItem value={m} key={index}>{m}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
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