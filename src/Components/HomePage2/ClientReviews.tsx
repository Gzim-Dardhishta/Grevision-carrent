
import { RiDoubleQuotesR } from 'react-icons/ri'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { clientReviews } from '@/data/Lists'
import { BsSymmetryHorizontal } from 'react-icons/bs'
import client from '../../assets/image-frame.png'
import frame from '../../assets/frame.png'
import { Card } from '../ui/card'

const ClientReviews = () => {
    return (
        <div className='lg:mt-32 mt-28 flex md:flex-row flex-col  gap-[5vw] xl:px-20 px-10 mb-10'>
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

            <Card
                className="relative rounded-xl overflow-hidden md:w-2/6 flex items-center justify-center bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${frame})`,
                }}
            >
                <div className="rounded-full bg-white p-2 shadow-lg">
                    <img
                        src={client}
                        alt="Client"
                        className="w-64 h-64 rounded-full object-cover border-4 border-white"
                    />
                </div>

                <div className="absolute -top-5 -left-5 p-4 rounded-full bg-red-600">
                    <RiDoubleQuotesR size={40} color="white" />
                </div>
            </Card>

        </div>
    )
}

export default ClientReviews