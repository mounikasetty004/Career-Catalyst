import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>Our Products</h1>
        <p>All career resources, tools, and courses will appear here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
