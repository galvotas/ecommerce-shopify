import { Container } from "@/components/container";
import { Product } from "@/components/Product";
import { getProducts } from "@/lib/shopify";
import Link from "next/link";
import React from "react";

export const Products = async () => {
  const products = await getProducts({});

  return (
    <section>
      <Container>
        <h1 className="text-center mb-12">All products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/products/${product.handle}`} key={product.id}>
              <Product product={product} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
