
import partner1 from '../../assets/logo-partner.png'

const PartnerSlider = () => {
    const logos = [
        partner1,
        partner1,
        partner1,
        partner1,
        partner1
    ];

    return (
        <div className="overflow-hidden py-24 px-20 bg-white">
            <div className="flex items-center justify-center mb-4">
                <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
                <h2 className="text-center font-bold text-lg">
                    OUR PARTNERS & SUPPORTERS
                </h2>
                <div className="flex-grow border-t-2 border-gray-300 mx-4"></div>
            </div>
            <div className="relative flex items-center">
                <div className="flex animate-slowSlide space-x-40 space-y-8">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex-none w-40 mx-4">
                            <img src={logo} alt="Partner Logo" className="opacity-70" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnerSlider;
