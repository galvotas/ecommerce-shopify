import { Product } from "@/lib/shopify/types";

export const useProduct = (product: Product) => {
  return {
    image: product.featuredImage.url,
    maxPrice: product.priceRange.maxVariantPrice.amount,
    minPrice: product.priceRange.minVariantPrice.amount,
    title: product.title,
    description: product.description,
    isBestValue: product.productDefinition?.value === "best_value",
    isBestSeller: product.productDefinition?.value === "best_seller",
    isNew: product.productDefinition?.value === "new_arrival",
    isSecretGift: !!product.secretGift?.value,
    isLowInStock: !!product.lowInStock?.value,
    reviews: product.reviewCount.value,
    rating: product.rating.value,
  };
};
