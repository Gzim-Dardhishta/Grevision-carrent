import { useEffect, useState } from "react";
import carPhoto from '../../assets/video.jpg'
import carPhoto1 from '../../assets/wg2.jpg'
import carPhoto2 from '../../assets/thum7.jpg'
import carPhoto3 from '../../assets/video.jpg'
import carPhoto4 from '../../assets/video.jpg'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const images = [
    carPhoto,
    carPhoto1,
    carPhoto2,
    carPhoto3,
    carPhoto4,
];

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="w-full">
            <div className="relative">
                <img
                    src={images[currentImage]}
                    alt={`Slide ${currentImage + 1}`}
                    className="w-full h-[600px] object-cover rounded-lg"
                />
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white  p-6 rounded-full"
                    onClick={prevImage}
                >
                    <FaAngleLeft />
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-6 rounded-full"
                    onClick={nextImage}
                >
                    <FaAngleRight />
                </button>
            </div>

            <div className="flex justify-center space-x-4 mt-4 w-full">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-full h-32 rounded-lg overflow-hidden ${currentImage === index ? "border-4 border-red-500" : ""
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
