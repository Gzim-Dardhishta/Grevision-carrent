import { makes, models } from "@/data/Lists"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";

function valuetext(value: number) {
    return `${value}°C`;
}

const Filters = () => {

    const [value, setValue] = useState<number[]>([1000, 5000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 border p-8 bg-white items-center">
            <div>
                <Select>
                    <SelectTrigger className="w-full p-6">
                        <SelectValue placeholder="Make" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Make</SelectLabel>
                            {makes.map((m, index) => (
                                <SelectItem value="apple" key={index}>{m}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Select>
                    <SelectTrigger className="w-full p-6">
                        <SelectValue placeholder="Models" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Models</SelectLabel>
                            {models.map((m, index) => (
                                <SelectItem value="apple" key={index}>{m}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Box sx={{ width: '100%' }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={100}
                        max={6000}
                    />
                </Box>
            </div>

            <div>
                <Button className="w-full bg-red-700 p-6">
                    <IoSearch />  2356 Cars
                </Button>
            </div>
        </div>
    )
}

export default Filters