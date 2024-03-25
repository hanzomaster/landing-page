"use client";
import Heading from "@/components/native/heading";
import { ProductGrid } from "@/components/native/product";
import { products } from "@/lib/data";
import { isVariableValid } from "@/lib/utils";
import { type ChangeEvent, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { ProductSkeletonGrid } from "@/components/native/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const Food = () => {
  const [searchValue, setSearchValue] = useState("");
  const filteredItems = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [searchValue]);

  return (
    <div className="flex flex-col border-neutral-200 px-[1.4rem] dark:border-neutral-700 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      <div className="my-4 flex justify-between">
        <Heading
          title="Foods"
          description="Below is a list of foods we have available for you."
        />
        <div className="block md:flex">
          <div className={"w-full cursor-pointer select-none md:my-3"}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>osidhfiosdhf</div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </DropdownMenuItem>
                <Link href={"/auth/login"}>
                  <DropdownMenuItem>Sign in</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/*Search bar*/}
          <div className="flex w-full items-center py-2 dark:bg-background md:p-2">
            <Input
              className="px-4 py-2 text-gray-800 dark:text-white dark:placeholder-white"
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
