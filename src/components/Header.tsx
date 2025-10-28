"use client";

import React, { JSX } from "react";
import styles from "../styles/Header.module.css";

export default function Header(): JSX.Element {
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
       {/* <a href="/" className={styles.activeLink}>Home</a> */}
       <a href="/">Home</a>
       <a href="/category/men">Mens</a>
       <a href="/category/women">Womens</a>
       <a href="/category/jewelry">Jewelry</a>
       <a href="/category/electronics">Electronics</a>
       {/* <a href="/contact">Contact Us</a> */}
       </nav>

      <div className={styles.right}>
       <a href="/cart">Cart</a>
      </div>
    </header>
  );
}