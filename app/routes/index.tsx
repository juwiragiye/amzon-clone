import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { SetStateAction, useEffect, useState } from "react";

import { Header, Banner, ProdcuctFeed } from "../components";

type LoaderData = { products: Array<Product> };

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rating: number;
    count: number;
  };
};

export let loader: LoaderFunction = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  const data: LoaderData = {
    products: await res.json(),
  };

  return data;
};
function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <Header />

      <main className="max-w-screen-2xl mx-auto bg-gray-100">
        {/* BANNER */}
        <Banner />
        {/* PRODUCT FEED */}

        <ProdcuctFeed products={data.products} />
      </main>
    </div>
  );
}

export default Index;
