import { RiDoubleQuotesR } from 'react-icons/ri'
import { clientReviews } from '@/data/Lists'
import { BsSymmetryHorizontal } from 'react-icons/bs'
import client from '../../assets/image-frame.png'
import frame from '../../assets/frame.png'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const ClientReviews = () => {

    const carousel = useRef<HTMLDivElement | null>(null);
    const [maxDrag, setMaxDrag] = useState(0);

    useEffect(() => {
        if (carousel.current) {
            const containerWidth = carousel.current.offsetWidth;
            const totalWidth = containerWidth * clientReviews.length;

            setMaxDrag(totalWidth - containerWidth);
        }
    }, []);

    return (
        <div className='lg:mt-32 mt-28 flex md:flex-row flex-col gap-[5vw] max-w-7xl xl:px-0 px-5 mx-auto mb-10'>
            <motion.div ref={carousel} whileTap="grabbing" className="w-full md:w-4/6 overflow-hidden">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -maxDrag, right: 0 }}
                    className="flex"
                    style={{ gap: 0 }}
                >
                    {clientReviews.map((c, index) => (
                        <motion.div
                            key={index}
                            className="min-w-full flex-shrink-0"
                            style={{ width: "100%" }}
                        >
                            <div className="space-y-6 py-6">
                                <div className="text-base lg:text-lg uppercase border-b border-red-700 pb-1 w-fit text-red-700 font-semibold">
                                    {c.service}
                                </div>
                                <div className="text-2xl lg:text-5xl font-bold">{c.title}</div>
                                <div className="text-gray-400 text-lg lg:text-2xl">{c.message}</div>
                                <div className="flex items-center gap-4">
                                    <BsSymmetryHorizontal size={28} />
                                    <div>
                                        <div className="text-lg lg:text-xl font-medium">{c.name}</div>
                                        <div className="text-gray-400 font-medium">{c.designation}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <div
                className="relative rounded-xl"
            >
                <img src={frame} className='w-full p-2' alt="" />
                <div className="rounded-full bg-white p-2 shadow-lg absolute top-24 left-24">
                    <img
                        src={client}
                        alt="Client"
                        className="w-64 h-64 rounded-full object-cover border-4 border-white"
                    />
                </div>

                <div className="absolute -top-5 -left-5 p-5 rounded-full bg-red-600">
                    <RiDoubleQuotesR size={40} color="white" />
                </div>
            </div>
        </div>
    )
}

export default ClientReviews