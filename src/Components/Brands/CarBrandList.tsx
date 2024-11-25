import { brands } from '@/data/Lists'
import { FC } from 'react'
import { MdArrowOutward } from 'react-icons/md'

type CarsBrandsType = {
    className?: string
    background?: string
}

const CarBrandList: FC<CarsBrandsType> = ({ className, background }) => {
    return (
        <div className={`grid mt-10 border-red-700 ${className}`}>
            {brands.map((b, index) => (
                <div
                    key={index}
                    className={`border p-4 shadow-sm border-white hover:border-red-700 duration-300 ease-in cursor-pointer relative group ${background}`}
                >
                    <div className="w-fit mx-auto my-8">
                        <img src={b.logo} alt="" />
                    </div>
                    <div className="w-fit mx-auto text-lg font-medium">{b.text}</div>

                    <div
                        className="absolute bottom-[-1em] transform -translate-x-4 group-hover:translate-x-0 right-4 rounded-full bg-red-700 p-2 text-white opacity-0 group-hover:opacity-100 duration-300 ease-in-out z-50"
                    >
                        <MdArrowOutward size={20} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CarBrandList