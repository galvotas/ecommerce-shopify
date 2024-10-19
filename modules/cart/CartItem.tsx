import Image from "next/image";
import React from "react";
import { EditItemQuantityButton } from "./edit-item-quantity-button";
import { CartItem as CartItemType } from "@/lib/shopify/types";
import { useCart } from "@/context/cart";

export const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { updateCartItem } = useCart();

  return (
    <div className="flex gap-8">
      <Image
        src={cartItem.merchandise.product.featuredImage.url}
        alt="bear"
        width={100}
        height={80}
        className="rounded-lg"
      />

      <div>
        <h5 className="font-bold">
          ${Number(cartItem.cost.totalAmount.amount).toFixed(2)}
        </h5>
        <p className="font-bold">{cartItem.merchandise.product.title}</p>
        <p className="text-xs text-orange-500 font-bold my-2">+ SECRET GIFT</p>
        <div className="flex items-center gap-4 border rounded-full p-1 bg-white">
          <EditItemQuantityButton
            item={cartItem}
            type="minus"
            optimisticUpdate={updateCartItem}
          />
          <span className="text-md">{cartItem.quantity}</span>
          <EditItemQuantityButton
            item={cartItem}
            type="plus"
            optimisticUpdate={updateCartItem}
          />
        </div>
      </div>
    </div>
  );
};
