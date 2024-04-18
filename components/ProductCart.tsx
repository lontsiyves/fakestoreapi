import { Iproduct } from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Ipros {
  product: Iproduct;
}
export default function ProductCart({ product }: Ipros) {
  return (
    <Link href={`/products/${product?.id}`}>
        <div className="rounded p-4 pb-20 shadow-lg bg-white cursor-pointer hover:bg-slate-50">
      <Image
        className="min-w-full min-h-full"
        width={100}
        height={100}
        src={product.image}
        alt={product.title}
      />
      <p className="text-violet-400">{product.title}</p>
    </div>
    </Link>
  );
}
