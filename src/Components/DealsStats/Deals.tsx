import { statistics } from "@/data/Lists";
import { useState, useEffect } from "react";

interface CounterCardProps {
    icon: React.ReactNode;
    target: number;
    label: string;
}

const CounterCard: React.FC<CounterCardProps> = ({ icon, target, label }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const incrementTime = Math.floor(duration / target);

        const counter = setInterval(() => {
            start += 10;
            setCount(start);

            if (start >= target) {
                clearInterval(counter);
                setCount(target);
            }
        }, incrementTime);

        return () => clearInterval(counter);
    }, [target]);

    return (
        <div className="border p-5 py-14 flex flex-col justify-center items-center relative transition-all duration-300 group hover:scale-105">
            <div>{icon}</div>
            <div className="text-4xl font-semibold">{count.toLocaleString()}</div>
            <div className="text-2xl font-medium mt-2">{label}</div>
            <div className="absolute top-0 right-0 bottom-0 w-1 bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
        </div>
    );
};


const Deals = () => {

    return (
        <div className="h-[550px] bg-parallax bg-center bg-cover bg-fixed lg:px-20 px-10">
            <div className=" flex justify-between items-center pt-24 mb-20">
                <div>
                    <h5 className="text-red-500 text-sm tracking-wide mb-4 border-b border-red-500 font-medium w-fit">FIND YOUR CAR BY CAR BRAND</h5>
                    <h4 className="text-white text-5xl font-semibold">
                        Leading The Best Car<br />Dealers In USA
                    </h4>
                </div>
                <p className="text-md md:text-lg mt-4 w-2/5 text-white">
                    There are many variations of simply free text passages of Lorem available but the majority have suffered alteration in some form by injected humour randomized words which don't slightly.
                </p>
            </div>

            <div className="border bg-white p-7 px-10 grid grid-cols-4 gap-6 mt-12">
                {statistics.map((stat) => (
                    <CounterCard
                        key={stat.id}
                        icon={stat.icon}
                        target={stat.target}
                        label={stat.label}
                    />
                ))}
            </div>
        </div>
    )
}

export default Deals