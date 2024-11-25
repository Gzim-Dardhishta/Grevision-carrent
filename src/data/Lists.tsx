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

import { FaCarSide, FaHashtag, FaIdBadge, FaCalendarAlt, FaRoad, FaCogs, FaArrowsAltH, FaTachometerAlt, FaGasPump, FaDoorOpen, FaPalette, FaChair, FaCity } from "react-icons/fa";

export const NavLinks = {
    home: [
        {
            text: 'Link 1',
            path: '/'
        },
        {
            text: 'Link 2',
            path: '/'
        },
        {
            text: 'Link 3',
            path: '/'
        },
        {
            text: 'Link 4',
            path: '/'
        },
        {
            text: 'Link 5',
            path: '/'
        }
    ],
    cars: [
        {
            text: 'Link 1',
            path: '/'
        },
        {
            text: 'Link 2',
            path: '/'
        },
        {
            text: 'Link 3',
            path: '/'
        },
        {
            text: 'Link 4',
            path: '/'
        },
        {
            text: 'Link 5',
            path: '/'
        }
    ],
    page: [
        {
            text: 'Link 1',
            path: '/'
        },
        {
            text: 'Link 2',
            path: '/'
        },
        {
            text: 'Link 3',
            path: '/'
        },
        {
            text: 'Link 4',
            path: '/'
        },
        {
            text: 'Link 5',
            path: '/'
        }
    ],
    news: [
        {
            text: 'Link 1',
            path: '/'
        },
        {
            text: 'Link 2',
            path: '/'
        },
        {
            text: 'Link 3',
            path: '/'
        },
        {
            text: 'Link 4',
            path: '/'
        },
        {
            text: 'Link 5',
            path: '/'
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