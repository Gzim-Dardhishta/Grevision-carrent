import { cars } from "@/data/Lists"
import CarCard from "../CarsHomePage/CarCard"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NewCars = () => {
    const [width, setWidth] = useState(0);

    const carousel = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
            }
        };

        handleResize(); // Set width on component mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="max-w-7xl xl:px-0 mx-5 xl:mx-auto mt-28 overflow-hidden">
            <div className="flex items-center justify-between mb-10">
                <div className="text-5xl font-semibold pl-2 border-l-2 border-red-700">New Cars</div>
                <div className="text-lg text-red-700 cursor-pointer">VIEW MORE</div>
            </div>

            <motion.div
                ref={carousel}
                className="w-full overflow-hidden cursor-grab"
                whileTap="grabbing"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-3 w-full"
                >
                    {cars.map((car) => (
                        <motion.div
                            key={car.id}
                            className="flex-shrink-0 w-[90%] md:w-[45%] lg:w-[24.25%] py-3"
                        >
                            <CarCard key={car.id} car={car} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default NewCars