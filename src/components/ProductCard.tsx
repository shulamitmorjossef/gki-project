"use client";

import React, {JSX} from "react";
import styles from "../styles/ProductCard.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string; 
  category: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }): JSX.Element {
    const categoryName = product.category === 'men\'s clothing' 
        ? 'Men Clothing' 
        : product.category; 

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
         <img src={product.image} alt={product.title} className={styles.productImage} />
      </div> 
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{categoryName}</p>
        <p className={styles.price}>{product.price.toFixed(2)} $</p> 
 
        <button className={styles.addToCartButton}>
            <span className={styles.starIcon}>⭐️</span> ADD TO CART
        </button>
      </div>
    </article>
  );
}