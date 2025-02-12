import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type Restaurant } from "@/types/restaurant";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export const EateryGrid = ({ eateries }: { eateries: Restaurant[] }) => {
  return (
    <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {eateries.map((eatery) => (
        <Eatery eatery={eatery} key={eatery._id} />
      ))}
    </div>
  );
};

export const Eatery = ({ eatery }: { eatery: Restaurant }) => {
  return (
    <Link className="" href={`/eateries/${eatery._id}`}>
      <Card className="h-full">
        <CardHeader className="p-0">
          <div className="relative h-60 w-full">
            <Image
              className="rounded-t-lg"
              src={"https://source.unsplash.com/featured/?restaurant"}
              alt="product image"
              fill
              sizes="(min-width: 1000px) 30vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </CardHeader>
        <CardContent className="grid gap-1 p-4">
          <Badge variant="outline" className="w-fit text-neutral-500">
            {/* TODO: fix to title not here */}
            {eatery?.cuisineType}
          </Badge>

          <h2 className="mt-2">{eatery.name}</h2>
          <p className="text-justify text-xs text-neutral-500">
            {eatery.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
