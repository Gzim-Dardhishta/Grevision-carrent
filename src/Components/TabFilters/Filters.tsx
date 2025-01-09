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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 border p-8 bg-white items-center">
            <div>
                <div className="w-full">
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" disabled selected hidden>
                            Make
                        </option>
                        <optgroup label="Make">
                            {makes.map((m, index) => (
                                <option value={m} key={index}>
                                    {m}
                                </option>
                            ))}
                        </optgroup>
                    </select>
                </div>


            </div>

            <div>
                <div className="w-full">
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" disabled selected hidden>
                            Model
                        </option>
                        <optgroup label="Make">
                            {models.map((m, index) => (
                                <option value={m} key={index}>
                                    {m}
                                </option>
                            ))}
                        </optgroup>
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
