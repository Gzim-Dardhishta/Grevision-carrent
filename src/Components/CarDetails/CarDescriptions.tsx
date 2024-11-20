import { carOverview } from "@/data/Lists"

const CarDescriptions = () => {
    return (
        <div className="space-y-14 mt-14">

            <div className="max-w-4xl mx-auto">
                <h4 className="col-span-2 mb-4 text-2xl font-semibold text-gray-900">
                    <span className="border-l-4 border-red-500 pl-2">Description</span>
                </h4>

                <div className="text-gray-500 leading-8">
                    There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form,
                    by injected humour, or randomised words which don't look even slight believable. If you are going to use a passa
                    There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form
                    look even by injected humour, or randomised There are many variations of passages of Lorem Ipsum available,
                    but majority have suffered teration in some form, by injected humour, or randomised words which don't look even
                    slight believable. If you are going to use a passa There are many variations of passages of Lorem Ipsum available,
                    but majority have suffered teration in some form, by injected humour, or randomised many variations of passages of
                    Lorem Ipsum available, but majority There are many variations of passages of
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                <h2 className="col-span-2 text-2xl font-semibold text-gray-900">
                    <span className="border-l-4 border-red-500 pl-2">Car Overview</span>
                </h2>
                {carOverview.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 text-gray-700">
                        <div className="text-red-500 text-xl">{item.icon}</div>
                        <div>
                            <span className="font-semibold text-gray-900">{item.label}:</span>
                            <span className="ml-2">{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarDescriptions