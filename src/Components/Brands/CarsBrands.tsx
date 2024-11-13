import { brands } from "@/data/Lists"
import { MdArrowOutward } from "react-icons/md";

const CarsBrands = () => {
    return (
        <div className="bg-gray-100 md:pt-40 pt-96 pb-20 md:px-20 px-10">
            <h4 className="uppercase text-red-700 underline text-center font-medium text-lg">Find your car by car brand</h4>

            <h2 className="text-6xl font-semibold text-center">Browse by Brands</h2>

            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 mt-10 border-red-700">
                {brands.map((b, index) => (
                    <div
                        key={index}
                        className={`border p-4 bg-white shadow-sm border-white hover:border-red-700 duration-300 ease-in cursor-pointer relative group`}
                    >
                        <div className="w-fit mx-auto my-8">
                            <img src={b.logo} alt="" />
                        </div>
                        <div className="w-fit mx-auto text-lg font-medium">{b.text}</div>

                        <div
                            className="absolute bottom-[-1em] transform -translate-x-4 group-hover:translate-x-0 right-4 rounded-full bg-red-700 p-2 text-white opacity-0 group-hover:opacity-100 duration-300 ease-in-out"
                        >
                            <MdArrowOutward size={20} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CarsBrands