import React from "react";
import { Container } from "@/components/container";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";

export const Doctor = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8">
          <div className="relative w-full h-80 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="/images/doctor.jpg"
              alt="doctor"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center text-green-500 gap-2 md:mb-4 mb-2">
              <BiCheckCircle className="md:w-12 md:h-12 w-8 h-8" />
              <p className="font-medium">Approved by professional</p>
            </div>
            <h2 className="md:mb-12 mb-4">Psychologist recommendation</h2>

            <div className="space-y-4">
              <p>
                {" "}
                In todays world when mental health is deteriorating it is
                important to take action.
              </p>

              <p>
                {" "}
                People have been struggling way too long and there literally was
                no reason for that.
              </p>

              <p>
                {" "}
                There is belief that you need to visit therapy almost does not
                matter what. In most cases it helps, but sometimes people just
                need support.
              </p>

              <p>
                {" "}
                Stuffed animals have been used for centuries. Not without
                reason.
              </p>
              <p> It is calculated that most of our time we spend alone.</p>
              <p>
                {" "}
                In such case having puffy toy by your side 24/7 not only makes
                you stronger, calmer and more productive. It makes you feel like
                you <span className="italic">figured it out</span>.
              </p>
            </div>

            <div className="flex justify-between items-center gap-8">
              <div>
                <h5>Dr. Cynthia Flaber</h5>
                <p>Psychologist</p>
              </div>

              <div>
                <Image
                  src="/images/underskrift.png"
                  alt="undersign"
                  sizes="40vw"
                  width={0}
                  height={0}
                  className="object-cover w-40 h-24"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
