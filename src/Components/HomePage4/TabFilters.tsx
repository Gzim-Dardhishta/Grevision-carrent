import Filters from "./Filters"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

const TabFilters = () => {
    return (
        <div className="w-full">
            <Tabs defaultValue="all-cars" className="rounded-3xl">
                <TabsList className="grid grid-cols-3 -mb-16 w-[80%] mx-auto shadow border">
                    <TabsTrigger value="all-cars" className="p-3 rounded-3xl">All Cars</TabsTrigger>
                    <TabsTrigger value="new-cars" className="p-3 rounded-3xl">New Cars</TabsTrigger>
                    <TabsTrigger value="used-cars" className="p-3 rounded-3xl">Used Cars</TabsTrigger>
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

export default TabFilters