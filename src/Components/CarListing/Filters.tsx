import { makes, models } from "@/data/Lists"
import { Slider } from "@mui/material"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@radix-ui/react-select"
import Box from '@mui/material/Box';
import { useState } from "react"

function valuetext(value: number) {
    return `${value}°C`;
}

const Filters = () => {

    const [value, setValue] = useState<number[]>([1000, 5000]);

    const handleChange = (newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="w-full">
            <div>
                <Select>
                    <SelectTrigger className="w-full p-6">
                        <SelectValue placeholder="Make" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Make</SelectLabel>
                            {makes.map((m, index) => (
                                <SelectItem value={m} key={index}>{m}</SelectItem>
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
                                <SelectItem value={m} key={index}>{m}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
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
        </div>
    )
}

export default Filters