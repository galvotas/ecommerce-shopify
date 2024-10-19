import DiscountModal from "@/components/discount-modal";
import { Doctor } from "./modules/Doctor";
import { Hero } from "./modules/Hero";
import { HowToUse } from "./modules/HowToUse";
import { LovedAroundGlobe } from "./modules/LovedAroundGlobe";
import { TopPicks } from "./modules/TopPicks";

export default function Home() {
  return (
    <>
      <Hero />
      <HowToUse />
      <TopPicks />
      <LovedAroundGlobe />
      <Doctor />
      <DiscountModal />
    </>
  );
}
