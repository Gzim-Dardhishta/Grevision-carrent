import { GoPerson } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { TbEdit } from "react-icons/tb";
import { Button } from "../ui/button";


const AddReviewForm = () => {
    return (
        <div className="w-full mt-16 mb-12 bg-gray-100 p-6 rounded-md shadow-md">
            {/* Header */}
            <h2 className="text-lg font-bold text-gray-800 border-l-4 border-red-500 pl-3 mb-6">
                Customer Review
            </h2>

            {/* Ratings Summary */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                {["Comfort", "Performance", "Interior Design", "Speed"].map((category, index) => (
                    <div key={index} className="text-center">
                        <p className="text-sm font-medium text-gray-800">{category}</p>
                        <div className="text-yellow-500">{"⭐".repeat(5)}</div>
                    </div>
                ))}
            </div>

            {/* Form */}
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="First name"
                            className="w-full px-4 pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                        <span className="absolute left-4 top-3 text-gray-400">
                            <GoPerson />
                        </span>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                        <span className="absolute left-4 top-3 text-gray-400">
                            <TfiEmail />
                        </span>
                    </div>
                </div>

                {/* Review Textarea */}
                <div className="relative">
                    <textarea
                        placeholder="Write Review"
                        rows={5}
                        className="w-full px-4 pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                    ></textarea>
                    <span className="absolute left-4 top-3 text-gray-400">
                        <TbEdit />
                    </span>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500"
                    />
                    <label
                        htmlFor="terms"
                        className="text-sm text-gray-600"
                    >
                        I agree to <span className="text-red-500">Terms & Conditions, Refund Policy</span> and Privacy Policy of Fabrilife.
                    </label>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full py-2 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition"
                >
                    Post Comment
                </Button>
            </form>
        </div>
    )
}

export default AddReviewForm