import BestSelling from "@/components/bestSelling";
import Categories from "@/components/categories";
// import FeaturdeProducts from "@/components/featurdeProducts";
import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
    <div className="">
      <Hero /> 
      <Services />
      <Promotion />
      <Categories />
      <BestSelling />
    </div>
    </>
  );
};
