import { Product } from "./types";

const products: Product[] = [
  {
    id: 1,
    title: "Sample Product 1",
    price: 49.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Tops",
    image: ["/gir1.jpg"],
    slug: "sample-product-1",
    size: ["S", "M", "L"],
    color: ["Red", "Blue", "Green"],
    qty: 0,
    discount: 10,
  },
  {
    id: 2,
    title: "Sample Product 2",
    price: 29.99,
    description:
      "Pellentesque habitant morbi tristique senectus et .",
    category: "Shoes",
    image: ["/shoes1.jpg"],
    slug: "sample-product-2",
    size: ["XS", "S", "M", "XL"],
    color: ["Black", "White", "Gray"],
    qty: 0,
    discount: 2
  },
  {
    id: 3,
    title: "Sample Product 3",
    price: 99.99,
    description: "Nulla facilisi. Curabitur pretium tincidunt lacus.",
    category: "Pants",
    image: ["/pant1.jpg"],
    slug: "sample-product-3",
    size: ["One Size"],
    color: ["Brown"],
    qty: 0,
    discount: 15,
  },
  {
    id: 4,
    title: "Sample Product 4",
    price: 59.99,
    description: "Donec vitae sapien ut libero venenatis faucibus.",
    category: "Acessories",
    image: ["/p1.jpg"],
    slug: "sample-product-4",
    size: ["N/A"],
    color: ["N/A"],
    qty: 0,
    discount: 5,
  },
  {
    id: 5,
    title: "Sample Product 5",
    price: 19.99,
    description: "Cras ultricies mi eu turpis hendrerit fringilla.",
    category: "Acessories",
    image: ["/p1.jpg"],
    slug: "sample-product-5",
    size: ["S", "M"],
    color: ["Yellow", "Pink"],
    qty: 0,
    discount: 3,
  },
  {
    id: 6,
    title: "Sample Product 6",
    price: 79.99,
    description:
      "Vestibulum mollis sed, nonummy id, metus.",
    category: "Pants",
    image: ["/pant2.jpg"],
    slug: "sample-product-6",
    size: ["Medium", "Large"],
    color: ["White", "Gold"],
    qty: 0,
    discount: 20,
  }, // Add more products as needed
];

export default products;
