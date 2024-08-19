import Line from "./line";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  slug,
  category,
  discount = 0, // Default value set
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount?: number; // Mark as optional
}) => {
  // Component code
  return (
    <div className="group w-[350px] shadow-md border p-4 hover:scale-105 duration-300 transition">
      {/* Image */}
      <Link href={`/${category}/${slug}`}>
        <Image
          src={src}
          width={400}
          height={400}
          className="h-[350px] w-[400px] object-cover sm:h-[450px] "
          alt={alt}
        />

        {/* Typography */}
        <div className="mt-4 flex justify-between text-sm">
          <div>
            {/* title */}
            <span className="whitespace-nowrap bg-Coffee3 px-3 py-1.5 text-xs font-medium">
              {" "}
              {title}{" "}
            </span>
            {/* description */}
            <h3 className="mt-4 scroll-m-20 pb-2 text-lg font-semibold tracking-tight first:mt-0">
              {description}
            </h3>
          </div>
          <div className="flex gap-4">
            {/* price */}
            <p
              className={`mt-1.5 scroll-m-20 text-sm font-semibold tracking-tight ${
                discount > 0 &&
                "line-through decoration-2 decoration-myBlackPara"
              }`}
            >
              ${price}
            </p>
            {/* discount value  */}
            {discount > 0 && (
              <p className="mt-1.5 scroll-m-20 text-sm font-semibold tracking-tight ">
                ${Math.floor(price - (price * discount) / 100)}
              </p>
            )}

            {/* {discount > 0 && (
              <div className="scroll-m-20 text-xs font-semibold tracking-tight absolute top-5 left-5 bg-Coffee3  p-2">{`${discount}% Off`}</div>
            )} */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BestSellingCard;
