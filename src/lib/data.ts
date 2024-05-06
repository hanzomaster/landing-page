import { type EateryType, type ProductType } from "@/types/product";

export const navLinks = [
  {
    route: "Trang chủ",
    path: "/",
  },
  {
    route: "Món ăn",
    path: "/foods",
  },
  {
    route: "Quán ăn",
    path: "/eateries",
  },
  {
    route: "Gia nhập",
    path: "/onboarding",
  },
];

export const products: ProductType[] = [
  {
    id: "12345",
    title: "Coolest Gadget Ever",
    description: "This gadget does amazing things, you won't believe it!",
    images: [
      "https://source.unsplash.com/featured/?gadget",
      "https://source.unsplash.com/featured/?technology",
    ],
    price: 99.99,
    discount: 10,
    stock: 25,
    isAvailable: true,
    brand: {
      id: "xyz",
      name: "Super Tech Company",
    },
    categories: [
      {
        id: "1",
        title: "Electronics",
        description: "Electronic gadgets",
      },
      {
        id: "2",
        title: "Gadgets",
        description: "Gadgets",
      },
    ],
  },
  {
    id: "54321",
    title: "Super Cool Shoes",
    description: "These shoes will make you run faster and jump higher!",
    images: [
      "https://source.unsplash.com/featured/?shoes",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 49.99,
    discount: 0,
    stock: 10,
    isAvailable: false,
    brand: {
      id: "abc",
      name: "Shoe Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "4",
        title: "Shoes",
        description: "Shoes",
      },
    ],
  },
  {
    id: "67890",
    title: "Awesome T-shirt",
    description:
      "This t-shirt is so cool, you'll be the envy of all your friends!",
    images: [
      "https://source.unsplash.com/featured/?t-shirt",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 19.99,
    discount: 5,
    stock: 50,
    isAvailable: true,
    brand: {
      id: "def",
      name: "Tee Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "5",
        title: "T-shirts",
        description: "T-shirts",
      },
    ],
  },
  {
    id: "13579",
    title: "Fantastic Watch",
    description: "This watch will make you look and feel fantastic!",
    images: [
      "https://source.unsplash.com/featured/?watch",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 79.99,
    discount: 15,
    stock: 5,
    isAvailable: true,
    brand: {
      id: "ghi",
      name: "Watch Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "6",
        title: "Watches",
        description: "Watches",
      },
    ],
  },
  {
    id: "24680",
    title: "Incredible Hat",
    description: "This hat will make you look and feel incredible!",
    images: [
      "https://source.unsplash.com/featured/?hat",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 29.99,
    discount: 0,
    stock: 20,
    isAvailable: true,
    brand: {
      id: "jkl",
      name: "Hat Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "7",
        title: "Hats",
        description: "Hats",
      },
    ],
  },
  {
    id: "36912",
    title: "Amazing Sunglasses",
    description: "These sunglasses will make you look and feel amazing!",
    images: [
      "https://source.unsplash.com/featured/?sunglasses",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 39.99,
    discount: 5,
    stock: 15,
    isAvailable: true,
    brand: {
      id: "mno",
      name: "Sunglasses Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "8",
        title: "Sunglasses",
        description: "Sunglasses",
      },
    ],
  },
  {
    id: "48264",
    title: "Stylish Jacket",
    description: "This jacket will make you look and feel stylish!",
    images: [
      "https://source.unsplash.com/featured/?jacket",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 59.99,
    discount: 10,
    stock: 30,
    isAvailable: true,
    brand: {
      id: "pqr",
      name: "Jacket Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "9",
        title: "Jackets",
        description: "Jackets",
      },
    ],
  },
  {
    id: "50678",
    title: "Cool Backpack",
    description: "This backpack will make you look and feel cool!",
    images: [
      "https://source.unsplash.com/featured/?backpack",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 49.99,
    discount: 0,
    stock: 10,
    isAvailable: false,
    brand: {
      id: "stu",
      name: "Backpack Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "10",
        title: "Backpacks",
        description: "Backpacks",
      },
    ],
  },
  {
    id: "12345",
    title: "Coolest Gadget Ever",
    description: "This gadget does amazing things, you won't believe it!",
    images: [
      "https://source.unsplash.com/featured/?gadget",
      "https://source.unsplash.com/featured/?technology",
    ],
    price: 99.99,
    discount: 10,
    stock: 25,
    isAvailable: true,
    brand: {
      id: "xyz",
      name: "Super Tech Company",
    },
    categories: [
      {
        id: "1",
        title: "Electronics",
        description: "Electronic gadgets",
      },
      {
        id: "2",
        title: "Gadgets",
        description: "Gadgets",
      },
    ],
  },
  {
    id: "54321",
    title: "Super Cool Shoes",
    description: "These shoes will make you run faster and jump higher!",
    images: [
      "https://source.unsplash.com/featured/?shoes",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 49.99,
    discount: 0,
    stock: 10,
    isAvailable: false,
    brand: {
      id: "abc",
      name: "Shoe Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "4",
        title: "Shoes",
        description: "Shoes",
      },
    ],
  },
  {
    id: "67890",
    title: "Awesome T-shirt",
    description:
      "This t-shirt is so cool, you'll be the envy of all your friends!",
    images: [
      "https://source.unsplash.com/featured/?t-shirt",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 19.99,
    discount: 5,
    stock: 50,
    isAvailable: true,
    brand: {
      id: "def",
      name: "Tee Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "5",
        title: "T-shirts",
        description: "T-shirts",
      },
    ],
  },
  {
    id: "13579",
    title: "Fantastic Watch",
    description: "This watch will make you look and feel fantastic!",
    images: [
      "https://source.unsplash.com/featured/?watch",
      "https://source.unsplash.com/featured/?fashion",
    ],
    price: 79.99,
    discount: 15,
    stock: 5,
    isAvailable: true,
    brand: {
      id: "ghi",
      name: "Watch Co.",
    },
    categories: [
      {
        id: "3",
        title: "Fashion",
        description: "Fashion items",
      },
      {
        id: "6",
        title: "Watches",
        description: "Watches",
      },
    ],
  },
];

export const eateries: EateryType[] = [
  {
    id: "12345",
    name: "Coolest Restaurant Ever",
    description: "This restaurant serves amazing food, you won't believe it!",
    images: [
      "https://source.unsplash.com/featured/?restaurant",
      "https://source.unsplash.com/featured/?food",
    ],
    location: "123 Main St, Anytown, USA",
    hours: "Mon-Sun: 8am-10pm",
    phone: "123-456-7890",
    website: "https://www.example.com",
    categories: [
      {
        id: "1",
        title: "American",
        description: "American cuisine",
      },
      {
        id: "2",
        title: "Fast Food",
        description: "Fast food",
      },
    ],
  },
  {
    id: "54321",
    name: "Super Cool Cafe",
    description: "This café serves amazing coffee and pastries!",
    images: [
      "https://source.unsplash.com/featured/?cafe",
      "https://source.unsplash.com/featured/?coffee",
    ],
    location: "456 Elm St, Anytown, USA",
    hours: "Mon-Sun: 7am-7pm",
    phone: "234-567-8901",
    website: "https://www.example.com",
    categories: [
      {
        id: "3",
        title: "Cafe",
        description: "Cafe",
      },
      {
        id: "4",
        title: "Coffee Shop",
        description: "Coffee shop",
      },
    ],
  },
  {
    id: "67890",
    name: "Awesome Diner",
    description: "This diner serves classic American comfort food!",
    images: [
      "https://source.unsplash.com/featured/?diner",
      "https://source.unsplash.com/featured/?food",
    ],
    location: "789 Oak St, Anytown, USA",
    hours: "Mon-Sun: 6am-9pm",
    phone: "345-678-9012",
    website: "https://www.example.com",
    categories: [
      {
        id: "5",
        title: "Diner",
        description: "Diner",
      },
      {
        id: "6",
        title: "American",
        description: "American cuisine",
      },
    ],
  },
];
