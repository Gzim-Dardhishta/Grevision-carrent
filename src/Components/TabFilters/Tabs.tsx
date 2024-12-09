import Filters from "./Filters"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../ui/tabs"
import { FC } from "react"

type TabFilterType = {
    className?: string
}


const TabsFilters: FC<TabFilterType> = ({ className }) => {
    return (
        <div className={` rounded-md absolute md:bottom-[-12em] bottom-[-26em] max-w-7xl xl:px-0 mx-auto w-full ${className}`}>
            <Tabs defaultValue="all-cars" className="w-full">
                <TabsList className="grid lg:w-1/4 grid-cols-3">
                    <TabsTrigger value="all-cars">All Cars</TabsTrigger>
                    <TabsTrigger value="new-cars">New Cars</TabsTrigger>
                    <TabsTrigger value="used-cars">Used Cars</TabsTrigger>
                </TabsList>
                <TabsContent value="all-cars">
                    <Filters />
                </TabsContent>
                <TabsContent value="new-cars">
                    <Filters />
                </TabsContent>
                <TabsContent value="used-cars">
                    <Filters />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default TabsFilters