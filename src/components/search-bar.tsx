import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";

function SearchBar({
  searchValue,
  setSearchValue,
}: Readonly<{
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}>) {
  return (
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
  );
}
export default SearchBar;
