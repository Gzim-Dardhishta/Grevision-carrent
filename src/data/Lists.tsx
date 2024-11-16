import brandLogo from '../assets/6.png'
import car from '../assets/thum7.jpg'
import carImg from '../assets/c5.png'
import popularCar from '../assets/2.jpg'
import { CarIcon } from '@/icons'

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

