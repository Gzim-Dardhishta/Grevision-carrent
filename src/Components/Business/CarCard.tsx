import { FaArrowRight } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";

interface CardData {
    category: string;
    image: string;
    author: string
    comments: string;
    title: string;
    description: string;
}

const CarCard = ({ card }: { card: CardData }) => {
    return (
        <div
            className="shadow-lg overflow-hidden bg-white relative group cursor-pointer"
        >
            <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />

            <span className="group-hover:bg-red-600 duration-300 ease-in text-black bg-white group-hover:text-white py-1 px-2 absolute top-3 left-3 flex items-center gap-2">
                <IoMdPricetags className="text-red-600 group-hover:text-white" /> {card.category}
            </span>
            <div className="p-5">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-2">
                        <span className="p-4 rounded-full bg-gray-200"></span>
                        <span className="font-bold">{card.author}</span>
                    </span>

                    <span className="flex items-center gap-1"><FaRegComments size={20} className="text-red-600" /> Comments (
                        {card.comments})</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase">{card.title}</h3>
                <p className="text-gray-400 my-5">{card.description}</p>
                <div className="flex items-center justify-between mt-4 bg-gray-100 p-2 px-3 group-hover:bg-red-600 group-hover:text-white ease-in duration-300">
                    <span className="uppercase font-medium">Read More</span>
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        <FaArrowRight />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CarCard