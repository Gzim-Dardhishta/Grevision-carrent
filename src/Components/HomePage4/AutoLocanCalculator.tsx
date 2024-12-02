import LoanCalculator from "../CarDetails/LoanCalculator"
import catImage from '../../assets/image-form.jpg'

const AutoLocanCalculator = () => {
    return (
        <div className="flex lg:flex-row flex-col  lg:px-20 px-10 w-full">
            <div className="bg-gray-100 lg:w-1/2 flex flex-col justify-center">
                <LoanCalculator />
            </div>
            <div className="lg:w-1/2">
                <img src={catImage} className=" w-full" alt="" />
            </div>
        </div>
    )
}

export default AutoLocanCalculator