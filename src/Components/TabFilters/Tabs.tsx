import Filters from "./Filters"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../ui/tabs"


const TabsFilters = () => {
    return (
        <div className="md:px-20 px-10 p-4 rounded-md absolute md:bottom-[-5em] bottom-[-18em] left-0 w-full">
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