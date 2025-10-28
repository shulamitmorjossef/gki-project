"use client";

import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img
          src="/bee-logo.png" 
          alt="Bee Logo"
          className={styles.logo}
        />
        <span className={styles.shopText}>Shop</span>
      </div>

      <nav className={styles.center}>
       <a href="/category/men">Men</a>
       <a href="/category/women">Women</a>
       <a href="/category/jewelry">Jewelry</a>
       <a href="/category/electronics">Electronics</a>
      </nav>

      <div className={styles.right}>
        <a href="/">Cart</a>
      </div>
    </header>
  );
}
