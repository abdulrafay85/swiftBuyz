import BestSelling from "@/components/bestSelling";
import Categories from "@/components/categories";
// import FeaturdeProducts from "@/components/featurdeProducts";
import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import Services from "@/components/services";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="">
      <Hero />
      {/* <FeaturdeProducts /> */}
      <Services />
      <Promotion />
      <Categories />
      <BestSelling />
      </div>
    </>
  );
}
