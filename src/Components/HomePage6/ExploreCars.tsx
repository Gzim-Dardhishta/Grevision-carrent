import { cars6 } from '@/data/Lists'
import { Link } from 'react-router-dom'

const ExploreCars = () => {
    return (
        <div className="lg:px-20 px-10 mx-auto mt-40">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-5xl font-medium border-l-2 border-red-700 pl-2">Explore All Cars</h2>
                <Link to="#" className="text-red-600 font-semibold hover:underline">
                    VIEW MORE →
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {cars6.map((car, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer"
                    >
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src={car.image}
                                alt={car.type}
                                className="w-full h-64 object-cover transform transition-transform duration-300 ease-out hover:scale-110"
                            />
                            <div
                                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
                                }}
                            ></div>
                        </div>
                        <div className="absolute bottom-2 left-2 text-white text-lg font-semibold px-2 py-1 rounded">
                            {car.type}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExploreCars