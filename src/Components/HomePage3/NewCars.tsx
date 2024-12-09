import { cars } from "@/data/Lists"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import CarCard from "../CarsHomePage/CarCard"

const NewCars = () => {
    return (
        <div className="max-w-7xl xl:px-0 mx-5 xl:mx-auto mt-28">
            <div className="flex items-center justify-between mb-10">
                <div className="text-5xl font-semibold pl-2 border-l-2 border-red-700">New Cars</div>
                <div className="text-lg text-red-700 cursor-pointer">VIEW MORE</div>
            </div>

            <Carousel>
                <CarouselContent className="py-4">
                    {cars.map((car) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <CarCard key={car.id} car={car} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default NewCars