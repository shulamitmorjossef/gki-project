"use client";

import React from "react";
import styles from "../styles/ProductCard.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <img src={product.image} alt={product.title} />
      <div className={styles.info}>
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.description}>
          {product.description.length > 120
            ? product.description.slice(0, 120) + "..."
            : product.description}
        </p>
      </div>
    </article>
  );
}
