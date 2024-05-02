"use client";

import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index ?? 0);
    }

    emblaApi?.on("select", selectHandler);

    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden rounded-lg h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div className="relative h-full flex-[0_0_100%]" key={i}>
              <Image src={src} fill className="object-fit" alt="" />
            </div>
          ))}
        </div>
      </div>
      <Dots itemsLength={images.length} selectedIndex={selectedIndex} />
    </>
  );
}

type Props = {
  itemsLength: number;
  selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex -translate-y-8 justify-center gap-1">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={cn({
              "h-3 w-3 rounded-full bg-primary-foreground transition-all duration-300":
                true,
              // tune down the opacity if slide is not selected
              "h-3 w-3 opacity-50": !selected,
            })}
            key={index}
          />
        );
      })}
    </div>
  );
};
