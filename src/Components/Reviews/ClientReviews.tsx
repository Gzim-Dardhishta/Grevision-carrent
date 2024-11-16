
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import { Card, CardContent } from "../ui/card"

import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { BsSymmetryHorizontal } from "react-icons/bs";
import { clientReviews } from "@/data/Lists";
import client from '../../assets/tes1.jpg'


const ClientReviews = () => {
    return (
        <div className='lg:mt-32 md:mt-[50em] mt-[75em] flex md:flex-row flex-col  gap-[5vw] xl:px-36 px-10'>

            <Card className="rounded-none">
                <CardContent className="flex aspect-square items-center justify-center md:w-80 w-full p-1 relative">
                    <img src={client} className="w-full" alt="" />

                    <div className="absolute bottom-1 bg-white p-3 px-5 flex gap-1">
                        <FaStar color="orange" />
                        <FaStar color="orange" />
                        <FaStar color="orange" />
                        <FaStar color="orange" />
                        <FaStar color="orange" />
                    </div>

                    <div className="absolute -top-5 -left-5 p-4 rounded-full bg-red-600">
                        <RiDoubleQuotesR size={50} color="white" />
                    </div>
                </CardContent>
            </Card>
            <Carousel className="w-full lg:w-4/6 overflow-hidden">
                <CarouselContent>
                    {clientReviews.map((c, index) => (
                        <CarouselItem key={index}>
                            <div className="space-y-6 py-6">
                                <div className="text-base lg:text-lg uppercase border-b border-red-700 pb-1 w-fit text-red-700 font-semibold">
                                    {c.service}
                                </div>
                                <div className="text-2xl lg:text-5xl font-bold">
                                    {c.title}
                                </div>
                                <div className="text-gray-400 text-lg lg:text-2xl">
                                    {c.message}
                                </div>

                                <div className="flex items-center gap-4">
                                    <BsSymmetryHorizontal size={28} />
                                    <div>
                                        <div className="text-lg lg:text-xl font-medium">
                                            {c.name}
                                        </div>
                                        <div className="text-gray-400 font-medium">
                                            {c.designation}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className=" absolute right-14 bottom-8 space-x-2 flex">
                    <CarouselPrevious size="icon" className="h-10 w-10 lg:h-12 lg:w-12 border border-black rounded-full flex items-center justify-center" />
                    <CarouselNext size="icon" className="h-10 w-10 lg:h-12 lg:w-12 border border-black rounded-full flex items-center justify-center" />
                </div>
            </Carousel>
        </div>

    )
}

export default ClientReviews