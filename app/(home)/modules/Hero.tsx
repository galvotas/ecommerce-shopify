import React from "react";
import Image from "next/image";
import { SaleButton } from "@/components/sale-button";
import { FiveStars } from "@/components/rating";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-4">
            <div className="flex gap-4 items-center ">
              <FiveStars />
              <p className="text-md md:text-xl font-medium">
                105 000+ happy clients
              </p>
            </div>
            <h1>
              <span className="bg-[#ccd5ae] border border-[#fefae0] rounded px-1 text-white drop-shadow-lg">
                SPECIAL
              </span>{" "}
              STUFFED ANIMALS
            </h1>

            <div className="relative rounded-2xl shadow-xl block md:hidden">
              <Image
                src="/images/beary.png"
                alt="hero"
                sizes="100vw"
                width={0}
                height={0}
                className="w-full h-auto"
                priority
              />
            </div>
            <p>
              Become one that spreads happiness in most unique way from your
              circle.
            </p>
            <p>
              If until now you used just regular stuffed animals - you have been
              robbed of real moments. Take that back with recordable one.
            </p>
            <div className="md:w-fit w-full">
              <Link href="/products">
                <Button>Shop Now</Button>
              </Link>
              <SaleButton />
            </div>
          </div>
          <div className="relative rounded-2xl shadow hidden md:block">
            <Image
              src="/images/beary.png"
              alt="hero"
              sizes="50vw"
              width={0}
              height={0}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="flex-col justify-center mt-8 border-t border-gray-200 pt-8 md:mt-12">
          <h5 className="text-center md:mb-4 mb-2 font-bold text-lg">
            FEATURED IN
          </h5>
          <div className="relative h-12 mx-auto">
            <Image
              src="/images/featured.png"
              alt="hero"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
