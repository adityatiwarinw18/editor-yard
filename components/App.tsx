"use client";

import ProductList from "./ProductList";

const products = [
  {
    id: 1,
    name: "Colors of summer in Poland",
    price: "$1500",
    image: "product1.jpg",
  },
  {
    id: 2,
    name: "Mediterranean sun on Malta",
    price: "$1899",
    image: "product2.jpg",
  },
  {
    id: 3,
    name: "Tastes of Asia",
    price: "$2599",
    image: "product3.jpg",
  },
  {
    id: 4,
    name: "Exotic India",
    price: "$2200",
    image: "product4.jpg",
  },
];

export default function App() {
  return <ProductList products={products} onClick={() => {}} />;
}
