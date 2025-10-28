import React from "react";
import ProductsList from "../../../components/ProductsList";
import Header from "../../../components/Header";

export default async function jewelry() {
  const apiCategory = "jewelery";
  let products = [];

  try {
    const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(apiCategory)}`);
    if (res.ok) {
      products = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }

  return (
    <main style={{ minHeight: "100vh", background: "white", paddingBottom: 40 }}>
      <Header />
      <section style={{ maxWidth: 1200, margin: "28px auto 0", padding: "0 16px" }}>
        <ProductsList products={products} />
      </section>
    </main>
  );
}
