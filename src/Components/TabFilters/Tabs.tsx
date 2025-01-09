import Filters from "./Filters"
import { FC, useState } from "react"

type TabFilterType = {
    className?: string
}


const TabsFilters: FC<TabFilterType> = ({ className }) => {

    const [activeTab, setActiveTab] = useState("all-cars");


    return (
        <div className={` rounded-md absolute md:bottom-[-12em] bottom-[-26em] max-w-7xl xl:px-0 mx-auto w-full ${className}`}>
            <div className="w-full">
                <div className="flex justify-start items-center gap-4 p-1 bg-gray-100 rounded-xl shadow-md w-fit">
                    <button
                        className={`px-6 py-1 text-sm rounded-lg ${activeTab === "all-cars"
                            ? "bg-white text-black font-semibold shadow"
                            : "text-gray-500 hover:text-black hover:bg-white"
                            }`}
                        onClick={() => setActiveTab("all-cars")}
                    >
                        All Cars
                    </button>
                    <button
                        className={`px-6 py-1 text-sm rounded-lg ${activeTab === "new-cars"
                            ? "bg-white text-black font-semibold shadow"
                            : "text-gray-500 hover:text-black hover:bg-white"
                            }`}
                        onClick={() => setActiveTab("new-cars")}
                    >
                        New Cars
                    </button>
                    <button
                        className={`px-6 py-1 text-sm rounded-lg ${activeTab === "used-cars"
                            ? "bg-white text-black font-semibold shadow"
                            : "text-gray-500 hover:text-black hover:bg-white"
                            }`}
                        onClick={() => setActiveTab("used-cars")}
                    >
                        Used Cars
                    </button>
                </div>
                <div className="mt-3">
                    {activeTab === "all-cars" && <Filters />}
                    {activeTab === "new-cars" && <Filters />}
                    {activeTab === "used-cars" && <Filters />}
                </div>
            </div>
        </div>
    )
}

export default TabsFilters