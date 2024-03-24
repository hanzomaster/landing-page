export const products = [
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
    categories: ["Electronics", "Gadgets"],
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
    categories: ["Fashion", "Shoes"],
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
    categories: ["Fashion", "T-shirts"],
  },
];
