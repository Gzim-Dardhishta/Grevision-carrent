import { latestNews } from '@/data/Lists'
import React from 'react'
import { FaTags } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { FaRegComments } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

type CardProps = {
    image: string;
    title: string;
    author: string;
    comments: string;
};

const Card: React.FC<CardProps> = ({ image, title, author, comments }) => {
    return (
        <div className="overflow-hidden group pb-2">
            <div className="relative overflow-hidden z-0">
                <img
                    src={image}
                    alt="Car"
                    className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-2">
                    <FaTags /> BUSINESS
                </span>
            </div>

            <div className="p-4 w-11/12 mx-auto -mt-10 bg-white relative shadow">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="flex items-center mr-4">
                        <GoPerson className="text-red-700" size={20} />
                        {author}
                    </span>
                    <span className="flex items-center">
                        <FaRegComments className="text-red-700" size={20} />
                        Comments ({comments})
                    </span>
                </div>
                <h2 className="text-2xl font-medium my-5 text-gray-800 mb-3 leading-tight">
                    {title}
                </h2>
                <a
                    href="#"
                    className="text-sm font-semibold flex items-center gap-2"
                >
                    Read More <div className='p-1 text-white rounded-full bg-red-700'><FaArrowRightLong /></div>
                </a>
            </div>
        </div>

    )
}

const LatestNews = () => {
    return (
        <div className='mt-20 max-w-7xl xl:px-0 mx-5 xl:mx-auto'>
            <div className='font-medium w-fit mx-auto text-red-700 border-b border-red-700'>FIND YOUR CAR BY CAR BRAND</div>
            <div className='text-5xl font-semibold lg:w-1/2 mx-auto text-center mt-3 mb-10'>
                Latest news & article From The Blog
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestNews.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        author={card.author}
                        comments={card.comments}
                    />
                ))}
            </div>
        </div>
    )
}

export default LatestNews