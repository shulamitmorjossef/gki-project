import React, { JSX } from "react";
import ProductsList from "../components/ProductsList"; 
import Header from "../components/Header";
import styles from "../styles/HomePage.module.css";
import type { Metadata } from 'next'; 
export const metadata: Metadata = {
  title: "GKI Store - Home",
};

const MainBanner = (): JSX.Element => (
    <div className={styles.mainBanner}>
        <img 
            src="/distillery-logo.png" 
            alt="The Milk & Honey Distillery" 
            className={styles.bannerImage}
        />
    </div>
);


export default function HomePage(): JSX.Element {
  return (
    <main className={styles.main}>
      <Header />
      <MainBanner />
      <section className={styles.section}>
      <h2 className={styles.latestProductsTitle}>LATEST PRODUCTS</h2>
        <ProductsList />
      </section>
    </main>
  );
}