"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/lib/shopify/types";
import Link from "next/link";

interface Purchase {
  customerName: string;
  productName: string;
  handle: string;
}

const getRandomPurchase = (products: Product[]): Purchase => {
  const customers = [
    "John D.",
    "Emma S.",
    "Michael R.",
    "Sophia L.",
    "William T.",
    "Olivia M.",
    "James B.",
    "Ava P.",
    "Noah C.",
    "Isabella R.",
    "Ethan H.",
    "Mia F.",
    "Daniel K.",
    "Charlotte J.",
    "William H.",
    "Amelia G.",
    "James S.",
    "Aria M.",
    "Oliver T.",
    "Emma W.",
    "Liam N.",
    "Sophia Y.",
    "Jack R.",
    "Avery Q.",
    "Caleb O.",
    "Mila U.",
    "Ethan X.",
    "Aria V.",
    "Oliver Z.",
  ];

  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return {
    customerName: customers[Math.floor(Math.random() * customers.length)],
    productName: randomProduct?.title ?? "",
    handle: randomProduct?.handle ?? "",
  };
};

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
};

const Toast: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="fixed bottom-4 left-4 flex items-center space-x-4 bg-white shadow-lg rounded-lg p-4 animate-fade-in-up">
    {children}
  </div>
);

interface ClientPurchaseNotificationProps {
  products: Product[];
}

const ClientPurchaseNotification: React.FC<ClientPurchaseNotificationProps> = ({
  products,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);

  useEffect(() => {
    if (products.length === 0) return;

    // Show first notification immediately
    const purchase = getRandomPurchase(products);
    setCurrentPurchase(purchase);
    setIsVisible(true);

    const interval = setInterval(() => {
      const purchase = getRandomPurchase(products);
      setCurrentPurchase(purchase);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Hide after 5 seconds
    }, 15000); // Show every 15 seconds

    return () => clearInterval(interval);
  }, [products]);

  if (!isVisible || !currentPurchase) {
    return null;
  }

  const { customerName, productName } = currentPurchase;
  const initials = getInitials(customerName);
  const bgColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <Toast>
      <div
        className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold`}
      >
        {initials}
      </div>
      <div>
        <p className="font-semibold">{customerName}</p>
        <p className="text-sm text-gray-600">
          Just bought a{" "}
          <Link
            href={`/products/${currentPurchase.handle}`}
            className="underline font-bold"
          >
            {productName}
          </Link>
          .
        </p>
      </div>
    </Toast>
  );
};

export default ClientPurchaseNotification;
