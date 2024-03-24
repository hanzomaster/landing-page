/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ImageSkeleton } from "@/components/native/icon";
import { type ProductType } from "@/types/product";

export const ProductGrid = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Product product={product} key={Math.random()} />
      ))}
    </div>
  );
};

export const ProductSkeletonGrid = () => {
  return (
    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {[...Array(12)].map(() => (
        <ProductSkeleton key={Math.random()} />
      ))}
    </div>
  );
};

export const Product = ({ product }: { product: ProductType }) => {
  function Price() {
    if (product?.discount > 0) {
      const price = product?.price - product?.discount;
      const percentage = (product?.discount / product?.price) * 100;
      return (
        <div className="flex items-center gap-2">
          <Badge className="flex gap-4" variant="destructive">
            <div className="line-through">${product?.price}</div>
            <div>%{percentage.toFixed(2)}</div>
          </Badge>
          <h2 className="">${price.toFixed(2)}</h2>
        </div>
      );
    }

    return <h2>${product?.price}</h2>;
  }

  return (
    <Link className="" href={`/foods/${product.id}`}>
      <Card className="h-full">
        <CardHeader className="p-0">
          <div className="relative h-60 w-full">
            <Image
              className="rounded-t-lg"
              src={product?.images[0]}
              alt="product image"
              fill
              sizes="(min-width: 1000px) 30vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </CardHeader>
        <CardContent className="grid gap-1 p-4">
          <Badge variant="outline" className="w-min text-neutral-500">
            {product?.categories[0]?.title}
          </Badge>

          <h2 className="mt-2">{product.title}</h2>
          <p className="text-justify text-xs text-neutral-500">
            {product.description}
          </p>
        </CardContent>
        <CardFooter>
          {product?.isAvailable ? (
            <Price />
          ) : (
            <Badge variant="secondary">Out of stock</Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export function ProductSkeleton() {
  return (
    <Link href="#">
      <div className="animate-pulse rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
        <div className="relative h-full w-full">
          <div className="flex h-40 w-full items-center justify-center rounded bg-neutral-300 dark:bg-neutral-700 ">
            <ImageSkeleton />
          </div>
        </div>
        <div className="p-5">
          <div className="w-full">
            <div className="mb-4 h-2.5 w-48 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="mb-2.5 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="h-2 max-w-[360px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
