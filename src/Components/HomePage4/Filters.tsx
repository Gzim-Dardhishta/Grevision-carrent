import { makes, models } from "@/data/Lists";
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IoSearch } from "react-icons/io5";

function valuetext(value: number) {
    return `${value}°C`;
}

const Filters = () => {
    const [value, setValue] = useState<number[]>([1000, 5000]);

    const handleChange = (newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="grid gap-8 border p-8 bg-white items-center pt-24 rounded-3xl">
            <div className="w-full">
                <div className="relative">
                    <select className="w-full p-4 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="" disabled selected>
                            Make
                        </option>
                        {makes.map((m, index) => (
                            <option key={index} value={m}>
                                {m}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="w-full">
                <div className="relative">
                    <select className="w-full p-4 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="" disabled selected>
                            Models
                        </option>
                        {models.map((m, index) => (
                            <option key={index} value={m}>
                                {m}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <Box sx={{ width: '100%' }}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={(_, newValue) => handleChange(newValue)}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={100}
                        max={6000}
                    />
                </Box>
            </div>

            <div>
                <button className="w-full bg-red-700 py-3 rounded-lg text-white flex items-center justify-center">
                    <IoSearch className="mr-2" /> 2356 Cars
                </button>
            </div>
        </div>
    );
}

export default Filters;
