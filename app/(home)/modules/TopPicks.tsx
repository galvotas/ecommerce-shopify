import React from "react";
import Image from "next/image";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SaleButton } from "@/components/sale-button";
import { Product } from "@/components/Product";
import { getProducts } from "@/lib/shopify";
import Link from "next/link";

export const TopPicks = async () => {
  const products = await getProducts({});

  const mostPopular = products.slice(1, 4);

  return (
    <section>
      <Container>
        <div className="flex items-center justify-center md:gap-4 gap-2 mb-4">
          <div className="md:h-12 md:w-12 h-8 w-8 relative">
            <Image
              src="/icons/hot-sale.png"
              alt="star"
              sizes="5vw"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-center">MOST POPULAR</h2>
        </div>
        <p className="text-center md:mb-12 mb-8 text-neutral-500">
          We are almost out of stock. See the most loved products by our
          customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mostPopular.map((product, i) => (
            <Link href={`/products/${product.handle}`} key={product.id}>
              <Product product={product} />
            </Link>
          ))}
        </div>

        <div className="flex justify-center md:mt-12 mt-8">
          <div className="md:w-fit w-full">
            <Link href="/products">
              <Button>View all products</Button>
            </Link>
            <SaleButton />
          </div>
        </div>
      </Container>
    </section>
  );
};
