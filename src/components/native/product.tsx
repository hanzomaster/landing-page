import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { type ProductType } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export const ProductGrid = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Product product={product} key={product.id} />
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
              src={product.images[0]!}
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
