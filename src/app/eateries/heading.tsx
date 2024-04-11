"use client";
import Heading from "@/components/native/heading";
import MultipleListBox from "@/components/ui/headless/listbox";
import { Input } from "@/components/ui/input";
import { type ChangeEvent, useState } from "react";

const EateriesHeading = ({ categoryList }: { categoryList: string[] }) => {
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  return (
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
  );
};
export default EateriesHeading;
