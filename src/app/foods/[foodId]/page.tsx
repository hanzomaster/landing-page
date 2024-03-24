import { isVariableValid } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/data";

import { DataSection } from "./components/data";
import Carousel from "@/components/native/Carousel";
import { type ProductType } from "@/types/product";

const product = products.at(0)!;

export default async function ProductDetail() {
  if (isVariableValid(product)) {
    return (
      <div className="px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
        <Breadcrumbs product={product} />
        <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-3">
          <ImageColumn product={product} />
          <DataSection product={product} />
        </div>
      </div>
    );
  }
}

const ImageColumn = ({ product }: { product: ProductType }) => {
  return (
    <div className="relative col-span-1 min-h-[50vh] w-full">
      <Carousel images={product?.images} />
    </div>
  );
};

const Breadcrumbs = ({ product }: { product: ProductType }) => {
  return (
    <nav className="flex text-muted-foreground" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <ChevronRightIcon className="h-4" />
            <Link className="text-sm font-medium" href="/foods">
              Foods
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center gap-2">
            <ChevronRightIcon className="h-4" />
            <span className="text-sm font-medium">{product?.title}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
