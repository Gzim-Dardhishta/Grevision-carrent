import brandLogo from '../assets/6.png'
import car from '../assets/thum7.jpg'
import carImg from '../assets/c5.png'
import popularCar from '../assets/2.jpg'
import { CarIcon } from '@/icons'
import porche from '../assets/wg2.jpg'
import car2 from '../assets/rivew-custom.jpg'
import { FaTags } from "react-icons/fa";
import car8 from '../assets/car8.jpg'
import benz from '../assets/wg5.jpg'
import c8 from '../assets/c8.png'
import car5 from '../assets/car5.jpg'

import { FaCarSide, FaHashtag, FaIdBadge, FaCalendarAlt, FaRoad, FaCogs, FaArrowsAltH, FaTachometerAlt, FaGasPump, FaDoorOpen, FaPalette, FaChair, FaCity } from "react-icons/fa";

export const NavLinks = {
    home: [
        {
            text: 'Home Page 1',
            path: '/'
        },
        {
            text: 'Home Page 2',
            path: '/home2'
        },
        {
            text: 'Home Page 3',
            path: '/home3'
        },
        {
            text: 'Home Page 4',
            path: '/home4'
        },
        {
            text: 'Home Page 5',
            path: '/home5'
        },
        {
            text: 'Home Page 6',
            path: '/home6'
        }
    ]
}

export const makes = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Hyundai",
    "Nissan"
];

export const models = [
    "Civic",
    "Accord",
    "CR-V",
    "F-150",
    "Mustang",
    "3 Series",
    "X5",
    "5 Series",
    "C-Class",
    "E-Class",
    "S-Class",
    "A4",
    "Q5",
    "A6",
    "Golf",
    "Passat",
    "Tiguan"
];


export const brands = [
    {
        logo: brandLogo,
        text: 'Mercedes'
    },
    {
        logo: brandLogo,
        text: 'Mercedes'
    },
    {
        logo: brandLogo,
        text: 'Mercedes'
    },
    {
        logo: brandLogo,
        text: 'Mercedes'
    },
    {
        logo: brandLogo,
        text: 'Mercedes'
    },
    {
        logo: brandLogo,
        text: 'Mercedes'
    },
]

export const cars = [
    {
        id: 1,
        title: "Chevrolet Suburban 2021 mo",
        description: "Mini Cooper 3 Similar",
        price: "$27,000",
        year: 2023,
        fuelType: "Petrol",
        mileage: "90 k.m",
        transmission: "Auto",
        imagesCount: 5,
        featured: true,
        imageUrl: car
    },
    {
        id: 2,
        title: "Toyota Camry 2022",
        description: "Toyota Avalon Similar",
        price: "$23,000",
        year: 2022,
        fuelType: "Hybrid",
        mileage: "50 k.m",
        transmission: "Auto",
        imagesCount: 6,
        featured: false,
        imageUrl: car
    },
    {
        id: 3,
        title: "Honda Civic 2020",
        description: "Honda Accord Similar",
        price: "$19,000",
        year: 2020,
        fuelType: "Petrol",
        mileage: "30 k.m",
        transmission: "Manual",
        imagesCount: 4,
        featured: false,
        imageUrl: car
    },
    {
        id: 4,
        title: "BMW X5 2023",
        description: "BMW X3 Similar",
        price: "$55,000",
        year: 2023,
        fuelType: "Diesel",
        mileage: "15 k.m",
        transmission: "Auto",
        imagesCount: 10,
        featured: true,
        imageUrl: car
    },
    {
        id: 5,
        title: "Audi A4 2021",
        description: "Audi A6 Similar",
        price: "$29,000",
        year: 2021,
        fuelType: "Petrol",
        mileage: "40 k.m",
        transmission: "Auto",
        imagesCount: 3,
        featured: false,
        imageUrl: car
    },
    {
        id: 6,
        title: "Mercedes-Benz C-Class 2019",
        description: "Mercedes E-Class Similar",
        price: "$33,000",
        year: 2019,
        fuelType: "Diesel",
        mileage: "60 k.m",
        transmission: "Auto",
        imagesCount: 8,
        featured: true,
        imageUrl: car
    }
];


export const carsCategory = [
    {
        image: carImg,
        name: 'Supercar'
    },
    {
        image: carImg,
        name: 'Supercar'
    },
    {
        image: carImg,
        name: 'Supercar'
    },
    {
        image: carImg,
        name: 'Supercar'
    },
    {
        image: carImg,
        name: 'Supercar'
    },
    {
        image: carImg,
        name: 'Supercar'
    }
]

export const popularCars = [
    {
        id: 1,
        featured: true,
        year: 2023,
        model: "Mini Cooper 3 Similar",
        name: "Chevrolet Suburban 2021 mo",
        fuelType: "Petrol",
        mileage: "90 k.m",
        transmission: "Auto",
        price: "$3958",
        originalPrice: "$7894",
        image: popularCar,
    },
    {
        id: 2,
        featured: true,
        year: 2023,
        model: "Mini Cooper 3 Similar",
        name: "Chevrolet Suburban 2021 mo",
        fuelType: "Petrol",
        mileage: "90 k.m",
        transmission: "Auto",
        price: "$3958",
        originalPrice: "$7894",
        image: popularCar,
    },
];


export const statistics = [
    { id: 1, icon: <CarIcon />, target: 1200, label: "Vehicle In Stock Cars" },
    { id: 2, icon: <CarIcon />, target: 120, label: "Satisfied Customers" },
    { id: 3, icon: <CarIcon />, target: 1200, label: "Award Achievement" },
    { id: 4, icon: <CarIcon />, target: 60, label: "Total Showroom" },
];

export const clientReviews = [
    {
        service: "Trusted Car Dealer Service",
        title: "What Client’s Says",
        message: "The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure Events moment.Dislike men who are so beguiled and demoraliz worlds by the charms of pleasure “",
        name: "Leslie Alexander",
        designation: "ThemeForest Exclusive"
    },
    {
        service: "Reliable Auto Sales",
        title: "What Client’s Says",
        message: "The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure Events moment.Dislike men who are so beguiled and demoraliz worlds by the charms of pleasure “",
        name: "John Doe",
        designation: "Verified Buyer",
    },
    {
        service: "Top-Notch Customer Service",
        title: "What Client’s Says",
        message: "The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure Events moment.Dislike men who are so beguiled and demoraliz worlds by the charms of pleasure “",
        name: "Jane Smith",
        designation: "Long-Term Customer"
    },
    {
        service: "Trusted Vehicle Solutions",
        title: "What Client’s Says",
        message: "The other hand we denounce with righteou indg ation and dislike men who are so beguiled and demorali ed by the of pleasure Events moment.Dislike men who are so beguiled and demoraliz worlds by the charms of pleasure “",
        name: "Michael Johnson",
        designation: "First-Time Buyer"
    }
];




export const businessCars = [
    {
        category: "Business",
        image: porche,
        author: "Mehedii.H",
        comments: "03",
        title: "Five Ways That Can Develop Your Business",
        description: "The time it takes to paint a car repair depends on various factors.",
    },
    {
        category: "Business",
        image: porche,
        author: "Mehedii.H",
        comments: "03",
        title: "Five Ways That Can Develop Your Business",
        description: "The time it takes to paint a car repair depends on various factors.",
    },
    {
        category: "Business",
        image: porche,
        author: "Mehedii.H",
        comments: "03",
        title: "Five Ways That Can Develop Your Business",
        description: "The time it takes to paint a car repair depends on various factors.",
    },
];



export const footerLinks = [
    {
        category: "Quick Links",
        links: [
            { name: "Dealer Locator", url: "/" },
            { name: "Service Locator", url: "/" },
            { name: "Pre-owned", url: "/" },
            { name: "Accessori Originali", url: "/" },
            { name: "Spare Parts", url: "/" },
            { name: "Services", url: "/" },
        ],
    },
    {
        category: "Research",
        links: [
            { name: "Build & Price A Vehicle", url: "/" },
            { name: "Compare Models", url: "/" },
            { name: "Warranty", url: "/" },
            { name: "Download a Brochure", url: "/" },
            { name: "Sign-Up for Updates", url: "/" },
            { name: "Mail Me a Brochure", url: "/" },
        ],
    },
];

export const carOverviewSplit = {
    part1: [
        { label: "Condition", value: "New", icon: <FaCarSide /> },
        { label: "Stock Number", value: "N8990", icon: <FaHashtag /> },
        { label: "VIN Number", value: "84HKFI792KJDC", icon: <FaIdBadge /> },
        { label: "Year", value: "2023", icon: <FaCalendarAlt /> },
        { label: "Mileage", value: "28,000 miles", icon: <FaRoad /> },
        { label: "Transmission", value: "Automatic", icon: <FaCogs /> },
        { label: "Engine Size", value: "4.8L", icon: <FaTachometerAlt /> },
    ],
    part2: [
        { label: "Driver Type", value: "2WD", icon: <FaArrowsAltH /> },
        { label: "Cylinders", value: "6", icon: <FaCogs /> },
        { label: "Fuel Type", value: "Petrol", icon: <FaGasPump /> },
        { label: "Doors", value: "4", icon: <FaDoorOpen /> },
        { label: "Color", value: "Black", icon: <FaPalette /> },
        { label: "Seats", value: "5", icon: <FaChair /> },
        { label: "City MPG", value: "18", icon: <FaCity /> },
        { label: "Highway MPG", value: "28", icon: <FaCity /> },
    ],
};



export const features = [
    {
        category: "Safety",
        items: ["A/C: Front", "Central locking", "Leather", "Sports package", "Navigation system"],
    },
    {
        category: "Exterior",
        items: ["Front fog light", "Rain sensing wipe", "Rear Spoilers", "Sun roof", "Navigation system"],
    },
    {
        category: "Interior",
        items: ["A/C: Front", "Child safety locks", "Leather", "Driver air bags", "Navigation system"],
    },
    {
        category: "Convenience",
        items: ["Power steering", "Vanity mirror", "Trunk Light"],
    },
];



export const reviews = [
    {
        id: 1,
        name: "Rohan De Spond",
        date: "25 Jan 2021",
        title: "very awesome & Comfort",
        rating: 5.0,
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur have is covered many vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibul non justo consectetur, cursus ante, tincidunt sapien. Nulla quis.",
        images: [
            car2,
            car2,
        ]
    },
    {
        id: 2,
        name: "John Doe",
        date: "15 Dec 2020",
        title: "Excellent Performance",
        rating: 4.8,
        comment:
            "Curabitur sollicitudin mauris nec massa pulvinar, sed interdum velit pharetra. Phasellus aliquam ante ut elit dapibus interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut vel justo a elit gravida auctor nec id mi.",
        images: [
            car2,
            car2,
        ]
    },
];


export const bestcars = [
    {
        id: 1,
        image: car2,
        title: "Mercedez benz - c class",
        rating: 5,
        reviews: 2,
        fuel: "Petrol",
        distance: "90 k.m",
        transmission: "Auto",
        price: 399,
        oldPrice: 489,
    },
    {
        id: 2,
        image: car2,
        title: "Mercedez benz - c class",
        rating: 5,
        reviews: 2,
        fuel: "Petrol",
        distance: "90 k.m",
        transmission: "Auto",
        price: 399,
        oldPrice: 489,
    },
    {
        id: 3,
        image: car2,
        title: "Mercedez benz - c class",
        rating: 5,
        reviews: 2,
        fuel: "Petrol",
        distance: "90 k.m",
        transmission: "Auto",
        price: 399,
        oldPrice: 489,
    },
    {
        id: 4,
        image: car2,
        title: "Mercedez benz - c class",
        rating: 5,
        reviews: 2,
        fuel: "Petrol",
        distance: "90 k.m",
        transmission: "Auto",
        price: 399,
        oldPrice: 489,
    },
    {
        id: 5,
        image: car2,
        title: "Mercedez benz - c class",
        rating: 5,
        reviews: 2,
        fuel: "Petrol",
        distance: "90 k.m",
        transmission: "Auto",
        price: 399,
        oldPrice: 489,
    },
    {
        id: 6,
        image: car2,
        title: "Mercedez benz - c class",
        rating: 5,
        reviews: 2,
        fuel: "Petrol",
        distance: "90 k.m",
        transmission: "Auto",
        price: 399,
        oldPrice: 489,
    },
    {
        id: 7,
        image: car2,
        title: "Mercedez benz - c class",
        rating: 5,
        reviews: 2,
        fuel: "Petrol",
        distance: "90 k.m",
        transmission: "Auto",
        price: 399,
        oldPrice: 489,
    },
];


export const vehicles = [
    { id: 1, type: 'Minivan', image: popularCar },
    { id: 2, type: 'Hatchback', image: popularCar },
    { id: 3, type: 'Sedan', image: popularCar },
    { id: 4, type: 'Coupe', image: popularCar },
];


export const featuresHomePage2 = [
    {
        title: 'Trusted Car Dealership',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <FaTags />
    },
    {
        title: 'Special Gift Offer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <FaTags />
    },
    {
        title: 'Flexible Pricing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <FaTags />
    },
    {
        title: 'Expert Car Service',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <FaTags />
    },
];


export const popularMakes = [
    {
        id: 1,
        title: "Chevrolet Suburban 2021 mo",
        description: "Mini Cooper 3 Similar",
        price: "$27,000",
        year: 2023,
        fuelType: "Petrol",
        mileage: "90 k.m",
        transmission: "Auto",
        imagesCount: 5,
        featured: true,
        imageUrl: car8
    },
    {
        id: 2,
        title: "Toyota Camry 2022",
        description: "Toyota Avalon Similar",
        price: "$23,000",
        year: 2022,
        fuelType: "Hybrid",
        mileage: "50 k.m",
        transmission: "Auto",
        imagesCount: 6,
        featured: false,
        imageUrl: car8
    },
    {
        id: 3,
        title: "Honda Civic 2020",
        description: "Honda Accord Similar",
        price: "$19,000",
        year: 2020,
        fuelType: "Petrol",
        mileage: "30 k.m",
        transmission: "Manual",
        imagesCount: 4,
        featured: false,
        imageUrl: car8
    }
];

export const latestNews = [
    {
        image: benz,
        title: "How The Maruti Invicto Is A Lesson In Brand Build...",
        author: "Mehedii .H",
        comments: "03",
    },
    {
        image: benz,
        title: "How The Maruti Invicto Is A Lesson In Brand Build...",
        author: "Mehedii .H",
        comments: "03",
    },
    {
        image: benz,
        title: "How The Maruti Invicto Is A Lesson In Brand Build...",
        author: "Mehedii .H",
        comments: "03",
    },
];


export const exploreCars = [
    {
        text: 'Cabriolet',
        image: c8
    },
    {
        text: 'Cabriolet',
        image: c8
    },
    {
        text: 'Cabriolet',
        image: c8
    },
    {
        text: 'Cabriolet',
        image: c8
    },
    {
        text: 'Cabriolet',
        image: c8
    },
    {
        text: 'Cabriolet',
        image: c8
    }
]

export const cars6 = [
    { type: "Sedan", image: car },
    { type: "SUV", image: car },
    { type: "Hatchback", image: car },
    { type: "Hybrid", image: car },
    { type: "Coupe", image: car },
];

export const steps = [
    {
        number: "1",
        title: "Register For Free",
        description:
            "For 15 years, we raising the standard of used car most innovative and reliable used vehicle program",
    },
    {
        number: "2",
        title: "Submit Your Cars",
        description:
            "For 15 years, we raising the standard of used car most innovative and reliable used vehicle program",
    },
    {
        number: "3",
        title: "Get Connected",
        description:
            "For 15 years, we raising the standard of used car most innovative and reliable used vehicle program",
    },
];



export const carListing = [
    {
        id: 1,
        name: "Mercedez benz - c class",
        image: car5,
        price: 399,
        oldPrice: 489,
        fuelType: "Petrol",
        mileage: "90 k.m",
        transmission: "Auto",
        reviews: 2,
        rating: 5,
        featured: true,
    },
    {
        id: 2,
        name: "BMW 3 Series",
        image: car5,
        price: 429,
        oldPrice: 519,
        fuelType: "Diesel",
        mileage: "110 k.m",
        transmission: "Manual",
        reviews: 5,
        rating: 4.5,
        featured: false,
    },
    {
        id: 3,
        name: "Audi A4",
        image: car5,
        price: 459,
        oldPrice: 529,
        fuelType: "Hybrid",
        mileage: "95 k.m",
        transmission: "Auto",
        reviews: 3,
        rating: 4,
        featured: true,
    },
    {
        id: 4,
        name: "Toyota Camry",
        image: car5,
        price: 299,
        oldPrice: 359,
        fuelType: "Petrol",
        mileage: "80 k.m",
        transmission: "Auto",
        reviews: 8,
        rating: 5,
        featured: false,
    },
    {
        id: 5,
        name: "Tesla Model 3",
        image: car5,
        price: 599,
        oldPrice: 699,
        fuelType: "Electric",
        mileage: "300 k.m",
        transmission: "Auto",
        reviews: 10,
        rating: 5,
        featured: true,
    },
    {
        id: 6,
        name: "Ford Mustang",
        image: car5,
        price: 499,
        oldPrice: 579,
        fuelType: "Petrol",
        mileage: "150 k.m",
        transmission: "Manual",
        reviews: 6,
        rating: 4.5,
        featured: false,
    },
    {
        id: 7,
        name: "Chevrolet Malibu",
        image: car5,
        price: 349,
        oldPrice: 429,
        fuelType: "Diesel",
        mileage: "130 k.m",
        transmission: "Auto",
        reviews: 4,
        rating: 4,
        featured: false,
    },
    {
        id: 8,
        name: "Hyundai Sonata",
        image: car5,
        price: 279,
        oldPrice: 339,
        fuelType: "Petrol",
        mileage: "70 k.m",
        transmission: "Auto",
        reviews: 3,
        rating: 3.5,
        featured: false,
    },
    {
        id: 9,
        name: "Kia Optima",
        image: car5,
        price: 319,
        oldPrice: 389,
        fuelType: "Petrol",
        mileage: "85 k.m",
        transmission: "Manual",
        reviews: 4,
        rating: 4,
        featured: false,
    },
];
