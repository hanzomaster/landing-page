import { Heading } from "@/components/native/heading";
import { ProductGrid, ProductSkeletonGrid } from "@/components/native/product";
import { products } from "@/lib/data";
import { isVariableValid } from "@/lib/utils";

const Food = () => {
  return (
    <div className="flex flex-col border-neutral-200 px-[1.4rem] dark:border-neutral-700 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      <Heading
        title="Foods"
        description="Below is a list of foods we have available for you."
      />
      {isVariableValid(products) ? (
        <ProductGrid products={products} />
      ) : (
        <ProductSkeletonGrid />
      )}
    </div>
  );
};

export default Food;
