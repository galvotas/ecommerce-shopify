import React from "react";
import { Container } from "@/components/container";
import { FiveStars } from "@/components/rating";
import Image from "next/image";
import { Video } from "../components/video";
import { Button } from "@/components/button";
import { SaleButton } from "@/components/sale-button";
import Link from "next/link";

export const LovedAroundGlobe = () => {
  return (
    <section className="bg-[#ccd5ae]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-2 mb-4">
          <Image
            src="/images/globe.png"
            alt="globe"
            width={100}
            height={100}
            className="animate-spin-slow"
          />
          <h2 className="text-center drop-shadow-lg">Loved Around the Globe</h2>
        </div>
        <p className="text-center md:mb-12 mb-8 drop-shadow-lg">
          Our stuffed animals travels all around the world to bring{" "}
          <b>powerful</b> emotions to people.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <Video key={`video-${i}`} {...video} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:mt-12 mt-8 gap-8">
          <div className="text-center">
            <h4 className="md:mb-12 mb-8">@happy_daughta</h4>
            <p className="italic font-medium text-2xl">
              &apos;I literally never saw my mom so happy and emotional!! <br />
              <br />
              The only problem is that every time we meet we talk about it!
              HAHAh. WHERE HAVE YOU BEEN ALL MY LIFE??&apos;
            </p>
          </div>

          <div className="text-center">
            <div className="md:mb-12 mb-8 flex justify-center">
              <FiveStars isLarge />
            </div>
            <h3 className="md:mb-4 mb-2">Over 15,100+ 5-Star Reviews</h3>
            <p>Loved by thousands (and counting)</p>
          </div>

          <div className="text-center">
            <div className="md:h-16 h-12 relative md:mb-12 mb-8">
              <Image
                src="/images/trusted.webp"
                alt="trusted badge"
                sizes="10vw"
                fill
                className="object-contain"
              />
            </div>

            <h3>Sustainably Sourced, Always</h3>
          </div>
        </div>

        <div className="flex justify-center md:mt-12 mt-8">
          <div className="md:w-fit w-full">
            <Link href="/products">
              <Button>Shop Now</Button>
            </Link>{" "}
            <SaleButton />
          </div>
        </div>
      </Container>
    </section>
  );
};

const videos = [
  {
    src: "/videos/v1.mp4",
    views: "1.4M",
    likes: "95.4k",
  },
  {
    src: "/videos/v2.mp4",
    views: "909k",
    likes: "70.2k",
  },
  {
    src: "/videos/v3.mp4",
    views: "1.1M",
    likes: "50.1k",
  },
];
