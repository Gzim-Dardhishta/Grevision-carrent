
import { Slider } from "@mui/material"
import Box from '@mui/material/Box';
import { useState } from "react"
import { Input } from "../ui/input";

function valuetext(value: number) {
    return `${value}°C`;
}

const Filters = () => {

    const [value, setValue] = useState<number[]>([1000, 5000]);

    const handleChange = (newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="w-full rounded-lg space-y-3">

            <div className="text-xl font-semibold">
                Search by Filter
            </div>

            <div>
                <Input className="p-6" placeholder='Search here...' />
            </div>

            <div className="mt-10">
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
                <select className="w-full p-3 rounded-md border">
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                </select>
            </div>
            <div>
                <select className="w-full p-3 rounded-md border">
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                </select>
            </div>
            <div>
                <select className="w-full p-3 rounded-md border">
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                </select>
            </div>
            <div>
                <select className="w-full p-3 rounded-md border">
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                </select>
            </div>
            <div>
                <select className="w-full p-3 rounded-md border">
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-1">
                <div>
                    <select className="w-full p-3 rounded-md border">
                        <option value="">Filter</option>
                        <option value="">Filter</option>
                        <option value="">Filter</option>
                        <option value="">Filter</option>
                    </select>
                </div>
                <div>
                    <select className="w-full p-3 rounded-md border">
                        <option value="">Filter</option>
                        <option value="">Filter</option>
                        <option value="">Filter</option>
                        <option value="">Filter</option>
                    </select>
                </div>
            </div>
            <div>
                <select className="w-full p-3 rounded-md border">
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                    <option value="">Filter</option>
                </select>
            </div>

            <div>
                <Input className="p-6" placeholder='Location' value={'Enter your Location'} />
            </div>
            <div>
                <Input className="p-6" placeholder='Engine' value={'Enter Engine Size'} />
            </div>

        </div>
    )
}

export default Filters