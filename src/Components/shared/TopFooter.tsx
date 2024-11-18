
const TopFooter = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center py-16 border-b">
            <div className="text-5xl md:w-1/2 md:mb-0 mb-10 font-semibold md:text-left text-center">
                Do You Have <span className="text-red-600">Something</span> To Sell Through Us?
            </div>

            <div>
                <button className="px-7 py-5 uppercase bg-red-600 rounded-none hover:bg-white hover:text-black">Sell Your Car Today</button>
            </div>
        </div>
    )
}

export default TopFooter