import { buttonVariants } from "@/components/ui/button";
import { heroHeader } from "@/config/contents";
import { cn } from "@/lib/utils";
import Image from "next/image";

async function HeroHeader() {
  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20 z-10">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl">
            {heroHeader.header}
          </h1>
          <h1 className="text-4xl font-bold lg:text-8xl">hChip</h1>
          <h2 className="text-lg font-medium lg:text-3xl text-gray-800">
            {heroHeader.subheader}
          </h2>
        </div>
        <div className={`w-[12rem] h-16 rounded-full text-4xl hover:cursor-pointer ${cn(buttonVariants({ size: "lg" }))}`}>
          Khám phá
        </div>
      </div>
      {/* {heroHeader.image !== "" ? (
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
      )} */}
    </section>
  );
}
export default HeroHeader;
