"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductsList.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type Props = {
  products?: Product[]; 
};

export default function ProductsList({ products: initialProducts }: Props) {
  const [products, setProducts] = useState<Product[] | null>(initialProducts || null);
  const [loading, setLoading] = useState(!initialProducts);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialProducts) return; 
    let cancelled = false;

    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        if (!cancelled) setProducts(data);
      } catch (err: any) {
        if (!cancelled) setError(err.message || "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProducts();
    return () => { cancelled = true; };
  }, [initialProducts]);

  if (loading) return <div>Loading products…</div>;
  if (error) return <div>get an error: {error}</div>;
  if (!products || products.length === 0) return <div>There are no products to display</div>;

  return (
    <section className={styles.list}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
