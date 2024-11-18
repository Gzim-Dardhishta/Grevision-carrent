import { businessCars } from '@/data/Lists'
import CarCard from './CarCard'

const CarsList = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {businessCars.map((card, index) => (
                    <CarCard card={card} key={index} />
                ))}
            </div>
        </>
    )
}

export default CarsList