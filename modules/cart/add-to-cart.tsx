"use client";

import { Product } from "@/lib/shopify/types";
import { useCart } from "@/context/cart";

import { useFormState } from "react-dom";
import { addItem } from "./actions";
import { Button } from "@/components/button";
import { useEffect } from "react";

function SubmitButton({
  availableForSale,
  selectedVariantId,
  onClick,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const defaultBtnClass = "w-full md:w-full";

  if (!availableForSale) {
    return (
      <Button
        className={`${defaultBtnClass} bg-gray-400 disabled:cursor-not-allowed`}
        disabled
        aria-label="Out of stock"
        onClick={onClick}
      >
        Out Of Stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        className={defaultBtnClass}
        aria-label="Please select an option"
        disabled
        onClick={onClick}
      >
        + Add To Cart
      </Button>
    );
  }

  return (
    <Button
      className={defaultBtnClass}
      aria-label="Add to cart"
      onClick={onClick}
    >
      + Add To Cart
    </Button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem, cart, toggleCart } = useCart();
  const [message, formAction] = useFormState(addItem, null);

  const variant = product.variants[0];
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <form
      action={async () => {
        addCartItem(variant, product);

        await actionWithVariant();

        if (cart?.lines.length === 0) {
          toggleCart();
        }
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        onClick={(e) => handleClick(e)}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
