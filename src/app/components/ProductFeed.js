"use client";
import React, { useEffect, useState } from "react";
import Products from "./Product";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }
  return res.json();
}

function ProductFeed() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setProducts(data);
      } catch (error) {
        console.log("erroe fetching data", error);
      }
    }
    fetchData();
  }, []);
  console.log(products);
  return (
    <div className="mx-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {products.map((item, index) => (
        <Products item={item} key={index} />
      ))}
    </div>
  );
}

export default ProductFeed;
