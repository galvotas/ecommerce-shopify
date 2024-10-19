"use client";

import React from "react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { useCart } from "@/context/cart";
import { IoCart } from "react-icons/io5";

export const Banner = () => {
  const { toggleCart, cart } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 py-2 md:py-4">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex gap-4">
            <button onClick={toggleCart} className="relative">
              <IoCart className="md:w-8 md:h-8 w-6 h-6" />
              {!!cart?.totalQuantity && cart?.totalQuantity > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full md:w-8 md:h-8 w-6 h-6 text-xs md:text-base flex items-center justify-center">
                  {cart?.totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
