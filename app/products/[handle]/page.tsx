import { getProduct } from "@/lib/shopify";

import { ProductModule } from "./modules/Product";
// import { RecommendedProducts } from "./modules/RecommendedProducts";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  return (
    <>
      <ProductModule product={product} />
      {/* <RecommendedProducts productId={product.id} /> */}
    </>
  );
}
