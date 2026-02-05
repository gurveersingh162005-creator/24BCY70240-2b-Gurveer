"use client";

import { useState } from "react";


type Product = {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing";
  image: string;

};

const products: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" ,image: "/products/headphones.png",},
  { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing",image: "/products/tshirt.png", },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, category: "electronics",image: "/products/speaker.png", },
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" ,image: "/products/jeans.png",},
];

export default function Home() {
  const [filter, setFilter] = useState<"all" | "electronics" | "clothing">("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Product Filter
      </h1>

      <div style={{ marginBottom: "30px" }}>
        <label style={{ fontSize: "18px", marginRight: "10px" }}>
          Filter by:
        </label>
        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as "all" | "electronics" | "clothing")
          }
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h2>{product.name}</h2>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              ${product.price}
            </p>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                backgroundColor:
                  product.category === "electronics" ? "#2563eb" : "#60a5fa",
                color: "white",
                fontSize: "14px",
              }}
            >
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
