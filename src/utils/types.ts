import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: StaticImageData | string[] | undefined;
  slug: string;
  size: any;
  color: string[];
  qty: number;
  discount?: number;
};

export type Cart = {
  id: number;
  title: string;
  price: number;
  category: string;
  image?: StaticImageData | string | undefined;
  slug: string;
  size: string;
  color: string;
  qty: number;
  discount?: number | any | undefined;
  uuid: string | number |undefined
};
