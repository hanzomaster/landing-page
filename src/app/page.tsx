import FeatureCards from "@/components/pages/feature-cards";
import Features from "@/components/pages/features";
import Hero from "@/components/pages/hero";
import Image from "next/image";
export default function HomePage() {
  const images = ["/5.png", "/6.jpeg", "/7.png"];
  return (
    <main>
      <div className="bg-gradient-to-bfrom-slate-700to-slate-100 absolute -z-10 h-full w-screen  from-slate-400 to-slate-950 object-cover dark:bg-gradient-to-b">
        <Image className="-z-50" src={"/5.png"} alt="" layout="fill" />
        {/* <Carousel images={images}/> */}
      </div>
      <Hero />
      <FeatureCards />
      <Features />
    </main>
  );
}
