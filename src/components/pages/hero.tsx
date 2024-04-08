import { buttonVariants } from "@/components/ui/button";
import { heroHeader } from "@/config/contents";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { env } from "@/env";

async function getData() {
  console.log(env.BACKEND_URL);
  const res = await fetch(`${env.BACKEND_URL}/restaurants}`, {
    method: "GET",
    headers: {
      Host: "product-service.thesis6555712",
    },
    redirect: "follow",
  });
  return res.json();
}

async function HeroHeader() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await getData();
  console.log(data);
  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl">
            {heroHeader.header}
          </h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
            {heroHeader.subheader}
          </h2>
        </div>
        <div className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}>
          Get started
        </div>
      </div>
      {heroHeader.image !== "" ? (
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src={heroHeader.image}
            width={500}
            height={500}
            alt="Header image"
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
export default HeroHeader;
