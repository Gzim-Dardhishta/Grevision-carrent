import { RxReload } from "react-icons/rx";

const LoanCalculator = () => {
    return (
        <div className="rounded-md bg-gray-100 p-10 sm:px-10 px-5">
            <h4 className="col-span-2 mb-4 text-2xl font-semibold text-gray-900">
                <span className="border-l-4 border-red-500 pl-2">Auto loan calculator</span>
            </h4>

            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label htmlFor="" className="font-medium">Vehicle Price</label>
                    <input placeholder="$250000" className="p-3 rounded mt-3 bg-white" />
                </div>
                <div>
                    <label htmlFor="" className="font-medium">Interest Rate</label>
                    <input placeholder="$250000" className="p-3 rounded mt-3 bg-white" />
                </div>
                <div>
                    <label htmlFor="" className="font-medium">Down Payment</label>
                    <input placeholder="$250000" className="p-3 rounded mt-3 bg-white" />
                </div>
                <div>
                    <label htmlFor="" className="font-medium">Down Payment</label>
                    <input placeholder="$250000" className="p-3 rounded mt-3 bg-white" />
                </div>
            </div>

            <div className="flex items-center gap-10 mt-10">
                <div>
                    <button className="px-10 py-4 rounded-lg font-normal bg-red-700 text-white">Calculate Payment</button>
                </div>
                <div className="flex items-center gap-3 text-lg"><RxReload /> Reset All</div>
            </div>
        </div>
    )
}

export default LoanCalculator