"use client";
import BestSellingCard from "@/components/bestSellingCard";
import { useAppSelector } from "../store/hooks";
import Line from "@/components/line";

const Category = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.filter(
    (val) => val.category.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col mb-10 items-center justify-center">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight mb-3 text-center capitalize">
          {params.category}
        </h1>
        <Line />
      </div>
      {/* Product Card */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((item: any) => (
          <BestSellingCard
            key={item.id}
            src={item.image[0]}
            alt={item.title}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
            slug={item.slug}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
