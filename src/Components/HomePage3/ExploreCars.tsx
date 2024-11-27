import { exploreCars } from "@/data/Lists"

const ExploreCars = () => {
    return (
        <div className="xl:px-20 px-5 md:mt-36 mt-56">
            <div className="flex items-center justify-between">
                <div className="text-5xl font-semibold pl-2 border-l border-red-700">Explore Our cars</div>
                <div className="text-lg text-red-700 cursor-pointer">VIEW MORE</div>
            </div>

            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 my-20">
                {exploreCars.map((c, index) => (
                    <div key={index} className="p-6 border rounded-xl py-16 pb-10 hover:bg-slate-50 duration-300 ease-in-out cursor-pointer group" >
                        <div className="group-hover:scale-110 duration-300 ease-out w-fit mx-auto">
                            <img src={c.image} alt="" />
                        </div>
                        <div className="text-center text-2xl font-semibold mt-10">{c.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExploreCars