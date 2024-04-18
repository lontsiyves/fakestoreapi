import ProductList from "@/components/ProductList";
import { Iproduct } from "@/interfaces/product";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

const getProduct = async () => {
  try {
    const data = await fetch(`${process.env.API_URL}/products`);

    if (!data.ok) {
      notFound();
    }
    const products = await data.json();

    return products;
  } catch (error) {}
};

const productsPage = async () => {
  const products = await getProduct();
  return (
    <main className="md:flex md:flex-col md:items-center md:justify-between p-4 md:p-24">
      <p className="text-lg uppercase py-10">List des Products</p>
      <Suspense fallback={"...Loading"}>
        <ProductList products={products} />
      </Suspense>
    </main>
  );
};

export default productsPage;
