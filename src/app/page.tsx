import React from "react";
import ProductsList from "../components/ProductsList";
import Header from "../components/Header";
import styles from "../styles/HomePage.module.css";

export const metadata = {
  title: "GKI Store - Home",
};

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <h2>Latest products</h2>
        <ProductsList />
      </section>
    </main>
  );
}
