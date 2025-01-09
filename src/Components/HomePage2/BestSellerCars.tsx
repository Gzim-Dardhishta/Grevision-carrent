import car from '../../assets/sl2.png'
import { TiArrowSortedUp } from "react-icons/ti";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const BestSellerCars = () => {
    const [width, setWidth] = useState(0);

    const carousel = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);
    return (
        <div className="bg-black text-white lg:px-20 px-10">

            <div>
                <div className="text-center mx-auto py-10 md:pb-0 pb-10">
                    <div className='border-b-2 text-lg border-dotted border-red-700 w-fit mx-auto'>20% OFF FOR ONLINE BOOKING</div>
                    <div className="text-5xl font-semibold">Top 10 bestseler car</div>
                </div>
            </div>

            <motion.div
                ref={carousel}
                className="w-full overflow-hidden cursor-grab"
                whileTap="grabbing">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex w-full space-x-4 p-10">
                    {Array(6).fill(null).map((_, index) => (
                        <motion.div
                            className="flex-shrink-0 w-1/3 text-center p-14 bg-[#121212] rounded-lg"
                            key={index}
                        >
                            <img src={car} alt="" />
                            <div className="text-xl font-medium mt-5">Chevrolet Suburban 2021 mo</div>
                            <div className="h-[2px] absolute w-full right-0 bottom-0 bg-red-700"></div>
                            <TiArrowSortedUp className="text-red-700 absolute -bottom-2 left-1/2" size={26} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default BestSellerCars