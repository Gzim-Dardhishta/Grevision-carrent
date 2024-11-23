import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { RxReload } from "react-icons/rx";

const LoanCalculator = () => {
    return (
        <div className="rounded-md bg-gray-100 p-10 sm:px-10 px-5  mt-24">
            <h4 className="col-span-2 mb-4 text-2xl font-semibold text-gray-900">
                <span className="border-l-4 border-red-500 pl-2">Features</span>
            </h4>

            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label htmlFor="" className="font-medium">Vehicle Price</label>
                    <Input placeholder="$250000" className="p-6 rounded mt-3 bg-white" />
                </div>
                <div>
                    <label htmlFor="" className="font-medium">Interest Rate</label>
                    <Input placeholder="$250000" className="p-6 rounded mt-3 bg-white" />
                </div>
                <div>
                    <label htmlFor="" className="font-medium">Down Payment</label>
                    <Input placeholder="$250000" className="p-6 rounded mt-3 bg-white" />
                </div>
                <div>
                    <label htmlFor="" className="font-medium">Down Payment</label>
                    <Input placeholder="$250000" className="p-6 rounded mt-3 bg-white" />
                </div>
            </div>

            <div className="flex items-center gap-10 mt-10">
                <div>
                    <Button className="px-10 py-6 font-normal bg-red-700">Calculate Payment</Button>
                </div>
                <div className="flex items-center gap-3 text-lg"><RxReload /> Reset All</div>
            </div>
        </div>
    )
}

export default LoanCalculator