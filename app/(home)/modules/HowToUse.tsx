import React from "react";
import { SaleButton } from "@/components/sale-button";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export const HowToUse = () => {
  return (
    <section className="bg-[#ccd5ae]">
      <Container>
        <h2 className="text-center md:mb-12 mb-4">
          EASY TO CREATE <br />
          <span className="bg-[#ccd5ae] border border-[#fefae0] rounded px-1 text-[#fefae0]">
            UNFORGETTABLE
          </span>{" "}
          MOMENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8 items-center">
          <div>
            <video
              className="w-full h-full object-contain rounded-lg"
              src="/videos/koala1.mp4"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-black rounded-full">
                  <h4 className="text-[#FCF95A] text-2xl">01</h4>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <p>
                    Slide a switch to the left in the back of the toy to record.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-black rounded-full">
                  <h4 className="text-[#FCF95A]">02</h4>
                </div>
                <div className="flex items-center flex-col gap-2">
                  <p>Press and hold heart to record your message.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-black rounded-full">
                  <h4 className="text-[#FCF95A]">03</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Slide the switch back.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-black rounded-full">
                  <h4 className="text-[#FCF95A] text-2xl">04</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Enjoy!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-12">
          <div className="w-fit">
            <Button>Shop Now</Button>
            <SaleButton />
          </div>
        </div> */}
      </Container>
    </section>
  );
};
