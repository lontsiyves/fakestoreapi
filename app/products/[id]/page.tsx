import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";

const getProduct = async (id: number) => {
  try {
    const data = await fetch(`${process.env.API_URL}/products/${id}`);

    if (!data.ok) {
      notFound();
    }
    const product = await data.json();

    return product;
  } catch (error) {}
};

export default async function page({ params }: any) {
  const id = await parseInt(params.id);
  const product = await getProduct(id);

  return (
    <main className="md:flex md:flex-col md:items-center md:justify-between p-4 md:p-24">
      <p className="text-lg uppercase py-10">Detail Product</p>

      <Image width={200} height={200} src={product.image} alt={product.title} />
      <p className="text-violet-400 p-4">{product.title}</p>
      <p className="text-white text-sm">{product.description}</p>
      <div className="flex flex-row justify-center content-center text-base pt-10">
        <button className="rounded p-4 bg-violet-500 text-white uppercase text-sm text-center hover:bg-violet-700 hover:shadow disabled:bg-violet-300">
          -
        </button>
        <div className="text-sm p-4">{1}</div>
        <button className="rounded p-4 bg-violet-500 text-white uppercase text-sm text-center hover:bg-violet-700 hover:shadow disabled:bg-violet-300">
          +
        </button>
      </div>

      <button className="my-4 rounded p-4 bg-violet-500 text-white uppercase text-sm text-center hover:bg-violet-700 hover:shadow disabled:bg-violet-300">
        Ajouter a Panier
      </button>
    </main>
  );
}
