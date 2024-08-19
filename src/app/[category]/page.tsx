import Line from "@/components/line";
import React from "react";
import Category from "./category";

const page = ({ params }: { params: { category: string } }) => {
  return (
    <section className="mt-[100px] mb-[100px]">
      <Category  params={params} />
    </section>
  );
};

export default page;
