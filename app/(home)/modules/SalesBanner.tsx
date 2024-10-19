import React from "react";
import { Container } from "@/components/container";
import Image from "next/image";
import { Countdown } from "@/components/countdown";

export const SalesBanner = () => {
  return (
    <header className="bg-black py-4">
      <Container>
        <div className="flex justify-center items-center md:gap-4 gap-2">
          <div className="relative md:w-12 md:h-12 w-6 h-6">
            <Image
              src="/icons/pumpkin.png"
              alt="star"
              sizes="5vw"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-white text-sm md:text-xl font-bold text-center md:animate-pulse">
            HALLOWEEN SALE <span className="font-normal">UP TO</span>{" "}
            <span className="text-[#FCF95A] font-black">65%</span>
          </p>

          <Countdown />
        </div>
      </Container>
    </header>
  );
};
