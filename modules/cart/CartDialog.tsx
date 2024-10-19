"use client";

import React, { useEffect } from "react";
import { CartItem } from "./CartItem";
import { Button } from "@/components/button";
import { CgClose } from "react-icons/cg";
import { useCart } from "@/context/cart";
import { createCartAndSetCookie, redirectToCheckout } from "./actions";

export const CartDialog = () => {
  const { cart, isCartOpen, toggleCart } = useCart();

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/50">
      <div className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 text-black backdrop-blur-xl md:w-[440px] dark:border-neutral-700 dark:bg-black/80 dark:text-white z-50">
        <div className="flex items-center justify-between gap-2 border-b border-neutral-200 p-4">
          <p>Shopping Cart ({cart?.totalQuantity})</p>
          <button onClick={toggleCart}>
            <CgClose />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="space-y-4 p-4">
            {cart?.lines.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-200 p-4 bg-neutral-100 dark:bg-black">
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p className="font-bold">
              ${Number(cart?.cost.subtotalAmount.amount).toFixed(2)}
            </p>
          </div>
          <div className="border-b border-neutral-200 my-4"></div>
          <p className="text-xs text-neutral-500 mb-4">
            Shipping, taxes, and discount codes calculated at checkout.
          </p>
          <form
            action={async () => {
              await redirectToCheckout();
            }}
          >
            <Button className="w-full" type="submit">
              Checkout
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
