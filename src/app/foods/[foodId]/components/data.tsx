import { Separator } from "@/components/native/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { type ProductType } from "@/types/product";

export const DataSection = async ({ product }: { product: ProductType }) => {
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
    // TODO: Fix the color of the dark background
    <div className="col-span-2 w-full rounded-lg bg-neutral-100 p-6 dark:bg-neutral-950">
      <h3 className="mb-4 text-xl font-medium">{product.title}</h3>
      <Separator />
      <div className="mb-2 flex items-center gap-2">
        <p className="text-sm">Brand:</p>
        <Link href={`/foods?brand=${product?.brand?.name}`}>
          <Badge variant="outline">{product?.brand?.name}</Badge>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm">Categories:</p>
        {product.categories.map((category, index) => (
          <Link key={index} href={`/foods?categories=${category.title}`}>
            <Badge variant="outline">{category.title}</Badge>
          </Link>
        ))}
      </div>
      <Separator />
      <small>{product.description}</small>

      <Separator />
      <div className="block space-y-2">
        <Price />
      </div>
    </div>
  );
};
