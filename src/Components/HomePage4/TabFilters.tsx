import { useState } from "react";
import Filters from "./Filters"

const TabFilters = () => {
    const [activeTab, setActiveTab] = useState("all-cars");
    return (
        <div className="w-full">
            <div className="rounded-3xl relative">
                <div className="grid grid-cols-3 -mb-16 w-[80%] mx-auto shadow rounded-3xl absolute top-5 left-8">
                    <button
                        className={`p-3 rounded-3xl ${activeTab === "all-cars" ? "bg-gray-200 font-semibold" : "bg-white"}`}
                        onClick={() => setActiveTab("all-cars")}
                    >
                        All Cars
                    </button>
                    <button
                        className={`p-3 rounded-3xl ${activeTab === "new-cars" ? "bg-gray-200 font-semibold" : "bg-white"}`}
                        onClick={() => setActiveTab("new-cars")}
                    >
                        New Cars
                    </button>
                    <button
                        className={`p-3 rounded-3xl ${activeTab === "used-cars" ? "bg-gray-200 font-semibold" : "bg-white"}`}
                        onClick={() => setActiveTab("used-cars")}
                    >
                        Used Cars
                    </button>
                </div>

                <div className="mt-16">
                    {activeTab === "all-cars" && (
                        <div>
                            <Filters />
                        </div>
                    )}
                    {activeTab === "new-cars" && (
                        <div>
                            <Filters />
                        </div>
                    )}
                    {activeTab === "used-cars" && (
                        <div>
                            <Filters />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TabFilters