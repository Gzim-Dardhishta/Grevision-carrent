import { features } from '@/data/Lists';
import { FaCheck } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const CarFeatures = () => {
    return (
        <div className='w-full'>
            <h4 className="col-span-2 mb-4 text-2xl font-semibold text-gray-900">
                <span className="border-l-4 border-red-500 pl-2">Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
                {features.map((feature) => (
                    <div key={feature.category} className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900">{feature.category}</h3>
                        <ul className="space-y-2">
                            {feature.items.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center text-gray-700 text-sm"
                                >
                                    <span className="bg-red-700 text-white p-1 rounded-full mr-2"><FaCheck size={10} /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


            <div>
                <h4 className="col-span-2 mb-4 text-2xl font-semibold text-gray-900">
                    <span className="border-l-4 border-red-500 pl-2">Features</span>
                </h4>
                <div className='flex items-center gap-3'>
                    <span className='text-red-700'><IoLocationOutline size={26} /></span>
                    <div className='text-lg'>4517 Washington Ave. Manchester, Kentucky 39495</div>
                </div>
            </div>
        </div>
    );
};

export default CarFeatures;
