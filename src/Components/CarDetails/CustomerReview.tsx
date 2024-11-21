import { reviews } from "@/data/Lists";

const CustomerReview = () => {
    const ratings = [
        { title: "Comfort", rating: 4.8, stars: 5.0 },
        { title: "Interior Design", rating: 4.8, stars: 5.0 },
        { title: "Performance", rating: 4.8, stars: 5.0 },
        { title: "Speed", rating: 4.8, stars: 5.0 },
    ];

    return (
        <div className="p-6 bg-white rounded-xl border mt-20 w-full">
            <h2 className="text-lg font-bold text-gray-800 border-l-4 border-red-500 pl-3 mb-6">
                Customer Review
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                            <circle
                                cx="18"
                                cy="18"
                                r="15.5"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="3"
                            ></circle>
                            <circle
                                cx="18"
                                cy="18"
                                r="15.5"
                                fill="none"
                                stroke="#e70000"
                                strokeWidth="3"
                                strokeDasharray="75 25"
                            ></circle>
                        </svg>
                        <div className="flex flex-col items-center justify-center absolute inset-0">
                            <span className="text-2xl font-bold text-red-800">4.4</span>
                            <span className="text-sm font-medium text-gray-500">Out Of 5</span>
                        </div>
                    </div>
                    <p className="text-gray-700 font-medium mt-2">Overall Ratings</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {ratings.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">Rating {item.rating}</p>
                            <div className="flex items-center gap-2">
                                <div className="relative w-full h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="absolute top-0 left-0 h-2 bg-red-800 rounded-full"
                                        style={{ width: `${(item.rating / item.stars) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="text-yellow-500 font-bold">{item.stars}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full space-y-8 p-6">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white pb-8 border-b space-y-4 flex gap-8 items-start"
                    >

                        <div className="pt-5"><div className="p-7 rounded-full bg-gray-300"></div></div>
                        <div className="pt-0 mt-0">
                            {/* Reviewer Info */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {review.name}
                                </h3>
                                <p className="text-sm text-gray-500">{review.date}</p>
                            </div>

                            {/* Review Title and Rating */}
                            <div className="flex items-center space-x-4">
                                <h4 className="text-md font-medium text-gray-800">
                                    {review.title}
                                </h4>
                                <div className="flex items-center space-x-1 text-yellow-500">
                                    {"⭐".repeat(Math.floor(review.rating))}
                                    <span className="text-gray-800 text-sm font-semibold">
                                        {review.rating}
                                    </span>
                                </div>
                            </div>

                            {/* Review Comment */}
                            <p className="text-sm text-gray-700">{review.comment}</p>

                            {/* Review Images */}
                            <div className="flex space-x-4 mt-4">
                                {review.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Review Image ${index + 1}`}
                                        className="w-32 h-20 rounded-md object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReview;
