"use client";
import { EateryGrid } from "@/components/native/eatery";
import Heading from "@/components/native/heading";
import { ProductSkeletonGrid } from "@/components/native/skeleton";
import MultipleListBox from "@/components/ui/headless/listbox";
import { Input } from "@/components/ui/input";
import { eateries } from "@/lib/data";
import { isVariableValid } from "@/lib/utils";
import { type ChangeEvent, useMemo, useState } from "react";

const categoryList = eateries.reduce((acc: string[], product) => {
  product.categories.forEach((category) => {
    if (!acc.some((cat) => cat === category.title)) {
      acc.push(category.title);
    }
  });
  return acc;
}, []);
const Eateries = () => {
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const filteredItems = useMemo(() => {
    return eateries.filter(
      (eatery) =>
        eatery.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        (categories.length === 0 ||
          categories.some((category) =>
            eatery.categories.map((c) => c.title).includes(category),
          )),
    );
  }, [categories, searchValue]);

  return (
    <div className="flex flex-col border-neutral-200 px-[1.4rem] dark:border-neutral-700 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      <div className="my-4 flex justify-between">
        <Heading
          title="Eateries"
          description="Below is a list of eateries we have available for you."
        />
        <div className="block md:flex">
          <div className={"w-full md:my-3"}>
            <MultipleListBox
              categoryList={categoryList}
              categories={categories}
              setCategories={setCategories}
            />
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
      {isVariableValid(eateries) ? (
        <EateryGrid eateries={filteredItems} />
      ) : (
        <ProductSkeletonGrid />
      )}
    </div>
  );
};
export default Eateries;
