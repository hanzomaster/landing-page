import { EateryGrid } from "@/components/native/eatery";
import { ProductSkeletonGrid } from "@/components/native/skeleton";
import { env } from "@/env";
import { isVariableValid } from "@/lib/utils";
import { ApiResponseSchema, type ApiResponse } from "@/types";
import { RestaurantSchema, type Restaurant } from "@/types/restaurant";
import axios from "axios";
import { z } from "zod";
import EateriesHeading from "./heading";

export const revalidate = 30;
// const categoryList = eateries.reduce((acc: string[], product) => {
//   product.categories.forEach((category) => {
//     if (!acc.some((cat) => cat === category.title)) {
//       acc.push(category.title);
//     }
//   });
//   return acc;
// }, []);

async function getData(): Promise<ApiResponse> {
  try {
    const res = await axios.get(`${env.BACKEND_URL}/restaurants`);
    return ApiResponseSchema.parse(res.data);
  } catch (e) {
    console.log(e);
    return {
      result: {
        data: [],
        count: 0,
        totalCount: 0,
        page: 0,
        size: 0,
        totalPage: 0,
      },
    };
  }
}
const Eateries = async () => {
  const eateries = await getData();
  const restaurants = z.array(RestaurantSchema).parse(eateries.result.data);
  const categoryList = restaurants.reduce(
    (acc: string[], eatery: Restaurant) => {
      if (acc.indexOf(eatery?.cuisineType) === -1) {
        // Check if it doesn't exist
        acc.push(eatery?.cuisineType);
      }
      return acc;
    },
    [],
  );
  return (
    <div className="flex flex-col border-neutral-200 px-[1.4rem] dark:border-neutral-700 md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <EateriesHeading categoryList={categoryList} />
      {isVariableValid(eateries) ? (
        // TODO: add data
        <EateryGrid eateries={restaurants} />
      ) : (
        <ProductSkeletonGrid />
      )}
    </div>
  );
};
export default Eateries;
