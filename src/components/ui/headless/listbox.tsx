import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { type Dispatch, Fragment, type SetStateAction } from "react";

const MultipleListBox = ({
  categoryList,
  categories,
  setCategories,
}: {
  categoryList: string[];
  categories: string[];
  setCategories: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <div>
      <Listbox value={categories} onChange={setCategories} multiple>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-sm border border-input bg-white py-2 pl-3 pr-10 text-left text-sm shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:bg-background">
            <span className="block truncate">Categories</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-background dark:text-white">
              {categoryList.map((category, categoryIdx) => (
                <Listbox.Option
                  key={categoryIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-amber-100 dark:bg-teal-900 dark:text-white"
                        : "text-gray-900 dark:text-white"
                    }`
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <div className="flex max-w-xl justify-between">
                      <span>{category}</span>
                      {selected && (
                        <CheckIcon
                          className="h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default MultipleListBox;
