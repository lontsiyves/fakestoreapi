import { Iproduct } from "@/interfaces/product";
import React from "react";
import ProductCart from "./ProductCart";

interface Ipros {
  products: Iproduct[];
}

export default async function ProductList({ products }: any) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((product: Iproduct) => {
       return <ProductCart product={product} key={product.id} />;
      })}
    </div>
  );
}
