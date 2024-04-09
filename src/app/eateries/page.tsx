import { EateryGrid } from "@/components/native/eatery";
import { ProductSkeletonGrid } from "@/components/native/skeleton";
import { isVariableValid } from "@/lib/utils";
import EateriesHeading from "./heading";
import { env } from "@/env";
import { RestaurantSchema } from "@/types/restaurant";
import { type ApiResponse, ApiResponseSchema } from "@/types";
import * as z from "zod";

async function getData(): Promise<ApiResponse> {
  return fetch(`${env.BACKEND_URL}/restaurants`).then((res) => {
    const json = res.json();
    return ApiResponseSchema.parse(json);
  });
}
const Eateries = async () => {
  const eateries = await getData();
  const restaurants = z.array(RestaurantSchema).parse(eateries.data);
  const categoryList = restaurants.reduce((acc: string[], eatery) => {
    // product.categories.forEach((category) => {
    //   if (!acc.some((cat) => cat === category.title)) {
    //     acc.push(category.title);
    //   }
    // eatery..forEach((category) => {
    //   if (!acc.some((cat) => cat === category.title)) {
    //     acc.push(category.title);
    //   }
    // });
    return acc;
  }, []);
  return (
    <div className="flex flex-col border-neutral-200 px-[1.4rem] dark:border-neutral-700 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      <EateriesHeading categoryList={categoryList} />
      {isVariableValid(eateries) ? (
        // TODO: add data
        <EateryGrid eateries={[]} />
      ) : (
        <ProductSkeletonGrid />
      )}
    </div>
  );
};
export default Eateries;
