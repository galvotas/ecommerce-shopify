"use client";

import React from "react";
import Image from "next/image";
import { FiveStars, FourStars } from "./rating";
import { AddToCart } from "@/modules/cart/add-to-cart";
import { Product as ProductInterface } from "@/lib/shopify/types";
import { useProduct } from "@/hooks/useProduct";

export const Product = ({ product }: { product: ProductInterface }) => {
  const {
    image,
    title,
    maxPrice,
    minPrice,
    rating,
    reviews,
    isNew,
    isBestValue,
    isBestSeller,
    isSecretGift,
    isLowInStock,
  } = useProduct(product);

  return (
    <div>
      <div className="relative bg-white p-6 rounded-lg">
        {isNew && <NewProduct />}
        {isBestValue && <BestValue />}
        {isBestSeller && <BestSeller />}
        {isSecretGift && <SecretGift />}
        <div className="relative w-full h-80 mb-4">
          <Image
            src={image}
            alt="bear"
            sizes="50vw"
            fill
            className="object-contain"
          />
        </div>

        <AddToCart product={product} />
      </div>
      <div className="flex justify-between gap-2 bg-white p-4">
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-neutral-500 line-through">
            ${maxPrice}
          </p>

          <p className={`text-lg font-medium text-red-500`}>${minPrice}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 bg-white p-4 pt-0 rounded-b-lg">
        <div className="flex items-center gap-2">
          {Number(rating) === 5 ? <FiveStars /> : <FourStars />}

          <p className="text-xs font-medium text-neutral-400">
            ({reviews} reviews)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              isLowInStock ? "bg-orange-500 animate-pulse" : "bg-green-500"
            }`}
          ></div>
          <p className="text-xs font-medium text-neutral-500">
            {isLowInStock ? "LOW IN STOCK" : "IN STOCK"}
          </p>
        </div>
      </div>
    </div>
  );
};

const BestValue = () => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <p className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
        BEST VALUE
      </p>
    </div>
  );
};

const BestSeller = () => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <p className="bg-[#FCF95A] text-black px-4 py-2 rounded-full text-sm font-bold">
        BEST SELLER
      </p>
    </div>
  );
};

const SecretGift = () => {
  return (
    <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 z-10">
      <Image
        src="/images/badge.png"
        alt="Secret Gift Badge"
        sizes="10vw"
        fill
        className="object-cover"
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white md:text-sm text-xs font-bold text-center">
        <span className="text-[#FCF95A] md:text-2xl">+</span> SECRET GIFT
      </p>
    </div>
  );
};

const NewProduct = () => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <p className="bg-neutral-300 text-white px-4 py-2 rounded-full text-sm font-bold">
        NEW ARRIVAL
      </p>
    </div>
  );
};
