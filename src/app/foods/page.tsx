"use client";
import Heading from "@/components/native/heading";
import { ProductGrid, ProductSkeletonGrid } from "@/components/native/product";
import { products } from "@/lib/data";
import { isVariableValid } from "@/lib/utils";
import { type ChangeEvent, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

const Food = () => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [searchValue]);

  return (
    <div className="flex flex-col border-neutral-200 px-[1.4rem] dark:border-neutral-700 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      <div className="flex justify-between">
        <Heading
          title="Foods"
          description="Below is a list of foods we have available for you."
        />
        {/*Search bar*/}
        <div className="flex items-center rounded-full p-2 dark:bg-background">
          <Input
            className="rounded-full px-4 py-2 text-gray-800 dark:text-white dark:placeholder-white"
            placeholder="Search..."
            type="text"
            autoFocus
            value={searchValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
          />
        </div>
      </div>
      {isVariableValid(products) ? (
        <ProductGrid products={filteredItems} />
      ) : (
        <ProductSkeletonGrid />
      )}
    </div>
  );
};

export default Food;
